var gulp = require('gulp'); 

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// 静态服务器
// 设置静态目录
gulp.task('start', function() {
    browserSync.init({
    	//设置静态目录
        server: {
            baseDir: "./static"
        }
    });
    //监听某文件的改变
    gulp.watch("./static/*.html").on('change', reload);
});