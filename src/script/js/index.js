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
      //   url: "http://10.31.162.23/work/zhe800/php/index_data.php",
      $.ajax({
        url: "http://10.31.162.23/work/zhe800/php/index_data.php",
        dataType: "json"
      }).done(function(data) {
        var $str = "";
        $.each(data, function(index, value) {
          $str += `<div>
					<a href="#">
						<img src="${value.imgurl}" alt="">
					</a>
					<span>
						<a href="#">${value.name}</a>
					<em>${value.day}</em></span>
					<b>${value.price}</b>
					<i>收藏品牌</i>
				</div>`;
        });
        $(".update_content").html($str);
      });
    })(),
    //详情页数据
    tendata: !(function() {
      $.ajax({
        url: "http://10.31.162.23/work/zhe800/php/ten_data.php",
        dataType: "json"
      }).done(function (data) {
        var $str = "";
        $.each(data, function (index, value) {
          $str += `<li>
					<a href="details.html?sid=${value.sid}">
						<div><img src="${value.tu.split(',')[0]}" alt=""></div>
						<span>￥<em>${value.xianjia}</em></span>
						<p>${value.idname}</p>
					</a>
				</li>`;
        });
        $("#btnn").html($str);
      });
    })(),
    // 详情页渲染
    details: !function () { 
      $.ajax({
        url: "http://10.31.162.23/work/zhe800/php/details.php",
        data: {
          sid: location.search.substring(1).split('=')[1]
        },
        dataType: 'json'
      }).done(function (data) {
        $('.img0').attr('src',data[0].tu.split(',')[0]);
        $('.img1').attr('src',data[0].tu.split(',')[0]);
        $('.img2').attr('src',data[0].tu.split(',')[1]);
        $('.img3').attr('src',data[0].tu.split(',')[2]);
        $('.img4').attr('src',data[0].tu.split(',')[3]);
        $('.content_top h1').html(data[0].idname);
        $('.content_top h3').html(data[0].xiaoidname);
        $('.content strong i').html(data[0].xianjia);
        $('.content del i').html(data[0].yuanjia);
        $('.shop h4 a').html(data[0].shopname);
      })
    }(),































  };
});
