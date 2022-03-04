(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{766:function(e,t,a){"use strict";a.r(t);var s=a(1),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vep-3-vite-wallet-key-derivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vep-3-vite-wallet-key-derivation"}},[e._v("#")]),e._v(" VEP 3: Vite Wallet Key Derivation")]),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("VEP 3 defines the private key derivation rules(with multiple curve algorithms) in Vite wallet.")]),e._v(" "),a("h2",{attrs:{id:"purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),a("p",[e._v("HD wallet(Hierarchical Deterministic Wallet) has the capability of deriving multiple private keys from one single seed, thus making it easy to do wallet backup or upgrade to other compatible wallets such as hardware wallet.")]),e._v(" "),a("p",[e._v("HD wallet also supports multiple tokens.")]),e._v(" "),a("h2",{attrs:{id:"content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[e._v("#")]),e._v(" Content")]),e._v(" "),a("p",[e._v("The seed is represented by a number of words that is easy to remember or write on paper, called mnemonic phrase. In protocol "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP39"),a("OutboundLink")],1),e._v(" a mnemonic phrase is defined in 12 or 24 words.")]),e._v(" "),a("p",[e._v("Based on "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP32"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP44"),a("OutboundLink")],1),e._v(" allows wallet to store multiple tokens and accounts with one seed.")]),e._v(" "),a("p",[e._v("Since Vite adopts ED25519 for signature, other than secp256k1 used in BIP32, we need to find a key derivation method which is compatible with BIP32. The actual signature implementation in Vite is similar to "),a("a",{attrs:{href:"https://cardanolaunch.com/assets/Ed25519_BIP.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("ed25519-bip32"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"bip44-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bip44-compatibility"}},[e._v("#")]),e._v(" BIP44 Compatibility")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP44"),a("OutboundLink")],1),e._v(" defines a BIP32-compatible path patten that supports multiple cryptocurrencies:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bSAvIHB1cnBvc2UnIC8gY29pbl90eXBlJyAvIGFjY291bnQnIC8gY2hhbmdlIC8gYWRkcmVzc19pbmRleAo="}}),e._v(" "),a("p",[e._v("The prefix is always like:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bS80NCcK"}}),e._v(" "),a("p",[e._v("We have registered "),a("code",[e._v("coin_type")]),e._v("\b "),a("strong",[e._v("666666")]),e._v(" at "),a("a",{attrs:{href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("SLIP-0044"),a("OutboundLink")],1),e._v(", so a BIP44 Vite path starts with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bS80NCcvNjY2NjY2Jy8K"}}),e._v(" "),a("p",[e._v("Attached an index "),a("code",[e._v("x")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bS80NCcvNjY2NjY2Jy94Jwo="}}),e._v(" "),a("ul",[a("li",[e._v("x: Index. Particularly, we define the address associated with "),a("code",[e._v("m/44'/666666'/0'")]),e._v(" as "),a("strong",[e._v("Primary Address")]),e._v(" of the mnemonic.")])]),e._v(" "),a("h2",{attrs:{id:"test-case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-case"}},[e._v("#")]),e._v(" Test Case")]),e._v(" "),a("h3",{attrs:{id:"entropy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entropy"}},[e._v("#")]),e._v(" Entropy")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ODdhZDBlMDY2MTExZWQ4MjdkYzFmN2JlNGQxYmY1M2I5YTdiZTg0MDIxYTA5NTA0MThkM2Y0NWVkNGQ1NGYxYwo="}}),e._v(" "),a("h3",{attrs:{id:"mnemonic-phrase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mnemonic-phrase"}},[e._v("#")]),e._v(" Mnemonic Phrase")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFyYmxlIGhhbGYgbGlnaHQgc2Vhc29uIGJ1cnN0IHNjb3JwaW9uIHdhcmZhcmUgZGlzY292ZXIgc2FsYWQgaGFuZCB3b29sIGphZ3VhciBwb2xpY2UgdmludGFnZSBhYm92ZSBjcm9zcyBuZXZlciBjYW1wIGNydW5jaCB0cmltIHVuaGFwcHkgaGVpZ2h0IGRldGVjdCBvcGluaW9uCg=="}}),e._v(" "),a("h3",{attrs:{id:"bip39-seed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bip39-seed"}},[e._v("#")]),e._v(" BIP39 \b\bSeed")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"MmJhMWQ4ZTY5NmQxN2FjNGQ3NWI5ZjQ3OWM1Mjc0NTBkNDM5YzlhY2QyYjRkNTQyZDI3ZTNhN2YzNDE4Y2QyNDE3MTdkMmRiNDFmNDdkOGJiYWU5ZmM5MGZlNTUxYzRkYjg3Zjc0OTExMDRmMDMwZjZlY2VhZjFiMjRmMTVmNGQK"}}),e._v(" "),a("h3",{attrs:{id:"derived-vite-ed25519-seeds-and-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#derived-vite-ed25519-seeds-and-addresses"}},[e._v("#")]),e._v(" Derived Vite ED25519 Seeds and Addresses")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bS80NCcvNjY2NjY2Jy8wJyBiYjM2OTIyMjYxM2FkN2IxYTY0NmQ4NGQ4Yzc0OWMzMGNmYTU4NzlmNTE1MmI3YmQ3YzFmOWY2NTUzY2UwZWI1ICB2aXRlX2RhM2NhOWJhYzlmMDVmY2U4ZjRlZWFkMzY2MTA3NTZiNmViNDgyODJmZjEwYTgxZDZkCm0vNDQnLzY2NjY2NicvMScgNTI5ODkyMjgzMTIyYTlhMDkwNTlhNzMxNDdjYjlmZWVhNDgwYmIzZmVlZDkxZTc5NjgyNDNmNGI2N2NjYjNlYSAgdml0ZV9lNWRlYjgwYTY0ZjUxNTkzMzk4YmExMDQ5YWY0MzUyOTFlM2NiNWM2OWE2Njc1NWYxMwptLzQ0Jy82NjY2NjYnLzInIDllZjZmMzNhYWYwNWZhMWNmNmU4YzM5NmIwMWE1ZWEwODI5NWE4MjliNTk1ZjYzNjc1OTM0M2QzNjNhNmE5NjcgIHZpdGVfZmJkZDBjMDM4ZjgwODU2MGY5NjM3NzU0Y2JiYmZhOTVlZDJlN2NkYjk2MTEzZWE3ZWIKbS80NCcvNjY2NjY2Jy8zJyA2ZGEwZWRkNmQ4MTAzM2I0YjJkNDFmMzc2NTc0NDQ4ODc2ZTdiNGY4NDFhZWRkN2RlYWY4YmI2ZDc5MzRiODAwICB2aXRlXzJhYTI1OGMzM2EyZDE2ZDAxZGE2NTFhOTQyM2FiYzM4NGY2MzY3MTEyYzBmNzNmYTVkCm0vNDQnLzY2NjY2NicvNCcgOThkMjMxMWM3OGU2NDA3YmYwYzQ0M2FiNTE1OTNjNGI2NjNjZTNhZjMxNjVhNDhhMjc4ZWQwYTZhMmY3MDFmMyAgdml0ZV9iOGQ0MDFjMWM3YjNmMzJiZjdkOWM3YTQ0YzhkNTk0ZmNkYWQxMDNiYjY3NzViZDAxNgptLzQ0Jy82NjY2NjYnLzUnIGJkMThmMWRmYzgxYmM3NDJjZGEyYzM3MzlhNDJmYjYyMjQxNWQ2MmI4ZmQ2MDM1ZmY4YmFkMmE5YjEzZjI2YjYgIHZpdGVfN2FiYTY2NDliMDlhNDMxMzA0NDVkZDcwODU3ZTc3YmVmMzQ3ZTJkYTJhN2I4MWY2MDgKbS80NCcvNjY2NjY2Jy82JyBiMWNmMDUxMWE0YmI3YTE1NGNmMGY2YzQxNmEzMTg2YzRkNmZlOGNkNTM0MTNjNjUwM2U4MDQ0NTkxODgzN2U4ICB2aXRlXzVlZjdkYTZjN2ZiNzkwNTE5MjFkMGM2Y2Y3NDQwZmI5ZjFiNDZkN2FhZjU2MDdhMDY5Cm0vNDQnLzY2NjY2NicvNycgMmIzMWFhNWY4NmUxMjA3YmFhNGVjOTNkZDM5N2M4NzhlZjUzMjU1YTNjYTY0Y2FmYTk3MGJiNjUxM2ZiNzA5OSAgdml0ZV82ZWJhYWQ4ZWU2N2U1MzY4ODg0YWUyZGU2NTIwMjQwOTM0NTNlYzEzZDhmMTdlMGFmYQptLzQ0Jy82NjY2NjYnLzgnIDg3MjEwZTRlYzQ3NzZhYjVlNmJjMTQ2MjU1YjFlNjQ5ZjZhNGY5OWU3NTRmZjMxZTQyMWUyZjQzNzg0ZjJhZmYgIHZpdGVfZWM4NDY3OGMyZDZmMWYxMjU5NjU1MmEwZDY3NmFiMjMzZDE3MjQ5NDYzOTczZjcyMzgKbS80NCcvNjY2NjY2Jy85JyBlMDIxMDljNDc5MDNlMmY4ODU4NjYwZjMwNjQyZTM2OThhMjYzZjAyNzdhZDJmMzY0NTI3YmM3NTI3NWE4MmVjICB2aXRlXzE3MjBmMjFiM2E2NmMzMGRhOTY2ZWY1MWRjNTljMDkxNTQzZGEwMTJiY2I2OWFlOGE0Cgo="}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);