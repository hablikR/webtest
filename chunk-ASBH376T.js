import{d as ne,g as re,n as te}from"./chunk-RYBYQTDL.js";import{F as q,I as K,Ma as B,S as j,Za as ee,ea as Y,g as G,ia as E,ka as A,na as p,p as W,pa as g,q as U,qa as f,va as Q,w as N,ya as Z,za as H}from"./chunk-HUW5QELF.js";var O=class{},k=class{},v=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(r=>{let t=r.indexOf(":");if(t>0){let s=r.slice(0,t),i=r.slice(t+1).trim();this.addHeaderEntry(s,i)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((r,t)=>{this.addHeaderEntry(t,r)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([r,t])=>{this.setHeaderEntries(r,t)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let r=this.headers.get(n.toLowerCase());return r&&r.length>0?r[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,r){return this.clone({name:n,value:r,op:"a"})}set(n,r){return this.clone({name:n,value:r,op:"s"})}delete(n,r){return this.clone({name:n,value:r,op:"d"})}maybeSetNormalizedName(n,r){this.normalizedNames.has(r)||this.normalizedNames.set(r,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(r=>{this.headers.set(r,n.headers.get(r)),this.normalizedNames.set(r,n.normalizedNames.get(r))})}clone(n){let r=new e;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([n]),r}applyUpdate(n){let r=n.name.toLowerCase();switch(n.op){case"a":case"s":let t=n.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(n.name,r);let s=(n.op==="a"?this.headers.get(r):void 0)||[];s.push(...t),this.headers.set(r,s);break;case"d":let i=n.value;if(!i)this.headers.delete(r),this.normalizedNames.delete(r);else{let o=this.headers.get(r);if(!o)return;o=o.filter(d=>i.indexOf(d)===-1),o.length===0?(this.headers.delete(r),this.normalizedNames.delete(r)):this.headers.set(r,o)}break}}addHeaderEntry(n,r){let t=n.toLowerCase();this.maybeSetNormalizedName(n,t),this.headers.has(t)?this.headers.get(t).push(r):this.headers.set(t,[r])}setHeaderEntries(n,r){let t=(Array.isArray(r)?r:[r]).map(i=>i.toString()),s=n.toLowerCase();this.headers.set(s,t),this.maybeSetNormalizedName(n,s)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(r=>n(this.normalizedNames.get(r),this.headers.get(r)))}};var z=class{encodeKey(n){return se(n)}encodeValue(n){return se(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function Re(e,n){let r=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(s=>{let i=s.indexOf("="),[o,d]=i==-1?[n.decodeKey(s),""]:[n.decodeKey(s.slice(0,i)),n.decodeValue(s.slice(i+1))],a=r.get(o)||[];a.push(d),r.set(o,a)}),r}var be=/%(\d[a-f0-9])/gi,Pe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function se(e){return encodeURIComponent(e).replace(be,(n,r)=>Pe[r]??n)}function D(e){return`${e}`}var T=class e{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new z,n.fromString){if(n.fromObject)throw new E(2805,!1);this.map=Re(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(r=>{let t=n.fromObject[r],s=Array.isArray(t)?t.map(D):[D(t)];this.map.set(r,s)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let r=this.map.get(n);return r?r[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,r){return this.clone({param:n,value:r,op:"a"})}appendAll(n){let r=[];return Object.keys(n).forEach(t=>{let s=n[t];Array.isArray(s)?s.forEach(i=>{r.push({param:t,value:i,op:"a"})}):r.push({param:t,value:s,op:"a"})}),this.clone(r)}set(n,r){return this.clone({param:n,value:r,op:"s"})}delete(n,r){return this.clone({param:n,value:r,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let r=this.encoder.encodeKey(n);return this.map.get(n).map(t=>r+"="+this.encoder.encodeValue(t)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let r=new e({encoder:this.encoder});return r.cloneFrom=this.cloneFrom||this,r.updates=(this.updates||[]).concat(n),r}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let r=(n.op==="a"?this.map.get(n.param):void 0)||[];r.push(D(n.value)),this.map.set(n.param,r);break;case"d":if(n.value!==void 0){let t=this.map.get(n.param)||[],s=t.indexOf(D(n.value));s!==-1&&t.splice(s,1),t.length>0?this.map.set(n.param,t):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var C=class{map=new Map;set(n,r){return this.map.set(n,r),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function Ne(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function oe(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function ie(e){return typeof Blob<"u"&&e instanceof Blob}function ae(e){return typeof FormData<"u"&&e instanceof FormData}function Ae(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var ce="Content-Type",le="Accept",fe="X-Request-URL",pe="text/plain",ye="application/json",Me=`${ye}, ${pe}, */*`,M=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(n,r,t,s){this.url=r,this.method=n.toUpperCase();let i;if(Ne(this.method)||s?(this.body=t!==void 0?t:null,i=s):i=t,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new v,this.context??=new C,!this.params)this.params=new T,this.urlWithParams=r;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=r;else{let d=r.indexOf("?"),a=d===-1?"?":d<r.length-1?"&":"";this.urlWithParams=r+a+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||oe(this.body)||ie(this.body)||ae(this.body)||Ae(this.body)?this.body:this.body instanceof T?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ae(this.body)?null:ie(this.body)?this.body.type||null:oe(this.body)?null:typeof this.body=="string"?pe:this.body instanceof T?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?ye:null}clone(n={}){let r=n.method||this.method,t=n.url||this.url,s=n.responseType||this.responseType,i=n.transferCache??this.transferCache,o=n.body!==void 0?n.body:this.body,d=n.withCredentials??this.withCredentials,a=n.reportProgress??this.reportProgress,u=n.headers||this.headers,w=n.params||this.params,y=n.context??this.context;return n.setHeaders!==void 0&&(u=Object.keys(n.setHeaders).reduce((R,m)=>R.set(m,n.setHeaders[m]),u)),n.setParams&&(w=Object.keys(n.setParams).reduce((R,m)=>R.set(m,n.setParams[m]),w)),new e(r,t,o,{params:w,headers:u,context:y,reportProgress:a,responseType:s,withCredentials:d,transferCache:i})}},P=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(P||{}),I=class{headers;status;statusText;url;ok;type;constructor(n,r=200,t="OK"){this.headers=n.headers||new v,this.status=n.status!==void 0?n.status:r,this.statusText=n.statusText||t,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}},X=class e extends I{constructor(n={}){super(n)}type=P.ResponseHeader;clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},x=class e extends I{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=P.Response;clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},_=class extends I{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},Oe=200,Ie=204,De=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(De||{});function S(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var ke=(()=>{class e{handler;constructor(r){this.handler=r}request(r,t,s={}){let i;if(r instanceof M)i=r;else{let a;s.headers instanceof v?a=s.headers:a=new v(s.headers);let u;s.params&&(s.params instanceof T?u=s.params:u=new T({fromObject:s.params})),i=new M(r,t,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:u,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let o=U(i).pipe(K(a=>this.handler.handle(a)));if(r instanceof M||s.observe==="events")return o;let d=o.pipe(q(a=>a instanceof x));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return d.pipe(N(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new E(2806,!1);return a.body}));case"blob":return d.pipe(N(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new E(2807,!1);return a.body}));case"text":return d.pipe(N(a=>{if(a.body!==null&&typeof a.body!="string")throw new E(2808,!1);return a.body}));case"json":default:return d.pipe(N(a=>a.body))}case"response":return d;default:throw new E(2809,!1)}}delete(r,t={}){return this.request("DELETE",r,t)}get(r,t={}){return this.request("GET",r,t)}head(r,t={}){return this.request("HEAD",r,t)}jsonp(r,t){return this.request("JSONP",r,{params:new T().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(r,t={}){return this.request("OPTIONS",r,t)}patch(r,t,s={}){return this.request("PATCH",r,S(s,t))}post(r,t,s={}){return this.request("POST",r,S(s,t))}put(r,t,s={}){return this.request("PUT",r,S(s,t))}static \u0275fac=function(t){return new(t||e)(g(O))};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var xe=new p("");function me(e,n){return n(e)}function _e(e,n){return(r,t)=>n.intercept(r,{handle:s=>e(s,t)})}function Fe(e,n,r){return(t,s)=>H(r,()=>n(t,i=>e(i,s)))}var Le=new p(""),J=new p(""),Ue=new p(""),ge=new p("",{providedIn:"root",factory:()=>!0});function je(){let e=null;return(n,r)=>{e===null&&(e=(f(Le,{optional:!0})??[]).reduceRight(_e,me));let t=f(B);if(f(ge)){let i=t.add();return e(n,r).pipe(j(()=>t.remove(i)))}else return e(n,r)}}var de=(()=>{class e extends O{backend;injector;chain=null;pendingTasks=f(B);contributeToStability=f(ge);constructor(r,t){super(),this.backend=r,this.injector=t}handle(r){if(this.chain===null){let t=Array.from(new Set([...this.injector.get(J),...this.injector.get(Ue,[])]));this.chain=t.reduceRight((s,i)=>Fe(s,i,this.injector),me)}if(this.contributeToStability){let t=this.pendingTasks.add();return this.chain(r,s=>this.backend.handle(s)).pipe(j(()=>this.pendingTasks.remove(t)))}else return this.chain(r,t=>this.backend.handle(t))}static \u0275fac=function(t){return new(t||e)(g(k),g(Z))};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();var Be=/^\)\]\}',?\n/,Se=RegExp(`^${fe}:`,"m");function ze(e){return"responseURL"in e&&e.responseURL?e.responseURL:Se.test(e.getAllResponseHeaders())?e.getResponseHeader(fe):null}var he=(()=>{class e{xhrFactory;constructor(r){this.xhrFactory=r}handle(r){if(r.method==="JSONP")throw new E(-2800,!1);let t=this.xhrFactory;return(t.\u0275loadImpl?W(t.\u0275loadImpl()):U(null)).pipe(Y(()=>new G(i=>{let o=t.build();if(o.open(r.method,r.urlWithParams),r.withCredentials&&(o.withCredentials=!0),r.headers.forEach((c,l)=>o.setRequestHeader(c,l.join(","))),r.headers.has(le)||o.setRequestHeader(le,Me),!r.headers.has(ce)){let c=r.detectContentTypeHeader();c!==null&&o.setRequestHeader(ce,c)}if(r.responseType){let c=r.responseType.toLowerCase();o.responseType=c!=="json"?c:"text"}let d=r.serializeBody(),a=null,u=()=>{if(a!==null)return a;let c=o.statusText||"OK",l=new v(o.getAllResponseHeaders()),b=ze(o)||r.url;return a=new X({headers:l,status:o.status,statusText:c,url:b}),a},w=()=>{let{headers:c,status:l,statusText:b,url:$}=u(),h=null;l!==Ie&&(h=typeof o.response>"u"?o.responseText:o.response),l===0&&(l=h?Oe:0);let L=l>=200&&l<300;if(r.responseType==="json"&&typeof h=="string"){let ve=h;h=h.replace(Be,"");try{h=h!==""?JSON.parse(h):null}catch(we){h=ve,L&&(L=!1,h={error:we,text:h})}}L?(i.next(new x({body:h,headers:c,status:l,statusText:b,url:$||void 0})),i.complete()):i.error(new _({error:h,headers:c,status:l,statusText:b,url:$||void 0}))},y=c=>{let{url:l}=u(),b=new _({error:c,status:o.status||0,statusText:o.statusText||"Unknown Error",url:l||void 0});i.error(b)},R=!1,m=c=>{R||(i.next(u()),R=!0);let l={type:P.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),r.responseType==="text"&&o.responseText&&(l.partialText=o.responseText),i.next(l)},V=c=>{let l={type:P.UploadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),i.next(l)};return o.addEventListener("load",w),o.addEventListener("error",y),o.addEventListener("timeout",y),o.addEventListener("abort",y),r.reportProgress&&(o.addEventListener("progress",m),d!==null&&o.upload&&o.upload.addEventListener("progress",V)),o.send(d),i.next({type:P.Sent}),()=>{o.removeEventListener("error",y),o.removeEventListener("abort",y),o.removeEventListener("load",w),o.removeEventListener("timeout",y),r.reportProgress&&(o.removeEventListener("progress",m),d!==null&&o.upload&&o.upload.removeEventListener("progress",V)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(t){return new(t||e)(g(te))};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})(),Te=new p(""),Ce="XSRF-TOKEN",Xe=new p("",{providedIn:"root",factory:()=>Ce}),Je="X-XSRF-TOKEN",Ve=new p("",{providedIn:"root",factory:()=>Je}),F=class{},$e=(()=>{class e{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(r,t,s){this.doc=r,this.platform=t,this.cookieName=s}getToken(){if(this.platform==="server")return null;let r=this.doc.cookie||"";return r!==this.lastCookieString&&(this.parseCount++,this.lastToken=re(r,this.cookieName),this.lastCookieString=r),this.lastToken}static \u0275fac=function(t){return new(t||e)(g(ne),g(ee),g(Xe))};static \u0275prov=A({token:e,factory:e.\u0275fac})}return e})();function Ge(e,n){let r=e.url.toLowerCase();if(!f(Te)||e.method==="GET"||e.method==="HEAD"||r.startsWith("http://")||r.startsWith("https://"))return n(e);let t=f(F).getToken(),s=f(Ve);return t!=null&&!e.headers.has(s)&&(e=e.clone({headers:e.headers.set(s,t)})),n(e)}var Ee=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(Ee||{});function We(e,n){return{\u0275kind:e,\u0275providers:n}}function vn(...e){let n=[ke,he,de,{provide:O,useExisting:de},{provide:k,useFactory:()=>f(xe,{optional:!0})??f(he)},{provide:J,useValue:Ge,multi:!0},{provide:Te,useValue:!0},{provide:F,useClass:$e}];for(let r of e)n.push(...r.\u0275providers);return Q(n)}var ue=new p("");function wn(){return We(Ee.LegacyInterceptors,[{provide:ue,useFactory:je},{provide:J,useExisting:ue,multi:!0}])}export{_ as a,De as b,ke as c,Le as d,vn as e,wn as f};
