use crate::rpc::*;
use serde::*;
use serde_json::Value;
use serde_repr::*;
use std::collections::BTreeMap;
use std::path::PathBuf;

rpc_interface! {
    trait GolemRes {

        #[rpc_uri = "res.dirs"]
        fn get_res_dirs(&self) -> Result<CachePaths>;

        #[rpc_uri = "res.dirs.size"]
        fn get_res_dirs_sizes(&self) -> Result<CacheSizes>;

        //
        #[rpc_uri = "res.dir"]
        fn get_res_dir(&self, dir_type : DirType) -> Result<Value>;

        #[rpc_uri = "res.dir.clear"]
        fn clear_dir(&self, dir_type : DirType, #[kwarg] older_than_seconds : Option<usize>) -> Result<()>;

        #[rpc_uri = "env.hw.caps"]
        fn get_hw_caps(&self) -> Result<HwCaps>;

        #[rpc_uri = "env.hw.preset"]
        fn get_hw_preset(&self, name : String) -> Result<HwPreset>;

        #[rpc_uri = "env.hw.presets"]
        fn get_hw_presets(&self) -> Result<Vec<HwPreset>>;

        #[rpc_uri = "env.hw.preset.create"]
        fn create_hw_preset(&self, preset : HwPreset) -> Result<HwPreset>;

        #[rpc_uri = "env.hw.preset.update"]
        fn update_hw_preset(&self, preset_update : HwPreset) -> Result<HwPreset>;

        #[rpc_uri = "env.hw.preset.delete"]
        fn delete_hw_preset(&self, name : String) -> Result<bool>;

        #[rpc_uri = "env.hw.preset.activate"]
        fn activate_hw_preset(&self, name : String, run_benchmarks : bool) -> Result<Option<BTreeMap<String, f64>>>;

    }

    converter AsGolemRes as_golem_res;
}

#[derive(Serialize_repr, Deserialize_repr, PartialEq, Debug)]
#[repr(u8)]
pub enum DirType {
    Distributed = 1,
    Received = 2,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct CachePaths {
    #[serde(rename = "total received data")]
    pub received_files: PathBuf,
    #[serde(rename = "total distributed data")]
    pub distributed_files: PathBuf,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct CacheSizes {
    #[serde(rename = "total received data")]
    pub received_files: String,
    #[serde(rename = "total distributed data")]
    pub distributed_files: String,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct HwCaps {
    pub cpu_cores: u32,
    /// disk in Kb
    pub disk: f64,
    /// memory in kb
    pub memory: u64,
}

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct HwPreset {
    #[serde(flatten)]
    pub caps: HwCaps,
    pub name: String,
}
