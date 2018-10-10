define(["jquery"], function($) {
  return {
    //加载结构
    loader: !(function() {
      $("#header").load("header.html");
      $("#footer").load("footer.html");
      $("#right_box").load("right_box.html");
    })(),
    //轮播图
    banner: !(function() {
      $(".banner_content b").on("mouseover", function() {
        $(this)
          .addClass("target")
          .siblings()
          .removeClass("target");
        $(".banner_content li")
          .eq($(this).index())
          .fadeIn("show")
          .siblings(".banner_content li")
          .hide();
      });
      //鼠标划入停止，移除开启
      $(".banner_content").hover(
        function() {
          clearInterval(time);
        },
        function() {
          time = setInterval(function() {
            if ($(".target").index() == 4) {
              $(".banner_content b")
                .eq(0)
                .addClass("target")
                .siblings()
                .removeClass("target");
            } else {
              $(".banner_content b")
                .eq($(".target").index() + 1)
                .addClass("target")
                .siblings()
                .removeClass("target");
            }
            $(".banner_content li")
              .eq($(".target").index())
              .fadeIn("800")
              .siblings(".banner_content li")
              .hide();
          }, 4000);
        }
      );
      var time = setInterval(function() {
        if ($(".target").index() == 4) {
          $(".banner_content b")
            .eq(0)
            .addClass("target")
            .siblings()
            .removeClass("target");
        } else {
          $(".banner_content b")
            .eq($(".target").index() + 1)
            .addClass("target")
            .siblings()
            .removeClass("target");
        }
        $(".banner_content li")
          .eq($(".target").index())
          .fadeIn("800")
          .siblings(".banner_content li")
          .hide();
      }, 4000);
    })(),
    //滑动滚轮出现顶部工具条
    scrTop: !(function() {
      $(window).on("scroll", function() {
        if ($(document).scrollTop() > 400) {
          $(".homepage").show();
        } else {
          $(".homepage").hide();
        }
      });
      })(),
    //限时秒杀幻灯片
      flashsale: !function () { 
        
          
      }(),

    //$.get('http://10.31.162.23/work/zhe800/php/index_data.php')
  };
});
