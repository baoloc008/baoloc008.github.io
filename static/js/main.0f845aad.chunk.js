(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var i=t(0),o=t.n(i),r=t(2),a=t.n(r),d=t(3),s=t(4),w=t(6),c=t(5),u=t(7),l=(t(13),window),p=l.THREE,m=l.Stats,h=l.WEBGL,v=function(e){function n(){return Object(d.a)(this,n),Object(w.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e,n,t,i,o,r,a;function d(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight)}!1===h.isWebGLAvailable()&&document.body.appendChild(h.getWebGLErrorMessage()),function(){(i=new p.Scene).background=new p.Color(3355443),e=document.createElement("div"),document.body.appendChild(e),(t=new p.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4)).position.set(1e3,1e3,1e3),t.lookAt(0,0,0),new p.OrbitControls(t),(o=new p.WebGLRenderer).setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),e.appendChild(o.domElement),n=new m,e.appendChild(n.dom),r=new p.EffectComposer(o);var a=new p.RenderPass(i,t),s=new p.ShaderPass(p.CopyShader);r.addPass(a);var w=new p.ShaderPass(p.ColorCorrectionShader);w.uniforms.powRGB.value=new p.Vector3(1.4,1.4,1.4),w.uniforms.mulRGB.value=new p.Vector3(1.2,1.2,1.2),r.addPass(w);var c=new p.ShaderPass(p.VignetteShader);c.uniforms.darkness.value=1,r.addPass(c),r.addPass(s),s.renderToScreen=!0,window.addEventListener("resize",d,!1)}(),(a=new p.SEA3D({autoPlay:!0,container:i,progressive:!0})).onComplete=function(){},a.load("./models/mascot.draco.tjs.sea");var s=new p.Clock;!function e(){var t,i=s.getDelta();requestAnimationFrame(e),p.SEA3D.AnimationHandler.update(i),t=i,r.render(t),n.update()}()}},{key:"render",value:function(){return o.a.createElement("div",null)}}]),n}(i.Component);a.a.render(o.a.createElement(v,null),document.getElementById("root"))},8:function(e,n,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.0f845aad.chunk.js.map