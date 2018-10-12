define(["jquery"]),
  function($) {
      return {
        //加载头部
      loader: !(function() {
        $("#header").load("header.html");
      })(),
    };
  };
