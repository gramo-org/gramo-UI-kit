"use strict";$(document).ready(function(){function t(t,e){$(t).each(function(){$(this).append(e)})}function e(t){function e(e){var a=$(document).scrollTop();$(t).each(function(){var t=$(this),e=$(t.attr("href"));if(e.length)var s=e.position().top+40,n=e.height();a>=s&&s+n>a&&!$("#filter").val()?($(".page-contents a").removeClass("active"),t.addClass("active")):t.removeClass("active")})}$(document).on("scroll",e)}$(".toggle-sidebar a").click(function(t){t.preventDefault(),$(".toggle-sidebar").toggleClass("open"),$(".sidebar").toggleClass("sidebar--is-expanded"),$("main").toggleClass("pull")});var a=$(".content-header--fixed");$(window).scroll(function(){var t=$(window).scrollTop();t>=50?a.css("top","3rem"):a.css("top","auto")}),$(".tabs__nav").each(function(){var t,e,a=$(this).find("a");t=$(a.filter('[href="'+location.hash+'"]')[0]||a[0]),t.addClass("active"),e=$(t[0].hash),a.not(t).each(function(){$(this.hash).hide()}),$(this).on("click","a:not(.tabs__nav__close)",function(a){t.removeClass("active"),e.hide(),t=$(this),e=$(this.hash),t.addClass("active"),e.show()})}),$(".searchable-list__heading").on("click",function(){$(this).parent().toggleClass("searchable-list--open")});var s=$("td.table__cell--action"),n='<div class="btn-group btn-group--hover"><button class="btn btn--primary">Kommenter</button><button class="btn btn--secondary btn--small">Ignorer</button></div>';t(s,n);var i='<div class="btn-group btn-group--hover"><a class="btn btn--primary">Se detaljer</a></div>',l=$(".table-summary__cell--action");t(l,i);var c='<div class="btn-group btn-group--hover"><a href="searchA-2.html" class="btn btn--secondary"><i class="fa fa-thumb-tack"></i></a><a href="searchA-2.html" class="btn btn--secondary"><i class="fa fa-share-square-o"></i></a></div>',o=$(".fake-table__row--success .fake-table__cell--action");t(o,c),$(".fake-table__toggle-row").click(function(){$(this).closest(".fake-table__row").toggleClass("fake-table__row--expanded").siblings().removeClass("fake-table__row--expanded")}),$(".vertical__nav__item--has-children > a").click(function(t){t.preventDefault(),$(this).parent().toggleClass("vertical__nav__item--is-expanded")}),$(".btn-select .btn").click(function(t){t.preventDefault(),$(this).parent().toggleClass("btn-select--active")}),$(".btn-select ul a").click(function(t){t.preventDefault(),$(this).closest(".btn-select").removeClass("btn-select--active"),$(".btn-select .btn > span").text($(this).text())});var r=$(".toggle-sidebar").height();$("a[href*=#]").bind("click",function(t){t.preventDefault();var e=$(this).attr("href"),a=$(e).offset().top-r;$("html,body").animate({scrollTop:a},600,function(){window.location.hash=""+e,$("html").animate({scrollTop:a},0)})}),$("#filter").bind("keyup change",function(){var t=$(this).val(),e=0;$(".search__clear").show(),$("section[id], section[id] > h3").each(function(){$(this).html().search(new RegExp(t,"i"))<0?$(this).fadeOut():($(this).show(),e++)}),0===$(this).val().length&&$(".search__clear").hide()}),$(".search__clear").click(function(){$(this).prev("input").val(""),$("section[id]").show(),$(this).hide()}),$('h4:contains("Markup")').click(function(t){t.preventDefault(),$(this).next(".highlight").toggleClass("is-visible")}),e(".page-contents a, .vertical__nav a")});