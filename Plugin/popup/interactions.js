//Get all elements with toggler class
let toggler = document.getElementsByClassName('toggler');

//Run toggler event for clicked check box
for (var i = 0; i < toggler.length; i++) {
  toggler[i].onclick = test;

  function test() {

    let toToggle = this.dataset.toggle,
      isToggled = this.checked;

    if (isToggled) {
      document.getElementById(toToggle).style.display = 'none';
    } else {
      document.getElementById(toToggle).style.display = 'block';
    }
    // this.style.color = 'red';
  }
}
