"use strict";$(document).ready(function(){function e(e,t){$(e).each(function(){$(this).append(t)})}$(".toggle-sidebar a").click(function(e){e.preventDefault(),$(".toggle-sidebar").toggleClass("open"),$(".sidebar").toggleClass("sidebar--is-expanded"),$("main").toggleClass("pull")});var t=$(".content-header--fixed");$(window).scroll(function(){var e=$(window).scrollTop();e>=50?t.css("top","3rem"):t.css("top","auto")}),$(".tabs__nav").each(function(){var e,t,a=$(this).find("a");e=$(a.filter('[href="'+location.hash+'"]')[0]||a[0]),e.addClass("active"),t=$(e[0].hash),a.not(e).each(function(){$(this.hash).hide()}),$(this).on("click","a:not(.tabs__nav__close)",function(a){e.removeClass("active"),t.hide(),e=$(this),t=$(this.hash),e.addClass("active"),t.show()})}),$(".searchable-list__heading").on("click",function(){$(this).parent().toggleClass("searchable-list--open")});var a=$("td.table__cell--action"),s='<div class="btn-group btn-group--hover"><button class="btn btn--primary">Kommenter</button><button class="btn btn--secondary btn--small">Ignorer</button></div>';e(a,s);var i='<div class="btn-group btn-group--hover"><a class="btn btn--primary">Se detaljer</a></div>',n=$(".table-summary__cell--action");e(n,i);var l='<div class="btn-group btn-group--hover"><a href="searchA-2.html" class="btn btn--secondary"><i class="fa fa-thumb-tack"></i></a><a href="searchA-2.html" class="btn btn--secondary"><i class="fa fa-share-square-o"></i></a></div>',c=$(".fake-table__row--success .fake-table__cell--action");e(c,l),$(".fake-table__toggle-row").click(function(){$(this).closest(".fake-table__row").toggleClass("fake-table__row--expanded").siblings().removeClass("fake-table__row--expanded")}),$(".table__head--expandable").click(function(){$(this).toggleClass("table__head--expanded").siblings().removeClass("table__head--expanded")}),$(".vertical__nav__item--has-children > a").click(function(e){e.preventDefault(),$(this).parent().toggleClass("vertical__nav__item--is-expanded")}),$(".btn-select .btn").click(function(e){e.preventDefault(),$(this).parent().toggleClass("btn-select--active")}),$(".btn-select ul a").click(function(e){e.preventDefault(),$(this).closest(".btn-select").removeClass("btn-select--active"),$(".btn-select .btn > span").text($(this).text())});var o=$(".toggle-sidebar").height();$(".vertical__nav--sub__item > a[href*=#]").bind("click",function(e){e.preventDefault();var t=$(this).attr("href"),a=$(t).offset().top-o;$("html,body").animate({scrollTop:a},600,function(){window.location.hash=""+t,$("html").animate({scrollTop:a},0)})}),$("#filter").bind("keyup change",function(){var e=$(this).val(),t=0;$(".search__clear").show(),$("section[id], section[id] > h3").each(function(){$(this).html().search(new RegExp(e,"i"))<0?$(this).fadeOut():($(this).show(),t++)}),0===$(this).val().length&&$(".search__clear").hide()}),$(".search__clear").click(function(){$(this).prev("input").val(""),$("section[id]").show(),$(this).hide()}),$('h4:contains("Markup")').click(function(e){e.preventDefault(),$(this).next(".highlight").toggleClass("is-visible")}),$(".file-upload__toggle").click(function(e){e.preventDefault(),$(this).next(".file-upload__inner").toggleClass("is-visible")}),$(".file-upload .form__section--action .btn").click(function(e){e.preventDefault(),$(this).closest(".form").hide(),$(this).closest(".form").next(".file-upload__list").show()}),$(".done").click(function(e){e.preventDefault(),$(this).closest(".file-upload__list").show(),$(this).parent().prev(".form").hide(),$(this).parent().parent().removeClass("is-visible")}),$(".new").click(function(e){e.preventDefault(),$(this).closest(".file-upload__list").hide(),$(this).parent().prev(".form").show()})});