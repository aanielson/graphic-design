$(document).ready(function () {
    // SideNav Button Initialization
    // SideNav Default Options
    $('.button-collapse').sideNav2({
        edge: 'left', // Choose the horizontal origin
        closeOnClick: false, // Closes side-nav on &lt;a&gt; clicks, useful for Angular/Meteor
        breakpoint: 1440, // Breakpoint for button collapse
        menuWidth: 240, // Width for sidenav
        timeDurationOpen: 500, // Time duration open menu
        timeDurationClose: 500, // Time duration open menu
        timeDurationOverlayOpen: 200, // Time duration open overlay
        timeDurationOverlayClose: 200, // Time duration close overlay
        easingOpen: 'easeInOutQuad', // Open animation
        easingClose: 'easeInOutQuad', // Close animation
        showOverlay: true, // Display overflay
        showCloseButton: false, // Append close button into siednav
        slim: false, // turn on slime mode
        onOpen: null, // callback function
        onClose: null, // callback function
        mode: over // change sidenav mode
    });
    // Show sideNav
    $('.button-expand').onClick('show');
    // Hide sideNav
    $('.button-collapse').onClick('hide');

    // $(".button-collapse").sideNav2();
    //     // SideNav Scrollbar Initialization
    //     var sideNavScrollbar = document.querySelector('.custom-scrollbar');
    //     var ps = new PerfectScrollbar(sideNavScrollbar);
    // });
});