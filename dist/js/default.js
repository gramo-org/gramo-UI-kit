"use strict";$(document).ready(function(){function t(t,e){$(t).each(function(){$(this).append(e)})}function e(t){function e(e){var a=$(document).scrollTop();$(t).each(function(){var t=$(this),e=$(t.attr("href"));if(e.length)var n=e.position().top-30,s=e.height();a>=n&&n+s>a&&!$("#filter").val()?($(".page-contents a").removeClass("active"),t.addClass("active")):t.removeClass("active")})}$(document).on("scroll",e)}$(".toggle-sidebar").click(function(t){t.preventDefault(),$(this).toggleClass("open"),$(".sidebar").toggleClass("sidebar--is-open"),$("main").toggleClass("push")});var a=$(".content-header--fixed");$(window).scroll(function(){var t=$(window).scrollTop();t>=50?a.css("top","0"):a.css("top","auto")}),$(".tabs__nav").each(function(){var t,e,a=$(this).find("a");t=$(a.filter('[href="'+location.hash+'"]')[0]||a[0]),t.addClass("active"),e=$(t[0].hash),a.not(t).each(function(){$(this.hash).hide()}),$(this).on("click","a",function(a){t.removeClass("active"),e.hide(),t=$(this),e=$(this.hash),t.addClass("active"),e.show(),a.preventDefault()})}),$(".searchable-list__heading").on("click",function(){$(this).parent().toggleClass("searchable-list--open")});var n=$("td.table__cell--action"),s='<div class="btn-group btn-group--hover"><button class="btn btn--primary btn--small">Kommenter</button><button class="btn btn--secondary btn--small">Ignorer</button></div>';t(n,s);var i='<div class="btn-group btn-group--hover"><button class="btn btn--success btn--small">Se detaljer</button></div>',o=$(".table-summary__cell--action");t(o,i);$(".site-header").height();$("a[href*=#]").bind("click",function(t){t.preventDefault();var e=$(this).attr("href"),a=$(e).offset().top;$("html,body").animate({scrollTop:a},600,function(){window.location.hash=""+e,$("html").animate({scrollTop:a},0)})}),$("#filter").bind("keyup change",function(){var t=$(this).val(),e=0;$(".search__clear").show(),$("section[id]").each(function(){$(this).text().search(new RegExp(t,"i"))<0?$(this).fadeOut():($(this).show(),e++)}),0===$(this).val().length&&$(".search__clear").hide()}),$(".search__clear").click(function(){$(this).prev("input").val(""),$("section[id]").show(),$(this).hide()}),e(".page-contents a, .vertical__nav a")}),$(window).scroll(function(){var t=$(window).scrollTop(),e=$(".page-contents--sticky").parent().innerWidth()-50+"px";t>=50?($(".page-contents--sticky").addClass("affix"),$(".page-contents--sticky").width(e)):($(".page-contents--sticky").removeClass("affix"),$(".page-contents--sticky").css("width","auto"))});