const gulp = require("gulp"),
      rename = require("gulp-rename"),
      del = require("del"),
      svgSprite = require("gulp-svg-sprite");

const svg2png = require("gulp-svg2png");


const orgSvgSrc = "./app/assets/images/icons/**/*.svg",
      tempSpriteDir = "./app/temp/sprite",
      tempSpriteFiles = tempSpriteDir +"/css/*.{svg,png}",
      tempSpriteSVG = tempSpriteDir +"/css/**/*.svg",
      targetSpriteDir = "./app/assets/images/sprites" ,
      targetSpriteCSSDir = "./app/assets/styles/modules/" ;

/* get all imag(icon)*/
const config = {
/*
  shape :{
    spacing : {
      padding : 1
    }
  }, */
  mode:{
    css:{
      /* // work
      variables : {
        replaceSvgWithPng : function(){
        return function(sprite,render){
            return render(sprite).split(".svg").join(".png");
          }
        }
      }, */
      variables : {
        replaceSvgWithPng : () =>
          (sprite,render)=>render(sprite).split(".svg").join(".png")
      },
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

gulp.task("createPngfromSvg",["createSprite"],()=>{
  return gulp.src(tempSpriteDir+"/css/*.svg")
    .pipe(svg2png())
    .pipe(gulp.dest(tempSpriteDir+"/css"));
});
gulp.task("copySpriteSvg",
  ["createPngfromSvg","createSprite"],
  ()=>{
    return gulp.src(tempSpriteFiles)
    .pipe(gulp.dest(targetSpriteDir));
});

gulp.task("copySpriteCSS",["createSprite"],()=>{
  return gulp.src(tempSpriteDir +"/css/sprite.css")
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest(targetSpriteCSSDir));
});

gulp.task("svgSprite",
  ["endClean","beginClean","copySpriteSvg","createPngfromSvg","copySpriteCSS","createSprite"]);
