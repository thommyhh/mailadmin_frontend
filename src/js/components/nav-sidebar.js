/* NAV SIDEBAR
 * Context-sensitive links for additional actions.
============================================================================= */


;(function() {
  'use strict';

  let menuButton   = document.getElementsByClassName('js-sidebar-button');
  let sidebarCover = document.getElementsByClassName('js-sidebar-cover')[0];
  let sidebar      = document.getElementsByClassName('js-sidebar')[0];

  function toggleSidebar() {
    sidebar.classList.toggle('is-visible');
  }

  for (let i = 0; i < menuButton.length; i++) {
    menuButton[i].addEventListener('click', toggleSidebar);
  }

  if (sidebarCover) {
    sidebarCover.addEventListener('click', toggleSidebar);
  }
})();
