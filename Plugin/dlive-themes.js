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

//Run SettingsUpdater on script load


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
  document.getElementById('styles_js').innerHTML = "/*DLive Themer Styles*/";
  browser.storage.local.get("settings").then(gotSettings, onError);
}

function gotSettings(item) {
  bgColor = `${item.settings.bgColor}`;
  textColor = `${item.settings.textColor}`;
  textColorToggle = `${item.settings.textColorToggle}`;
  nameColor = `${item.settings.nameColor}`;

  // Main Background
  addNewStyle('.dark-mode .bg-grey, .dark-mode .bg-white {background:' + bgColor + ' !important;}');

  // Primary Text
  addNewStyle('.theme--light.application, .theme--dark.application {color:' + textColor + ' !important;}');
  // Display name

  if (textColorToggle == 'true') {
    addNewStyle('#displayname {color: ' + textColor + ' !important; opacity: 0.5; }');
  } else {
    addNewStyle('#displayname {color: ' + nameColor + ' !important; opacity: ; }');
  }

  console.log(bgColor);

  //Placeholder Style add thingies
  //Border Colors
  addNewStyle('.border-grey, .dark-mode .border-grey, .borderl-grey, .dark-mode .borderl-grey,.dark-mode .borderb-grey, .borderb-grey {border-color:blue !important;}');
  //MainText
  addNewStyle('.theme--light.v-btn,.theme--dark.v-btn, .text-constant-black {color:pink !important;}');
  //SecondaryColors
  addNewStyle('.table-wrap .table-wrap-content .creator-wrap .creator-box .creator-number .creator-number-rank, .table-wrap .table-wrap-header {background:purple !important;}');

  //Button Backgrounds
  addNewStyle('.bg-primary {background: purple !important;}');
  //HeaderBottom Borders
  addNewStyle('.homepage-toolbar .v-toolbar__content .toolbar-items-center .v-btn--active::before, .homepage-toolbar .v-toolbar__content .toolbar-items-center .v-btn:focus::before, .homepage-toolbar .v-toolbar__content .toolbar-items-center .v-btn:hover::before, .homepage-toolbar .v-toolbar__content .toolbar-items-center .v-ripple_containe {border-color: purple!important;}');

  //Curve Video Edges
  addNewStyle('.livestream-video-test .streamer-livestream-test {border-radius: 25px;}');
  //Curve Menu Bar
  addNewStyle('.v-tabs__bar {border-radius: 10px 10px 0px 0px;}');
  addNewStyle('.v-window-item .v-card {border-radius: 0px 0px 10px 10px}');
  //Hide Scroll Bars
  addNewStyle('div div.v-tabs__wrapper {overflow: hidden!important;}');

  //Remove Support Creators Button
  var elem = document.querySelector(".support-creators");
  elem.parentNode.removeChild(elem);
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



//Settings
var hideDarkmodeButton = false;

//Remove Theme Tickbox
if (hideDarkmodeButton) {
  addNewStyle('.v-menu__content>.v-list:first-of-type>div:first-of-type {display: none !important;}');
} else {
  addNewStyle('.v-menu__content>.v-list:first-of-type>div:first-of-type {display: block !important;}');
}
