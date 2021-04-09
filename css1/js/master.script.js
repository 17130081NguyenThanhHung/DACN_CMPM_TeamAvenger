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
	autosize($('.txt-autoresize'));
	$('.eq-height').equalHeights();
	if ($("div.main-preloader-holder").length) {
		$("div.main-preloader-holder").fadeOut(1500);
	}

	var csrf_token = $('input.csrf-token').val();
	$.ajaxSetup({ 
	    data: {
	        hash: ((csrf_token != undefined) ? csrf_token : 0)
	    },
	    cache: false,
	    timeout:(1000 * 360)
	});

	$('button[data-dom-node="scroll_page_to_top"]').click(function() {
    	$("html, body").animate({ scrollTop: 0 },'slow');
    	return false;
    });

    $(window).scroll(function () {
    	if ($(document).height() > 1500) {
			if($(document).scrollTop() > 400) {
				$('button[data-dom-node="scroll_page_to_top"]').parent('div').show('fast');
			}
			else {
				$('button[data-dom-node="scroll_page_to_top"]').parent('div').hide('fast');
			}
		}
	});
});
