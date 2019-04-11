  function addNewStyle(newStyle) {
    var styleElement = document.getElementById('styles_js');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.type = 'text/css';
      styleElement.id = 'styles_js';
      document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
  }

  //Colours
  var bgColor = '#2C2F33',
    primaryText = '#fff',
    displayName = '#ccc';
  //Top Bar Bottom Border
  addNewStyle('.dark-mode .borderb-grey, .borderb-grey {border-bottom: 2px solid #212327 !important;}');
  // Main Background
  addNewStyle('.dark-mode .bg-grey, .dark-mode .bg-white, .bg-white {background:' + bgColor + ' !important;}');
  // Primary Text
  addNewStyle('.theme--light.application, .theme--dark.application {color:' + primaryText + ' !important;}');
  // Display name
  addNewStyle('#displayname {color: '+ displayName + ' !important;}');

  //Settings
  var hideDarkmodeButton = false;

  //Remove Theme Tickbox
  if (hideDarkmodeButton) {
    addNewStyle('.v-menu__content>.v-list:first-of-type>div:first-of-type {display: none !important;}');
  } else {
    addNewStyle('.v-menu__content>.v-list:first-of-type>div:first-of-type {display: block !important;}');
  }
