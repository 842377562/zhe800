define(["jquery", "jquery.validate"]),
  function($) {
    return {
      //加载头部
      loader: !(function() {
        $("#header").load("header.html");
      })(),
      //开始注册
      //输入验证
      verify: !(function () {
        console.log(2)
        $("#form1").validate({
          rules: {
            username: {
              required: true,
              minlength: 2,
              maxlength: 10,
              remote: {
                url: "http://10.31.162.23/work/zhe800/php/reg.php", //后台处理程序
                type: "post", //数据发送方式
                data: {
                  //要传递的数据
                  name: function() {
                    return $("#username").val();
                  }
                }
              }
            },
            password: {
              required: true,
              minlength: 6
            },
            repass: {
              required: true,
              equalTo: "#password"
            }
          },
          messages: {
            username: {
              required: "用户名不能为空",
              minlength: "用户名不能小于2",
              maxlength: "用户名不能大于10",
              remote: "用户名已存在"
            },
            password: {
              required: "密码不能为空"
            },
            repass: {
              required: "密码重复不能为空"
            }
          }
        });

        $.validator.setDefaults({
          /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
          success: function(label) {
            label
              .text("√")
              .css("color", "green")
              .addClass("valid");
          }
        });
      })()
    };
  };
