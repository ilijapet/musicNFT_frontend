"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[858],{59858:(e,a,t)=>{t.d(a,{offchainLookup:()=>g,offchainLookupSignature:()=>y});var r=t(80215),s=t(63476),n=t(80458),o=t(96781);class c extends n.G{constructor(e){var a;let{callbackSelector:t,cause:r,data:s,extraData:n,sender:c,urls:l}=e;super(r.shortMessage||"An error occurred while fetching for an offchain result.",{cause:r,metaMessages:[...r.metaMessages||[],null!==(a=r.metaMessages)&&void 0!==a&&a.length?"":[],"Offchain Gateway Call:",l&&["  Gateway URL(s):",...l.map((e=>"    ".concat((0,o.Gr)(e))))],"  Sender: ".concat(c),"  Data: ".concat(s),"  Callback selector: ".concat(t),"  Extra data: ".concat(n)].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class l extends n.G{constructor(e){let{result:a,url:t}=e;super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:["Gateway URL: ".concat((0,o.Gr)(t)),"Response: ".concat((0,s.P)(a))]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class d extends n.G{constructor(e){let{sender:a,to:t}=e;super("Reverted sender address does not match target contract address (`to`).",{metaMessages:["Contract address: ".concat(t),"OffchainLookup sender address: ".concat(a)]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var u=t(79144),i=t(22947),f=t(72883),h=t(25543),b=t(32342);var p=t(30221),w=t(11071);const y="0x556f1830",m={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function g(e,a){let{blockNumber:t,blockTag:n,data:o,to:y}=a;const{args:g}=(0,i.p)({data:o,abi:[m]}),[k,v,O,x,G]=g;try{if(!function(e,a){if(!(0,b.U)(e))throw new h.b({address:e});if(!(0,b.U)(a))throw new h.b({address:a});return e.toLowerCase()===a.toLowerCase()}(y,k))throw new d({sender:k,to:y});const a=await async function(e){let{data:a,sender:t,urls:r}=e,n=new Error("An unknown error occurred.");for(let i=0;i<r.length;i++){const e=r[i],f=e.includes("{data}")?"GET":"POST",h="POST"===f?{data:a,sender:t}:void 0;try{var o;const r=await fetch(e.replace("{sender}",t).replace("{data}",a),{body:JSON.stringify(h),method:f});let d;if(d=null!==(o=r.headers.get("Content-Type"))&&void 0!==o&&o.startsWith("application/json")?(await r.json()).data:await r.text(),!r.ok){var c;n=new u.Gg({body:h,details:null!==(c=d)&&void 0!==c&&c.error?(0,s.P)(d.error):r.statusText,headers:r.headers,status:r.status,url:e});continue}if(!(0,w.v)(d)){n=new l({result:d,url:e});continue}return d}catch(d){n=new u.Gg({body:h,details:d.message,url:e})}}throw n}({data:O,sender:k,urls:v}),{data:o}=await(0,r.R)(e,{blockNumber:t,blockTag:n,data:(0,p.zo)([x,(0,f.E)([{type:"bytes"},{type:"bytes"}],[a,G])]),to:y});return o}catch(L){throw new c({callbackSelector:x,cause:L,data:o,extraData:G,sender:k,urls:v})}}}}]);
//# sourceMappingURL=858.e080af6f.chunk.js.map