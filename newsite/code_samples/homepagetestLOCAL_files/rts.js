/* Marketguard v4 Real Time Statistics Tracking Tracking generator Copyright 2003-2006,SoDoIt,LLC. Unauthorized use and distribution is STRICTLY PROHIBITED. For licensing terms,please contact sales@sodoit.com */ var rtsHold=_;var _={W:window,D:document,L:location,t:new Date,p:function(a,d){a[a.length]=d},f:String.fromCharCode,Z:function(s,i,t){t="";for(i=0;i<s.length;i++){t+='%'+s.charCodeAt(i).toString(16)}return t},roi_conversion:undefined,roi_category:undefined,roi_reference_id:undefined,fqdn:'highlights.trk.sodoit.com',done:false};_.H=_.L.hostname;_.P=_.L.protocol;_.N=_.L.pathname;_.S=_.L.search||'';_.F=_.D.referrer;_.K=_.D.cookie.replace(/\s+/g,'').split(';');_.X=function(s,i,t){t="";for(i=0;i<s.length;i++){t+=_.f((s.charCodeAt(i)+32768)%65536)}return t};_.z=function(s,i,t,m){t="";m=s.match(/%([^%]+)/g);i=0;while(m[i])t+=_.f(parseInt(m[i++].slice(1),16));return t};_.r=function(r){return escape(r).replace(/\+/g,'%2B')};_.C=function(c,v,a,t){a=[];t=new Date;t.setFullYear(t.getFullYear()+1);_.p(a,c+'='+_.Z(_.X(v)));_.p(a,'path=/');_.p(a,'expires='+t.toGMTString());_.D.cookie=a.join(';')};_.c=function(n,i,c){n=n+"=";i=0;while((c=_.K[i++])!=null) if(!c.indexOf(n)) return _.X(_.z(c.substring(n.length,c.length))).split(';');return""};_.J=function(l,i){l=["highlights.com","170.224.228.142","highlightskids.com","renewmyaccount.com","highlightsmagazinesite.com","magazines.highlights.com","shop.highlights.com","admin.buysub.com","w1.buysub.com"];if(l.length==0){return 1}for(i=0;i<l.length;i++) if((new RegExp('(^|\\.)'+l[i]+"$","i")).test(_.H)) return 1;return 0};_.get_parent=function(){var scripts = document.getElementsByTagName('script');var node = undefined;var pattern = new RegExp(_.fqdn);for (var i = 0;i < scripts.length;i++){var script = scripts[i];var src = script.getAttribute('src');if (src && pattern.test(src)){node = script.parentNode;break}}return node};_.rts_rec=function(r,v){if (!_.J()){return false}r=[];_.p(r,"tver="+4);_.p(r,"cid=3080");_.p(r,"rts_id=260");_.p(r,"cf="+_.r('source'));_.p(r,"ccf="+_.r('ccat'));_.p(r,"dh="+_.H);_.p(r,"dp="+_.r(_.N));_.p(r,"ds="+_.r(_.S));_.p(r,"dr="+_.r(_.F));_.p(r,"rp="+_.P.replace(/:/,''));_.p(r,"ts="+(new Date()).getTime());if (!_.roi_conversion && _.W.roi_conversion){_.roi_conversion = _.W.roi_conversion}if (!_.roi_category && _.W.roi_category){_.roi_category = _.W.roi_category}if(!_.roi_reference_id && _.W.roi_reference_id){_.roi_reference_id = _.W.roi_reference_id}if((v=_.roi_conversion)!=null){if(typeof(v) == "number"){v=v.toString()}v=v.replace(/[$ ]/g,'');if(/^\d+(\.\d+)?$/.test(v)) _.p(r,"cval="+v);if((v=_.roi_reference_id)!=null){if(/^\d+$/.test(v)) _.p(r,"rfid="+_.r(v))}}if((v=_.roi_category)!=null){if(v.length>2){_.p(r,"cc="+_.r(v))}}r=r.join('&');var rec_url = _.P+'/'+'/trk.roitrax.com/highlights/rts.html?'+r;var rts_iframe = document.createElement('iframe');rts_iframe.setAttribute('width',0);rts_iframe.setAttribute('height',0);rts_iframe.setAttribute('scrolling','no');rts_iframe.setAttribute('frameborder',0);rts_iframe.setAttribute('src',rec_url);_.get_parent().appendChild(rts_iframe)};function setrfid(f){f.rfid.value=("undefined"==typeof(window.roi_reference_id))?Math.round(1000000000*Math.random()):false};if(!_.done){_.rts_rec()};_.done = true;_=rtsHold;
