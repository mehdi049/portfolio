$(function () {
  /** open /close menu */
  $(".navbar-toggler").click(function () {
    let expended = $(this).attr("aria-expanded");
    $(this).attr("aria-expanded", "" + expended === "false");
    $("#navbar-content").toggle(500);
  });

  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-toggler").attr("aria-expanded", "false");
    $("#navbar-content").hide(500);
  });

  /** read more */
  $("#read-more-button").click(function () {
    let status = $("#read-more-content").attr("status");

    if (status === "closed") {
      $(this).text("read less");
      $("#read-more-content").show(100);
      $("#read-more-content").attr("status", "opened");
      if ($(window).width() >= 992)
        $("#meet-sabrina h1").css("margin-top", "160px");
    } else {
      $(this).text("read more");
      $("#read-more-content").hide(100);
      $("#read-more-content").attr("status", "closed");
      if ($(window).width() >= 992)
        $("#meet-sabrina h1").css("margin-top", "223px");

      var target = (target = $("[id=meet-sabrina-header"));

      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 30,
          },
          100,
          function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.focus();
            }
          }
        );
      }
    }
  });
});
