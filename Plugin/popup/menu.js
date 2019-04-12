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
  textColorToggle,
  nameColor;

//Update Visual Settings Values
function gotSettings(item) {
  bgColor = `${item.settings.bgColor}`,
  textColor = `${item.settings.textColor}`;
  nameColor = `${item.settings.nameColor}`;

  document.getElementById('bgColor').value = bgColor;
  document.getElementById('textColor').value = textColor;
  document.getElementById('nameColor').value = nameColor;

};

//Code Run only on startup
function onStartup(item) {
  textColorToggle = `${item.settings.textColorToggle}`;

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
    textColorToggle = 'true';
    updateSettings(textColorToggle);
  } else {
    textColorToggle = 'false';
    updateSettings(textColorToggle);
  }
});
//Name Colors
document.getElementById("nameColor").addEventListener("input", setNameColor);
function setNameColor() {
  nameColor = document.getElementById('nameColor').value;
  updateSettings(nameColor);
}

//Update Settings
function updateSettings() {

  let settings = {
    bgColor: bgColor,
    textColor: textColor,
    textColorToggle: textColorToggle,
    nameColor: nameColor
  };

  browser.storage.local.set({
    settings
  }).then(setItem, onError);
}
