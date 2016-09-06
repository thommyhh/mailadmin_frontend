/* NAV SIDEBAR
 * Context-sensitive links for additional actions.
============================================================================= */


(function() {
  'use strict';

  let button  = document.getElementsByClassName('js-sidebar-button');
  let cover   = document.getElementsByClassName('js-sidebar-cover')[0];
  let sidebar = document.getElementsByClassName('js-sidebar')[0];

  function toggleSidebar() {
    sidebar.classList.toggle('is-visible');
    cover.classList.toggle('is-visible');
  }

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', toggleSidebar);
  }

  if (cover) {
    cover.addEventListener('click', toggleSidebar);
  }
})();
