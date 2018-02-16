$(function() {

    // For responsive sidebar menu
    $("a.sidebar-toggle").click(function() {
        $('.ui.sidebar').sidebar('toggle');
    });

    // Add deep anchor links to projects page.
    anchors.add('.projects .project-title, .post h2, .post h3, .post h4, .post h5');

    // Add Semantic UI related classes to tables.
    $('table').addClass('ui table');

    // Modals for the services page.
    $('.strategy .main-content').click(function() {
      $('.ui.modal.strategy').modal('show');
      if (document.activeElement != document.body) document.activeElement.blur();
    });

    $('.development .main-content').click(function() {
      $('.ui.modal.development').modal('show');
      if (document.activeElement != document.body) document.activeElement.blur();
    });

    $('.maintenance .main-content').click(function() {
      $('.ui.modal.maintenance').modal('show');
      if (document.activeElement != document.body) document.activeElement.blur();
    });

    $('.advisory .main-content').click(function() {
      $('.ui.modal.advisory').modal('show');
      if (document.activeElement != document.body) document.activeElement.blur();
    });
});
