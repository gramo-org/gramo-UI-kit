!function(t){var n="drilldown",i="dd-open",l="dd-close",a="drilldown-body",o="."+a,d="drilldown-toggle",s="drilldown-open-all",e="drilldown-close-all",c="level",r=function(n){var a=t(this);a.removeClass(l).addClass(i);var d=a.data(c)||1;a.nextAll(o).each(function(){return!(t(this).data(c)<=d)&&(t(this).data(c)>d+1||void t(this).stop().show(n.speed))})},h=function(n){var d=t(this);d.removeClass(i).addClass(l);var s=d.data(c)||1;d.nextAll(o).each(function(){return!(t(this).data(c)<=s)&&(t(this).hasClass(a)&&t(this).removeClass(i).addClass(l),void t(this).stop().hide(n.speed))})},u=function(n){var l=t(this).closest(o);l.hasClass(i)?h.call(l,n):r.call(l,n)},f={init:function(i){return i=t.extend({speed:"fast"},i),this.each(function(){var l=this,a=t(this),o=a.data(n);o||(i=t.extend({},i),a.data(n,{options:i})),a.find("."+d).unbind("click."+n).bind("click."+n,function(){var t=a.data(n).options;u.call(this,t)}),a.find("."+s).unbind("click."+n).bind("click."+n,function(){f.openAll.call(l)}),a.find("."+e).unbind("click."+n).bind("click."+n,function(){f.closeAll.call(l)})})},destroy:function(){return this.each(function(){var i=t(this);t(window).unbind("."+n),i.removeData(n)})},openAll:function(i){var l=t(this);i=t.extend(l.data(n).options,i),l.find(o).each(function(){1==t(this).data(c)&&r.call(t(this),i)})},closeAll:function(i){var l=t(this);i=t.extend(l.data(n).options,i),l.find(o).each(function(){1==t(this).data(c)&&h.call(t(this),i)})}};t.fn.drilldown=function(n){return f[n]?f[n].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof n&&n?void t.error("Method "+n+" does not exist on jQuery.drilldown"):f.init.apply(this,arguments)}}(jQuery);