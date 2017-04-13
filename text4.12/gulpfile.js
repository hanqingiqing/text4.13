var gulp=require("gulp");
var server=require('gulp-webserver');
gulp.task('server',function(){
    gulp.watch('/*.html')
  
    return gulp.src('./')
    .pipe(server({
        livereload: true,
        directoryListing: true,
        open: 'index.html'
    }))
})