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
    flashsale: !(function() {
      $(".btnright").on("click", function() {
        var $x = $("#btnn").position().left;
        $("#btnn").animate({ left: $x - 1200 - 18 });
      });
      $(".btnleft").on("click", function() {
        var $x = $("#btnn").position().left;
        $("#btnn").animate({ left: $x + 1200 + 18 });
      });
    })(),
    //回到顶部
    backtop: setTimeout(function() {
      $("#box11").on("click", function() {
        $("body,html").animate({ scrollTop: 0 }, 400);
      });
    }, 100),
    //搜索引擎
    // se: setTimeout(function () {
    //   $('.header_input ._input')

    // },100),

    getdata: !(function() {
      // $.ajax({
      //   url: "http://10.31.162.23/work/zhe800/php/index_data.php",
      //   dataType:'json'
      // }).done(function(data) {
      //   console.log(data);
      //   var $strhtml = "";
      //   $.each(data, function(index, value) {
      //index:索引      value:索引对应的值.

      $.getJSON("http://10.31.162.23/work/zhe800/php/index_data.php", function(
        data
      ) {
        $strhtml += `<div>
					<a href="#">
						<img src="${value.imgurl}" alt="">
					</a>
					<span>
						<a href="#">${value.name}</a>
					
					<em>${value.day}</em></span>
					<b>${value.price}</b>
					<i>收藏品牌</i>
				</div>`;
      
      $(".update_content").html($strhtml);});
    })()
  };
});
