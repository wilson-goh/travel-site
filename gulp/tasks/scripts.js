const gulp = require("gulp"),
      webpack = require("webpack");

gulp.task("scripts",["modernizr"], (callback)=>
  webpack(require("../../webpack.config.js"),
    (error, statInfo)=>{
      if(error)
        console.error(error.toString());
      console.log("Stat Infor :",statInfo.toString());
      return callback();
      })
);
