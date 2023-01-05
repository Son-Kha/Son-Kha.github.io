// Wait for the document to load before running the script
(function ($) {
  // use Javascript and the URL #fragment to hide/show different parts of the page
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Linking_to_an_element_on_the_same_page
  $(window).on("load hashchange", function () {
    // hide all content regions, then show the content-region specified in the URL hash, otherwise default to first menu item
    $(".content-region").hide();

    // Remove any active classes on the main-menu
    $(".main-menu a").removeClass("active");
    var region =
      location.hash.toString() || $(".main-menu a:first").attr("href");
    $(region).show();
    $('.main-menu a[href="' + region + '"]').addClass("active");
  });
})(jQuery);
