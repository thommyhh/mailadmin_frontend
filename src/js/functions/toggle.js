/* TOGGLE
 * Adds or removes class with the press of a button.
============================================================================= */

/* exported toggle, toggleInput */



// Toggle Buttons

function toggle(element, buttonClass, panelClass) {
  if (!element) {
    throw new Error('Element missing.')
  }

  if (!buttonClass) {
    throw new Error('Class for activated button missing.');
  }

  if (!panelClass) {
    throw new Error('Class for activated panel missing.');
  }

  element.getElementsByClassName('js-toggle-button')[0].addEventListener('click', function() {
    this.classList.toggle(buttonClass);
    element.getElementsByClassName('js-toggle-panel')[0].classList.toggle(panelClass);
  });
}



// Toggle Form Autocomplete

function toggleInput(element, buttonClass, panelClass) {
  if (!element) {
    throw new Error('Element missing.')
  }

  if (!buttonClass) {
    throw new Error('Class for activated button missing.');
  }

  if (!panelClass) {
    throw new Error('Class for activated panel missing.');
  }

  element.getElementsByClassName('js-form-autocomplete-input')[0].addEventListener('focus', function() {
    this.classList.add(buttonClass);
    element.getElementsByClassName('js-form-autocomplete-panel')[0].classList.add(panelClass);
  });

  element.getElementsByClassName('js-form-autocomplete-input')[0].addEventListener('blur', function() {
    this.classList.remove(buttonClass);
    element.getElementsByClassName('js-form-autocomplete-panel')[0].classList.remove(panelClass);
  });
}
