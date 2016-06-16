/* NAV SIDEBAR
 * Context-sensitive links for additional actions.
============================================================================= */


;(function() {
  var menuButton = document.getElementsByClassName('js-sidebar-button');
  var sidebar = document.getElementsByClassName('js-sidebar')[0];

  var toggleSidebar = function() {
    sidebar.classList.toggle('is-visible');
  };

  for (var button of menuButton) {
    button.addEventListener('click', toggleSidebar);
  }
})();
