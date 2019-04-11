function setItem() {
  console.log("OK");
}

function onError(error) {
  console.log(error);
}
// // var color = red;
// //
// // browser.storage.local.set(color);
// //
// //
// // var test = browser.storage.local.get(color);
// //
// //
// // var color = 'red';
// // window.addEventListener('DOMContentLoaded', function(){
// //         document.getElementById('div').innerHTML = "Color:";
// //      });
//
// // (function() {
// //    // your page initialization code here
// //    // the DOM will be available here
// //
// //    alert('HI!');
// // })();
//
//
//
// document.getElementById('test').value = 'Oh hi';
// var monster = {
//   name: "Kraken",
//   tentacles: true,
//   eyeCount: 10
// };
//
// var kitten = {
//   name: "Moggy",
//   tentacles: false,
//   eyeCount: 2
// };
//
// browser.storage.local.set({kitten, monster});
//
// // var stored = browser.storage.local.get('bgColor');
//
// document.getElementById('stored').innerHTML = stored;
//
// document.getElementById("color").addEventListener("input", myFunction);
//
// function myFunction(item) {
//   var bgColor = document.getElementById('color').value;
//
//   document.getElementById('colorText').innerHTML= bgColor;
//
//   browser.storage.local.get("kitten");
//
//   document.getElementById('stored').innerHTML = `${item.kitten.name} has ${item.kitten.eyeCount} eyes`;
// }

function setItem() {
  console.log("OK");
};

function gotKitten(item) {
  var x = `${item.kitten.name} has ${item.kitten.eyeCount} eyes`;
  document.getElementById('stored').innerHTML = x;
};

function gotMonster(item) {
  console.log(`${item.monster.name} has ${item.monster.eyeCount} eyes`);
};

function onError(error) {
  console.log(error)
};

// define 2 objects
var monster = {
  name: "Kraken",
  tentacles: true,
  eyeCount: 10
};

var kitten = {
  name: "Moggy",
  tentacles: false,
  eyeCount: 6
};

// store the objects
browser.storage.local.set({kitten})
  .then(setItem, onError);

browser.storage.local.get("kitten")
  .then(gotKitten, onError);
browser.storage.local.get("monster")
  .then(gotMonster, onError);
