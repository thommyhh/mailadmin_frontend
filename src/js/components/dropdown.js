/* DROPDOWN
 * Click a button and an awesome menu pops up.
============================================================================= */


;(function() {
  'use strict';

  var items = document.getElementsByClassName('js-dropdown');

  for (var item of items) {
    toggle(item, 'is-active', 'is-visible');
  }
})();


;(function() {
  'use strict';

  var items = document.getElementsByClassName('js-form-autocomplete');

  for (var item of items) {
    toggleInput(item, 'is-active', 'is-visible');
  }
})();
