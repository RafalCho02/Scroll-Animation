$(document).ready(function () {
  const $boxes = $(".box");

  $(window).on("scroll", checkBoxes);

  checkBoxes();

  function checkBoxes() {
    const triggerBottom = ($(window).height() / 5) * 4;

    $boxes.each(function () {
      const boxTop = $(this).offset().top - $(window).scrollTop();

      if (boxTop < triggerBottom) {
        $(this).addClass("show");
      } else {
        $(this).removeClass("show");
      }
    });
  }
});
