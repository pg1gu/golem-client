use crate::context::*;
use futures::{future, prelude::*};
use golem_rpc_api::rpc::AsInvoker;
use structopt::StructOpt;

#[derive(StructOpt, Debug)]
pub enum Section {
    /// Dump uri to procedure mapping
    #[structopt(name = "exposed_procedures")]
    ExposedProcedures,

    /// Debug RPC calls
    #[structopt(name = "rpc")]
    Rpc {
        /// Remote procedure uri
        uri: String,
        /// Call arguments
        vargs: Vec<String>,
    },
}

impl Section {
    pub fn run(
        &self,
        _: &mut CliCtx,
        endpoint: impl actix_wamp::RpcEndpoint + Clone + 'static,
    ) -> impl Future<Item = CommandResponse, Error = Error> + 'static {
        match self {
            Section::ExposedProcedures => future::Either::A(
                endpoint
                    .as_invoker()
                    .rpc_call("sys.exposed_procedures", &())
                    .and_then(|procedures| Ok(CommandResponse::Object(procedures)))
                    .from_err(),
            ),
            Section::Rpc { uri, vargs } => future::Either::B(
                endpoint
                    .as_invoker()
                    .rpc_va_call(uri.to_owned(), vargs)
                    .and_then(|response| Ok(CommandResponse::Object(response)))
                    .from_err(),
            ),
        }
    }
}