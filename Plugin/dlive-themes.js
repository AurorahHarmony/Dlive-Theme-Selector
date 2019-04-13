//Announce Plugin Load
console.log('DLIVE Themer plugin loaded');
//Listen for updates to storage in Plugin settings
browser.storage.onChanged.addListener(settingsUpdate);
//Init Styles Section
addNewStyle('/*INIT*/');
//Run SettingsUpdater on script load
settingsUpdate();

//Check if page loaded
if (window.addEventListener) { // Mozilla, Netscape, Firefox
    window.addEventListener('load', WindowLoad, false);
} else if (window.attachEvent) { // IE
    window.attachEvent('onload', WindowLoad);
}

function WindowLoad(event) {
    console.log("page loaded");
}

//Error Handler
function onError(error) {
  console.log(error);
}

//Defaults
let bgColor = '#2C2F33',
  textColor = '#fff',
  textColorToggle = 'false',
  nameColor = 'red';

//Update Settings
function settingsUpdate() {
  console.log('Settings Updating');
  document.querySelector("#styles_js").innerHTML =   '/*DLive Themer Styles*/';

  browser.storage.local.get("settings").then(gotSettings, onError);
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

function gotSettings(item) {
  bgColor = `${item.settings.bgColor}`;
  textColor = `${item.settings.textColor}`;
  textColorToggle = `${item.settings.textColorToggle}`;
  nameColor = `${item.settings.nameColor}`;
  nameOpacity = `${item.settings.nameOpacity}`;

  // Main Background
  addNewStyle('.dark-mode .bg-grey, .dark-mode .bg-white, .bg-white {background:' + bgColor + ' !important;}');

  // Primary Text
  addNewStyle('.theme--light.application, .theme--dark.application {color:' + textColor + ' !important;}');
  // Display name

  if (textColorToggle == 'true') {
    addNewStyle('#displayname {color: ' + textColor + ' !important; opacity: 0.5; }');
  } else {
    addNewStyle('#displayname {color: ' + nameColor + ' !important; opacity: ' + nameOpacity + '; }');
  }

  //Chat Names
  // document.querySelector('.username .dlive-name #displayname').style.color = 'purple';
  // addNewStyle('.username .dlive-name #displayname {color: purple !important;}');

  //Placeholder Style add thingies
  //Border Colors
  addNewStyle('.border-grey, .dark-mode .border-grey, .borderl-grey, .dark-mode .borderl-grey,.dark-mode .borderb-grey, .borderb-grey {border-color:blue !important;}');
  //MainText
  addNewStyle('.theme--light.v-btn,.theme--dark.v-btn, .text-constant-black {color:pink !important;}');
  //SecondaryColors
  addNewStyle('.table-wrap .table-wrap-content .creator-wrap .creator-box .creator-number .creator-number-rank, .table-wrap .table-wrap-header {background:purple !important;}');
  //InfoBox Colors
  addNewStyle('.theme--light.v-sheet, .theme--dark.v-card, .theme--dark.v-tabs__bar {background: orange!important;}');
  //Dropdown Colors
  addNewStyle('.theme--dark.v-list, .theme--light.v-list {background: purple; color: orange;}');
  //Dropdowns BG
  addNewStyle('.theme--dark.v-text-field--solo .v-input__control > .v-input__slot, .theme--light.v-text-field--solo > .v-input__control > .v-input__slot {background: purple;}');
  //Labels
  addNewStyle('.theme--dark.v-label, .theme--light.v-label {color: orange!important;}');

  //Icons
  addNewStyle('.theme--light.v-icon, .theme--dark.v-icon {color: orange;}');
  //Button Backgrounds
  addNewStyle('.bg-primary {background: purple !important;}');
  //Switch Colors
  addNewStyle('.theme--dark.v-input--switch__thumb, .theme--light.v-input--switch__thumb {color: red !important;}');
  addNewStyle('.theme--dark.v-input--switch__track, .theme--light.v-input--switch__track {color: red !important; opacity: 0.5}');
  //Scroll Down Chat Buttons
  addNewStyle('.show-more svg {fill: orange !important;}');
  //HeaderBottom of Buttons
  addNewStyle('.homepage-toolbar .v-toolbar__content .toolbar-items-center .v-btn--active::before, .homepage-toolbar .v-toolbar__content .toolbar-items-center .v-btn:focus::before, .homepage-toolbar .v-toolbar__content .toolbar-items-center .v-btn:hover::before, .homepage-toolbar .v-toolbar__content .toolbar-items-center .v-ripple_containe, .homepage-toolbar .v-toolbar__content .toolbar-items-center .yellow-bottom.v-btn::before {border-color: green!important;}');

  //Curve Video Edges
  addNewStyle('.livestream-video-test .streamer-livestream-test {border-radius: 25px;}');
  //Curve Menu Bar
  addNewStyle('.v-tabs__bar {border-radius: 10px 10px 0px 0px;}');
  addNewStyle('.v-window-item .v-card {border-radius: 0px 0px 10px 10px}');
  //Curve Thumbnails
  addNewStyle('.thumbnail, .thumbnail img {border-radius: 5px}');
  addNewStyle('.postsnap-info {border-radius: 0px 0px 5px 5px}');
  //Hide Scroll Bars
  addNewStyle('div div.v-tabs__wrapper {overflow: hidden!important;}');

  //Remove Support Creators Button
  addNewStyle('div div.support-creators {display: none;}');

  console.log('Updated');
}




//Settings
var hideDarkmodeButton = false;

//Remove Theme Tickbox
if (hideDarkmodeButton) {
  addNewStyle('.v-menu__content>.v-list:first-of-type>div:first-of-type {display: none !important;}');
} else {
  addNewStyle('.v-menu__content>.v-list:first-of-type>div:first-of-type {display: block !important;}');
}
