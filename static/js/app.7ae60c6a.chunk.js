(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{102:function(e,n,a){"use strict";a.d(n,"a",(function(){return b}));var t=a(18),i=a.n(t),r=a(0),o=a.n(r),u=a(3),m=a(11),l=a(21),s=a(2),c=["Copper Ore","Iron Ore","Wood Log","Stone","Coal","Wolframite"],d=[{name:"Wood Plank",itemsPerMin:15,building:"Workshop",value:1,ingredientList:[{name:"Wood Log",amount:1}]},{name:"Wood Frame",itemsPerMin:7.5,building:"Workshop",value:4,ingredientList:[{name:"Wood Plank",amount:4}]},{name:"Copper Wire",itemsPerMin:30,building:"Workshop",value:2,ingredientList:[{name:"Copper Ingot",amount:3}]},{name:"Heat Sink",itemsPerMin:10,building:"Workshop",value:5,ingredientList:[{name:"Copper Ingot",amount:5}]},{name:"Iron Gear",itemsPerMin:15,building:"Workshop",value:2,ingredientList:[{name:"Iron Ingot",amount:2}]},{name:"Iron Plating",itemsPerMin:20,building:"Workshop",value:2,ingredientList:[{name:"Iron Ingot",amount:4}]},{name:"Steel Rod",itemsPerMin:15,building:"Workshop",value:35,ingredientList:[{name:"Steel",amount:3}]},{name:"Sand",itemsPerMin:40,building:"Workshop",value:1,ingredientList:[{name:"Stone",amount:1}]},{name:"Condenser Lens",itemsPerMin:20,building:"Workshop",value:12,ingredientList:[{name:"Glass",amount:3}]},{name:"Carbon Fiber",itemsPerMin:7.5,building:"Workshop",value:24,ingredientList:[{name:"Graphite",amount:4}]},{name:"Coupler",itemsPerMin:6,building:"Workshop",value:24,ingredientList:[{name:"Tungsten Carbide",amount:1}]},{name:"Iron Ingot",itemsPerMin:30,building:"Furnace",value:1,ingredientList:[{name:"Iron Ore",amount:1}]},{name:"Copper Ingot",itemsPerMin:30,building:"Furnace",value:1,ingredientList:[{name:"Copper Ore",amount:1}]},{name:"Silicone",itemsPerMin:20,building:"Furnace",value:2,ingredientList:[{name:"Sand",amount:2}]},{name:"Glass",itemsPerMin:10,building:"Furnace",value:4,ingredientList:[{name:"Sand",amount:4}]},{name:"Tungsten Ore",itemsPerMin:30,building:"Furnace",value:5,ingredientList:[{name:"Wolframite",amount:5}]},{name:"Electromagnet",itemsPerMin:7.5,building:"Machine Shop",value:14,ingredientList:[{name:"Copper Wire",amount:6},{name:"Iron Ingot",amount:2}]},{name:"Logic Circuit",itemsPerMin:10,building:"Machine Shop",value:10,ingredientList:[{name:"Copper Wire",amount:3},{name:"Silicone",amount:2}]},{name:"Metal Frame",itemsPerMin:5,building:"Machine Shop",value:12,ingredientList:[{name:"Wood Frame",amount:1},{name:"Iron Plating",amount:4}]},{name:"Battery",itemsPerMin:2.5,building:"Machine Shop",value:150,ingredientList:[{name:"Electromagnet",amount:8},{name:"Graphite",amount:8}]},{name:"Rotor",itemsPerMin:10,building:"Machine Shop",value:40,ingredientList:[{name:"Iron Plating",amount:2},{name:"Steel Rod",amount:1}]},{name:"Nano Wire",itemsPerMin:5,building:"Machine Shop",value:60,ingredientList:[{name:"Glass",amount:4},{name:"Carbon Fiber",amount:2}]},{name:"Graphite",itemsPerMin:15,building:"Forge",value:6,ingredientList:[{name:"Wood Log",amount:3},{name:"Coal",amount:3}]},{name:"Steel",itemsPerMin:7.5,building:"Forge",value:12,ingredientList:[{name:"Iron Ore",amount:6},{name:"Graphite",amount:1}]},{name:"Concrete",itemsPerMin:7.5,building:"Forge",value:40,ingredientList:[{name:"Sand",amount:10},{name:"Steel Rod",amount:1}]},{name:"Tungsten Carbide",itemsPerMin:12,building:"Forge",value:16,ingredientList:[{name:"Tungsten Ore",amount:2},{name:"Graphite",amount:1}]},{name:"Computer",itemsPerMin:7.5,building:"Industrial Factory",value:60,ingredientList:[{name:"Heat Sink",amount:3},{name:"Metal Frame",amount:1},{name:"Logic Circuit",amount:3}]},{name:"Electric Motor",itemsPerMin:3,building:"Industrial Factory",value:250,ingredientList:[{name:"Iron Gear",amount:4},{name:"Rotor",amount:2},{name:"Battery",amount:1}]},{name:"Electron Microscope",itemsPerMin:2.5,building:"Manufacturer",value:300,ingredientList:[{name:"Condenser Lens",amount:4},{name:"Electromagnet",amount:8},{name:"Metal Frame",amount:2},{name:"Nano Wire",amount:2}]},{name:"Turbocharger",itemsPerMin:4,building:"Manufacturer",value:250,ingredientList:[{name:"Iron Gear",amount:8},{name:"Logic Circuit",amount:4},{name:"Nano Wire",amount:2},{name:"Coupler",amount:4}]},{name:"Super Computer",itemsPerMin:2,building:"Manufacturer",value:250,ingredientList:[{name:"Computer",amount:1},{name:"Heat Sink",amount:8},{name:"Turbocharger",amount:1},{name:"Coupler",amount:8}]},{name:"Atomic Locator",itemsPerMin:2,building:"Manufacturer",value:250,ingredientList:[{name:"Matter Duplicator",amount:24},{name:"Copper Wire",amount:50},{name:"Electron Microscope",amount:2},{name:"Super Computer",amount:2}]},{name:"Earth Token",itemsPerMin:1.428571429,building:"Manufacturer",value:250,ingredientList:[{name:"Matter Duplicator",amount:1}]},{name:"Energy Cube",itemsPerMin:2,building:"Manufacturer",value:250,ingredientList:[{name:"Battery",amount:2},{name:"Industrial Frame",amount:1}]},{name:"Gyroscope",itemsPerMin:5,building:"Manufacturer",value:250,ingredientList:[{name:"Copper Wire",amount:12},{name:"Rotor",amount:2}]},{name:"Industrial Frame",itemsPerMin:3,building:"Industrial Factory",value:250,ingredientList:[{name:"Concrete",amount:6},{name:"Metal Frame",amount:2},{name:"Tungsten Carbide",amount:8}]},{name:"Magnetic Field Generator",itemsPerMin:1.5,building:"Manufacturer",value:250,ingredientList:[{name:"Electromagnet",amount:10},{name:"Industrial Frame",amount:1},{name:"Nano Wire",amount:10},{name:"Stabilizer",amount:1}]},{name:"Matter Compressor",itemsPerMin:2,building:"Manufacturer",value:250,ingredientList:[{name:"Electric Motor",amount:2},{name:"Tank",amount:1},{name:"Turbocharger",amount:2},{name:"Industrial Frame",amount:1}]},{name:"Matter Duplicator",itemsPerMin:2/3,building:"Manufacturer",value:250,ingredientList:[{name:"Electric Motor",amount:2},{name:"Tank",amount:1},{name:"Turbocharger",amount:2},{name:"Industrial Frame",amount:1}]},{name:"Particle Glue",itemsPerMin:5,building:"Manufacturer",value:250,ingredientList:[{name:"Electric Motor",amount:2},{name:"Tank",amount:1},{name:"Turbocharger",amount:2},{name:"Industrial Frame",amount:1}]},{name:"Quantum Entangler",itemsPerMin:1,building:"Manufacturer",value:250,ingredientList:[{name:"Magnetic Field Generator",amount:1},{name:"Stabilizer",amount:2}]},{name:"Stabilizer",itemsPerMin:2.5,building:"Industrial Factory",value:250,ingredientList:[{name:"Computer",amount:1},{name:"Electric Motor",amount:1},{name:"Gyroscope",amount:2}]},{name:"Tank",itemsPerMin:6,building:"Industrial Factory",value:250,ingredientList:[{name:"Concrete",amount:4},{name:"Glass",amount:2},{name:"Tungsten Ore",amount:4}]}],g=a(75);function b(){var e=Object(r.useState)("Wood Plank"),n=i()(e,2),a=n[0],t=n[1],u=Object(r.useState)(50),b=i()(u,2),L=b[0],h=b[1],v=Object(r.useState)([]),M=i()(v,2),f=M[0],C=M[1],y=Object(r.useState)(1),E=i()(y,2),I=E[0],S=E[1],P=Object(r.useState)(1),W=i()(P,2),k=W[0],O=W[1],F=Object(r.useState)(1),T=i()(F,2),w=T[0],x=T[1],G=Object(r.useState)(1),j=i()(G,2),N=j[0],R=j[1],D=Object(r.useState)(1),B=i()(D,2),z=B[0],H=B[1],V=Object(r.useState)(1),J=i()(V,2),A=J[0],Q=J[1],q=Object(r.useState)(1),K=i()(q,2),U=K[0],X=K[1],Y=Object(r.useState)({CopperOre:0,IronOre:0,WoodLog:0,Stone:0,Coal:0,Wolframite:0}),Z=i()(Y,2),$=Z[0],_=Z[1],ee=[],ne={CopperOre:0,IronOre:0,WoodLog:0,Stone:0,Coal:0,Wolframite:0};function ae(e,n){switch(console.log(n),n.toLocaleLowerCase()){case"copper ore":ne.CopperOre+=e;break;case"iron ore":ne.IronOre+=e;break;case"wood log":ne.WoodLog+=e;break;case"stone":ne.Stone+=e;break;case"coal":ne.Coal+=e;break;case"wolframite":ne.Wolframite+=e}}Object(r.useEffect)((function(){ee=[],ne={CopperOre:0,IronOre:0,WoodLog:0,Stone:0,Coal:0,Wolframite:0};var e=d.find((function(e){return e.name==a})),n=re(ie(e.building)),t=L/e.itemsPerMin/n,i=e.building;te(a,L,0,t,i),function e(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=d.find((function(e){return e.name==n}));null==i||i.ingredientList.forEach((function(n){var i=n.amount*a,r=re(ie("extractor")),o=Math.ceil(i/(7.5*r));if(console.log(o),ae(i,n.name),c.includes(n.name))te(n.name,i,t,o,"Extractor");else{var u=d.find((function(e){return e.name==n.name})),m=re(ie(u.building)),l=i/u.itemsPerMin/m;te(n.name,i,t,l,u.building),e(n.name,i,t+1)}}))}(a,L),C(ee),_(ne)}),[I,k,w,N,z,A,L,a]),Object(r.useEffect)((function(){ee.length}),[ee]);var te=function(e,n,a,t,i){ee.push({name:e,amount:n,depth:a,numberOfBuildings:Math.ceil(t),building:i})};function ie(e){switch(e.toLowerCase()){case"workshop":return I;case"furnace":return k;case"machineshop":return w;case"industrialfactory":return N;case"forge":return z;case"manufacturer":return A;case"extractor":return U}}function re(e){switch(e){case 1:return 1;case 2:return 1.5;case 3:return 2;case 4:return 3;default:return 1}}return o.a.createElement(s.a,{style:{alignItems:"center"}},o.a.createElement(s.a,{style:{flexDirection:"row",alignItems:"center",padding:5}},o.a.createElement(m.a,{style:p.buildingLevel},"Extractor Level:"),o.a.createElement(l.a,{style:p.buildingLevelInput,keyboardType:"numeric",onChangeText:function(e){X(Number(e.replace(/[^1-4]/g,"")))},value:U.toString()}),o.a.createElement(m.a,{style:p.buildingLevel},"Workshop Level:"),o.a.createElement(l.a,{style:p.buildingLevelInput,keyboardType:"numeric",onChangeText:function(e){S(Number(e.replace(/[^1-4]/g,"")))},value:I.toString()}),o.a.createElement(m.a,{style:p.buildingLevel},"Furnace Level:"),o.a.createElement(l.a,{style:p.buildingLevelInput,keyboardType:"numeric",onChangeText:function(e){O(Number(e.replace(/[^1-4]/g,"")))},value:k.toString()})),o.a.createElement(s.a,{style:{flexDirection:"row",alignItems:"center",padding:5}},o.a.createElement(m.a,{style:p.buildingLevel},"Machine Shop Level:"),o.a.createElement(l.a,{style:p.buildingLevelInput,keyboardType:"numeric",onChangeText:function(e){x(Number(e.replace(/[^1-4]/g,"")))},value:w.toString()}),o.a.createElement(m.a,{style:p.buildingLevel},"Industrial Factory Level:"),o.a.createElement(l.a,{style:p.buildingLevelInput,keyboardType:"numeric",onChangeText:function(e){R(Number(e.replace(/[^1-4]/g,"")))},value:N.toString()}),o.a.createElement(m.a,{style:p.buildingLevel},"Forge Level:"),o.a.createElement(l.a,{style:p.buildingLevelInput,keyboardType:"numeric",onChangeText:function(e){H(Number(e.replace(/[^1-4]/g,"")))},value:z.toString()})),o.a.createElement(s.a,{style:{flexDirection:"row",alignItems:"center",padding:5}},o.a.createElement(m.a,{style:p.buildingLevel},"Manufacturer Level:"),o.a.createElement(l.a,{style:p.buildingLevelInput,keyboardType:"numeric",onChangeText:function(e){Q(Number(e.replace(/[^1-4]/g,"")))},value:A.toString()})),o.a.createElement(s.a,{style:{alignItems:"center"}},o.a.createElement(s.a,null,o.a.createElement(m.a,null,"Wood Log: ",$.WoodLog),o.a.createElement(m.a,null,"Stone: ",$.Stone),o.a.createElement(m.a,null,"Copper Ore: ",$.CopperOre),o.a.createElement(m.a,null,"Iron Ore: ",$.IronOre),o.a.createElement(m.a,null,"Coal: ",$.Coal),o.a.createElement(m.a,null,"Wolframite: ",$.Wolframite)),o.a.createElement(s.a,{style:{flexDirection:"row",alignItems:"center",padding:5}},o.a.createElement(m.a,{style:{paddingRight:5}},"Items/Min"),o.a.createElement(l.a,{style:{width:75,padding:10,borderColor:"black",borderRadius:5,borderWidth:1,height:40},keyboardType:"numeric",onChangeText:function(e){h(Number(e.replace(/[^0-9]/g,"")))},value:L.toString()}),o.a.createElement(s.a,{style:{width:5}}),o.a.createElement(g.a,{style:{marginVertical:30,width:100,padding:10,borderWidth:1,borderColor:"#666",borderRadius:5,height:40},selectedValue:a,onValueChange:function(e,n){return t(e)},itemStyle:{borderColor:"red",borderWidth:2,borderRadius:5}},d.sort((function(e,n){return e.name.localeCompare(n.name)})).map((function(e){return o.a.createElement(g.a.Item,{label:e.name,value:e.name})}))))),o.a.createElement(m.a,null,"We want ",L," ",a," a minute"),o.a.createElement(m.a,null,"------------------------"),o.a.createElement(s.a,{style:{alignItems:"flex-start"}},f.map((function(e){return 0==e.amount?null:o.a.createElement(m.a,{style:{paddingLeft:10*e.depth}},e.amount," ",e.name," (",e.numberOfBuildings," ",e.building,")")}))),o.a.createElement(s.a,{style:{height:50}}))}var p=u.a.create({container:{width:"100%",height:"50%",flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",paddingBottom:30},buildingLevel:{paddingLeft:15,paddingRight:2},buildingLevelInput:{width:30,padding:5,borderColor:"black",borderRadius:5,borderWidth:1,height:30}})},103:function(e,n,a){e.exports=a(130)}},[[103,1,2]]]);
//# sourceMappingURL=app.7ae60c6a.chunk.js.map