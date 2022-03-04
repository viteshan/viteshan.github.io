(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{697:function(t,a,e){"use strict";e.r(a);var s=e(1),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"migrating-from-solidity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-solidity"}},[t._v("#")]),t._v(" Migrating from Solidity")]),t._v(" "),e("h2",{attrs:{id:"solidity-compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solidity-compatibility"}},[t._v("#")]),t._v(" Solidity Compatibility")]),t._v(" "),e("p",[t._v("Solidity++ 0.8 is compatible with almost all syntax of Solidity except for the differences mentioned in this article.")]),t._v(" "),e("p",[t._v("All features related to Ethereum are replaced with that related to Vite.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("new")]),t._v(" keyword is disabled in this version. In other words, it is impossible to deploy a new contract from a contract at runtime.")]),t._v(" "),e("p",[t._v("In addition, "),e("code",[t._v("selfdestruct")]),t._v(" and "),e("code",[t._v("ecrecover")]),t._v(" are disabled in this version.")]),t._v(" "),e("h2",{attrs:{id:"types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[t._v("#")]),t._v(" Types")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("address")]),t._v(" type is redefined to be compatible with Vite, and a new type "),e("code",[t._v("vitetoken")]),t._v(" representing Vite Native Token Id is introduced in Solidity++.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Ly8gYWRkcmVzcyB0eXBlCmFkZHJlc3MgYWRkcjEgPSBhZGRyZXNzKCZxdW90O3ZpdGVfMDEwMjAzMDQwNTA2MDcwODA5MDgwNzA2MDUwNDAzMDIwMTAyMDMwNGVkZGQ4Mzc0OGUmcXVvdDspOwphZGRyZXNzIGFkZHIyID0gJnF1b3Q7dml0ZV8wMTAyMDMwNDA1MDYwNzA4MDkwODA3MDYwNTA0MDMwMjAxMDIwMzA0ZWRkZDgzNzQ4ZSZxdW90OzsKYWRkcmVzcyBwYXlhYmxlIGFkZHIzID0gcGF5YWJsZSgmcXVvdDt2aXRlXzAxMDIwMzA0MDUwNjA3MDgwOTA4MDcwNjA1MDQwMzAyMDEwMjAzMDRlZGRkODM3NDhlJnF1b3Q7KTsgCi8vIHZpdGV0b2tlbiB0eXBlCnZpdGV0b2tlbiB0b2tlbjEgPSB2aXRldG9rZW4oJnF1b3Q7dHRpXzI0NDVmNmU1Y2RlOGMyYzcwZTQ0NmM4MyZxdW90Oyk7CnZpdGV0b2tlbiB0b2tlbjIgPSAmcXVvdDt0dGlfMjQ0NWY2ZTVjZGU4YzJjNzBlNDQ2YzgzJnF1b3Q7Owo="}}),t._v(" "),e("h2",{attrs:{id:"call-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#call-options"}},[t._v("#")]),t._v(" Call Options")]),t._v(" "),e("p",[t._v("When calling functions of other contracts, you can specify the amount of a specific token sent with the call with the call options "),e("code",[t._v('{token: "tti_564954455820434f494e69b5", value: 1e18}')]),t._v(".")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEdQTC0zLjAKcHJhZ21hIHNvbGlkaXR5cHAgJmd0Oz0wLjguMCAmbHQ7MC45LjA7Cgpjb250cmFjdCBJbmZvRmVlZCB7CiAgICBmdW5jdGlvbiBpbmZvKCkgZXh0ZXJuYWwgYXN5bmMgcGF5YWJsZSByZXR1cm5zICh1aW50IHJldCkgewogICAgICAgIHJldHVybiA0MjsKICAgIH0KfQoKY29udHJhY3QgQ29uc3VtZXIgewogICAgSW5mb0ZlZWQgZmVlZDsKCiAgICBjb25zdHJ1Y3RvciBwYXlhYmxlIChhZGRyZXNzIHBheWFibGUgYWRkcikgewogICAgICAgIGZlZWQgPSBJbmZvRmVlZChhZGRyKTsKICAgIH0KCiAgICBmdW5jdGlvbiBjYWxsRmVlZCgpIGV4dGVybmFsIGFzeW5jIHsKICAgICAgICAvLyBzZW5kIDEgVlggd2l0aCB0aGUgY2FsbAogICAgICAgIGZlZWQuaW5mb3t0b2tlbjogJnF1b3Q7dHRpXzU2NDk1NDQ1NTgyMDQzNGY0OTRlNjliNSZxdW90OywgdmFsdWU6IDFlMTh9KCk7CiAgICB9Cn0K"}}),t._v(" "),e("p",[t._v("If the "),e("code",[t._v("token")]),t._v(" call option is omited, the "),e("em",[t._v("VITE")]),t._v(" token is sent by default.")]),t._v(" "),e("p",[t._v("The following code:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"ZmVlZC5pbmZve3ZhbHVlOiAxZTE4fSgpOwo="}}),t._v(" "),e("p",[t._v("equivalents to:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"ZmVlZC5pbmZve3Rva2VuOiAmcXVvdDt0dGlfNTY0OTU0NDUyMDU0NGY0YjQ1NGU2ZTQwJnF1b3Q7LCB2YWx1ZTogMWUxOH0oKTsK"}}),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Notice")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("gas")]),t._v(","),e("code",[t._v("salt")]),t._v(" keys in a call option are not supported in Solidity++.")])]),t._v(" "),e("h2",{attrs:{id:"units"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#units"}},[t._v("#")]),t._v(" Units")]),t._v(" "),e("p",[t._v("In Solidity, a literal number can take a suffix of "),e("code",[t._v("wei")]),t._v(", "),e("code",[t._v("gwei")]),t._v(" or "),e("code",[t._v("ether")]),t._v(" to specify a subdenomination of Ether, where Ether numbers without a postfix are assumed to be "),e("code",[t._v("wei")]),t._v(".")]),t._v(" "),e("p",[t._v("Similarly, in Solidity++, a literal number can take a suffix of "),e("code",[t._v("attov")]),t._v(" and "),e("code",[t._v("vite")]),t._v(" to specify a subdenomination of VITE, where VITE numbers without a postfix are assumed to be "),e("code",[t._v("attov")]),t._v(".")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"MSB2aXRlID0gMWUxOCBhdHRvdgo="}}),t._v(" "),e("h2",{attrs:{id:"magic-variables-and-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#magic-variables-and-functions"}},[t._v("#")]),t._v(" Magic Variables and Functions")]),t._v(" "),e("h3",{attrs:{id:"block-and-transaction-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-and-transaction-properties"}},[t._v("#")]),t._v(" Block and Transaction Properties")]),t._v(" "),e("p",[t._v("Below magic variables and functions has been removed from Solidity:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"dHguZ2FzcHJpY2U7CmJsb2NrLmNvaW5iYXNlOwpibG9jay5kaWZmaWN1bHR5OwpibG9jay5nYXNsaW1pdDsKYmxvY2toYXNoKHBhcmFtKTsKZ2FzbGVmdCgpOwptc2cuZ2FzOwpzZWxmZGVzdHJ1Y3QoX293bmVyKTsKc3VpY2lkZShfYWRkcik7Cg=="}}),t._v(" "),e("p",[t._v("Below magic variables and functions has been added in Solidity++:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Ynl0ZXMzMiBiMSA9IGZyb21oYXNoKCk7CnVpbnQgaGVpZ2h0ID0gYWNjb3VudGhlaWdodCgpOwpieXRlczMyIGIyID0gcHJldmhhc2goKTsKdWludDY0IHJhbmRvbSA9IHJhbmRvbTY0KCk7CnVpbnQ2NCByYW5kb20gPSBuZXh0cmFuZG9tKCk7Cg=="}}),t._v(" "),e("ul",[e("li",[e("code",[t._v("fromhash()")]),t._v(" returns request transaction's hash")]),t._v(" "),e("li",[e("code",[t._v("accountheight()")]),t._v(" returns latest block height of an account")]),t._v(" "),e("li",[e("code",[t._v("prevhash()")]),t._v(" returns latest block hash of an account")]),t._v(" "),e("li",[e("code",[t._v("random64()")]),t._v(" returns a random number in "),e("code",[t._v("uint64")]),t._v(". This function will return the same random number in one transaction")]),t._v(" "),e("li",[e("code",[t._v("nextrandom()")]),t._v(" returns a random number in "),e("code",[t._v("uint64")]),t._v(". This function can be called multiple times to obtain different random numbers in one transaction")])]),t._v(" "),e("p",[t._v("Get transfer value (ether only) in Solidity:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"dWludCBhbW91bnQgPSBtc2cudmFsdWUK"}}),t._v(" "),e("p",[t._v("Get transfer value and token id in Solidity++:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"dWludCBhbW91bnQgPSBtc2cudmFsdWU7CnZpdGV0b2tlbiB0b2tlbiA9IG1zZy50b2tlbjsK"}}),t._v(" "),e("h3",{attrs:{id:"members-of-address-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#members-of-address-types"}},[t._v("#")]),t._v(" Members of Address Types")]),t._v(" "),e("p",[t._v("Get account balance in Solidity:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"YWRkcmVzcy5iYWxhbmNlCg=="}}),t._v(" "),e("p",[t._v("Get account balance in Solidity++, balance is a function with a single parameter of "),e("code",[t._v("vitetoken")]),t._v(":")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"YWRkcmVzcy5iYWxhbmNlKCZxdW90O3R0aV81NjQ5NTQ0NTU4MjA0MzRmNDk0ZTY5YjUmcXVvdDspOwo="}}),t._v(" "),e("p",[t._v("In Solidity, send ETH to an address:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"cGF5YWJsZShfYWRkcikudHJhbnNmZXIoX2Ftb3VudCk7Cg=="}}),t._v(" "),e("p",[t._v("In Solidity++, send some amount of a specific token to an address:")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"cGF5YWJsZShfYWRkcikudHJhbnNmZXIoX3Rva2VuSWQsIF9hbW91bnQpOwo="}}),t._v(" "),e("h3",{attrs:{id:"cryptographic-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cryptographic-functions"}},[t._v("#")]),t._v(" Cryptographic Functions")]),t._v(" "),e("p",[t._v("A hash function of "),e("code",[t._v("blake2b")]),t._v(" is introduced in Solidity++.")]),t._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"Ymxha2UyYihieXRlcyBtZW1vcnkpIHJldHVybnMgKGJ5dGVzMzIpCg=="}}),t._v(" "),e("ul",[e("li",[t._v("Compute the Blake2b hash of the input.")])])],1)}),[],!1,null,null,null);a.default=i.exports}}]);