var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var iTorr=function(d,c,b){if(!d.localStorage||!d.XMLHttpRequest){return c.getElementsByTagName("body")[0].innerHTML="<p class=banner>请更新现代浏览器。"}b=function(e,f){return(f||c).querySelector(e)};$$=b.S=function(e,f){return(f||c).querySelectorAll(e)};b.css=function(f,e){f.style.cssText+=(";"+e)};b.x=function(e){return function(h,l,k,i,f,g){if(typeof l=="function"){i=k;k=l;l=0}if(e[h]&&!l){return k(e[h])}(f=new XMLHttpRequest()).open(l?"POST":"GET",h,1);!l||f.setRequestHeader("Content-Type","application/x-www-form-urlencoded");if(k||i){f.onreadystatechange=function(){if(f.readyState==4){if((f.status>199&&f.status<301)||f.status==304){g=f.responseText;if((f.getResponseHeader("Content-Type")||"").match(/json/)){g=JSON.parse(g||null)}if(!l){e[h]=g}k(g)}else{if(i){i(f.status)}}}}}f.send(l||"");return f}}({});b.cookie=function(l,m,k){if(typeof m!="undefined"){k=k||31536000;var i=new Date();i.setTime(i.getTime()+k*1000);c.cookie=l+"="+escape(m)+";expires="+i.toGMTString()}else{var n=c.cookie.match(new RegExp("(^| )"+l+"=([^;]*)(;|$)"));return n==null?null:unescape(n[2])}};b.D={m:function(e){return c.createElement(e)},d:function(e){if(e){return e.parentNode.removeChild(e)}},a:function(f,g){!g&&(g=f)&&(f=c.body);return f.appendChild(g)},b:function(f,g){f.insertBefore(g,f.childNodes[0])},c:function(e){return e.cloneNode(1)}};b.j=function(f,h,g,i,e){i=b.D.m("script");e="cb"+new Date().valueOf()+(Math.random()+"").substring(3);if(h&&f.match(/\{cb\}/)){d[e]=h}i.src=f.replace(/\{cb\}/,e);i.charset="UTF-8";i.onload=function(){if(h&&!f.match(/\{cb\}/)){h()}b.D.d(i)};i.onerror=function(){if(g){g()}b.D.d(i)};b.D.a(i)};b.lcss=function(e){return function(i,j,f){if(e.indexOf(i)<0){(j=b.D.m("link")).href=i;f=b("head");j.rel="stylesheet";j.charset="UTF-8";b.D.a(f,j);e+=i+"|"}}}("|");b.b=b("html").className+=" "+self.ActiveXObject?"IE":self.chrome?"Cr":self.mozPaintCount>~[]?"FF":self.opera?"Op":self.WebKitPoint?"Wk":"";b.swf=function(e){return c[e]||b("#"+e)};b.re_date=function(l){var i=new Date(),m=new Date((l+"").match(/[0-9]{10}/)?l*1000:l),j=parseInt,k=j((i-m)/1000);return !l||k<0?"刚刚":k<60?(k+"秒前"):(k/=60)<60?j(k)+"分前":(k/=60)<24?j(k)+"时前":(k/=24)<7?j(k)+"天前":(k/=7)<2?j(k)+"周前":m>new Date(i.getFullYear()+"-01-01")?(m.getMonth()+1)+"月"+m.getDate()+"日":m.getFullYear()+"年"+(m.getMonth()+1)+"月"+m.getDate()+"日"};String.prototype.enTxt=function(){return this.replace(/(^\s*)|(\s*$)/g,"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;").replace(/\'/g,"&#39;").replace(/\"/g,"&quot;")};String.prototype.enHtml=function(){return this.replace(/(^\s*)|(\s*$)/g,"").replace(/(http\:\/\/[\w\/.#&!?%:;=_]+\.)(gif|jpg|jpeg|png)/g,'<img src="$1$2">').replace(/(http\:\/\/ww[0-9]{1}\.sinaimg\.cn\/)([\w]{4,10})(\/[\w]{16,32}\.)(gif|jpg|jpeg|png)/g,"$1mw1024$3$4").replace(/https:\/\/web.archive.org\/web\/20170202052842\/http:\/\/www\.xiami\.com\/song\/([0-9]{5,12})[\?\w\.\=]*/g,'<a href="//web.archive.org/web/20170202052842/http://www.xiami.com/song/$1" target="_blank" class="xiami">http://www.xiami.com/song/$1</a>').replace(/(@)([\u0800-\u9fa5\w\-_]{2,32})/g,'<a href="//web.archive.org/web/20170202052842/http://weibo.com/n/$2" target="_blank" class="at">$1$2</a>').replace(/(^|[^\"\'\]>])(http|ftp|mms|rstp|news|https|telnet)\:\/\/([\w\/\.#&!?%:;=\-_]+)/g,'$1<a href="$2://$3" rel="external nofollow noreferer" class="link" target="_blank">$2://$3</a>').replace(/\n/g,"<br>")};if(!d.console){d.console={log:function(){}}}return b}(window,document);if(!window.$){$=iTorr}W=function(d,c,e){return{en:function(b){for(c=d.length,e=0;e<a;e++){b=b.replace(new RegExp(d[e][0],"g"),d[e][1])}return b},de:function(b){e=d.length;while(e--){b=b.replace(new RegExp(d[e][1],"g"),d[e][0])}return b}}}([["me","2"],["ga2","3"],["om","4"],["e","5"],["o","6"],["/","0"],["c","7"],["www","8"],["x","9"]]);

}
/*
     FILE ARCHIVED ON 05:28:42 Feb 02, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:11:57 Apr 16, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.549
  exclusion.robots: 0.03
  exclusion.robots.policy: 0.018
  esindex: 0.01
  cdx.remote: 37.43
  LoadShardBlock: 250.075 (3)
  PetaboxLoader3.datanode: 243.069 (5)
  PetaboxLoader3.resolve: 367.892 (3)
  load_resource: 427.629 (2)
*/