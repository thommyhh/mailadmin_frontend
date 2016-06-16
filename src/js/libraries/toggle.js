/* TOGGLE
 * Adds or removes class with the press of a button.
============================================================================= */



// Toggle Buttons

function toggle(element, buttonClass = 'undefined-class', panelClass = 'undefined-class') {
  element.getElementsByClassName('js-toggle-button')[0].addEventListener('click', function() {
    this.classList.toggle(buttonClass);
    element.getElementsByClassName('js-toggle-panel')[0].classList.toggle(panelClass);
  });
}


// Toggle Form Autocomplete

function toggleInput(element, buttonClass = 'undefined-class', panelClass = 'undefined-class') {
  element.getElementsByClassName('js-form-autocomplete-input')[0].addEventListener('focus', function() {
    this.classList.add(buttonClass);
    element.getElementsByClassName('js-form-autocomplete-panel')[0].classList.add(panelClass);
  });

  element.getElementsByClassName('js-form-autocomplete-input')[0].addEventListener('blur', function() {
    this.classList.remove(buttonClass);
    element.getElementsByClassName('js-form-autocomplete-panel')[0].classList.remove(panelClass);
  });
}
