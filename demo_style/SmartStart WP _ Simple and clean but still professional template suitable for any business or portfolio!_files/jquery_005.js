(function(e){jQuery.fn.reverse=Array.prototype.reverse;var c={buttonWidthLowRes:function(g,f){g.each(function(){var i=e(this),h=parseInt(i.css("padding-left")),j=parseInt(i.css("padding-right"));i.css("max-width",(f.outerWidth()-(h+j)*2)/2)})},buttonWidthHighRes:function(f,g){f.each(function(){var j=e(this),h=parseInt(j.css("padding-left")),k=parseInt(j.css("padding-right")),i=g;if(!h){i+=h}else{i-=h}if(!k){i+=k}else{i-=k}j.css("max-width",i)})},},a={setSlideBackground:function(f,g,h){g.css("background-image","url("+f+")").each(function(j){e(this).css("background-position",(-j*h)+"px 0px")})},preloadImages:function(g,i,h){var f=0;g.each(function(j){var l=e(this),k=h.attr("src");e("<img/>").attr("src",k)})},setup:function(w,t,j,l,i,n,k,f,g,p,v,q,s,o,u){k.each(function(y){var x=e(this);x.appendTo(q).addClass("slide-content_"+y)});q.addClass(u.contentPosition).css("height",k.eq(u.pos).outerHeight());s.addClass(u.contentPosition);if(u.contentPosition){e("a",s).css("height",q.outerHeight())}else{var h=(q.outerHeight()-1)/2;e("a",s).css("height",h);e(".next",s).css("bottom",parseInt(e(".prev",s).css("bottom"))+h+1+"px")}t.each(function(y){var z=e(this),x=z.find("a").attr("href");mode=z.find("a").attr("class"),title=z.find("a").attr("title");z.add(z.find(f)).data({url:x,mode:mode,title:title})});t.css({display:"block",height:u.height-n.outerHeight()+"px"}).appendTo(p);p.css({"max-height":u.height-n.outerHeight()+"px",overflow:"hidden",width:"100%"});i.css("width",l+"px");n.css("width",100/j+"%");n.appendTo(v);if(w.width()/2===748/2){c.buttonWidthLowRes(n,w)}else{c.buttonWidthHighRes(n,l)}t.find(f).appendTo(g);t.find("a").remove();g.css("max-height",u.height-n.outerHeight()+"px");w.css({"max-height":u.height-n.outerHeight()+(n.outerHeight()*Math.ceil(j/2))+"px","max-width":l*j+"px"});a.setSlideBackground(u.posBgImage,t,l);if(e(window).width()<960){f.eq(u.pos).stop(true,true).fadeIn(u.type.speed,u.type.easing).css("display","block")}var m=t.eq(w.find(".slide-button.active").index()).data("url");t.css("cursor","auto");if(m){t.css("cursor","pointer")}var r=f.eq(w.find(".slide-button.active").index()).data("url");f.css("cursor","auto");if(r){f.eq(w.find(".slide-button.active").index()).css("cursor","pointer")}e(window).load(function(){w.addClass("fully-loaded");t.css("width",l+"px");o.css({bottom:n.innerHeight()+parseInt(n.css("border-bottom-width"))+"px",left:l*u.pos,visibility:"visible",width:l+"px"});if(e(window).width()<960){if(u.contentPosition==="center"){var x=(w.width()-q.outerWidth())/2-e("a",s).outerWidth()-1;e(".prev",s).css("left",x);e(".next",s).css("right",x)}else{if(u.contentPosition==="bottom"){q.add(e("a",s)).css("bottom",w.outerHeight()-g.outerHeight());q.css("width",g.outerWidth()-(e("a",s).outerWidth()*2+2)-(parseInt(q.css("padding-left"))+parseInt(q.css("padding-right"))))}else{q.add(e(".prev",s)).css("bottom",w.outerHeight()-g.outerHeight()+30);e(".next",s).css("bottom",w.outerHeight()-g.outerHeight()+30+e(".next",s).outerHeight())}}}})}},d={def:{slide:function(r,n,k,h,l,f,o,m,i){var j=n.eq(f.index()),q=j.index(),p=e("img",o).eq(q).attr("src"),g;if(i.pos===q){r.data("anim",false);return false}i.pos=j.index();d[i.type.mode].slideAux(r,n,k,h,l,p,g,i)},slideAux:function(n,l,j,g,k,m,h,i){var f=0;k.css({left:"0px","background-image":"url("+m+")"}).each(function(o){e(this).css("background-position",(-o*g)+"px 0px")});n.data("anim",false)}},fade:{slide:function(n,l,i,g,j,f,m,k,h){d.def.slide(n,l,i,g,j,f,m,k,h)},slideAux:function(n,l,j,g,k,m,h,i){var f=0;k.css({left:"0px","background-image":"url("+m+")"}).each(function(o){e(this).hide().css("background-position",(-o*g)+"px 0px").fadeIn(i.type.speed,i.type.easing,function(){++f;if(f===j){n.data("anim",false);a.setSlideBackground(m,l,g)}})})}},seqFade:{slide:function(r,n,k,h,l,f,o,m,i){var j=n.eq(f.index()),q=j.index(),p=e("img",o).eq(q).attr("src"),g;if(i.pos<q){g=1}else{if(i.pos>q){g=-1}else{r.data("anim",false);return false}}i.pos=j.index();d[i.type.mode].slideAux(r,n,k,h,l,p,g,i)},slideAux:function(p,n,l,i,m,o,j,k){var h=0,g=k.type.seqfactor,f=p.find(".slide-img");if(j===-1){f=f.reverse()}f.css({left:"0px","background-image":"url("+o+")"}).each(function(r){var q=e(this).hide();setTimeout(function(){var s=-r*i;if(j===-1){s=-(l-1-r)*i}q.css("background-position",s+"px 0px").fadeIn(k.type.speed,k.type.easing,function(){++h;if(h===l){p.data("anim",false);a.setSlideBackground(o,n,i)}})},r*g)})}},horizontalSlide:{slide:function(n,l,i,g,j,f,m,k,h){d.seqFade.slide(n,l,i,g,j,f,m,k,h)},slideAux:function(n,l,j,g,k,m,h,i){var f=0;k.css({left:h*g+"px","background-image":"url("+m+")"}).each(function(o){e(this).css("background-position",(-o*g)+"px 0px").stop().animate({left:"0px"},i.type.speed,i.type.easing,function(){++f;if(f===j){n.data("anim",false);a.setSlideBackground(m,l,g)}})})}},seqHorizontalSlide:{slide:function(n,l,i,g,j,f,m,k,h){d.seqFade.slide(n,l,i,g,j,f,m,k,h)},slideAux:function(p,n,l,i,m,o,j,k){var h=0,g=k.type.seqfactor,f=p.find(".slide-img");if(j===1){f=f.reverse()}f.css({left:j*i+"px","background-image":"url("+o+")"}).each(function(r){var q=e(this);setTimeout(function(){var s=-r*i;if(j===1){s=-(l-1-r)*i}q.css("background-position",s+"px 0px").stop().animate({left:"0px"},k.type.speed,k.type.easing,function(){++h;if(h===l){p.data("anim",false);a.setSlideBackground(o,n,i)}})},r*g)})}},verticalSlide:{slide:function(n,l,i,g,j,f,m,k,h){d.seqFade.slide(n,l,i,g,j,f,m,k,h)},slideAux:function(n,l,j,g,k,m,h,i){var f=0;k.css({top:h*i.height+"px","background-image":"url("+m+")"}).each(function(o){e(this).css("background-position",(-o*g)+"px 0px").stop().animate({top:"0px"},i.type.speed,i.type.easing,function(){++f;if(f===j){n.data("anim",false);a.setSlideBackground(m,l,g)}})})}},seqVerticalSlide:{slide:function(n,l,i,g,j,f,m,k,h){d.seqFade.slide(n,l,i,g,j,f,m,k,h)},slideAux:function(p,n,l,i,m,o,j,k){var h=0,g=k.type.seqfactor,f=p.find(".slide-img");if(j===1){f=f.reverse()}f.css({top:j*k.height+"px","background-image":"url("+o+")"}).each(function(r){var q=e(this);setTimeout(function(){var s=-r*i;if(j===1){s=-(l-1-r)*i}q.css("background-position",s+"px 0px").stop().animate({top:"0px"},k.type.speed,k.type.easing,function(){++h;if(h===l){p.data("anim",false);a.setSlideBackground(o,n,i)}})},r*g)})}},verticalSlideAlt:{slide:function(n,l,i,g,j,f,m,k,h){d.seqFade.slide(n,l,i,g,j,f,m,k,h)},slideAux:function(p,n,l,g,m,o,h,i){var f=0,k;m.css({"background-image":"url("+o+")"}).each(function(j){if(j%2===0){k=1}else{k=-1}e(this).css("top",k*i.height+"px").css("background-position",(-j*g)+"px 0px").stop().animate({top:"0px"},i.type.speed,i.type.easing,function(){++f;if(f===l){p.data("anim",false);a.setSlideBackground(o,n,g)}})})}},seqVerticalSlideAlt:{slide:function(n,l,i,g,j,f,m,k,h){d.seqFade.slide(n,l,i,g,j,f,m,k,h)},slideAux:function(r,p,n,i,o,q,k,l){var h=0,g=l.type.seqfactor,f=r.find(".slide-img"),m;if(k===1){f=f.reverse()}f.css({top:k*l.height+"px","background-image":"url("+q+")"}).each(function(s){var j=e(this);setTimeout(function(){var t=-s*i;if(k===1){t=-(n-1-s)*i}if(s%2===0){m=1}else{m=-1}j.css("top",m*l.height+"px").css("background-position",t+"px 0px").stop().animate({top:"0px"},l.type.speed,l.type.easing,function(){++h;if(h===n){r.data("anim",false);a.setSlideBackground(q,p,i)}})},s*g)})}},responsiveDef:{slide:function(s,o,l,i,m,f,g,p,n,j){var k=o.eq(f.index()),r=k.index(),q=e("img",p).eq(r).attr("src"),h;if(j.pos===r){s.data("anim",false);return false}j.pos=k.index();d.responsiveDef.slideAux(s,o,l,i,m,g,p,q,h,r,j)},slideAux:function(q,m,k,i,l,g,n,o,h,p,j){var f=0;n.css("height",n.outerHeight());g.stop(true,true).hide().eq(p).stop(true,true).fadeIn(j.type.speed,j.type.easing,function(){e(this).css("display","block");n.css("height","");q.data("anim",false)})}},},b={init:function(f){if(this.length){var g={pos:0,width:940,height:380,contentSpeed:450,contentPosition:"",showContentOnhover:false,hideContent:false,timeout:3000,pause:true,pauseOnHover:true,hideBottomButtons:false,type:{mode:"def",speed:400,easing:"jswing",seqfactor:100}};return this.each(function(){if(f){e.extend(g,f)}var D=e(this),A=D.find(".slide"),j=A.length,h=D.find(".slide-bg-image"),r=D.find(".slide-button"),n=D.find(".slide-content"),m=["def","fade","seqFade","horizontalSlide","seqHorizontalSlide","verticalSlide","seqVerticalSlide","verticalSlideAlt","seqVerticalSlideAlt"],o=Math.floor(g.width/j),t,v,p,l;g.height+=r.outerHeight();l=D.width();a.preloadImages(A,j,h);if(g.showContentOnhover){D.addClass("show-content-onhover")}if(g.hideContent){D.addClass("hide-content")}if(g.hideBottomButtons){D.addClass("hide-bottom-buttons")}var C=A.eq(g.pos);g.posBgImage=C.find(h).attr("src");C.find(".slide-button").addClass("active");A.prepend('<div class="slide-img"></div>');var k=D.find(".slide-img");D.append('<div class="slide-images-container"></div>');var i=e(".slide-images-container");D.append('<div class="slides-container"></div>');var u=e(".slides-container");D.append('<div class="buttons-container"></div>');var B=e(".buttons-container");D.append('<div class="content-container"></div>');var w=e(".content-container");D.append('<div class="pagination-container"> <a class="prev">&laquo;</a> <a class="next">&raquo;</a> </div>');var x=e(".pagination-container");D.append('<div class="active-slide-bar">&nbsp;</div>');var s=D.find(".active-slide-bar");a.setup(D,A,j,o,k,r,n,h,i,u,B,w,x,s,g);var z=w.children(".slide-content_"+g.pos);z.fadeIn(g.contentSpeed);if(g.type.mode==="random"){D.data("randomEffect",true)}e(window).load(function(){if(g.timeout>0&&p!==true){v=setTimeout(y,g.timeout)}});function y(){var G=A.eq(D.find(".slide-button.active").index()).next();if(D.find(".slide-button.active").index()===j-1){G=A.first()}var F=r.eq(G.index()),E=w.children(".slide-content_"+G.index());q(F,G,E)}function q(F,G,E){clearTimeout(v);v=0;clearTimeout(t);t=setTimeout(function(){if(D.data("anim")){return false}D.data("anim",true);if(g.pos>-1&&!F.hasClass("active")){s.stop().animate({left:o*G.index()},g.type.speed*1);r.removeClass("active");F.addClass("active");n.stop(true,true).hide()}if(D.data("randomEffect")){g.type.mode=m[Math.floor(Math.random()*m.length)]}if(e(window).width()<960){d.responsiveDef.slide(D,A,j,o,k,F,h,i,u,g)}else{d[g.type.mode].slide(D,A,j,o,k,F,i,u,g)}E.stop(true,true).fadeIn(g.contentSpeed);w.css("height",E.outerHeight());if(g.contentPosition){var I=(E.outerHeight()+parseInt(w.css("padding-top"))+parseInt(w.css("padding-bottom")))}else{var I=(n.eq(G.index()).outerHeight()+parseInt(w.css("padding-top"))+parseInt(w.css("padding-bottom"))-1)/2;e(".next",x).css("bottom",parseInt(e(".prev",x).css("bottom"))+I+1+"px")}e("a",x).css("height",I);var H=A.eq(D.find(".slide-button.active").index()).data("url");A.css("cursor","auto");if(H){A.css("cursor","pointer")}if(!D.data("autoPlayStop")&&g.timeout>0&&(g.pauseOnHover?!p:true)){v=setTimeout(y,g.timeout)}},100)}r.bind("click",function(H){if(g.pause){D.data("autoPlayStop",true)}var F=e(this),G=A.eq(F.index()),E=w.children(".slide-content_"+G.index());q(F,G,E);H.preventDefault()});e("a",x).bind("click",function(I){if(g.pause){D.data("autoPlayStop",true)}var H=e(this),G=A.eq(D.find(".slide-button.active").index()),F,E;if(H.hasClass("next")){G=G.next()}else{if(H.hasClass("prev")){G=G.prev()}}if(D.find(".slide-button.active").index()===j-1&&H.hasClass("next")){G=A.first()}if(G.index()===-1&&H.hasClass("prev")){G=A.last()}F=r.eq(G.index()),E=w.children(".slide-content_"+G.index());if((H.hasClass("next")&&G.index()<j)||(H.hasClass("prev")&&G.index()>=0)){q(F,G,E)}I.preventDefault()});D.on("mouseenter",function(){p=true;if(g.pauseOnHover){clearTimeout(v);v=0}}).on("mouseleave",function(){p=false;if(!D.data("autoPlayStop")&&g.timeout>0){v=setTimeout(y,g.timeout)}});u.add(i).click(function(M){p=false;if(e(window).width()<960){var J=h.eq(D.find(".slide-button.active").index())}else{var J=A.eq(D.find(".slide-button.active").index())}var E=J.data("url"),K=J.data("mode"),O=J.data("title"),G=K?K.match(/(iframe|single-image|image-gallery)/g):-1,L,F,R,Q,P,I,H,N;if(typeof E!=="undefined"&&E){if(G!==-1&&G!==null){if(G[0]==="iframe"){K="iframe";L=false;F="70%";R="70%";Q=800;P=600;I=false;H=false;N=false}else{K="image";L={};F=800;R=600;Q=9999;P=9999;I=true;H=true;N=false}e.fancybox({type:K,href:E,title:O,openEffect:"fade",closeEffect:"fade",nextEffect:"fade",prevEffect:"fade",helpers:{title:{type:"inside"},buttons:L},width:F,height:R,maxWidth:Q,maxHeight:P,fitToView:I,autoSize:H,closeClick:N,beforeShow:function(){if(D.data("autoPlayStop")||g.timeout===0||g.pause){D.data("sliderStopped",true)}D.data({autoPlayStop:true,anim:false})},afterClose:function(){if(!D.data("sliderStopped")){D.removeData("autoPlayStop")}if(!D.data("autoPlayStop")&&g.timeout>0&&p!==true){v=setTimeout(y,g.timeout)}}})}else{window.location=E}}M.preventDefault()});e(window).resize(function(){if(D.width()!==l){if(D.width()/2===748/2){c.buttonWidthLowRes(r,D)}else{c.buttonWidthHighRes(r,o)}if(e(window).width()<960){var H=h.eq(D.find(".slide-button.active").index()),E=w.children(".slide-content_"+H.index());if(g.contentPosition){var I=(E.outerHeight()+parseInt(w.css("padding-top"))+parseInt(w.css("padding-bottom")))}else{var I=(n.eq(H.index()).outerHeight()+parseInt(w.css("padding-top"))+parseInt(w.css("padding-bottom"))-1)/2;e(".next",x).css("bottom",parseInt(e(".prev",x).css("bottom"))+I+1+"px")}w.css("height",E.outerHeight());e(".next",x).css("bottom",parseInt(e(".prev",x).css("bottom"))+I+1+"px");e("a",x).css("height",I);if(H.is(":hidden")){h.hide()}H.fadeIn().css("display","block");if(g.contentPosition==="center"){var G=(D.width()-w.outerWidth())/2-e("a",x).outerWidth()-1;e(".prev",x).css("left",G);e(".next",x).css("right",G)}else{if(g.contentPosition==="bottom"){w.add(e("a",x)).css("bottom",D.outerHeight()-i.outerHeight());w.css("width",i.outerWidth()-(e("a",x).outerWidth()*2+2)-(parseInt(w.css("padding-left"))+parseInt(w.css("padding-right"))))}else{w.add(e(".prev",x)).css("bottom",D.outerHeight()-i.outerHeight()+30);e(".next",x).css("bottom",D.outerHeight()-i.outerHeight()+30+e(".next",x).outerHeight())}}}else{clearTimeout(v);v=0;if(g.pause){D.data("autoPlayStop",true)}if(g.contentPosition==="center"){e(".prev",x).css("left","");e(".next",x).css("right","")}else{if(g.contentPosition==="bottom"){w.add(e("a",x)).css("bottom","");w.css("width","")}else{w.add(e("a",x)).css("bottom","")}}var F=D.find(".slide-button.active"),H=A.eq(F.index()),E=w.children(".slide-content_"+H.index());q(F,H,E)}l=D.width()}})})}}};e.fn.smartStartSlider=function(f){if(b[f]){return b[f].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof f==="object"||!f){return b.init.apply(this,arguments)}else{e.error("Method "+f+" does not exist on jQuery.smartStartSlider")}}}})(jQuery);