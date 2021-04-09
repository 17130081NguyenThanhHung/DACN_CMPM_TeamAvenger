// @*************************************************************************@
// @ @author Mansur Altamirov (Mansur_TL)                                    @
// @ @author_url 1: https://www.instagram.com/mansur_tl                      @
// @ @author_url 2: http://codecanyon.net/user/mansur_tl                     @
// @ @author_email: highexpresstore@gmail.com                                @
// @*************************************************************************@
// @ HighExpress - The Ultimate Modern Marketplace Platform                  @
// @ Copyright (c) 05.07.19 HighExpress. All rights reserved.                @
// @*************************************************************************@

jQuery(document).ready(function($) {
	"use strict";
	$.fn.scroll2 = function (speed = 500,top_offset = 50) {
		if (typeof(speed) === 'undefined')
			speed = 500;

		$('html, body').animate({
			scrollTop: ($(this).offset().top - top_offset)
		}, speed);

		return $(this);
	};

	jQuery.fn.reloadPage = function(_time = 0) {
		delay(function(){
			this.location.reload();
		},_time);
	}

	jQuery.fn.scroll2inner = function(elem, speed) { 
	    $(this).animate({
	        scrollTop:  ($(this).scrollTop() - $(this).offset().top + $(elem).offset().top - 50)
	    }, speed == undefined ? 1000 : speed); 
	    return this; 
	};

	$.fn.replaceClass = function(class1,class2) {  
		$(this).removeClass(class1);
		$(this).addClass(class2);
		return this;
	};

	$.fn.hasAttr = function(name) {  
		var attr = this.attr(name);
		if (typeof attr !== typeof undefined && attr !== false) {
	    	return true;
		} else {
			return false;
		}
	};

	$.fn.serializeObject = function () {
		var param_obj = Object({});
		$.each($(this).serializeArray(), function(index, kv_object) {

			if (param_obj.hasOwnProperty(kv_object.name)) {
				param_obj[kv_object.name] = $.makeArray(param_obj[kv_object.name]);
				param_obj[kv_object.name].push(kv_object.value);
			}
			else {
				param_obj[kv_object.name] = kv_object.value;
			}
		});

		return param_obj;
	};

	$(document).on('click', '[data-trigger-event]', function(event) {
		event.preventDefault();
		var tatget = $($(this).data('target'));
		var event  = $(this).data("trigger-event");
		var argum  = (($(this).data('data')) ? $(this).data('data') : "");
		tatget.data('data',argum).trigger(event);
	});

	$(document).on('hidden.bs.modal','div[data-onclose="remove"]', function () {  
        $(this).remove();
    });

	$(document).on('click', '[data-anchor]', function(event) {
		event.preventDefault();
		var link   = $(this).data('anchor');
		hs_redirect(link);
	});
});

String.prototype.format = function () {
    var a = this;
    for (var k in arguments) {
        a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return a
}

var delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();


function log(val = null) {
	console.log(val);
}

function hs_el_exists(selector = "") {
	if (hs_empty(selector)) {
		return false;
	} else {
		return ($(selector).length > 0);
	}
}

function eqheight(klass = ".eq-width"){
	if ($(klass).first().length) {
		var height = $(klass).first().width();
		$(klass).each(function(index, el) {
			$(el).height(height);
		});
	}
}


function hs_redirect(url = "/") {
	document.location.href = url;
	return;
}

function hs_in_array(needle, haystack) {
	var length = haystack.length;
	for (var i = 0; i < length; i++) {
		if (haystack[i] == needle)
		return true;
	}
	
	return false;
}

function hs_empty(value = '') {
	if (value === '' || value === null || value === undefined || value == 0) {
        return true
    }
    else {
        return false
    }
}

function hs_is_hexcol(hex = null) {
	if (hs_empty(hex)) {
		return false;
	} else {
		var regex = new RegExp('(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)', 'i');
		return regex.test(hex);
	}
	return false;
}