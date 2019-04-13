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
  secondaryColor,
  textColor,
  textColorToggle,
  nameColor,
  nameOpacity;

//Update Visual Settings Values
function gotSettings(item) {
  bgColor = `${item.settings.bgColor}`,
  secondaryColor = `${item.settings.secondaryColor}`;
  textColor = `${item.settings.textColor}`;
  nameColor = `${item.settings.nameColor}`;

  document.getElementById('bgColor').value = bgColor;
  document.getElementById('secondaryColor').value = secondaryColor;
  document.getElementById('textColor').value = textColor;
  document.getElementById('nameColor').value = nameColor;

};

//Code Run only on startup
function onStartup(item) {
  textColorToggle = `${item.settings.textColorToggle}`;
  nameOpacity = `${item.settings.nameOpacity}`;
  nameOpacity = Number(nameOpacity) * 100;

  document.getElementById('log').innerHTML = nameOpacity;

  if (textColorToggle == 'true') {
    document.querySelector('.toggler').checked = true;
    document.getElementById('SubtextColors').style.display = 'none';
  } else {
    document.querySelector('.toggler').checked = false;
  }

  document.getElementById('nameOpacity').value = nameOpacity;
}

// Store Data
//BG Color
document.getElementById('bgColor').addEventListener('input', setBgColor);
function setBgColor() {
  bgColor = document.getElementById('bgColor').value;
  updateSettings(bgColor);
}
//Secondary Color
document.getElementById('secondaryColor').addEventListener('input', setSecondaryColor);
function setSecondaryColor() {
  secondaryColor = document.getElementById('secondaryColor').value;
  updateSettings(secondaryColor);
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

//Name Opacity
document.getElementById("nameOpacity").addEventListener("input", setNameOpacity);
function setNameOpacity() {
  nameOpacity = document.getElementById('nameOpacity').value / 100;
  updateSettings(nameOpacity);
}

//Update Settings
function updateSettings() {

  let settings = {
    bgColor: bgColor,
    secondaryColor: secondaryColor,
    textColor: textColor,
    textColorToggle: textColorToggle,
    nameColor: nameColor,
    nameOpacity: nameOpacity
  };

  browser.storage.local.set({
    settings
  }).then(setItem, onError);
}
