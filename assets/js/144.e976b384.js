(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{731:function(e,t,o){"use strict";o.r(t);var a=o(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"troubleshooting-faq-development"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-faq-development"}},[e._v("#")]),e._v(" Troubleshooting & FAQ - Development")]),e._v(" "),o("h2",{attrs:{id:"dev-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dev-node"}},[e._v("#")]),e._v(" Dev Node")]),e._v(" "),o("p",[e._v("See "),o("RouterLink",{attrs:{to:"/tutorial/dappguide/testnode.html"}},[e._v("Run a Local Dev Node")])],1),e._v(" "),o("p",[e._v("You can also set up a dev node by installing the VSCode Soliditypp extension. The extension will install a local dev node automatically.")]),e._v(" "),o("h2",{attrs:{id:"rpc-error-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rpc-error-code"}},[e._v("#")]),e._v(" RPC Error Code")]),e._v(" "),o("p",[e._v("See "),o("RouterLink",{attrs:{to:"/api/rpc/#common-rpc-errors"}},[e._v("Common RPC Errors")])],1),e._v(" "),o("h2",{attrs:{id:"tips-of-sending-transaction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tips-of-sending-transaction"}},[e._v("#")]),e._v(" Tips of Sending Transaction")]),e._v(" "),o("ol",[o("li",[e._v("Check the mandatory block fields such as "),o("code",[e._v("previousHash")]),e._v(", "),o("code",[e._v("blockType")]),e._v(", "),o("code",[e._v("accountAddress")]),e._v(", "),o("code",[e._v("toAddress")]),e._v(", "),o("code",[e._v("sendBlockHash")]),e._v(", "),o("code",[e._v("amount")]),e._v(", "),o("code",[e._v("tokenId")]),e._v(" and "),o("code",[e._v("data")]),e._v(";")]),e._v(" "),o("li",[e._v("Estimate the quota consumption. If the account has sufficient quota, create the account block and send;")]),e._v(" "),o("li",[e._v("Otherwise, provide a correct PoW nonce (obtained by calling getPoWDifficulty API) in the account block and send the block. Remember, you should not send the transaction by PoW if network congestion occurs. In this case, wait for a while and check the network status again.")])]),e._v(" "),o("p",[e._v("Related APIs：")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/api/rpc/ledger_v2.html#ledger_getPoWDifficulty"}},[e._v("Quota Consumption / Available Quota / Network Status / PoW Difficulty")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/api/rpc/util.html#util_getPoWNonce"}},[e._v("PoW Nonce")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/api/rpc/ledger_v2.html#ledger_sendRawTransaction"}},[e._v("Sending Transaction")])],1)]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Best Practice")]),e._v(" "),o("p",[e._v("Multiple transactions of the same account must be strictly ordered. An account chain is formed according to the dependency of "),o("code",[e._v("hash")]),e._v(" and "),o("code",[e._v("previousHash")]),e._v(". If there are two different blocks with the same "),o("code",[e._v("previousHash")]),e._v(", only one block of them will be snapshotted, and the other block will be discarded.")]),e._v(" "),o("p",[e._v("Therefore, when sending and receiving transactions in batches, in order to have the maximum efficiency and the minimum error rate, it is best to use one thread for the same account to send and receive transactions, and use the "),o("code",[e._v("previousHash")]),e._v(" field to specify the sending order.")])]),e._v(" "),o("p",[e._v("Common errors when sending transaction through "),o("code",[e._v("ledger_sendRawTransaction")]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("lack of difficulty field")])]),e._v(" "),o("p",[e._v("Empty "),o("code",[e._v("difficulty")]),e._v(" field")]),e._v(" "),o("ul",[o("li",[e._v("check pow nonce failed")])]),e._v(" "),o("p",[e._v("Fields of "),o("code",[e._v("difficulty")]),e._v(" and "),o("code",[e._v("nonce")]),e._v(" don't match")]),e._v(" "),o("ul",[o("li",[e._v("tokenId doesn’t exist")])]),e._v(" "),o("p",[e._v("Wrong "),o("code",[e._v("tokenId")])]),e._v(" "),o("ul",[o("li",[e._v("verify hash failed")])]),e._v(" "),o("p",[e._v("Wrong block hash")]),e._v(" "),o("ul",[o("li",[e._v("verify signature failed")])]),e._v(" "),o("p",[e._v("Wrong block signature")]),e._v(" "),o("ul",[o("li",[e._v("receive's AccountAddress doesn't match the sendToAddress")])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("sendBlockHash")]),e._v(" in response block doesn't link to a correct unreceived transaction.")]),e._v(" "),o("ul",[o("li",[e._v("Inconsistent execution results in vm, err:xxx")])]),e._v(" "),o("p",[e._v("Field xxx does not match the result in the VM. Usually this is caused by incorrect "),o("code",[e._v("toAddress")]),e._v(" when deploying a contract or wrong "),o("code",[e._v("data")]),e._v(" field when calling contracts.")]),e._v(" "),o("ul",[o("li",[e._v("abi: method not found")])]),e._v(" "),o("p",[e._v("The called contract method does not exist. Check the method name and signature in the "),o("code",[e._v("data")]),e._v(" field.")]),e._v(" "),o("ul",[o("li",[e._v("invalid method param")])]),e._v(" "),o("p",[e._v("Wrong parameter used when calling the contract. Usually this is caused by incorrect "),o("code",[e._v("amount")]),e._v(", "),o("code",[e._v("tokenId")]),e._v(" or parameters encoded in "),o("code",[e._v("data")]),e._v(" field.")]),e._v(" "),o("ul",[o("li",[e._v("contract not exists")])]),e._v(" "),o("p",[e._v("The contract specified in "),o("code",[e._v("toAddress")]),e._v(" field of the request transaction does not exist.")]),e._v(" "),o("ul",[o("li",[e._v("The node time is inaccurate, quite different from the time of latest snapshot block.")])]),e._v(" "),o("p",[e._v("The last snapshot block on the node is out of date. Check the sync status of the node.")]),e._v(" "),o("ul",[o("li",[e._v("calc PoW twice referring to one snapshot block")])]),e._v(" "),o("p",[e._v("PoW used twice in the same snapshot block. Try to send the transaction again in the next snapshot block.")]),e._v(" "),o("ul",[o("li",[e._v("generator_vm panic error")])]),e._v(" "),o("p",[e._v("Panic incurred in VM, usually caused by a recent rollback on the node. Try to send the transaction again.")]),e._v(" "),o("ul",[o("li",[e._v("block is already received successfully")])]),e._v(" "),o("p",[e._v("Cannot receive a request transaction (specified by "),o("code",[e._v("sendBlockHash")]),e._v(") that has been received.")]),e._v(" "),o("ul",[o("li",[e._v("fail to find receive's send in verifyProducerLegality；failed to find the recvBlock's fromBlock")])]),e._v(" "),o("p",[e._v("The request block corresponding to "),o("code",[e._v("sendBlockHash")]),e._v(" in the response transaction is not found. This is usually caused by a rollback. Make sure the request transaction is not reverted and retry.")]),e._v(" "),o("ul",[o("li",[e._v("verify prevBlock failed, incorrect use of prevHash or fork happened")])]),e._v(" "),o("p",[e._v("The transaction's "),o("code",[e._v("previousHash")]),e._v(" or "),o("code",[e._v("height")]),e._v(" cannot match the previous block on the account chain. Use the "),o("code",[e._v("hash")]),e._v(" and "),o("code",[e._v("height")]),e._v(" of the latest block to rebuild the transaction.")]),e._v(" "),o("ul",[o("li",[e._v("insufficient balance for transfer")])]),e._v(" "),o("p",[e._v("Insufficient balance to finish the transaction.")]),e._v(" "),o("ul",[o("li",[e._v("out of quota")])]),e._v(" "),o("p",[e._v("Insufficient quota to finish the transaction. You should follow the below steps.")]),e._v(" "),o("ol",[o("li",[e._v("If the Vite network is in congestion, try to send the transaction later;")]),e._v(" "),o("li",[e._v("If you have stakes, and the quota received from the stake can cover the consumption, wait for a while and send the transaction again;")]),e._v(" "),o("li",[e._v("If you don't have stake or the stake is insufficient to send the transaction, stake first, or send the transaction through PoW.")])]),e._v(" "),o("h2",{attrs:{id:"stake-for-quota"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stake-for-quota"}},[e._v("#")]),e._v(" Stake for Quota")]),e._v(" "),o("p",[e._v("The available quota of the account relies on how much VITE has been staked and the actual use of quota in the past 74 snapshot blocks. Refer to "),o("RouterLink",{attrs:{to:"/tutorial/rule/quota.html#quota-consumption-rules"}},[e._v("Quota Consumption Rules")]),e._v(" to know how quota works on Vite.")],1),e._v(" "),o("p",[e._v("There are two ways to know the staking amount:")]),e._v(" "),o("ul",[o("li",[e._v("Refer to "),o("RouterLink",{attrs:{to:"/tutorial/rule/quota.html#quota-calculation"}},[e._v("Quota Calculation")]),e._v(" and make the estimation")],1),e._v(" "),o("li",[e._v("See "),o("RouterLink",{attrs:{to:"/api/rpc/contract_v2.html#contract-getrequiredstakeamount"}},[e._v("Get Minimum Required Stake Amount")])],1)]),e._v(" "),o("p",[e._v("For example, account A needs to send two transfers (having no comment) in 75 seconds, consuming 21000*2 quota, according to the above table, the required staking amount is 267 VITE.")]),e._v(" "),o("h2",{attrs:{id:"auto-receive-transactions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#auto-receive-transactions"}},[e._v("#")]),e._v(" Auto-Receive Transactions")]),e._v(" "),o("p",[e._v("Some Vite SDKs, like vite.js provides the API to receive transactions for an account automatically. This is recommended.")]),e._v(" "),o("p",[e._v("For advanced usage, poll "),o("RouterLink",{attrs:{to:"/api/rpc/ledger_v2.html#ledger_getUnreceivedBlocksByAddress"}},[e._v("Unreceived Transaction List")]),e._v(" or subscribe to "),o("RouterLink",{attrs:{to:"/api/rpc/subscribe_v2.html#subscribe_createUnreceivedBlockSubscriptionByAddress"}},[e._v("Unreceived Transaction Event")]),e._v(" of an account to get unreceived transactions, then create corresponding response blocks and "),o("RouterLink",{attrs:{to:"/api/rpc/ledger_v2.html#ledger_sendRawTransaction"}},[e._v("Send Response Transaction")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"event-subscription-not-working"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-subscription-not-working"}},[e._v("#")]),e._v(" Event Subscription Not Working")]),e._v(" "),o("p",[e._v("Follow the following steps to investigate:")]),e._v(" "),o("ul",[o("li",[e._v("Check if the connecting node is fully synced;")]),e._v(" "),o("li",[e._v("Check if "),o("code",[e._v("subscribe")]),e._v(" is configured in "),o("code",[e._v("PublicModules")]),e._v(" of node_config.json and "),o("code",[e._v('"SubscribeEnabled":true')]),e._v(" is set;")]),e._v(" "),o("li",[e._v("Check if the subscription is correct and the event does incur. For example, to check new transaction events on given account, you can call "),o("RouterLink",{attrs:{to:"/api/rpc/ledger_v2.html#ledger_getAccountBlocksByAddress"}},[e._v("GetAccountBlocks API")]),e._v(". Assuming account A sends a transaction to account B, you should subscribe to new transaction events on account A, or new unreceived transaction events on account B.")],1)]),e._v(" "),o("h2",{attrs:{id:"how-to-know-an-address-is-contract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-know-an-address-is-contract"}},[e._v("#")]),e._v(" How to Know an Address is Contract")]),e._v(" "),o("p",[e._v("This is defined in "),o("RouterLink",{attrs:{to:"/vep/vep-16.html"}},[e._v("VEP 16: Specification of Address Generation")]),e._v(". Check it out.")],1),e._v(" "),o("h2",{attrs:{id:"random-numbers-in-solidity"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#random-numbers-in-solidity"}},[e._v("#")]),e._v(" Random Numbers in Solidity++")]),e._v(" "),o("p",[e._v("Two methods are provided in Solidity++ to get randoms:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ly8gcmV0dXJuIGEgcmFuZG9tLiB0aGUgcmV0dXJuaW5nIHZhbHVlIGtlZXBzIHRoZSBzYW1lIGR1cmluZyBvbmUgY2FsbAp1aW50NjQgcmFuZG9tID0gcmFuZG9tNjQoKTsKLy8gcmV0dXJuIGEgcmFuZG9tLiB0aGlzIG1ldGhvZHMgcmV0dXJucyBkaWZmZXJlbnQgcmFuZG9tIG51bWJlcnMgZWFjaCB0aW1lCnVpbnQ2NCByYW5kb20gPSBuZXh0cmFuZG9tKCk7Cg=="}}),e._v(" "),o("p",[e._v("Refer to "),o("RouterLink",{attrs:{to:"/vep/vep-12.html"}},[e._v("VEP 12: The Implementation of Random Numbers in Vite")]),e._v(" for the details.")],1),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("randomDegree")]),e._v(" parameter when deploying the contract specifies the degree of confidence. The bigger "),o("code",[e._v("randomDegree")]),e._v(", the more secure the random number generated, and the slower the contract producing response. Choose your "),o("code",[e._v("randomDegree")]),e._v(" according to your business need in the contract.")])]),e._v(" "),o("h2",{attrs:{id:"decode-calling-parameter-and-event"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decode-calling-parameter-and-event"}},[e._v("#")]),e._v(" Decode Calling Parameter and Event")]),e._v(" "),o("p",[e._v("Use "),o("code",[e._v("--abi")]),e._v(" option to get the ABI definition when compiling the contract. An ABI consists of constructor, methods, events (aka vmlog), etc. Given the ABI definition and the data field of the transaction, you can decode the calling parameters; given the ABI definition and the vmlog field of the transaction, you can decode the event.")]),e._v(" "),o("p",[e._v("The ABI definition of built-in contracts are specified in "),o("RouterLink",{attrs:{to:"/api/rpc/contract_v2.html#call-built-in-contract"}},[e._v("Built-in Contracts")])],1),e._v(" "),o("p",[e._v("Vite SDKs such as vite.js and vitej provide convenient APIs for encode and decode.")]),e._v(" "),o("h2",{attrs:{id:"get-contract-state"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get-contract-state"}},[e._v("#")]),e._v(" Get Contract State")]),e._v(" "),o("p",[e._v("When a contract is running, there are two methods to check the states:")]),e._v(" "),o("ul",[o("li",[e._v("Decode event to get the state value in the VS-Code soliditypp extension or through vite.js SDK;")]),e._v(" "),o("li",[e._v("Set "),o("code",[e._v('"VMDebug":true')]),e._v(" in node_config.json to print running log in {DataDir}/maindata/vmlog/interpreter.log, including each instruction, and "),o("code",[e._v("stack")]),e._v(", "),o("code",[e._v("memory")]),e._v(", "),o("code",[e._v("storage")]),e._v(" states.")])]),e._v(" "),o("p",[e._v("We also provide two methods to check the contract states offline:")]),e._v(" "),o("ul",[o("li",[e._v("Call the Solidity++ getter method through "),o("RouterLink",{attrs:{to:"/api/rpc/contract_v2.html#contract-calloffchainmethod"}},[e._v("Call Offline Method API")]),e._v(";")],1),e._v(" "),o("li",[e._v("Call "),o("RouterLink",{attrs:{to:"/api/rpc/contract_v2.html#contract_getContractStorage"}},[e._v("Get Contract Storage API")]),e._v(" and parse the result.")],1)]),e._v(" "),o("h2",{attrs:{id:"estimate-quota-consumption-of-contract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#estimate-quota-consumption-of-contract"}},[e._v("#")]),e._v(" Estimate Quota Consumption of Contract")]),e._v(" "),o("p",[e._v("The quota spent when receiving a calling request is defined in "),o("RouterLink",{attrs:{to:"/vep/vep-17.html#quota-consumption-table-of-transactions"}},[e._v("Quota Consumption Table of Transactions")]),e._v(" and "),o("RouterLink",{attrs:{to:"/vep/vep-17.html#quota-consumption-table-of-vm-instructions"}},[e._v("Quota Consumption Table of VM Instructions")]),e._v(".")],1),e._v(" "),o("p",[e._v("Below is a simple example to explain how quota is spent for a contract response transaction:")]),e._v(" "),o("p",[e._v("When a contract method is called, if it is non-payable, the contract will first check whether the transfer value of the request transaction is 0. "),o("code",[e._v("341561001057600080FD")]),e._v(" is the binary code for checking the transfer amount.")]),e._v(" "),o("p",[e._v("Let's translate the code into the OPCODEs that are understandable:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"MzQgQ0FMTFZBTFVFIC0gR2V0IHRoZSB0cmFuc2ZlciB2YWx1ZSBmcm9tIHRoZSByZXF1ZXN0IHRyYW5zYWN0aW9uIGFuZCBwdXQgb24gdGhlIHRvcCBvZiB0aGUgc3RhY2ssIGNvbnN1bWluZyAxIHVuaXQgb2YgcXVvdGEKMTUgSVNaRVJPIC0gIENoZWNrIGlmIHRoZSB0cmFuc2ZlciB2YWx1ZSBvbiB0aGUgdG9wIG9mIHRoZSBzdGFjayBpcyAwLiBJZiB5ZXMsIHB1c2ggMSBvbiB0aGUgc3RhY2ssIG90aGVyd2lzZSBwdXNoIDAuIFRoaXMgb3BlcmF0aW9uIGNvc3RzIDEgdW5pdCBvZiBxdW90YQo2MTAwMTAgUFVTSDIgMHgwMDEwIC0gUHVzaCAweDAwMTAgb250byB0aGUgc3RhY2ssIGNvbnN1bWluZyAxIHVuaXQgb2YgcXVvdGEKNTcgSlVNUEkgLSBJZiB0aGUgc2Vjb25kIGVsZW1lbnQgb24gdGhlIHN0YWNrIGlzIG5vdCAwLCBqdW1wIHRvIDB4MDAxMCB0byBleGVjdXRlLCBjb25zdW1pbmcgNCB1bml0cyBvZiBxdW90YQo2MDAwIFBVU0gxIDB4MDAgLSBQdXNoIDB4MDAgb250byB0aGUgc3RhY2ssIGNvbnN1bWluZyAxIHVuaXQgb2YgcXVvdGEKODAgRFVQMSAtIENvcHkgdGhlIHRvcCBlbGVtZW50IGFuZCBwdXNoIGl0IGludG8gdGhlIHN0YWNrLCBjb25zdW1pbmcgMSB1bml0IG9mIHF1b3RhCkZEIFJFVkVSVCAtIFBvcCB0aGUgdG9wIHR3byBlbGVtZW50cyBmcm9tIHRoZSBzdGFjayBhbmQgcmV0dXJuLCBjb25zdW1pbmcgemVybyBxdW90YQo="}}),e._v(" "),o("p",[e._v("The total quota consumption is 21000+1+1+1+4+1+1+0 = 21009")]),e._v(" "),o("h2",{attrs:{id:"how-to-get-vmlog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-vmlog"}},[e._v("#")]),e._v(" How to Get vmlog")]),e._v(" "),o("p",[e._v("Event (aka vmlog) is not saved on the node by default. You must explicitly turn it on in node_config.json on the node that provides RPC API service, as following")]),e._v(" "),o("ul",[o("li",[o("code",[e._v('"VmLogAll":true')]),e._v(" -  Save all vmlog")]),e._v(" "),o("li",[o("code",[e._v('"VmLogWhiteList":["vite_d789431f1d820506c83fd539a0ae9863d6961382f67341a8b5","vite_000000000000000000000000000000000000000595292d996d"]')]),e._v(" - Save the vmlog of the specified contracts")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);