/**
 * CSS-Tabs Plugin State Management
 * Spencer Watson [wattydev.com]
 * https://github.com/WattyRev/CSS-Tabs
 */

$(function() {
	var q = window.location.search.replace('?', '').split('&');
	var tab;
	for (i = 0; i < q.length; i++) { 
    	var query = q[i];
    	if (query.split('=')[0] === 'tab') {
    		tab = query.split('=')[1];
    	}
	}
	$('#' + tab).attr('checked', 'checked');
	$('input:radio').change(function() {
		var radio = $(this);
		if (!radio.parents('.tab-wrapper')) {
			return;
		}
		var id = radio.attr('id');
		var url = '';
		if (tab){
			url = location.href.replace("tab="+tab, "tab="+id);
		} else {
			if (q[0] !== '') {
				url = location.href + '&tab='+id;
			} else {
				url = location.href + '?tab='+id;
			}
		}
		tab = id;
		history.pushState(null, null, url);
	});
});