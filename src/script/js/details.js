define(["jquery"], function($) {
  return {
    //详情页图片切换
    tabimg: !(function() {
      $(".detail_left ul li").on("mouseover", function() {
        $(this)
          .addClass("tabli")
          .siblings()
          .removeClass("tabli");
        $(".img0").attr(
          "src",
          $(this)
            .find("img")
            .attr("src")
        );
      });
    })()
  };
});
