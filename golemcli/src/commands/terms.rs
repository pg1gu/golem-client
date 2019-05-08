use crate::context::*;
use futures::{future, prelude::*};
use golem_rpc_api::terms::*;
use structopt::StructOpt;

#[derive(StructOpt, Debug)]
pub enum Section {
    /// Accept terms of use
    #[structopt(name = "accept")]
    Accept,
    /// Show terms of use
    #[structopt(name = "show")]
    Show,
}

impl Section {
    pub fn run(
        &self,
        endpoint: impl actix_wamp::RpcEndpoint + Clone + 'static,
    ) -> impl Future<Item = CommandResponse, Error = Error> + 'static {
        match self {
            Section::Show => {
                future::Either::A(endpoint.as_golem_terms().show_terms().from_err().and_then(
                    |html| {
                        let text = html2text::from_read(std::io::Cursor::new(html), 78);
                        CommandResponse::object(text)
                    },
                ))
            }
            Section::Accept => {
                let enable_monitor = prompt_enable("monitor");
                let enable_talkback = prompt_enable("talkback");

                future::Either::B(
                    endpoint
                        .as_golem_terms()
                        .accept_terms(Some(enable_monitor), Some(enable_talkback))
                        .from_err()
                        .and_then(|()| CommandResponse::object("Terms of use have been accepted.")),
                )
            }
        }
    }
}

fn prompt_enable(func: &str) -> bool {
    let enabled = promptly::prompt_default(format!("Enable {}", func), true);
    eprintln!(
        "\t{} will be {}",
        func,
        if enabled { "ENABLED" } else { "DISABLED" }
    );

    enabled
}