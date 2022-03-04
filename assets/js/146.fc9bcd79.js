(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{733:function(e,t,o){"use strict";o.r(t);var s=o(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"troubleshooting-faq-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-faq-node"}},[e._v("#")]),e._v(" Troubleshooting & FAQ - Node")]),e._v(" "),o("h2",{attrs:{id:"recommended-specs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#recommended-specs"}},[e._v("#")]),e._v(" Recommended Specs")]),e._v(" "),o("ul",[o("li",[e._v("SBP (Supernode) - 2 CPUs / 8 GB RAM")]),e._v(" "),o("li",[e._v("Full node - 1 CPU / 4 GB RAM")])]),e._v(" "),o("p",[e._v("A minimum of 5M bps stable internet connection is required.")]),e._v(" "),o("h2",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("h3",{attrs:{id:"boot-up-failures"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#boot-up-failures"}},[e._v("#")]),e._v(" Boot-up failures")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("new node error")])])]),e._v(" "),o("p",[e._v("JSON Format error in node_config.json or genesis.json.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("panic: The fork point abcFork can't be nil. the ForkPoints config in genesis.json is not correct, you can remove the ForkPoints key in genesis.json then use the default config of ForkPoints")])])]),e._v(" "),o("p",[e._v("Unconfigured or incorrect fork point in genesis.json. Check "),o("code",[e._v("ForkPoints")]),e._v(" in the config file and make sure it is aligned with the upcoming hard fork. For testnet node, the hard fork height can directly be specified in genesis.json.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Failed to prepare node, dataDir already used by another process")])])]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("DataDir")]),e._v(" has been occupied by another gvite process. Kill the process and try again.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Failed to prepare node, stat {datadir}/maindata/wallet/vite_xxx: no such file or directory")])])]),e._v(" "),o("p",[e._v("The keystore file is missing. Check if "),o("code",[e._v("DataDir")]),e._v(" is specified in node_config.json and the correct keystore file is in the folder. You can also specify a "),o("code",[e._v("KeyStoreDir")]),e._v(" in node_config.json.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Failed to prepare node, error decrypt store")])])]),e._v(" "),o("p",[e._v("Unlock account failed, usually caused by a mismatched key store file and password.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Failed to start node, no service for name {abc}")])])]),e._v(" "),o("p",[e._v("Module {abc} in "),o("code",[e._v("PublicModules")]),e._v(" does not exist. Remove {abc} from node_config.json.")]),e._v(" "),o("h3",{attrs:{id:"node-is-not-syncing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-is-not-syncing"}},[e._v("#")]),e._v(" Node is not syncing")]),e._v(" "),o("p",[e._v("The node boots up successfully but the snapshot block height does not increase in 5 minutes.")]),e._v(" "),o("p",[e._v("Follow the below steps to check.")]),e._v(" "),o("ul",[o("li",[e._v("Make sure the node has been upgraded to the latest "),o("a",{attrs:{href:"https://github.com/vitelabs/go-vite/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("stable version"),o("OutboundLink")],1),e._v(";")]),e._v(" "),o("li",[e._v("Make sure the timestamp on the node is accurate;")]),e._v(" "),o("li",[e._v("Check connected peers through "),o("RouterLink",{attrs:{to:"/api/rpc/net.html#net_peers"}},[e._v("net_peers")]),e._v(". If peerCount=0, make sure port 8483/8484 are exposed, and run "),o("code",[e._v("curl https://bootnodes.vite.net/bootmainnet.json")]),e._v(" to check if the node is connected to internet;")],1)]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtWCBQT1NUIFwKICBodHRwOi8vMTI3LjAuMC4xOjQ4MTMyLyBcCiAgLUggJ2NvbnRlbnQtdHlwZTogYXBwbGljYXRpb24vanNvbicgXAogIC1kICd7CiAgICAgICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgICAgICZxdW90O2lkJnF1b3Q7OiAxLAogICAgICAgICZxdW90O21ldGhvZCZxdW90OzogJnF1b3Q7bmV0X3BlZXJzJnF1b3Q7LAogICAgICAgICZxdW90O3BhcmFtcyZxdW90OzogbnVsbAogICAgICB9Jwo="}}),e._v(" "),o("ul",[o("li",[e._v("If the node has connected to other peers, check sync status through "),o("RouterLink",{attrs:{to:"/api/rpc/net.html#net_syncDetail"}},[e._v("net_syncDetail")]),e._v(". If the chunk returned is empty, wait 5 minutes and check again;")],1)]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtWCBQT1NUIFwKICBodHRwOi8vMTI3LjAuMC4xOjQ4MTMyLyBcCiAgLUggJ2NvbnRlbnQtdHlwZTogYXBwbGljYXRpb24vanNvbicgXAogIC1kICd7CiAgICAgICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgICAgICZxdW90O2lkJnF1b3Q7OiAxLAogICAgICAgICZxdW90O21ldGhvZCZxdW90OzogJnF1b3Q7bmV0X3N5bmNEZXRhaWwmcXVvdDssCiAgICAgICAgJnF1b3Q7cGFyYW1zJnF1b3Q7OiBudWxsCiAgICAgIH0nCg=="}}),e._v(" "),o("ul",[o("li",[e._v("Reboot gvite, wait for 5 minutes and watch if the snapshot chain height increases;")]),e._v(" "),o("li",[e._v("Examine the status of snapshot chain through debug_poolSnapshot (add "),o("code",[e._v("debug")]),e._v(" in "),o("code",[e._v("PublicModules")]),e._v(" of node_config.json to enable the debug tool). If there is a difference gap between Head and Tail, and Tail does not change, send the return values together with the latest log under {datadir}/maindata/runlog/ to Vite technical support for investigation.")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtWCBQT1NUIFwKICBodHRwOi8vMTI3LjAuMC4xOjQ4MTMyLyBcCiAgLUggJ2NvbnRlbnQtdHlwZTogYXBwbGljYXRpb24vanNvbicgXAogIC1kICd7CiAgICAgIAkmcXVvdDtqc29ucnBjJnF1b3Q7OiAmcXVvdDsyLjAmcXVvdDssCiAgICAgIAkmcXVvdDtpZCZxdW90OzogMSwKICAgICAgCSZxdW90O21ldGhvZCZxdW90OzomcXVvdDtkZWJ1Z19wb29sU25hcHNob3QmcXVvdDssCiAgICAgIAkmcXVvdDtwYXJhbXMmcXVvdDs6bnVsbAogICAgICB9Jwo="}}),e._v(" "),o("h3",{attrs:{id:"sbp-does-not-produce-block"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sbp-does-not-produce-block"}},[e._v("#")]),e._v(" SBP does not produce block")]),e._v(" "),o("p",[e._v("The SBP node is synced up but does not produce snapshot block.")]),e._v(" "),o("p",[e._v("Follow the below steps to check.")]),e._v(" "),o("ul",[o("li",[e._v("Make sure the node has been upgraded to the latest "),o("a",{attrs:{href:"https://github.com/vitelabs/go-vite/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("stable version"),o("OutboundLink")],1),e._v(";")]),e._v(" "),o("li",[e._v("Make sure the timestamp on the node is accurate;")]),e._v(" "),o("li",[e._v("Make sure the node has 4 CPUs and 8GB RAM installed with 5M bps internet connection, and there is no other program occupying the CPU, RAM, disk I/O and network bandwidth;")]),e._v(" "),o("li",[e._v("Check node_config.json, make sure "),o("code",[e._v("Miner")]),e._v(" is set to true, "),o("code",[e._v("EntropyStorePath")]),e._v(" and "),o("code",[e._v("EntropyStorePassword")]),e._v(" are correctly configured;")]),e._v(" "),o("li",[e._v("Check the registration information of the SBP on "),o("a",{attrs:{href:"https://explorer.vite.net/SBPList",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vite block explorer"),o("OutboundLink")],1),e._v(" to make sure the current block creation address matches the address configured in "),o("code",[e._v("EntropyStorePath")]),e._v(";")]),e._v(" "),o("li",[e._v("Check the SBP rank on "),o("a",{attrs:{href:"https://explorer.vite.net/SBPList",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vite block explorer"),o("OutboundLink")],1),e._v(". SBP nodes ranked after 25 have a smaller rate to produce blocks. SBP ranked after 100 do not have chance to produce snapshot block;")]),e._v(" "),o("li",[e._v("Restart the node;")]),e._v(" "),o("li",[e._v("If the problem still exists, send the latest log under ~/.gvite/maindata/runlog/ to Vite technical support for further investigation.")])]),e._v(" "),o("h3",{attrs:{id:"sbp-is-missing-blocks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sbp-is-missing-blocks"}},[e._v("#")]),e._v(" SBP is missing blocks")]),e._v(" "),o("p",[e._v("The SBP node is in sync but missed some blocks. Follow the steps below to check.")]),e._v(" "),o("ul",[o("li",[e._v("Make sure the node has been upgraded to the latest "),o("a",{attrs:{href:"https://github.com/vitelabs/go-vite/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("stable version"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Make sure the timestamp on the node is accurate.")]),e._v(" "),o("li",[e._v("Make sure the node has installed 4 CPUs and 8GB RAM with 5M bps internet connection, and there is no other program occupying the CPU, RAM, disk I/O and network bandwidth.")]),e._v(" "),o("li",[e._v("Restart the node.")]),e._v(" "),o("li",[e._v("If the problem still exists, send the latest log under {datadir}/maindata/runlog/ to Vite technical support for investigation.")])]),e._v(" "),o("h3",{attrs:{id:"node-reports-too-many-open-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-reports-too-many-open-files"}},[e._v("#")]),e._v(" Node reports too many open files")]),e._v(" "),o("p",[e._v("It is a common error in Linux. Increase the maximum number of open files in the system. Follow the steps below to fix.")]),e._v(" "),o("p",[e._v("Run")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c3VkbyB2aW0gL2V0Yy9zZWN1cml0eS9saW1pdHMuY29uZiAK"}}),e._v(" "),o("p",[e._v("Add")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"KiBzb2Z0IG5vZmlsZSAxMDI0MCAgCiogaGFyZCBub2ZpbGUgMTAyNDAK"}}),e._v(" "),o("p",[e._v("or")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"KiAtIG5vZmlsZSAxMDI0MAo="}}),e._v(" "),o("p",[e._v("or (if you have root access)")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"cm9vdCBzb2Z0IG5vZmlsZSAxMDI0MCAgCnJvb3QgaGFyZCBub2ZpbGUgMTAyNDAK"}}),e._v(" "),o("p",[e._v("Save and quit")]),e._v(" "),o("p",[e._v("Logout and login again")]),e._v(" "),o("p",[e._v("Run")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dWxpbWl0IC1uCg=="}}),e._v(" "),o("p",[e._v("to check the new value is applied")]),e._v(" "),o("p",[e._v("You can also run")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cHMgLWVmIHwgZ3JlcCBndml0ZQo="}}),e._v(" "),o("p",[e._v("Get the pid of gvite")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y2F0IC9wcm9jL3twaWR9L2xpbWl0cyB8IGdyZXAgb3Blbgo="}}),e._v(" "),o("p",[e._v("Check the value displayed")]),e._v(" "),o("h2",{attrs:{id:"faq"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),o("h3",{attrs:{id:"what-is-the-difference-between-sbp-staking-address-and-block-creation-address"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-difference-between-sbp-staking-address-and-block-creation-address"}},[e._v("#")]),e._v(" What is the difference between SBP staking address and block creation address?")]),e._v(" "),o("p",[e._v("When an SBP is registered, the registration account should stake 1m VITE. The registration address is the staking address and becomes the owner of the SBP. After the staking lock-up period expires, the staking address can cancel the SBP and retain the 1m VITE staked.")]),e._v(" "),o("p",[e._v("Once registered, the staking address cannot be changed. This is different with block creation address and reward withdrawal address, the both can be updated after registration.")]),e._v(" "),o("p",[e._v("The private key of block creation address is saved on the node (corresponding to "),o("code",[e._v("EntropyStorePath")]),e._v(" and "),o("code",[e._v("EntropyStorePassword")]),e._v(" in node_config.json), and the only purpose of block creation address is to sign snapshot blocks.")]),e._v(" "),o("p",[e._v("Reward withdrawal address is used to withdraw SBP rewards.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),o("p",[e._v("It is highly recommended to separate staking address from block creation address. Do NOT store assets in block creation address.")])]),e._v(" "),o("h3",{attrs:{id:"do-i-need-to-upgrade-my-node-when-there-is-a-new-release"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#do-i-need-to-upgrade-my-node-when-there-is-a-new-release"}},[e._v("#")]),e._v(" Do I need to upgrade my node when there is a new release?")]),e._v(" "),o("p",[e._v('There are two types of gvite release. For the releases tagged "Upgrade is required", you should complete the upgrade within the time in order to be compatible with the hard fork. No worries, you have enough time to finish the upgrade. Announcements will be declared on Vite social channels including Telegram group, Discord channel, Vite block explorer notifications, and Vite forum usually one month ahead of the hard fork.\nAnother type of release is general release, including improved stability and performance, network optimization, new toolkit interface, etc. Upgrade is not required for this kind of release, but recommended.')]),e._v(" "),o("p",[e._v("If there are no special instruction in the announcement, to upgrade a node you should just replace the gvite file and restart it. This is convenient because there is no need to modify node_config.json. If there are instructions in the release announcement, follow the instructions.")]),e._v(" "),o("p",[e._v("After reboot, watch if the snapshot chain height is increasing (for full node and SBP node) and snapshot blocks are produced normally (for SBP node). If yes, the upgrade is successful.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),o("p",[e._v("To avoid unnecessary block missing for SBP node during upgrade, replace gvite file first then reboot the node.")])]),e._v(" "),o("h3",{attrs:{id:"how-to-check-sync-status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-check-sync-status"}},[e._v("#")]),e._v(" How to check sync status?")]),e._v(" "),o("p",[e._v("You have two alternatives.")]),e._v(" "),o("ul",[o("li",[e._v("Check through "),o("RouterLink",{attrs:{to:"/api/rpc/net.html#net_syncinfo"}},[e._v("net_syncinfo")]),e._v("，"),o("code",[e._v("Sync done")]),e._v(" indicates the node is synced up.")],1)]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtWCBQT1NUIFwKICBodHRwOi8vMTI3LjAuMC4xOjQ4MTMyLyBcCiAgLUggJ2NvbnRlbnQtdHlwZTogYXBwbGljYXRpb24vanNvbicgXAogIC1kICd7CiAgICAgIAkmcXVvdDtqc29ucnBjJnF1b3Q7OiAmcXVvdDsyLjAmcXVvdDssCiAgICAgIAkmcXVvdDtpZCZxdW90OzogMSwKICAgICAgCSZxdW90O21ldGhvZCZxdW90OzomcXVvdDtuZXRfc3luY2luZm8mcXVvdDssCiAgICAgIAkmcXVvdDtwYXJhbXMmcXVvdDs6bnVsbAogICAgICB9Jwo="}}),e._v(" "),o("ul",[o("li",[e._v("Check through gvite.log or "),o("RouterLink",{attrs:{to:"/api/rpc/ledger_v2.html#ledger_getSnapshotChainHeight"}},[e._v("ledger_getSnapshotChainHeight")]),e._v(" to check the latest snapshot block height on the node and compare to explorer.")],1)]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCAtWCBQT1NUIFwKICBodHRwOi8vMTI3LjAuMC4xOjQ4MTMyLyBcCiAgLUggJ2NvbnRlbnQtdHlwZTogYXBwbGljYXRpb24vanNvbicgXAogIC1kICd7CiAgICAgIAkmcXVvdDtqc29ucnBjJnF1b3Q7OiAmcXVvdDsyLjAmcXVvdDssCiAgICAgIAkmcXVvdDtpZCZxdW90OzogMSwKICAgICAgCSZxdW90O21ldGhvZCZxdW90OzomcXVvdDtsZWRnZXJfZ2V0U25hcHNob3RDaGFpbkhlaWdodCZxdW90OywKICAgICAgCSZxdW90O3BhcmFtcyZxdW90OzpudWxsCiAgICAgIH0nCg=="}}),e._v(" "),o("h3",{attrs:{id:"how-is-the-sbp-reward-allocated"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-is-the-sbp-reward-allocated"}},[e._v("#")]),e._v(" How is the SBP reward allocated?")]),e._v(" "),o("p",[e._v("See "),o("RouterLink",{attrs:{to:"/tutorial/rule/sbp.html#sbp-rewards"}},[e._v("SBP reward rules")]),e._v(". You can download a detailed voting spreadsheet from the SBP details page of explorer.")],1),e._v(" "),o("h3",{attrs:{id:"can-i-copy-the-ledger-files-to-a-new-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#can-i-copy-the-ledger-files-to-a-new-node"}},[e._v("#")]),e._v(" Can I copy the ledger files to a new node?")]),e._v(" "),o("p",[e._v("Copying ledger files to another node is allowed. Be noted to stop the node first, and you just need to copy "),o("code",[e._v("{datadir}/maindata/ledger")]),e._v(" folder.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);