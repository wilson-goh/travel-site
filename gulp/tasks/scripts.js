const gulp = require("gulp"),
      webpack = require("webpack");

gulp.task("scripts", (callback)=>{
  webpack(require("../../webpack.config.js"),(error, statInfo)=>{
    if(error) console.error(error.toString());
    console.log("Stat Infor :",statInfo.toString());
    callback();
  });
});
