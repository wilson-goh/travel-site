const gulp = require("gulp"),
      del = require("del"),
      usemin = require("gulp-usemin"), // collaborate revision & compression
      rev = require("gulp-rev"), // handle revision
      cssnano = require("gulp-cssnano"), // handle css compression
      uglify = require("gulp-uglify"), // handle js compression
      htmlmin = require('gulp-htmlmin'),
      imagemin = require("gulp-imagemin"),
      browserSync = require("browser-sync").create(); // only this method;

const dist = "docs" ;


/* step 0: start with a clean dist folder before gulp build*/
gulp.task("delDist",["svgSprite"],()=> del("./"+dist));

/*step1: optimize images using imagemin
  and move them dist/assets/images*/
gulp.task("optimizeImages",["delDist"],()=>
  gulp.src([
      "./app/assets/images/**/*", // include
      "!./app/assets/images/icons", // ! : exclude
      "!./app/assets/images/icons/**/*"
    ])
    .pipe(imagemin({
        progressive : true, // min jpg
        interlaced : true,  // min git image/icon
        multipass : true    // min svg files
    }))
    .pipe(gulp.dest("./"+dist+"/assets/images")));

gulp.task("useminTrigger",["delDist"],()=>gulp.start("useminRevUglify"));

/*step 2: handle {js,css} and index.html file using usemin
2.1 copy to dist,
2.2 compress and
2.3 revision */
gulp.task("useminRevUglify",["scripts", "styles"],()=>
  gulp.src(["./app/index.html"])
    .pipe(usemin({
      css : [cssnano(),rev()],
      html: [ htmlmin({ collapseWhitespace: true }) ],
      js : [rev()],
      js1 : [ uglify(),rev()]
      /*
      css : [
        function(){
          return rev();
        },
        function(){
          return cssnano();
        }
      ],
      js : [
        function(){
          return rev();
        } /*,
        function(){
          return uglify();
        } *//*
      ] */
    }))
    .pipe(gulp.dest("./"+ dist)));//("./dist")));

gulp.task("build",["optimizeImages","useminTrigger","delDist"]);

gulp.task('preview',["build"],()=>{
  // const baseDir = dist ;//"dist";
  browserSync.init({
    notify : false,
    server :{ baseDir : dist } //baseDir  }
  });
});
