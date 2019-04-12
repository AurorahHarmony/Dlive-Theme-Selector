//Get settings on load
browser.storage.local.get("settings").then(gotSettings, onError);
browser.storage.local.get("settings").then(onStartup, onError);

let updateNum = 1;
// Error Handling
function setItem() {
  updateNum += 1;
  document.getElementById('log').innerHTML = 'okay ' + updateNum;
  browser.storage.local.get("settings")
    .then(gotSettings, onError);
}

function onError(error) {
  document.getElementById('log').innerHTML = error;
}

//Define Variables
let bgColor,
  textColor,
  textColorToggle;

//Update Visual Settings Values
function gotSettings(item) {
  bgColor = `${item.settings.bgColor}`,
    textColor = `${item.settings.textColor}`;
  textColorToggle = `${item.settings.textColorToggle}`;
  document.getElementById('bgColor').value = bgColor;
  document.getElementById('textColor').value = textColor;

};

//Code Run only on startup
function onStartup(item) {
  textColorToggle = `${item.settings.textColorToggle}`;
  document.getElementById('log').innerHTML = textColorToggle;

  if (textColorToggle == 'true') {
    document.querySelector('.toggler').checked = true;
    document.getElementById('SubtextColors').style.display = 'none';
  } else {
    document.querySelector('.toggler').checked = false;
  }
}

// Store Data
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
//Text Color Checkbox toggle
let checkbox = document.querySelector(".textColorToggle");
checkbox.addEventListener('click', function() {
  if (this.checked) {
    document.body.style.border = "5px solid red";
    textColorToggle = 'true';
    updateSettings(textColorToggle);
  } else {
    document.body.style.border = "5px solid green";
    textColorToggle = 'false';
    updateSettings(textColorToggle);
  }
});

//Update Settings
function updateSettings() {

  let settings = {
    bgColor: bgColor,
    textColor: textColor,
    textColorToggle: textColorToggle
  };

  browser.storage.local.set({
    settings
  }).then(setItem, onError);
}
