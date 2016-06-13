/* LIST
 * They list domains, accounts, forwards and aliases
============================================================================= */


;(function() {
  'use strict';

  var items = document.getElementsByClassName('js-list-item');

  for (var item of items) {
    toggle(item, 'is-active', 'is-visible');
  }
})();
