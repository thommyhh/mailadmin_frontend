/* NAV SIDEBAR
 * Context-sensitive links for additional actions.
============================================================================= */


;(function() {
  'use strict';

  let menuButton = document.getElementsByClassName('js-sidebar-button');
  let sidebar = document.getElementsByClassName('js-sidebar')[0];

  function toggleSidebar() {
    sidebar.classList.toggle('is-visible');
  }

  for (let i = 0; i < menuButton.length; i++) {
    menuButton[i].addEventListener('click', toggleSidebar);
  }
})();
