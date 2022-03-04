(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{802:function(c,Z,d){"use strict";d.r(Z);var l=d(1),t=Object(l.a)({},(function(){var c=this,Z=c.$createElement,d=c._self._c||Z;return d("ContentSlotsDistributor",{attrs:{"slot-key":c.$parent.slotKey}},[d("h1",{attrs:{id:"utility-api"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#utility-api"}},[c._v("#")]),c._v(" Utility API")]),c._v(" "),d("h2",{attrs:{id:"determine-block-type"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#determine-block-type"}},[c._v("#")]),c._v(" Determine Block Type")]),c._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"java",base64:"Ly8gZGV0ZXJtaW5lIGJsb2NrIHR5cGUgYmFzZWQgb24gJ2Jsb2NrVHlwZScgZmllbGQKQm9vbGVhbiBpc1NlbmRCbG9jayA9IEJsb2NrVXRpbHMuaXNTZW5kQmxvY2soRUJsb2NrVHlwZS5TRU5EX0NBTEwuZ2V0VmFsdWUoKSk7CkJvb2xlYW4gaXNSZWNlaXZlQmxvY2sgPSBCbG9ja1V0aWxzLmlzUmVjZWl2ZUJsb2NrKEVCbG9ja1R5cGUuUkVDRUlWRS5nZXRWYWx1ZSgpKTsKLy8gZGV0ZXJtaW5lIGJsb2NrIHR5cGUgZGlyZWN0bHkKQWNjb3VudEJsb2NrIGFjY291bnRCbG9jayA9IC4uLjsKQm9vbGVhbiBpc1NlbmRCbG9jayA9IGFjY291bnRCbG9jay5pc1NlbmRCbG9jaygpOwpCb29sZWFuIGlzUmVjZWl2ZUJsb2NrID0gYWNjb3VudEJsb2NrLmlzUmVjZWl2ZUJsb2NrKCk7Cg=="}}),c._v(" "),d("h2",{attrs:{id:"check-contract-execution-result"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#check-contract-execution-result"}},[c._v("#")]),c._v(" Check Contract Execution Result")]),c._v(" "),d("p",[c._v("The method consists of the following steps:")]),c._v(" "),d("ol",[d("li",[c._v("Look up for the account block that "),d("code",[c._v("sendBlockHash")]),c._v(" refers to. If it doesn't exist, return "),d("code",[c._v("false")]),c._v(";")]),c._v(" "),d("li",[c._v("Verify if the request transaction contained in send block is valid contract call transaction ("),d("code",[c._v("toAddress")]),c._v(" is contract address and block type is "),d("code",[c._v("SEND_CALL")]),c._v(" or "),d("code",[c._v("SEND_CREATE")]),c._v("). Return "),d("code",[c._v("false")]),c._v(" if no;")]),c._v(" "),d("li",[c._v("Check if the request has been accepted by smart contract (valid "),d("code",[c._v("receiveBlockHash")]),c._v(" is contained in send block). If no, loop for up to 10 times retry by default until correct "),d("code",[c._v("receiveBlockHash")]),c._v(" is set. If maximum retry is reached and "),d("code",[c._v("receiveBlockHash")]),c._v(" is still not set, return "),d("code",[c._v("false")]),c._v(";")])]),c._v(" "),d("div",{staticClass:"custom-block tip"},[d("p",{staticClass:"custom-block-title"},[c._v("Tips")]),c._v(" "),d("p",[c._v("The possible reason could be contract is short of quota, or "),d("code",[c._v("ResponseLatency")]),c._v("/"),d("code",[c._v("randomDegree")]),c._v(" for the contract is too high so that in-coming request can only be accepted after certain waiting number is reached.")])]),c._v(" "),d("ol",{attrs:{start:"4"}},[d("li",[c._v("Confirm the smart contract is executed as expected (value of the 33th byte of data field of response transaction should be "),d("code",[c._v("0")]),c._v("; any non-zero value indicates execution failure). If the value is not zero, return "),d("code",[c._v("false")]),c._v(";")]),c._v(" "),d("li",[c._v("Confirm all in-contract request transactions (RS blocks) are executed successfully, if any. Then return "),d("code",[c._v("true")]),c._v(".")])]),c._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"java",base64:"Vml0ZWogdml0ZWogPSBuZXcgVml0ZWoobmV3IEh0dHBTZXJ2aWNlKCkpOwpIYXNoIHNlbmRCbG9ja0hhc2ggPSBuZXcgSGFzaCgmcXVvdDs3NjgzYmJjOGJlMTM5MTE3MmVkMjFjYzFmZTA4NDNhYzNiMTMxMTEwOWFhMzI5NjAxYjczZjcxN2U2YTkzYjUzJnF1b3Q7KTsKLy8gdXNlIGRlZmF1bHQgcmV0cnkgdGltZXMgKD0xMCkKYm9vbGVhbiBzdWNjZXNzID0gUHJvdG9jb2xVdGlscy5jaGVja0NhbGxDb250cmFjdFJlc3VsdCh2aXRlaiwgc2VuZEJsb2NrSGFzaCk7Ci8vIHVzZSByZXRyeSB0aW1lcyAxNQpib29sZWFuIHN1Y2Nlc3MgPSBQcm90b2NvbFV0aWxzLmNoZWNrQ2FsbENvbnRyYWN0UmVzdWx0KHZpdGVqLCBzZW5kQmxvY2tIYXNoLCAxNSk7Cg=="}}),c._v(" "),d("h2",{attrs:{id:"abi-encoding-decoding"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#abi-encoding-decoding"}},[c._v("#")]),c._v(" ABI Encoding / Decoding")]),c._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"java",base64:"Ly8gcGFyc2UgZnJvbSBKU09OIHN0cmluZwpBYmkgYWJpID0gQWJpLmZyb21Kc29uKCZxdW90O1smcXVvdDsgKwogICAgICAgICZxdW90O3tcJnF1b3Q7dHlwZVwmcXVvdDs6XCZxdW90O2Z1bmN0aW9uXCZxdW90OyxcJnF1b3Q7bmFtZVwmcXVvdDs6XCZxdW90O3ZvdGVGb3JTQlBcJnF1b3Q7LCBcJnF1b3Q7aW5wdXRzXCZxdW90Ozpbe1wmcXVvdDtuYW1lXCZxdW90OzpcJnF1b3Q7c2JwTmFtZVwmcXVvdDssXCZxdW90O3R5cGVcJnF1b3Q7OlwmcXVvdDtzdHJpbmdcJnF1b3Q7fV19LCZxdW90OyArCiAgICAgICAgJnF1b3Q7e1wmcXVvdDt0eXBlXCZxdW90OzpcJnF1b3Q7b2ZmY2hhaW5cJnF1b3Q7LFwmcXVvdDtuYW1lXCZxdW90OzpcJnF1b3Q7Z2V0Vm90ZXNcJnF1b3Q7LCBcJnF1b3Q7aW5wdXRzXCZxdW90Ozpbe1wmcXVvdDtuYW1lXCZxdW90OzpcJnF1b3Q7dm90ZUFkZHJlc3NcJnF1b3Q7LFwmcXVvdDt0eXBlXCZxdW90OzpcJnF1b3Q7YWRkcmVzc1wmcXVvdDt9XSwgXCZxdW90O291dHB1dHNcJnF1b3Q7Olt7XCZxdW90O25hbWVcJnF1b3Q7OlwmcXVvdDtzYnBOYW1lXCZxdW90OyxcJnF1b3Q7dHlwZVwmcXVvdDs6XCZxdW90O3N0cmluZ1wmcXVvdDt9XX0sJnF1b3Q7ICsKICAgICAgICAmcXVvdDt7XCZxdW90O3R5cGVcJnF1b3Q7OlwmcXVvdDtldmVudFwmcXVvdDssXCZxdW90O25hbWVcJnF1b3Q7OlwmcXVvdDtWb3RlRm9yU0JQXCZxdW90OywgXCZxdW90O2lucHV0c1wmcXVvdDs6W3tcJnF1b3Q7bmFtZVwmcXVvdDs6XCZxdW90O3NicE5hbWVcJnF1b3Q7LFwmcXVvdDt0eXBlXCZxdW90OzpcJnF1b3Q7c3RyaW5nXCZxdW90O30se1wmcXVvdDtuYW1lXCZxdW90OzpcJnF1b3Q7dm90ZUFkZHJlc3NcJnF1b3Q7LFwmcXVvdDt0eXBlXCZxdW90OzpcJnF1b3Q7YWRkcmVzc1wmcXVvdDt9XX0mcXVvdDsgKwogICAgICAgICZxdW90O10mcXVvdDspOwovLyBzZWxlY3QgZnVuY3Rpb24gYnkgbmFtZQpBYmkuRnVuY3Rpb24gZnVuY3Rpb25CeU5hbWUgPSBhYmkuZmluZEZ1bmN0aW9uQnlOYW1lKCZxdW90O3ZvdGVGb3JTQlAmcXVvdDspOwovLyBlbmNvZGUgZnVuY3Rpb24gY2FsbCwgcGFzc2luZyBpbiBvbmUgcGFyYW1ldGVyICdWaXRlX1NCUDAxJwpieXRlW10gZW5jb2RlZEZ1bmN0aW9uRGF0YTEgPSBmdW5jdGlvbkJ5TmFtZS5lbmNvZGUoJnF1b3Q7Vml0ZV9TQlAwMSZxdW90Oyk7CmJ5dGVbXSBlbmNvZGVkRnVuY3Rpb25EYXRhMiA9IGFiaS5lbmNvZGVGdW5jdGlvbigmcXVvdDt2b3RlRm9yU0JQJnF1b3Q7LCAmcXVvdDtWaXRlX1NCUDAxJnF1b3Q7KTsKLy8gc2VsZWN0IGZ1bmN0aW9uIGJ5IGVuY29kZWQgZGF0YQpBYmkuRnVuY3Rpb24gZnVuY3Rpb25CeURhdGEgPSBhYmkuZmluZEZ1bmN0aW9uQnlEYXRhKGVuY29kZWRGdW5jdGlvbkRhdGExKTsKLy8gZGVjb2RlIGZyb20gZGF0YQpMaXN0Jmx0Oz8mZ3Q7IGRlY29kZWRGdW5jdGlvblBhcmFtcyA9IGZ1bmN0aW9uQnlEYXRhLmRlY29kZShlbmNvZGVkRnVuY3Rpb25EYXRhMSk7Ckxpc3QmbHQ7PyZndDsgZGVjb2RlZEZ1bmN0aW9uUGFyYW1zMiA9IGFiaS5kZWNvZGVGdW5jdGlvbihlbmNvZGVkRnVuY3Rpb25EYXRhMSk7CgovLyBzZWxlY3QgZ2V0dGVyIGZ1bmN0aW9uIGJ5IG5hbWUKQWJpLk9mZmNoYWluIG9mZmNoYWluQnlOYW1lID0gYWJpLmZpbmRPZmZjaGFpbkJ5TmFtZSgmcXVvdDtnZXRWb3RlcyZxdW90Oyk7Ci8vIGVuY29kZSBnZXR0ZXIgZnVuY3Rpb24gdG8gbG9vayBpbnRvIHRoZSBkYXRhIGZpZWxkIG9mIGEgc21hcnQgY29udHJhY3QKYnl0ZVtdIGVuY29kZWRPZmZjaGFpbkRhdGExID0gb2ZmY2hhaW5CeU5hbWUuZW5jb2RlKG5ldyBBZGRyZXNzKCZxdW90O3ZpdGVfMDk5NmU2NTFmMzg4NWU2ZTZiODNkZmJhOGNhYTA5NWZmN2FhMjQ4ZTRhNDI5ZGI3YmQmcXVvdDspKTsKYnl0ZVtdIGVuY29kZWRPZmZjaGFpbkRhdGEyID0gYWJpLmVuY29kZU9mZmNoYWluKCZxdW90O2dldFZvdGVzJnF1b3Q7LCBuZXcgQWRkcmVzcygmcXVvdDt2aXRlXzA5OTZlNjUxZjM4ODVlNmU2YjgzZGZiYThjYWEwOTVmZjdhYTI0OGU0YTQyOWRiN2JkJnF1b3Q7KSk7Ci8vIGRlY29kZSByZXR1cm4gdmFsdWUKTGlzdCZsdDs/Jmd0OyBkZWNvZGVkT2ZmY2hhaW5QYXJhbXMgPSBhYmkuZGVjb2RlT2ZmY2hhaW5PdXRwdXQoJnF1b3Q7Z2V0Vm90ZXMmcXVvdDssIEJ5dGVzVXRpbHMuaGV4U3RyaW5nVG9CeXRlcygmcXVvdDswMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYTU2Njk3NDY1NWY1MzQyNTAzMDMxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAmcXVvdDspKTsKCi8vIGZpbmQgZXZlbnQgYnkgbmFtZQpBYmkuRXZlbnQgZXZlbnRCeU5hbWUgPSBhYmkuZmluZEV2ZW50QnlOYW1lKCZxdW90O1ZvdGVGb3JTQlAmcXVvdDspOwovLyBmaW5kIGV2ZW50IGJ5IHRvcGljcwpMaXN0Jmx0O0hhc2gmZ3Q7IGV2ZW50VG9waWNzID0gQXJyYXlzLmFzTGlzdChuZXcgSGFzaCgmcXVvdDthZmE0Nzk5ZjJjOWUwNzk2NGU3MjJjMDJlMWM1YjZmMWE4NGFjYTU2ODU0ZTViMGViYTY5YzJhMDY3ODQzY2QxJnF1b3Q7KSk7CkFiaS5FdmVudCBldmVudEJ5VG9waWNzID0gYWJpLmZpbmRFdmVudEJ5VG9waWNzKGV2ZW50VG9waWNzKTsKLy8gZGVjb2RlIHNtYXJ0IGNvbnRyYWN0IGV2ZW50CmJ5dGVbXSBldmVudERhdGEgPSBCeXRlc1V0aWxzLmhleFN0cmluZ1RvQnl0ZXMoJnF1b3Q7MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOTk2ZTY1MWYzODg1ZTZlNmI4M2RmYmE4Y2FhMDk1ZmY3YWEyNDhlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBhNTY2OTc0NjU1ZjUzNDI1MDMwMzEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCZxdW90Oyk7Ckxpc3QmbHQ7PyZndDsgZGVjb2RlZEV2ZW50UGFyYW1zMSA9IGV2ZW50QnlUb3BpY3MuZGVjb2RlKGV2ZW50RGF0YSwgZXZlbnRUb3BpY3MpOwpMaXN0Jmx0Oz8mZ3Q7IGRlY29kZWRFdmVudFBhcmFtczIgPSBhYmkuZGVjb2RlRXZlbnQoZXZlbnREYXRhLCBldmVudFRvcGljcyk7Cg=="}})],1)}),[],!1,null,null,null);Z.default=t.exports}}]);