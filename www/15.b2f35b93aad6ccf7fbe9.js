(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"cPe+":function(e,t,n){"use strict";n.r(t),n.d(t,"NewWorkoutPageModule",function(){return m});var o=n("ofXK"),i=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),c=n("R0Ic"),b=n("fXoL"),a=n("e8h1");function l(e,t){if(1&e&&(b.Kb(0,"div",27),b.ec(1),b.Jb()),2&e){const e=t.$implicit;b.Xb("@scaleIn",void 0),b.xb(1),b.hc(" ",e.reps," reps | ",e.weight," Kg ")}}function h(e,t){if(1&e&&(b.Kb(0,"h1"),b.ec(1),b.Jb()),2&e){const e=t.$implicit;b.xb(1),b.hc(" ",e.reps," reps | ",e.weight," Kg ")}}function u(e,t){if(1&e&&(b.Kb(0,"ion-card",28),b.Kb(1,"ion-card-header"),b.Kb(2,"ion-card-subtitle"),b.ec(3,"Exercise: "),b.Jb(),b.Kb(4,"ion-card-title"),b.ec(5),b.Jb(),b.Jb(),b.Kb(6,"ion-card-content"),b.dc(7,h,2,2,"h1",29),b.Jb(),b.Jb()),2&e){const e=t.$implicit;b.Xb("@scaleIn",void 0),b.xb(5),b.fc(e.name),b.xb(2),b.Xb("ngForOf",e.sets)}}function g(e,t){if(1&e){const e=b.Lb();b.Kb(0,"ion-button",30),b.Sb("click",function(){return b.ac(e),b.Ub().createWorkout()}),b.ec(1," Create workout "),b.Jb()}2&e&&b.Xb("@scaleIn",void 0)}const d=[{path:"",component:(()=>{class e{constructor(e,t,n){this.storage=e,this.route=t,this.router=n,this.workoutName="",this.name="",this.sets=[],this.setCounter=1,this.reps=null,this.weight=null,this.rest=null,this.increments=2.5,this.exercises=[],this.counter=1}addExercise(){this.counter++,this.name&&this.sets&&(this.exercises.push({id:this.counter,name:this.name,sets:this.sets,increments:this.increments}),this.name="",this.reps=null,this.weight=null,this.rest=null,this.sets=[],this.increments=2.5)}addSet(){this.reps&&this.weight&&(this.sets.push({id:this.setCounter,reps:this.reps,weight:this.weight,rest:this.rest,finished:!1}),this.setCounter++,this.reps=null,this.weight=null,this.rest=null)}createWorkout(){let e=0;this.storage.get("workouts").then(t=>{e+=t.length}).then(()=>{this.storage.get("favorites").then(t=>{e+=t.length})}).then(()=>{this.storage.get("archived").then(t=>{e+=t.length})}).then(()=>{this.storage.get("trash").then(t=>{e+=t.length+1;let n={id:e,name:this.workoutName,created_at:Date().split(" ",4).join().replace(/,/g," "),status:"unliked",exercises:this.exercises};this.queryWorkout(n)})})}queryWorkout(e){this.storage.get("workouts").then(t=>{if(t){let n=t;n.push(e),this.storage.set("workouts",n).then(()=>{this.router.navigate(["workouts"])})}else this.storage.set("workouts",[e]).then(()=>{this.router.navigate(["workouts"])})})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(b.Hb(a.b),b.Hb(r.a),b.Hb(r.g))},e.\u0275cmp=b.Bb({type:e,selectors:[["app-new-workout"]],decls:49,vars:11,consts:[[3,"translucent"],["slot","start"],["collapse","condense"],["size","large"],["placeholder","Name of workout",3,"ngModel","ngModelChange"],["placeholder","Name of exercise",3,"ngModel","ngModelChange"],[1,"addSet"],[1,"wrapper"],["placeholder","Reps",3,"ngModel","ngModelChange"],["placeholder","Starting weight",3,"ngModel","ngModelChange"],["placeholder","Set rest time",3,"ngModel","ngModelChange"],["size","large",3,"click"],[1,"sets"],["class","set",4,"ngFor","ngForOf"],["placeholder","Increments per workout",3,"ngModel","ngModelChange"],["value","0"],["value","1"],["value","2"],["value","2.5"],["value","3"],["value","5"],["value","10"],["horizontal","end",3,"click"],["color","danger"],["name","add"],["class","exercise-card",4,"ngFor","ngForOf"],["class","createWorkoutBtn","expand","block","color","danger",3,"click",4,"ngIf"],[1,"set"],[1,"exercise-card"],[4,"ngFor","ngForOf"],["expand","block","color","danger",1,"createWorkoutBtn",3,"click"]],template:function(e,t){1&e&&(b.Kb(0,"ion-header",0),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-buttons",1),b.Ib(3,"ion-menu-button"),b.Jb(),b.Kb(4,"ion-title"),b.ec(5,"New workout"),b.Jb(),b.Jb(),b.Jb(),b.Kb(6,"ion-content"),b.Kb(7,"ion-header",2),b.Kb(8,"ion-toolbar"),b.Kb(9,"ion-title",3),b.ec(10,"New workout"),b.Jb(),b.Jb(),b.Jb(),b.Kb(11,"main"),b.Kb(12,"ion-item"),b.Kb(13,"ion-input",4),b.Sb("ngModelChange",function(e){return t.workoutName=e}),b.Jb(),b.Jb(),b.Kb(14,"ion-card"),b.Kb(15,"ion-item"),b.Kb(16,"ion-input",5),b.Sb("ngModelChange",function(e){return t.name=e}),b.Jb(),b.Jb(),b.Kb(17,"ion-item",6),b.Kb(18,"div",7),b.Kb(19,"ion-input",8),b.Sb("ngModelChange",function(e){return t.reps=e}),b.Jb(),b.Kb(20,"ion-input",9),b.Sb("ngModelChange",function(e){return t.weight=e}),b.Jb(),b.Kb(21,"ion-input",10),b.Sb("ngModelChange",function(e){return t.rest=e}),b.Jb(),b.Jb(),b.Kb(22,"ion-button",11),b.Sb("click",function(){return t.addSet()}),b.ec(23,"Add"),b.Jb(),b.Jb(),b.Kb(24,"ion-item"),b.Kb(25,"div",12),b.dc(26,l,2,3,"div",13),b.Jb(),b.Jb(),b.Kb(27,"ion-item"),b.Kb(28,"ion-select",14),b.Sb("ngModelChange",function(e){return t.increments=e}),b.Kb(29,"ion-select-option",15),b.ec(30,"0"),b.Jb(),b.Kb(31,"ion-select-option",16),b.ec(32,"1"),b.Jb(),b.Kb(33,"ion-select-option",17),b.ec(34,"2"),b.Jb(),b.Kb(35,"ion-select-option",18),b.ec(36,"2.5"),b.Jb(),b.Kb(37,"ion-select-option",19),b.ec(38,"3"),b.Jb(),b.Kb(39,"ion-select-option",20),b.ec(40,"5"),b.Jb(),b.Kb(41,"ion-select-option",21),b.ec(42,"10"),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Kb(43,"ion-fab",22),b.Sb("click",function(){return t.addExercise()}),b.Kb(44,"ion-fab-button",23),b.Ib(45,"ion-icon",24),b.Jb(),b.Jb(),b.Kb(46,"ion-list"),b.dc(47,u,8,3,"ion-card",25),b.Jb(),b.dc(48,g,2,1,"ion-button",26),b.Jb(),b.Jb()),2&e&&(b.Xb("translucent",!0),b.xb(11),b.Xb("@scaleIn",void 0),b.xb(2),b.Xb("ngModel",t.workoutName),b.xb(3),b.Xb("ngModel",t.name),b.xb(3),b.Xb("ngModel",t.reps),b.xb(1),b.Xb("ngModel",t.weight),b.xb(1),b.Xb("ngModel",t.rest),b.xb(5),b.Xb("ngForOf",t.sets),b.xb(2),b.Xb("ngModel",t.increments),b.xb(19),b.Xb("ngForOf",t.exercises),b.xb(1),b.Xb("ngIf",t.exercises.length>0))},directives:[s.o,s.E,s.d,s.w,s.D,s.k,s.r,s.q,s.K,i.d,i.e,s.e,s.c,o.h,s.A,s.J,s.B,s.l,s.m,s.p,s.t,o.i,s.g,s.h,s.i,s.f],styles:["ion-fab[_ngcontent-%COMP%]{margin:0 1em}ion-list[_ngcontent-%COMP%]{min-height:10vh;background:none}.exercise-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{text-align:right;padding:.2em 1em;font-size:2em}.createWorkoutBtn[_ngcontent-%COMP%]{width:90%;margin:auto}"],data:{animation:[Object(c.i)("scaleIn",[Object(c.h)(":enter",[Object(c.g)({opacity:0,transform:"scale(0.75)"}),Object(c.e)("0.2s ease")]),Object(c.h)(":leave",[Object(c.e)("0.2s ease",Object(c.g)({opacity:0,transform:"scale(0.75)"}))])])]}}),e})()}];let p=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(t){return new(t||e)},imports:[[r.j.forChild(d)],r.j]}),e})(),m=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(t){return new(t||e)},imports:[[o.b,i.a,s.F,p]]}),e})()}}]);