(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{765:function(e,t,s){"use strict";s.r(t);var r=s(1),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vep-16-specification-of-address-generation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vep-16-specification-of-address-generation"}},[e._v("#")]),e._v(" VEP-16 Specification of Address Generation")]),e._v(" "),s("p",[e._v("In the Mainnet, the account address is a 21-byte length number (hereinafter referred to "),s("strong",[e._v("Original Address")]),e._v("), where the first 20 bytes is address and the last byte represents account type.")]),e._v(" "),s("p",[e._v("The first 20 bytes (hereinafter referred to "),s("strong",[e._v("Address Body")]),e._v(") come from:")]),e._v(" "),s("ul",[s("li",[e._v("For user account, a 20-byte hash based on the public key of the account.")]),e._v(" "),s("li",[e._v("For contract account, a 20-byte hash based on the address of contract creation account, the height of contract creation block, and the hash of the previous account block of contract creation transaction.")])]),e._v(" "),s("p",[e._v("The last 1 byte (hereinafter referred to "),s("strong",[e._v("Type Flag")]),e._v(")  is:")]),e._v(" "),s("ul",[s("li",[e._v("0 for user account")]),e._v(" "),s("li",[e._v("1 for contract account")])]),e._v(" "),s("p",[e._v("In practice, a 55-length string is used as "),s("strong",[e._v("Literal Address")]),e._v(".")]),e._v(" "),s("p",[e._v("Convert original address to literal address:")]),e._v(" "),s("ul",[s("li",[e._v("For user account, use "),s("code",[e._v("vite_")]),e._v(" + Hex string of "),s("strong",[e._v("Address Body")]),e._v(" + Hex string of the checksum of "),s("strong",[e._v("Address Body")]),e._v(".")]),e._v(" "),s("li",[e._v("For contract account, use "),s("code",[e._v("vite_")]),e._v(" + Hex string of "),s("strong",[e._v("Address Body")]),e._v(" + Hex string of the flipped checksum of "),s("strong",[e._v("Address Body")]),e._v(" by bit.")])]),e._v(" "),s("p",[e._v("Convert literal address to original address:")]),e._v(" "),s("p",[e._v("Take characters between 6-45 of "),s("strong",[e._v("Literal Address")]),e._v(" as the 20-byte "),s("strong",[e._v("Address Body")]),e._v(" and check:")]),e._v(" "),s("ul",[s("li",[e._v("If the hex string of checksum of "),s("strong",[e._v("Address Body")]),e._v(" matches the characters from 46 to 55 in "),s("strong",[e._v("Literal Address")]),e._v(", set 0 to "),s("strong",[e._v("Type Flag")]),e._v(" as the address is a user address.")]),e._v(" "),s("li",[e._v("If the hex string of flipped checksum of "),s("strong",[e._v("Address Body")]),e._v(" is the same as the 46th to 55th chars of "),s("strong",[e._v("Literal Address")]),e._v(", set 1 to "),s("strong",[e._v("Type Flag")]),e._v(" as the address is a contract address.")])]),e._v(" "),s("p",[e._v("The checksum is calculated by taking a 5-byte hash on the basis of "),s("strong",[e._v("Address Body")]),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);