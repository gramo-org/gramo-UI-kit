"use strict";$(document).ready(function(){function e(e,t){$(e).each(function(){$(this).append(t)})}$(".toggle-sidebar a").click(function(e){e.preventDefault(),$(".toggle-sidebar").toggleClass("open"),$(".sidebar").toggleClass("sidebar--is-expanded"),$("main").toggleClass("pull")});var t=$(".content-header--fixed");$(window).scroll(function(){var e=$(window).scrollTop();e>=50?t.css("top","3rem"):t.css("top","auto")}),$(".tabs__nav").each(function(){var e,t,s=$(this).find("a");e=$(s.filter('[href="'+location.hash+'"]')[0]||s[0]),e.addClass("active"),t=$(e[0].hash),s.not(e).each(function(){$(this.hash).hide()}),$(this).on("click","a:not(.tabs__nav__close)",function(s){e.removeClass("active"),t.hide(),e=$(this),t=$(this.hash),e.addClass("active"),t.show()})}),$(".searchable-list__heading").on("click",function(){$(this).parent().toggleClass("searchable-list--open")});var s='<div class="btn-group btn-group--hover"><a class="btn btn--primary">Se detaljer</a></div>',i=$(".table-summary__cell--action");e(i,s);var a='<div class="btn-group btn-group--hover"><a href="searchA-2.html" class="btn btn--secondary"><i class="fa fa-thumb-tack"></i></a><a href="searchA-2.html" class="btn btn--secondary"><i class="fa fa-share-square-o"></i></a></div>',l=$(".fake-table__row--success .fake-table__cell--action");e(l,a);var n='<div class="btn-group btn-group--hover"><button class="btn btn--primary">Legg til</button></div>',o=$(".drilldown-toggle:not(.dd-close) .table__cell--action");e(o,n),$(".fake-table__toggle-row").click(function(){$(this).closest(".fake-table__row").toggleClass("fake-table__row--expanded").siblings().removeClass("fake-table__row--expanded")}),$(".table__head--expandable").click(function(){$(this).toggleClass("table__head--expanded").siblings().removeClass("table__head--expanded")}),$(".vertical__nav__item--has-children > a").click(function(e){e.preventDefault(),$(this).parent().toggleClass("vertical__nav__item--is-expanded")}),$(".btn-select .btn").click(function(e){e.preventDefault(),$(this).parent().toggleClass("btn-select--active")}),$(".btn-select ul a").click(function(e){e.preventDefault(),$(this).closest(".btn-select").removeClass("btn-select--active"),$(".btn-select .btn > span").text($(this).text())});var c=$(".toggle-sidebar").height();$(".vertical__nav--sub__item > a[href*=#]").bind("click",function(e){e.preventDefault();var t=$(this).attr("href"),s=$(t).offset().top-c;$("html,body").animate({scrollTop:s},600,function(){window.location.hash=""+t,$("html").animate({scrollTop:s},0)})}),$("#filter").bind("keyup change",function(){var e=$(this).val(),t=0;$(".search__clear").show(),$("section[id], section[id] > h3").each(function(){$(this).html().search(new RegExp(e,"i"))<0?$(this).fadeOut():($(this).show(),t++)}),0===$(this).val().length&&$(".search__clear").hide()}),$(".search__clear").click(function(){$(this).prev("input").val(""),$("section[id]").show(),$(this).hide()}),$('h4:contains("Markup")').click(function(e){e.preventDefault(),$(this).next(".highlight").toggleClass("is-visible")}),$(".file-upload__toggle").click(function(e){e.preventDefault(),$(this).next(".file-upload__inner").toggleClass("is-visible")}),$(".file-upload__header--action a").click(function(e){e.preventDefault(),$(this).closest(".file-upload__inner").removeClass("is-visible")}),$(".toggle-comments").click(function(e){e.preventDefault(),$(this).closest(".comments").toggleClass("show-inner")}),$(".toggle-changelog").click(function(e){e.preventDefault(),$(this).closest(".changelog").toggleClass("show-inner")}),$("tr.drilldown-body[data-level=2]").click(function(){$(this).addClass("table__row--selected").siblings().removeClass("table__row--selected")}),$("[aria-controls]").on("click",function(e){e.preventDefault(),$(this).attr("aria-expanded",function(e,t){return"true"==t?"false":"true"}),$(this).parent().next("nav").toggleClass("nav-visible")}),$(".form__input--toggle-visibility").click(function(){$(this).is(":checked")?($(this).parent().prev().find('input[type="password"]').attr("type","text"),$(this).parent().addClass("form__label--toggled")):($(this).parent().prev().find('input[type="text"]').attr("type","password"),$(this).parent().removeClass("form__label--toggled"))}),$(".statusboard__close").click(function(){$(this).parent().toggleClass("statusboard--minimise")}),$(".site-footer__close").click(function(e){e.preventDefault(),$(this).parent().hide()}),$(".help__toggle").click(function(e){e.preventDefault(),$(this).parent().toggleClass("help--is-visible")}),$(".flash-message__close").click(function(e){e.preventDefault(),$(this).parent().remove()}),$(".form__input--searchable").bind("blur",function(){$(this).next(".searchable-list").removeClass("searchable-list--open")}),$(".form__input--searchable").bind("focus",function(){$(this).next(".searchable-list").addClass("searchable-list--open")}),$(".link--edit").click(function(){$(this).closest("section").find(".form").find("input, select").not(".locked").prop("disabled",function(e,t){return!t}),$(this).closest("section").find(".form").find(".searchable-list").not(".locked").toggleClass("searchable-list--disabled"),$(this).toggleClass("link--edit--hidden btn btn--secondary"),$(this).closest("section").find(".link--trash").toggleClass("link--trash--hidden"),$(this).closest("section").find(".link--add").toggleClass("link--add--hidden"),$(this).closest("section").find(".text--help").toggleClass("text--help--hidden"),$(this).closest("section").find(".link-prototype").toggleClass("link-prototype--hidden"),$(this).hasClass("link--edit--hidden")?($(this).text("Avbryt"),$(this).parent().append('<button class="btn btn--primary">Lagre</button>')):($(this).parent().find(".btn--primary").remove(),$(this).text("Rediger")),$(".row--alternate input").prop("disabled")?($(".row--alternate").find(".row__delete").addClass("hide"),$(".row--alternate").next("span").addClass("hide")):($(".row--alternate").find(".row__delete").removeClass("hide"),$(".row--alternate").next("span").removeClass("hide"))}),$(".link--trash:not(.link--trash--in-row)").click(function(e){e.preventDefault(),$(this).closest("li").remove()}),$(".link--trash--in-row").click(function(e){e.preventDefault(),$(this).closest(".row").remove().prev().remove()}),$(".link--edit--tracks").click(function(e){$(".table--tracks").toggleClass("table--tracks--edit")}),$(".row--clickable").click(function(){window.location=$(this).data("href")}),$('label:contains("Klassisk?") > input[type="checkbox"]').click(function(){$(this).is(":checked")?($(this).closest(".row").next(".row").show(),$(".link--add--classical").show()):($(this).closest(".row").nextAll(".row.hide").hide(),$(".link--add--classical").show(),$(".link--add--classical").hide())}),$(".link--add--classical").click(function(e){e.preventDefault(),$(this).prev(".row").show()}),$('a:contains("mobilnummer")').click(function(){$(this).next(".row").hasClass("hide")?($(this).nextAll(":lt(2)").removeClass("hide"),$(this).hide()):($(this).nextAll(":lt(2)").addClass("hide"),$(this).show())}),$('a:contains("mobilnummer")').next().find(".row__delete a").click(function(){$(this).closest(".row").addClass("hide"),$(this).closest(".row").next(".row").addClass("hide"),$('a:contains("mobilnummer")').show()})});