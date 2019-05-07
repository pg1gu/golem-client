(function() {var implementors = {};
implementors["golem_rpc_api"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"golem_rpc_api/enum.Net.html\" title=\"enum golem_rpc_api::Net\">Net</a>",synthetic:true,types:["golem_rpc_api::setup::Net"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"golem_rpc_api/enum.Error.html\" title=\"enum golem_rpc_api::Error\">Error</a>",synthetic:true,types:["golem_rpc_api::Error"]},{text:"impl&lt;'a, Inner:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/rpc/struct.Invoker.html\" title=\"struct golem_rpc_api::rpc::Invoker\">Invoker</a>&lt;'a, Inner&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Inner: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["golem_rpc_api::rpc::Invoker"]},{text:"impl&lt;Options&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/apps/struct.TaskDef.html\" title=\"struct golem_rpc_api::apps::TaskDef\">TaskDef</a>&lt;Options&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Options: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["golem_rpc_api::apps::TaskDef"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"golem_rpc_api/apps/enum.ComputeOn.html\" title=\"enum golem_rpc_api::apps::ComputeOn\">ComputeOn</a>",synthetic:true,types:["golem_rpc_api::apps::ComputeOn"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/apps/blender/struct.BlenderTaskOptions.html\" title=\"struct golem_rpc_api::apps::blender::BlenderTaskOptions\">BlenderTaskOptions</a>",synthetic:true,types:["golem_rpc_api::apps::blender::BlenderTaskOptions"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/apps/glambda/struct.GLambdaOptions.html\" title=\"struct golem_rpc_api::apps::glambda::GLambdaOptions\">GLambdaOptions</a>",synthetic:true,types:["golem_rpc_api::apps::glambda::GLambdaOptions"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/apps/glambda/struct.GLambdaVerification.html\" title=\"struct golem_rpc_api::apps::glambda::GLambdaVerification\">GLambdaVerification</a>",synthetic:true,types:["golem_rpc_api::apps::glambda::GLambdaVerification"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"golem_rpc_api/apps/glambda/enum.GLambdaVerificationType.html\" title=\"enum golem_rpc_api::apps::glambda::GLambdaVerificationType\">GLambdaVerificationType</a>",synthetic:true,types:["golem_rpc_api::apps::glambda::GLambdaVerificationType"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/apps/wasm/struct.WasmOptions.html\" title=\"struct golem_rpc_api::apps::wasm::WasmOptions\">WasmOptions</a>",synthetic:true,types:["golem_rpc_api::apps::wasm::WasmOptions"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/apps/wasm/struct.SubtaskDef.html\" title=\"struct golem_rpc_api::apps::wasm::SubtaskDef\">SubtaskDef</a>",synthetic:true,types:["golem_rpc_api::apps::wasm::SubtaskDef"]},{text:"impl&lt;'a, Inner:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/comp/struct.GolemComp.html\" title=\"struct golem_rpc_api::comp::GolemComp\">GolemComp</a>&lt;'a, Inner&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Inner: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["golem_rpc_api::comp::GolemComp"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/comp/struct.TaskTestResult.html\" title=\"struct golem_rpc_api::comp::TaskTestResult\">TaskTestResult</a>",synthetic:true,types:["golem_rpc_api::comp::TaskTestResult"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/comp/struct.TaskInfo.html\" title=\"struct golem_rpc_api::comp::TaskInfo\">TaskInfo</a>",synthetic:true,types:["golem_rpc_api::comp::TaskInfo"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/comp/struct.SubtaskInfo.html\" title=\"struct golem_rpc_api::comp::SubtaskInfo\">SubtaskInfo</a>",synthetic:true,types:["golem_rpc_api::comp::SubtaskInfo"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/comp/struct.StatsCounters.html\" title=\"struct golem_rpc_api::comp::StatsCounters\">StatsCounters</a>",synthetic:true,types:["golem_rpc_api::comp::StatsCounters"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/comp/struct.SubtasksInfo.html\" title=\"struct golem_rpc_api::comp::SubtasksInfo\">SubtasksInfo</a>",synthetic:true,types:["golem_rpc_api::comp::SubtasksInfo"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/comp/struct.ProviderState.html\" title=\"struct golem_rpc_api::comp::ProviderState\">ProviderState</a>",synthetic:true,types:["golem_rpc_api::comp::ProviderState"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/comp/struct.SubtaskStats.html\" title=\"struct golem_rpc_api::comp::SubtaskStats\">SubtaskStats</a>",synthetic:true,types:["golem_rpc_api::comp::SubtaskStats"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/comp/struct.UnsupportInfo.html\" title=\"struct golem_rpc_api::comp::UnsupportInfo\">UnsupportInfo</a>",synthetic:true,types:["golem_rpc_api::comp::UnsupportInfo"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/comp/struct.CompEnvStatus.html\" title=\"struct golem_rpc_api::comp::CompEnvStatus\">CompEnvStatus</a>",synthetic:true,types:["golem_rpc_api::comp::CompEnvStatus"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"golem_rpc_api/comp/enum.TaskTestStatus.html\" title=\"enum golem_rpc_api::comp::TaskTestStatus\">TaskTestStatus</a>",synthetic:true,types:["golem_rpc_api::comp::TaskTestStatus"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"golem_rpc_api/comp/enum.TaskStatus.html\" title=\"enum golem_rpc_api::comp::TaskStatus\">TaskStatus</a>",synthetic:true,types:["golem_rpc_api::comp::TaskStatus"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"golem_rpc_api/comp/enum.SubtaskStatus.html\" title=\"enum golem_rpc_api::comp::SubtaskStatus\">SubtaskStatus</a>",synthetic:true,types:["golem_rpc_api::comp::SubtaskStatus"]},{text:"impl&lt;'a, Inner:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/concent/struct.GolemConcent.html\" title=\"struct golem_rpc_api::concent::GolemConcent\">GolemConcent</a>&lt;'a, Inner&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Inner: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["golem_rpc_api::concent::GolemConcent"]},{text:"impl&lt;'a, Inner:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/core/struct.GolemCore.html\" title=\"struct golem_rpc_api::core::GolemCore\">GolemCore</a>&lt;'a, Inner&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Inner: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["golem_rpc_api::core::GolemCore"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/core/struct.ComponentReport.html\" title=\"struct golem_rpc_api::core::ComponentReport\">ComponentReport</a>",synthetic:true,types:["golem_rpc_api::core::ComponentReport"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/core/struct.ServerStatus.html\" title=\"struct golem_rpc_api::core::ServerStatus\">ServerStatus</a>",synthetic:true,types:["golem_rpc_api::core::ServerStatus"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"golem_rpc_api/core/enum.Stage.html\" title=\"enum golem_rpc_api::core::Stage\">Stage</a>",synthetic:true,types:["golem_rpc_api::core::Stage"]},{text:"impl&lt;'a, Inner:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/net/struct.GolemNet.html\" title=\"struct golem_rpc_api::net::GolemNet\">GolemNet</a>&lt;'a, Inner&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Inner: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["golem_rpc_api::net::GolemNet"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/net/struct.NodeInfo.html\" title=\"struct golem_rpc_api::net::NodeInfo\">NodeInfo</a>",synthetic:true,types:["golem_rpc_api::net::NodeInfo"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/net/struct.PeerInfo.html\" title=\"struct golem_rpc_api::net::PeerInfo\">PeerInfo</a>",synthetic:true,types:["golem_rpc_api::net::PeerInfo"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/net/struct.NetStatus.html\" title=\"struct golem_rpc_api::net::NetStatus\">NetStatus</a>",synthetic:true,types:["golem_rpc_api::net::NetStatus"]},{text:"impl&lt;Identity&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/net/struct.AclStatus.html\" title=\"struct golem_rpc_api::net::AclStatus\">AclStatus</a>&lt;Identity&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Identity: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["golem_rpc_api::net::AclStatus"]},{text:"impl&lt;Identity&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/net/struct.AclRuleItem.html\" title=\"struct golem_rpc_api::net::AclRuleItem\">AclRuleItem</a>&lt;Identity&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Identity: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["golem_rpc_api::net::AclRuleItem"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"golem_rpc_api/net/enum.AclRule.html\" title=\"enum golem_rpc_api::net::AclRule\">AclRule</a>",synthetic:true,types:["golem_rpc_api::net::AclRule"]},{text:"impl&lt;'a, Inner:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/pay/struct.GolemPay.html\" title=\"struct golem_rpc_api::pay::GolemPay\">GolemPay</a>&lt;'a, Inner&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Inner: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["golem_rpc_api::pay::GolemPay"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/pay/struct.Income.html\" title=\"struct golem_rpc_api::pay::Income\">Income</a>",synthetic:true,types:["golem_rpc_api::pay::Income"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/pay/struct.Payment.html\" title=\"struct golem_rpc_api::pay::Payment\">Payment</a>",synthetic:true,types:["golem_rpc_api::pay::Payment"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/pay/struct.DepositPayment.html\" title=\"struct golem_rpc_api::pay::DepositPayment\">DepositPayment</a>",synthetic:true,types:["golem_rpc_api::pay::DepositPayment"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/pay/struct.DepositBalance.html\" title=\"struct golem_rpc_api::pay::DepositBalance\">DepositBalance</a>",synthetic:true,types:["golem_rpc_api::pay::DepositBalance"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/pay/struct.Balance.html\" title=\"struct golem_rpc_api::pay::Balance\">Balance</a>",synthetic:true,types:["golem_rpc_api::pay::Balance"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"golem_rpc_api/pay/enum.PaymentStatus.html\" title=\"enum golem_rpc_api::pay::PaymentStatus\">PaymentStatus</a>",synthetic:true,types:["golem_rpc_api::pay::PaymentStatus"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"golem_rpc_api/pay/enum.DepositStatus.html\" title=\"enum golem_rpc_api::pay::DepositStatus\">DepositStatus</a>",synthetic:true,types:["golem_rpc_api::pay::DepositStatus"]},{text:"impl&lt;'a, Inner:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/res/struct.GolemRes.html\" title=\"struct golem_rpc_api::res::GolemRes\">GolemRes</a>&lt;'a, Inner&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Inner: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["golem_rpc_api::res::GolemRes"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/res/struct.CachePaths.html\" title=\"struct golem_rpc_api::res::CachePaths\">CachePaths</a>",synthetic:true,types:["golem_rpc_api::res::CachePaths"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/res/struct.CacheSizes.html\" title=\"struct golem_rpc_api::res::CacheSizes\">CacheSizes</a>",synthetic:true,types:["golem_rpc_api::res::CacheSizes"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/res/struct.HwCaps.html\" title=\"struct golem_rpc_api::res::HwCaps\">HwCaps</a>",synthetic:true,types:["golem_rpc_api::res::HwCaps"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/res/struct.HwPreset.html\" title=\"struct golem_rpc_api::res::HwPreset\">HwPreset</a>",synthetic:true,types:["golem_rpc_api::res::HwPreset"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"golem_rpc_api/res/enum.DirType.html\" title=\"enum golem_rpc_api::res::DirType\">DirType</a>",synthetic:true,types:["golem_rpc_api::res::DirType"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/general/struct.NodeName.html\" title=\"struct golem_rpc_api::settings::general::NodeName\">NodeName</a>",synthetic:true,types:["golem_rpc_api::settings::general::NodeName"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/general/struct.AcceptTasks.html\" title=\"struct golem_rpc_api::settings::general::AcceptTasks\">AcceptTasks</a>",synthetic:true,types:["golem_rpc_api::settings::general::AcceptTasks"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/general/struct.GettingTasksInterval.html\" title=\"struct golem_rpc_api::settings::general::GettingTasksInterval\">GettingTasksInterval</a>",synthetic:true,types:["golem_rpc_api::settings::general::GettingTasksInterval"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/general/struct.GettingPeersInterval.html\" title=\"struct golem_rpc_api::settings::general::GettingPeersInterval\">GettingPeersInterval</a>",synthetic:true,types:["golem_rpc_api::settings::general::GettingPeersInterval"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/general/struct.TaskSessionTimeout.html\" title=\"struct golem_rpc_api::settings::general::TaskSessionTimeout\">TaskSessionTimeout</a>",synthetic:true,types:["golem_rpc_api::settings::general::TaskSessionTimeout"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/general/struct.P2pSessionTimeout.html\" title=\"struct golem_rpc_api::settings::general::P2pSessionTimeout\">P2pSessionTimeout</a>",synthetic:true,types:["golem_rpc_api::settings::general::P2pSessionTimeout"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/general/struct.UseIpv6.html\" title=\"struct golem_rpc_api::settings::general::UseIpv6\">UseIpv6</a>",synthetic:true,types:["golem_rpc_api::settings::general::UseIpv6"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/general/struct.UseUpnp.html\" title=\"struct golem_rpc_api::settings::general::UseUpnp\">UseUpnp</a>",synthetic:true,types:["golem_rpc_api::settings::general::UseUpnp"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/general/struct.OptPeerNum.html\" title=\"struct golem_rpc_api::settings::general::OptPeerNum\">OptPeerNum</a>",synthetic:true,types:["golem_rpc_api::settings::general::OptPeerNum"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/general/struct.SendPings.html\" title=\"struct golem_rpc_api::settings::general::SendPings\">SendPings</a>",synthetic:true,types:["golem_rpc_api::settings::general::SendPings"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/general/struct.PingsInterval.html\" title=\"struct golem_rpc_api::settings::general::PingsInterval\">PingsInterval</a>",synthetic:true,types:["golem_rpc_api::settings::general::PingsInterval"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/general/struct.EnableTalkback.html\" title=\"struct golem_rpc_api::settings::general::EnableTalkback\">EnableTalkback</a>",synthetic:true,types:["golem_rpc_api::settings::general::EnableTalkback"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/general/struct.EnableMonitor.html\" title=\"struct golem_rpc_api::settings::general::EnableMonitor\">EnableMonitor</a>",synthetic:true,types:["golem_rpc_api::settings::general::EnableMonitor"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/general/struct.CleaningEnabled.html\" title=\"struct golem_rpc_api::settings::general::CleaningEnabled\">CleaningEnabled</a>",synthetic:true,types:["golem_rpc_api::settings::general::CleaningEnabled"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/requestor/struct.ComputingTrust.html\" title=\"struct golem_rpc_api::settings::requestor::ComputingTrust\">ComputingTrust</a>",synthetic:true,types:["golem_rpc_api::settings::requestor::ComputingTrust"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/requestor/struct.MaxPrice.html\" title=\"struct golem_rpc_api::settings::requestor::MaxPrice\">MaxPrice</a>",synthetic:true,types:["golem_rpc_api::settings::requestor::MaxPrice"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/provider/struct.RequestingTrust.html\" title=\"struct golem_rpc_api::settings::provider::RequestingTrust\">RequestingTrust</a>",synthetic:true,types:["golem_rpc_api::settings::provider::RequestingTrust"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/provider/struct.MinPrice.html\" title=\"struct golem_rpc_api::settings::provider::MinPrice\">MinPrice</a>",synthetic:true,types:["golem_rpc_api::settings::provider::MinPrice"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/provider/struct.MaxResourceSize.html\" title=\"struct golem_rpc_api::settings::provider::MaxResourceSize\">MaxResourceSize</a>",synthetic:true,types:["golem_rpc_api::settings::provider::MaxResourceSize"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/provider/struct.MaxMemorySize.html\" title=\"struct golem_rpc_api::settings::provider::MaxMemorySize\">MaxMemorySize</a>",synthetic:true,types:["golem_rpc_api::settings::provider::MaxMemorySize"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/provider/struct.NumCores.html\" title=\"struct golem_rpc_api::settings::provider::NumCores\">NumCores</a>",synthetic:true,types:["golem_rpc_api::settings::provider::NumCores"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/settings/provider/struct.TaskRequestInterval.html\" title=\"struct golem_rpc_api::settings::provider::TaskRequestInterval\">TaskRequestInterval</a>",synthetic:true,types:["golem_rpc_api::settings::provider::TaskRequestInterval"]},{text:"impl&lt;'a, Inner:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"golem_rpc_api/terms/struct.GolemTerms.html\" title=\"struct golem_rpc_api::terms::GolemTerms\">GolemTerms</a>&lt;'a, Inner&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Inner: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["golem_rpc_api::terms::GolemTerms"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
