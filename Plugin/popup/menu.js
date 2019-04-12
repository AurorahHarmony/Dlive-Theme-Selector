//Get settings on load
browser.storage.local.get("settings").then(gotSettings, onError);

// Error Handling
function setItem() {
  document.getElementById('log').innerHTML = 'okay';
  browser.storage.local.get("settings")
    .then(gotSettings, onError);
}

function onError(error) {
  document.getElementById('log').innerHTML = error;
}

//Define Variables
let bgColor,
textColor;

//Update Visual Settings Values
function gotSettings(item) {
  bgColor = `${item.settings.bgColor}`,
  textColor = `${item.settings.textColor}`;
  document.getElementById('bgColor').value = bgColor;
  document.getElementById('textColor').value = textColor;
};

// Store Text Box
//BG Color
document.getElementById("bgColor").addEventListener("input", setBgColor);
function setBgColor() {
  bgColor = document.getElementById('bgColor').value;
  updateSettings(bgColor);
}
//Text Color
document.getElementById("textColor").addEventListener("input", setTextColor);
function setTextColor() {
  textColor = document.getElementById('textColor').value;
  updateSettings(textColor);
}

//Update Settings
function updateSettings() {

  let settings = {
    bgColor: bgColor,
    textColor: textColor,
    displayName: '#ccc'
  };

  browser.storage.local.set({
    settings
  }).then(setItem, onError);
}
