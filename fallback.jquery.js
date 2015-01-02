/**
 * CSS-Tabs Plugin Script Fallback
 * Spencer Watson [wattydev.com]
 * https://github.com/WattyRev/CSS-Tabs
 */

/**
 * document.ready
 */
$(document).ready(function() {
	$('.tab-wrapper>.tab-navigation li').click(function() {
		var tab = $(this);
		var index = tab.index() + 1;
		var tab_group = tab.parents('.tab-wrapper');
		tab_group.find('.tab-item').removeClass('active');
		tab.addClass('active');
		tab_group.find('div:nth-child(' + index + ')').addClass('active');
		tab_group.find('div:nth-child(' + index + ')').siblings('div').removeClass('active');
	});
	var id = $('.tab-wrapper input[type="radio"]:checked').attr('id');
	$('label[for="' + id + '"]').click();
});