(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{P7rY:function(e,t,i){"use strict";i.d(t,"a",function(){return C});var n=i("mrSG"),o=i("R0Ic"),s=i("fXoL"),r=i("TEn/"),c=i("e8h1"),a=i("ofXK"),b=i("LPYB"),l=i("3Pt+");function h(e,t){if(1&e&&(s.Kb(0,"ion-card-title"),s.ec(1),s.Jb()),2&e){const e=s.Ub(2);s.xb(1),s.gc("Rest for ",e.rest," seconds")}}function d(e,t){1&e&&(s.Kb(0,"ion-card-title"),s.ec(1,"Done resting!"),s.Jb())}function u(e,t){1&e&&(s.Kb(0,"ion-card-title"),s.ec(1,"Workout finished"),s.Jb())}function f(e,t){if(1&e&&(s.Kb(0,"ion-fab",6),s.Kb(1,"ion-button",7),s.dc(2,h,2,1,"ion-card-title",8),s.dc(3,d,2,0,"ion-card-title",8),s.dc(4,u,2,0,"ion-card-title",8),s.Jb(),s.Jb()),2&e){const e=s.Ub();s.Xb("@scaleIn",void 0),s.xb(2),s.Xb("ngIf",e.rest>0&&e.done!==e.sets.length),s.xb(1),s.Xb("ngIf",0==e.rest&&e.done!==e.sets.length),s.xb(1),s.Xb("ngIf",e.done==e.sets.length)}}function g(e,t){if(1&e){const e=s.Lb();s.Kb(0,"div",13),s.ec(1),s.Kb(2,"ion-checkbox",14),s.Sb("click",function(){s.ac(e);const i=t.$implicit;return s.Ub(3).setDone(i)}),s.Jb(),s.Jb()}if(2&e){const e=t.$implicit;s.xb(1),s.hc(" 1 X ",e.reps," | ",e.weight," Kg ")}}function p(e,t){if(1&e&&(s.Kb(0,"div",11),s.Kb(1,"h1"),s.ec(2),s.Jb(),s.dc(3,g,3,2,"div",12),s.Jb()),2&e){const e=t.$implicit;s.xb(2),s.fc(e.name),s.xb(1),s.Xb("ngForOf",e.sets)}}function m(e,t){if(1&e){const e=s.Lb();s.Kb(0,"ion-card-content"),s.Kb(1,"ion-button",15),s.Sb("click",function(){return s.ac(e),s.Ub(2).workoutFinished()}),s.ec(2,"Done"),s.Jb(),s.Jb()}}function w(e,t){if(1&e&&(s.Kb(0,"section",9),s.Kb(1,"ion-card"),s.Kb(2,"ion-card-content"),s.dc(3,p,4,2,"div",10),s.Jb(),s.Jb(),s.Kb(4,"ion-card"),s.dc(5,m,3,0,"ion-card-content",8),s.Jb(),s.Jb()),2&e){const e=s.Ub();s.Xb("@scaleIn",void 0),s.xb(3),s.Xb("ngForOf",e.workout.exercises),s.xb(1),s.Xb("@scaleIn",void 0),s.xb(1),s.Xb("ngIf",e.done==e.sets.length)}}function x(e,t){if(1&e&&(s.Kb(0,"div",18),s.Ib(1,"canvas",19),s.Jb()),2&e){const e=t.$implicit,i=s.Ub(2);s.xb(1),s.Xb("datasets",e.barChartData)("labels",e.barChartLabels)("options",i.barChartOptions)("legend",i.barChartLegend)("chartType",i.barChartType)}}function J(e,t){if(1&e&&(s.Kb(0,"section",16),s.Kb(1,"ion-card"),s.Kb(2,"div"),s.dc(3,x,2,5,"div",17),s.Jb(),s.Jb(),s.Jb()),2&e){const e=s.Ub();s.xb(1),s.Xb("@scaleIn",void 0),s.xb(2),s.Xb("ngForOf",e.exercises)}}function K(e,t){if(1&e&&(s.Kb(0,"ion-item",34),s.Kb(1,"div",35),s.Kb(2,"ion-label",21),s.ec(3,"Reps"),s.Jb(),s.Kb(4,"ion-input",36),s.Sb("ngModelChange",function(e){return t.$implicit.reps=e}),s.Jb(),s.Kb(5,"ion-label",21),s.ec(6,"Weight"),s.Jb(),s.Kb(7,"ion-input",37),s.Sb("ngModelChange",function(e){return t.$implicit.weight=e}),s.Jb(),s.Kb(8,"ion-label",21),s.ec(9,"Resting time"),s.Jb(),s.Kb(10,"ion-input",38),s.Sb("ngModelChange",function(e){return t.$implicit.rest=e}),s.Jb(),s.Jb(),s.Jb()),2&e){const e=t.$implicit;s.xb(4),s.Xb("ngModel",e.reps),s.xb(3),s.Xb("ngModel",e.weight),s.xb(3),s.Xb("ngModel",e.rest)}}function k(e,t){if(1&e&&(s.Kb(0,"ion-card"),s.Kb(1,"ion-item"),s.Kb(2,"ion-label",21),s.ec(3,"Name of exercise"),s.Jb(),s.Kb(4,"ion-input",24),s.Sb("ngModelChange",function(e){return t.$implicit.name=e}),s.Jb(),s.Jb(),s.dc(5,K,11,3,"ion-item",25),s.Kb(6,"ion-item"),s.Kb(7,"ion-label",21),s.ec(8,"Increments"),s.Jb(),s.Kb(9,"ion-select",26),s.Sb("ngModelChange",function(e){return t.$implicit.increments=e}),s.Kb(10,"ion-select-option",27),s.ec(11,"0"),s.Jb(),s.Kb(12,"ion-select-option",28),s.ec(13,"1"),s.Jb(),s.Kb(14,"ion-select-option",29),s.ec(15,"2"),s.Jb(),s.Kb(16,"ion-select-option",30),s.ec(17,"2.5"),s.Jb(),s.Kb(18,"ion-select-option",31),s.ec(19,"3"),s.Jb(),s.Kb(20,"ion-select-option",32),s.ec(21,"5"),s.Jb(),s.Kb(22,"ion-select-option",33),s.ec(23,"10"),s.Jb(),s.Jb(),s.Jb(),s.Jb()),2&e){const e=t.$implicit;s.xb(4),s.Xb("ngModel",e.name),s.xb(1),s.Xb("ngForOf",e.sets),s.xb(4),s.Xb("ngModel",e.increments)}}function v(e,t){if(1&e){const e=s.Lb();s.Kb(0,"section",20),s.Kb(1,"ion-item"),s.Kb(2,"ion-label",21),s.ec(3,"Name of workout"),s.Jb(),s.Kb(4,"ion-input",22),s.Sb("ngModelChange",function(t){return s.ac(e),s.Ub().workout.name=t}),s.Jb(),s.Jb(),s.dc(5,k,24,3,"ion-card",23),s.Kb(6,"ion-card-content"),s.Kb(7,"ion-button",15),s.Sb("click",function(){return s.ac(e),s.Ub().saveChanges()}),s.ec(8,"Save changes"),s.Jb(),s.Jb(),s.Jb()}if(2&e){const e=s.Ub();s.Xb("@scaleIn",void 0),s.xb(4),s.Xb("ngModel",e.workout.name),s.xb(1),s.Xb("ngForOf",e.workout.exercises),s.xb(1),s.Xb("@scaleIn",void 0)}}let C=(()=>{class e{constructor(e,t,i){this.modalController=e,this.toastController=t,this.storage=i,this.history=[],this.exercises=[],this.workout="",this.rest=null,this.timer=null,this.done=null,this.sets=[],this.barChartOptions={scaleShowVerticalLines:!1,responsive:!0},this.barChartType="line",this.barChartLegend=!0}ngOnInit(){this.workout=this.data,this.storage.get("history").then(e=>{this.history=e,this.history=this.history.filter(e=>e.id==this.workout.id),this.workout.exercises.forEach(e=>{this.exercises.push({id:e.id,sets:[],barChartLabels:[],barChartData:[{data:[],label:""}]})}),this.history.forEach(e=>{e.exercises.forEach(e=>{e.sets.forEach(t=>{this.exercises.filter(t=>t.id==e.id)[0].sets.push(t),this.exercises.filter(t=>t.id==e.id)[0].barChartLabels.push(t.reps),this.exercises.filter(t=>t.id==e.id)[0].barChartData[0].data.push(t.weight),this.exercises.filter(t=>t.id==e.id)[0].barChartData[0].label=e.name})})})}),this.workout.exercises.forEach(e=>{e.sets.forEach(e=>{this.sets.push(e)})})}setDone(e){clearInterval(this.timer),0==e.finished?(this.rest=e.rest,this.timer=setInterval(()=>{0!==this.rest&&this.rest--},1e3),e.finished=!0,this.done++):(e.finished=!1,this.rest=null,this.done--)}workoutFinished(){this.workout.exercises.forEach(e=>{e.sets.forEach(t=>{t.weight=Number(t.weight)+Number(e.increments),t.finished=!1})}),this.storage.get("workouts").then(e=>{let t=e;t=t.filter(e=>e.id!==this.workout.id),t.push(this.workout),this.storage.set("workouts",t),this.storage.get("history").then(e=>{this.workout.exercises.forEach(e=>{e.sets.forEach(t=>{t.weight=Number(t.weight)-Number(e.increments),t.finished=!1})});let t=e;t.push(this.workout),this.storage.set("history",t).then(()=>{this.presentToast("Congratulations! You successfully finished your workout "+this.workout.name),setTimeout(()=>{this.dismiss()},1e3)})})})}saveChanges(){console.log(this.workout),this.storage.get("workouts").then(e=>{let t=e;t=t.filter(e=>e.id!==this.workout.id),t.push(this.workout),this.storage.get("favorites").then(e=>{let t=e;t=t.filter(e=>e.id!==this.workout.id),t.push(this.workout),this.storage.set("favorites",t)}),this.storage.set("workouts",t).then(()=>{this.presentToast("Changes saved"),setTimeout(()=>{this.dismiss()},1e3)})})}presentToast(e){return Object(n.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:e,duration:2e3})).present()})}dismiss(){this.modalController.dismiss({dismissed:!0})}}return e.\u0275fac=function(t){return new(t||e)(s.Hb(r.H),s.Hb(r.L),s.Hb(c.b))},e.\u0275cmp=s.Bb({type:e,selectors:[["app-workout-modal"]],inputs:{data:"data",meta:"meta"},decls:12,vars:7,consts:[["vertical","top","horizontal","end","slot","fixed",3,"click"],["name","close-outline"],["vertical","top","horizontal","start","slot","fixed",4,"ngIf"],["class","play-workout",4,"ngIf"],["class","view-workout",4,"ngIf"],["class","edit-workout",4,"ngIf"],["vertical","top","horizontal","start","slot","fixed"],["color","danger"],[4,"ngIf"],[1,"play-workout"],["class","exercise",4,"ngFor","ngForOf"],[1,"exercise"],["class","sets",4,"ngFor","ngForOf"],[1,"sets"],["color","primary",3,"click"],["color","danger","expand","block",3,"click"],[1,"view-workout"],["style","display: block",4,"ngFor","ngForOf"],[2,"display","block"],["baseChart","",3,"datasets","labels","options","legend","chartType"],[1,"edit-workout"],[1,"edit-label"],["placeholder","Name of workout",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["placeholder","Name of exercise",3,"ngModel","ngModelChange"],["class","addSet",4,"ngFor","ngForOf"],["placeholder","Increments per workout",3,"ngModel","ngModelChange"],["value","0"],["value","1"],["value","2"],["value","2.5"],["value","3"],["value","5"],["value","10"],[1,"addSet"],[1,"wrapper"],["placeholder","Reps",3,"ngModel","ngModelChange"],["placeholder","Starting weight",3,"ngModel","ngModelChange"],["placeholder","Set rest time",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(s.Kb(0,"ion-header"),s.Kb(1,"ion-toolbar"),s.Kb(2,"ion-title"),s.ec(3),s.Jb(),s.Jb(),s.Jb(),s.Kb(4,"ion-content"),s.Kb(5,"ion-fab",0),s.Sb("click",function(){return t.dismiss()}),s.Kb(6,"ion-fab-button"),s.Ib(7,"ion-icon",1),s.Jb(),s.Jb(),s.dc(8,f,5,4,"ion-fab",2),s.dc(9,w,6,4,"section",3),s.dc(10,J,4,2,"section",4),s.dc(11,v,9,4,"section",5),s.Jb()),2&e&&(s.xb(2),s.Xb("@scaleIn",void 0),s.xb(1),s.fc(t.data.name),s.xb(1),s.Xb("@scaleIn",void 0),s.xb(4),s.Xb("ngIf","play"==t.meta),s.xb(1),s.Xb("ngIf","play"==t.meta),s.xb(1),s.Xb("ngIf","view"==t.meta),s.xb(1),s.Xb("ngIf","edit"==t.meta))},directives:[r.o,r.E,r.D,r.k,r.l,r.m,r.p,a.i,r.c,r.i,r.e,r.f,a.h,r.j,r.a,b.a,r.r,r.s,r.q,r.K,l.d,l.e,r.A,r.J,r.B],styles:[".sets[_ngcontent-%COMP%]{display:flex;grid-gap:3em;align-items:center;justify-content:space-between;margin:2em 0}.sets[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{--size:1.2em}.edit-label[_ngcontent-%COMP%]{opacity:.4}"],data:{animation:[Object(o.i)("scaleIn",[Object(o.h)(":enter",[Object(o.g)({opacity:0,transform:"scale(0.75)"}),Object(o.e)("0.2s ease")]),Object(o.h)(":leave",[Object(o.e)("0.2s ease",Object(o.g)({opacity:0,transform:"scale(0.75)"}))])])]}}),e})()},mrSG:function(e,t,i){"use strict";function n(e,t,i,n){return new(i||(i=Promise))(function(o,s){function r(e){try{a(n.next(e))}catch(t){s(t)}}function c(e){try{a(n.throw(e))}catch(t){s(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(r,c)}a((n=n.apply(e,t||[])).next())})}i.d(t,"a",function(){return n})}}]);