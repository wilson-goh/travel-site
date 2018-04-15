/*below is the basic config for babel */
const path = require("path");
module.exports = {
  mode : "none",
  entry : {
    App : "./app/assets/scripts/app.js",
    Vendor : "./app/assets/scripts/vendor.js",
  },
  output : {
    /* webpack needs to know
    absolute path not the relative path
    path : "./app/temp/scripts",
    */
    path : path.resolve(__dirname,"./app/temp/scripts"),
    filename : "[name].js"//"App.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ["babel-loader"]
    }]
  }
}
/* typescript */
/*
const path = require("path");
module.exports = {
  mode : "none",
  entry : "./app/assets/scripts/App.ts",
  output : {
    path : path.resolve(__dirname,"./app/temp/scripts"),
    filename : "App.js"
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: ["ts-loader"]
    }]
  }
}
*/

/*
const path = require("path");
module.exports = {
  entry : "./app/assets/scripts/App.js",
  output : {
    /* webpack needs to know
    absolute path not the relative path
    path : "./app/temp/scripts",
    *//*
    path : path.resolve(__dirname,"/app/temp/scripts"),
    filename : "App.js"
  }
}
*/
/*
module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
*/
