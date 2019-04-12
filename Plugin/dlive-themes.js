//Announce Plugin Load
console.log('DLIVE Themer plugin loaded');

//Check if page loaded
if (window.addEventListener) { // Mozilla, Netscape, Firefox
    window.addEventListener('load', WindowLoad, false);
} else if (window.attachEvent) { // IE
    window.attachEvent('onload', WindowLoad);
}

function WindowLoad(event) {
    console.log("page loaded");
}
settingsUpdate();


//Error Handler
function onError(error) {
  console.log(error);
}

//Listen for updates to storage in Plugin settings
browser.storage.onChanged.addListener(settingsUpdate);

//Defaults
let bgColor = '#2C2F33',
  textColor = '#fff',
  displayName = '#ccc';

//Update Settings
function settingsUpdate() {
  console.log('Settings have been updated');
  // document.getElementById('styles_js').innerHTML = "/*DLive Themer Styles*/";
  browser.storage.local.get("settings").then(gotSettings, onError);
}

function gotSettings(item) {
  bgColor = `${item.settings.bgColor}`;
  textColor = `${item.settings.textColor}`;
  textColorToggle = `${item.settings.textColorToggle}`;
  nameColor = `${item.settings.nameColor}`;

  // Main Background
  addNewStyle('.dark-mode .bg-grey, .dark-mode .bg-white, .bg-white {background:' + bgColor + ' !important;}');

  // Primary Text
  addNewStyle('.theme--light.application, .theme--dark.application {color:' + textColor + ' !important;}');
  // Display name

  if (textColorToggle == 'true') {
    addNewStyle('#displayname {color: ' + textColor + ' !important; opacity: 0.5; }');
  } else {
    addNewStyle('#displayname {color: ' + nameColor + ' !important; opacity: ; }');
  }
}

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

//Top Bar Bottom Border
addNewStyle('.dark-mode .borderb-grey, .borderb-grey {border-bottom: 2px solid red !important;}');

//Border Colors
addNewStyle('.border-grey, .dark-mode .border-grey, .borderl-grey, .dark-mode .borderl-grey {border-color:blue !important;}');

//Settings
var hideDarkmodeButton = false;

//Remove Theme Tickbox
if (hideDarkmodeButton) {
  addNewStyle('.v-menu__content>.v-list:first-of-type>div:first-of-type {display: none !important;}');
} else {
  addNewStyle('.v-menu__content>.v-list:first-of-type>div:first-of-type {display: block !important;}');
}
