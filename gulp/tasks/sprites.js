const gulp = require("gulp"),
      rename = require("gulp-rename"),
      del = require("del"),
      svgSprite = require("gulp-svg-sprite");

const orgSvgSrc = "./app/assets/images/icons/**/*.svg",
      tempSpriteDir = "./app/temp/sprite",
      tempSpriteSVG = tempSpriteDir +"/css/**/*.svg",
      targetSpriteDir = "./app/assets/images/sprites" ,
      targetSpriteCSSDir = "./app/assets/styles/modules/" ;

/* get all imag(icon)*/
const config = {
  mode:{
    css:{
      sprite: "sprite.svg",
      render:{
        css:{ template :"./gulp/templates/sprite.css"  }
      }
    }
  }
};

// To assure the temp/sprites folder is clean before
gulp.task("beginClean",
  ()=> del([tempSpriteDir,targetSpriteDir]));

// after finish, clean out "./app/temp/sprite"
gulp.task("endClean",
  ["copySpriteSvg","copySpriteCSS"],
  ()=> del([tempSpriteDir]));

gulp.task("createSprite",["beginClean"],
  ()=>{
    return gulp.src(orgSvgSrc)
      .pipe(svgSprite(config))
      .pipe(gulp.dest(tempSpriteDir));
});

gulp.task("copySpriteSvg",["createSprite"],()=>{
  return gulp.src(tempSpriteSVG)
    .pipe(gulp.dest(targetSpriteDir));
});

gulp.task("copySpriteCSS",["createSprite"],()=>{
  return gulp.src(tempSpriteDir +"/css/sprite.css")
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest(targetSpriteCSSDir));
});

gulp.task("svgSprite",
  ["endClean","beginClean","copySpriteSvg","copySpriteCSS","createSprite"]);
