/* LIST
 * They list domains, accounts, forwards and aliases
============================================================================= */

/* globals toggle */


(function() {
  'use strict';

  let items = document.getElementsByClassName('js-list-item');

  for (let i = 0; i < items.length; i++) {
    toggle(items[i], 'is-active', 'is-visible');
  }
})();
