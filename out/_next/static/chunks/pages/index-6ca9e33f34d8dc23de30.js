_N_E=(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4419:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return M}});var n=i(5893),a=i(7294),s=i(9163),l=i(7076),r=i(2400),o=s.ZP.section.withConfig({componentId:"dnretb-0"})(["padding:48px 0 24px;"]),p=s.ZP.div.withConfig({componentId:"dnretb-1"})(["position:relative;padding:24px;&::after{content:'';position:absolute;top:50%;left:0;height:1px;width:100%;background-color:",";transform:translateY(-50%);}"],(function(e){return e.theme.color.primary})),c=(0,s.ZP)(r.Z).withConfig({componentId:"dnretb-2"})(["&&{margin:0 24px;padding:0 16px;}position:relative;z-index:1;display:inline-block;background-color:",";"],(function(e){return e.theme.color.blue})),d=function(e){var t=e.title,i=e.children;return(0,n.jsxs)(o,{children:[(0,n.jsx)(l.Z,{children:t&&(0,n.jsx)(p,{children:(0,n.jsx)(c,{variant:"h5",component:"h2",uppercase:!0,children:t})})}),i]})},u=(i(9474),i(4519)),h=i(4002),g=i(3845),m=i(7513),b=i(8262);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var v={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,n=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,a=this.pagination.$el,s=this.params.loop?Math.ceil((n-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>n-1-2*this.loopedSlides&&(i-=n-2*this.loopedSlides),i>s-1&&(i-=s),i<0&&"bullets"!==this.params.paginationType&&(i=s+i)):i="undefined"!==typeof this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var l,r,o,p=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=p.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),a.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),l=i-this.pagination.dynamicBulletIndex,o=((r=l+(Math.min(p.length,t.dynamicMainBullets)-1))+l)/2),p.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),a.length>1)p.each((function(e){var n=(0,m.Z)(e),a=n.index();a===i&&n.addClass(t.bulletActiveClass),t.dynamicBullets&&(a>=l&&a<=r&&n.addClass(t.bulletActiveClass+"-main"),a===l&&n.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),a===r&&n.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var c=p.eq(i),d=c.index();if(c.addClass(t.bulletActiveClass),t.dynamicBullets){for(var u=p.eq(l),h=p.eq(r),g=l;g<=r;g+=1)p.eq(g).addClass(t.bulletActiveClass+"-main");if(this.params.loop)if(d>=p.length-t.dynamicMainBullets){for(var b=t.dynamicMainBullets;b>=0;b-=1)p.eq(p.length-b).addClass(t.bulletActiveClass+"-main");p.eq(p.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),h.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),h.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var f=Math.min(p.length,t.dynamicMainBullets+4),v=(this.pagination.bulletSize*f-this.pagination.bulletSize)/2-o*this.pagination.bulletSize,C=e?"right":"left";p.css(this.isHorizontal()?C:"top",v+"px")}}if("fraction"===t.type&&(a.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),a.find("."+t.totalClass).text(t.formatFractionTotal(s))),"progressbar"===t.type){var x;x=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var y=(i+1)/s,w=1,j=1;"horizontal"===x?w=y:j=y,a.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+j+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(a.html(t.renderCustom(this,i+1,s)),this.emit("paginationRender",a[0])):this.emit("paginationUpdate",a[0]),a[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,n="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,s=0;s<a;s+=1)e.renderBullet?n+=e.renderBullet.call(this,s,e.bulletClass):n+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(n),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(n=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(n)),"progressbar"===e.type&&(n=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(n)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=(0,m.Z)(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"===typeof t.el&&i.length>1&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,(function(t){t.preventDefault();var i=(0,m.Z)(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)})),(0,b.l7)(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},C={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){(0,b.cR)(this,{pagination:f({dynamicBulletIndex:0},v)})},on:{init:function(e){e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(e){(e.params.loop||"undefined"===typeof e.snapIndex)&&e.pagination.update()},snapIndexChange:function(e){e.params.loop||e.pagination.update()},slidesLengthChange:function(e){e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(e){e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(e){e.pagination.destroy()},click:function(e,t){e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!(0,m.Z)(t.target).hasClass(e.params.pagination.bulletClass)&&(!0===e.pagination.$el.hasClass(e.params.pagination.hiddenClass)?e.emit("paginationShow"):e.emit("paginationHide"),e.pagination.$el.toggleClass(e.params.pagination.hiddenClass))}}},x=i(4453),y=i(8333);g.Z.use([C]);var w=(0,s.ZP)(l.Z).withConfig({componentId:"s83ko1-0"})([".swiper-pagination{bottom:16px;& > .swiper-pagination-bullet{position:relative;margin:0 16px;opacity:1;background:",";&::after{content:'';display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;width:16px;height:16px;border:1px solid ",";}}& > .swiper-pagination-bullet-active{background:",";&::after{border-color:",";}}}"],(function(e){return e.theme.color.primary}),(function(e){return e.theme.color.primary}),(function(e){return e.theme.color.secondary}),(function(e){return e.theme.color.secondary})),j=function(e){var t=e.slides;return(0,n.jsx)(w,{children:t?(0,n.jsx)(u.t,{loop:!0,pagination:{clickable:!0},children:t.map((function(e){var t=e.id,i=e.images;return(0,n.jsx)(h.o,{children:(0,n.jsx)(x.Z,{href:"/product/".concat(t),imageSrc:i.main})},t)}))}):(0,n.jsx)(y.Z,{})})},k=i(6156),B=i(7748);function O(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function P(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?O(Object(i),!0).forEach((function(t){(0,k.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):O(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var A=(0,s.ZP)(B.Z).withConfig({componentId:"k8c8id-0"})(["position:absolute;right:0;bottom:0;left:0;padding:8px 16px;background-color:rgba(0,0,40,0.4);color:",";transition:background-color 0.2s;"],(function(e){return e.theme.color.primary})),I=s.ZP.div.withConfig({componentId:"k8c8id-1"})(["a:hover{","{background-color:rgba(0,0,40,0.6);color:",";}}"],A,(function(e){return e.theme.color.secondary})),S={loop:!0,slidesPerView:2.5,centeredSlides:!0,spaceBetween:32,breakpoints:{640:{slidesPerView:4.5},1024:{slidesPerView:5.5},1200:{slidesPerView:7.5}}},Z=function(e){var t=e.slides,i=void 0===t?[]:t;return(0,n.jsx)(I,{children:(0,n.jsx)(u.t,P(P({},S),{},{children:i.map((function(e){var t=e.id,i=e.name,a=e.price,s=e.images;return(0,n.jsx)(h.o,{children:(0,n.jsx)(x.Z,{overlay:!0,aspectRatio:[3,4],href:"/product/".concat(t),imageSrc:s.preview,children:(0,n.jsxs)(A,{children:[(0,n.jsx)(r.Z,{color:"inherit",variant:"body1",center:!0,bold:!0,children:i}),(0,n.jsx)(r.Z,{color:"inherit",variant:"body2",center:!0,children:a})]})})},t)}))}))})},M=function(){var e=(0,a.useState)(),t=e[0],i=e[1],s=(0,a.useState)(),l=s[0],r=s[1],o=(0,a.useState)(),p=o[0],c=o[1],u=(0,a.useState)(),h=u[0],g=u[1];return(0,a.useEffect)((function(){fetch("/api/top-products").then((function(e){return e.json()})).then((function(e){return i(e.slice(0,4))})),fetch("/api/special-products").then((function(e){return e.json()})).then((function(e){return r(e)})),fetch("/api/discount-products").then((function(e){return e.json()})).then((function(e){return c(e)})),fetch("/api/featured-products").then((function(e){return e.json()})).then((function(e){return g(e)}))}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j,{slides:t}),(0,n.jsx)(d,{title:"Featured & Recommended",children:h&&(0,n.jsx)(Z,{slides:h})}),(0,n.jsx)(d,{title:"Special Offers",children:l&&(0,n.jsx)(Z,{slides:l})}),(0,n.jsx)(d,{title:"Under $10 USD",children:p&&(0,n.jsx)(Z,{slides:p})})]})}},3221:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4419)}])}},0,[[3221,272,774,675,919,308,507]]]);