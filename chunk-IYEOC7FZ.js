import{a as j,b as G,c as W,d as Z,e as J,f as K,g as Q}from"./chunk-5IEPR3S6.js";import{A as m,C as V,D as U,F as w,G as k,H as z,J as D,z as q}from"./chunk-I5FNOHLO.js";import{a as L}from"./chunk-O2TX7JXO.js";import"./chunk-ZSSD5RUB.js";import"./chunk-2VGXQN2N.js";import{c as O}from"./chunk-OK4I3DW5.js";import{Gb as g,Hb as c,Ib as x,Jb as I,Lb as a,Mb as l,Na as C,Pa as o,Za as H,_ as R,d as h,da as P,db as v,ea as A,la as S,lb as s,ma as T,pb as f,qb as d,r as b,rb as n,sb as u,tb as N,vb as y,wb as E,zb as B}from"./chunk-IX7ID3YI.js";var F=class{isErrorState(i,r){let p=r&&r.submitted;return!!(i&&i.invalid&&(i.dirty||i.touched||p))}};var M=class t{constructor(i,r){this.http=i;this.apiService=r}createUser(i,r){return h(this,null,function*(){console.log("createUser post request send");let p=yield b(this.http.post(this.apiService.getApiUrl()+"/user",{email:i,password:r}));return console.log(p),p})}static \u0275fac=function(r){return new(r||t)(P(L),P(Q))};static \u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"})};function tt(t,i){t&1&&(d(0,"mat-error"),c(1),a(2,"translate"),n()),t&2&&(o(),x(l(2,1,"login.registration.email.invalid")))}function et(t,i){t&1&&(u(0,"mat-error",6),a(1,"translate")),t&2&&s("innerHTML",l(1,1,"login.registration.email.error"),C)}function it(t,i){t&1&&(d(0,"mat-error",8),c(1),a(2,"translate"),n()),t&2&&(o(),x(l(2,1,"login.registration.password.invalid")))}function rt(t,i){t&1&&(u(0,"mat-error",6),a(1,"translate")),t&2&&s("innerHTML",l(1,1,"login.registration.password.empty"),C)}function ot(t,i){t&1&&(d(0,"mat-error"),c(1),a(2,"translate"),n()),t&2&&(o(),x(l(2,1,"login.registration.rePassword.invalid")))}function nt(t,i){t&1&&(u(0,"mat-error",6),a(1,"translate")),t&2&&s("innerHTML",l(1,1,"login.registration.rePassword.empty"),C)}function at(t,i){if(t&1){let r=N();d(0,"form",3)(1,"mat-form-field",4)(2,"mat-label"),c(3,"Email"),n(),u(4,"input",5,0),a(6,"translate"),u(7,"mat-hint",6),a(8,"translate"),v(9,tt,3,3,"mat-error")(10,et,2,3,"mat-error",6),n(),d(11,"mat-form-field",4)(12,"mat-label"),c(13,"Password"),n(),d(14,"input",7,1),y("blur",function(){S(r);let _=g(15),e=E();return T(e.onBlur(_.value))}),n(),u(16,"mat-hint",6),a(17,"translate"),v(18,it,3,3,"mat-error",8)(19,rt,2,3,"mat-error",6),n(),d(20,"mat-form-field",4)(21,"mat-label"),c(22,"Repeat password"),n(),u(23,"input",9,2)(25,"mat-hint",6),a(26,"translate"),v(27,ot,3,3,"mat-error")(28,nt,2,3,"mat-error",6),n(),d(29,"button",10),y("click",function(){S(r);let _=g(5),e=g(15),Y=E();return T(Y.onClick(_.value,e.value))}),c(30),a(31,"translate"),n()()}if(t&2){let r=g(5),p=g(15),_=g(24),e=E();o(4),B("placeholder",l(6,18,"login.registration.email.example")),s("formControl",e.emailFormControl)("errorStateMatcher",e.matcher),o(3),s("innerHTML",l(8,20,"login.registration.email.hint"),C),o(2),f(e.emailFormControl.hasError("email")&&!e.emailFormControl.hasError("required")?9:-1),o(),f(e.emailFormControl.hasError("required")?10:-1),o(4),s("formControl",e.passwordFormControl)("errorStateMatcher",e.matcher),o(2),s("innerHTML",l(17,22,"login.registration.password.hint"),C),o(2),f(e.passwordFormControl.hasError("minLength")||e.passwordFormControl.hasError("pattern")&&!e.passwordFormControl.hasError("required")?18:-1),o(),f(e.passwordFormControl.hasError("required")?19:-1),o(4),s("formControl",e.repeatPasswordFormControl)("errorStateMatcher",e.matcher),o(2),s("innerHTML",l(26,24,"login.registration.rePassword.hint"),C),o(2),f(e.repeatPasswordFormControl.hasError("pattern")&&!e.repeatPasswordFormControl.hasError("required")?27:-1),o(),f(e.repeatPasswordFormControl.hasError("required")?28:-1),o(),s("disabled",r.value===""||p.value===""||_.value===""||e.passwordFormControl.invalid||e.emailFormControl.invalid||e.repeatPasswordFormControl.invalid),o(),I("",l(31,26,"login.registration.button")," ")}}function lt(t,i){t&1&&(d(0,"div"),c(1,"Waiting..."),n())}var X=class t{registrationService=A(M);PATTERN_LOWERCASE=/[a-z]/;PATTERN_UPPERCASE=/[A-Z]/;PATTERN_NUMBER=/[0-9]/;emailFormControl=new w("",[m.required,m.email]);passwordFormControl=new w("",[m.required,m.minLength(8),m.pattern(this.PATTERN_LOWERCASE),m.pattern(this.PATTERN_UPPERCASE),m.pattern(this.PATTERN_NUMBER)]);repeatPasswordFormControl=new w("",[m.required]);matcher=new F;submitted=!1;onBlur(i){this.repeatPasswordFormControl=new w("",[m.required,m.pattern(i)])}onClick(i,r){return h(this,null,function*(){this.submitted=!0,yield this.registrationService.createUser(i,btoa(r))})}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=H({type:t,selectors:[["app-registration"]],decls:2,vars:1,consts:[["email",""],["password",""],["repeatPassword",""],[1,"registration-form"],[1,"reg-field"],["type","email","matInput","",3,"formControl","errorStateMatcher","placeholder"],[3,"innerHTML"],["type","password","matInput","",3,"blur","formControl","errorStateMatcher"],[1,"pass-error"],["type","password","matInput","",3,"formControl","errorStateMatcher"],["type","button","mat-flat-button","",1,"submit-button",3,"click","disabled"]],template:function(r,p){r&1&&v(0,at,32,28,"form",3)(1,lt,2,0,"div"),r&2&&f(p.submitted?1:0)},dependencies:[K,D,k,q,V,U,z,G,J,Z,W,O,j],styles:[".registration-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.registration-form[_ngcontent-%COMP%]   .reg-field[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.registration-form[_ngcontent-%COMP%]   .pass-error[_ngcontent-%COMP%]{line-break:auto}.registration-form[_ngcontent-%COMP%]   .form-full-width[_ngcontent-%COMP%]{width:100%}.registration-form[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{margin-top:16px}"]})};export{X as RegistrationComponent};
