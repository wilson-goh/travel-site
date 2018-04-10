const gulp = require("gulp"),
      browserSync = require("browser-sync").create(), // only this method
      watch = require("gulp-watch");

gulp.task('watch',()=>{
  const baseDir = "app",
        watchHtml = "./app/index.html",
        watchCss = "./app/assets/styles/**/*.css",
        watchScripts =  "./app/assets/scripts/**/*.js";//ts";//


  browserSync.init({
    notify : false,
    server :{ baseDir : baseDir  }
  });
  // watch index.html
  watch(watchHtml, () => browserSync.reload());
  // watch any folder under styles with extension css **/*.css
  watch(watchCss, () => gulp.start("cssInject"));

  watch(watchScripts, () => gulp.start("reloadBrowserByScripts"));

});

gulp.task("cssInject", ["styles"],()=>{
  const src = "./app/temp/styles/styles.css";
  return gulp.src(src).pipe(browserSync.stream());
});

gulp.task("reloadBrowserByScripts",["scripts"],()=>{
  browserSync.reload();
});
