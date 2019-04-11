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

//Update Visual Settings Values
function gotSettings(item) {
  let bgColor = `${item.settings.bgColor}`;
  document.getElementById('bgColor').value = bgColor;
};

//Define Variables
let bgColor;

// Store Text Box
document.getElementById("bgColor").addEventListener("input", setBgColor);
function setBgColor() {
  bgColor = document.getElementById('bgColor').value;
  updateSettings(bgColor);
}

//Update Settings
function updateSettings() {

  let settings = {
    bgColor: bgColor,
    tentacles: false,
    eyeCount: 6
  };

  browser.storage.local.set({
    settings
  }).then(setItem, onError);
}
