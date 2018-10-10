({
    paths: {//打包文件的路径,
        main: './src/js/main',
		jquery:'./src/js/jquery',
        index: './src/js/index'
    },
    name: 'main', // 模块入口
    out: "dist/main-build.js", // 输出压缩后的文件位置
})