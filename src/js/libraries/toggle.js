/* TOGGLE
 * Adds or removes class with the press of a button.
============================================================================= */



function toggle(element, buttonClass = 'no-class-provided', panelClass = 'no-class-provided') {
  element.getElementsByClassName('js-toggle-button')[0].addEventListener('click', function() {
    this.classList.toggle(buttonClass);
    element.getElementsByClassName('js-toggle-panel')[0].classList.toggle(panelClass);
  });
}
