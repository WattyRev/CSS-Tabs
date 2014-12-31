CSS-Tabs
========

Tabbed Navigation using only css with JavaScript fallback for older browsers

View a <a href="http://wattydev.com/projects/css-tabs/" target="_blank">Live Demo here</a>.

Support
------
CSS-Tabs is tested in Chrome, FireFox, Safari, and IE 7+.
Include fallback.css and fallback.jquery.js to support IE7 and IE8.
IE7 and IE8 support as well as state management require jQuery.
As is, the plugin supports 10 tabs, and should support multiple instances of tabbed navigation (untested).

Methodology
------
CSS-Tabs uses hidden radio buttons and the CSS pseudo selector :checked to create a tabbed navigation without the use of javascript. Optional JavaScript is included to add support for older browsers that do not support the :checked pseudo element. Optional JavaScript is also included to add state management functionality.

### State Management
The state.jquery.js file uses url queries to keep track of the tab currently being viewed. This allows for linking to a specific tab, and for maintaining the users state should he/she reload or bookmark the page.

Installation
------
### Markup
Use index.html as an example of how the html markup should be.

To indicate which tab to default to, add the "checked" attribute to the appropriate radio button.

The id used for the radio buttons can be whatever you like as long as the "for" attribute in the labels coorespond.

The tabbed content should have the same order in the DOM as the tabs do. 

### Fallback
Use conditional html tags to include the fallback.jquery.js and fallback.css files for IE8 and IE7. I keep the conditional tags seperate because I have had issues with using the IE lt 9 tag in the past.

### State Management
Include the state.jquery.js file for state management.

### Modifications
See the page.css file for styling of the tabs themselves, as well as styling for the currently selected tab.
See the fallback.css file for styling in IE7 or IE8.