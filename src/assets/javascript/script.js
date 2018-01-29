$(function() {

    // For responsive sidebar menu
    $("a.sidebar-toggle").click(function() {
        $('.ui.sidebar').sidebar('toggle');
    });

    // Add deep anchor links to projects page.
    anchors.add('.projects .project-title, .post h2, .post h3, .post h4, .post h5');

    // Add Semantic UI related classes to tables.
    $('table').addClass('ui table');
});
