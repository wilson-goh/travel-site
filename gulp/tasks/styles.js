// consider take care -> error
const gulp = require("gulp"),
      importCss = require("postcss-import"),
      autoprefixer = require("autoprefixer"),
      postcss = require("gulp-postcss"),
      nestedCss = require("postcss-nested"),
      mixinsCss = require("postcss-mixins"),
      varsCss = require("postcss-simple-vars");

gulp.task("styles",()=>{
  const src =  "./app/assets/styles/styles.css",
        dest = "./app/temp/styles" ;
        var that = this ;
  // async function needs 'return' to be aware when it is done/completed.
  return gulp.src(src)   // importCss needs to be placed very begining
    .pipe(postcss([ importCss,
                    mixinsCss,
                    varsCss,
                    nestedCss,
                    autoprefixer ]))
    // eror handling, does not break the watch ...
    //.on('error',()=>this.emit("end"))
    // with error info
    .on('error',(err)=>{
      console.error(err.toString());
      // do not need to include emit do not have emit function  //    that.emit('end');
    })
    .pipe(gulp.dest(dest));
});
