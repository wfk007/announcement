var gulp = require("gulp");
var fs = require("fs");

var uglify = require("gulp-uglify");
var pump = require("pump");

//前缀和兼容性 task
gulp.task("prefixAndCompatibile", () => {
  var postcss = require("gulp-postcss");
  // var sourcemaps = require('gulp-sourcemaps');
  var autoprefixer = require("autoprefixer");
  var doiuse = require("doiuse");
  var plugins = [
    autoprefixer(),
    doiuse({
      browsers: ["ie >= 9", "> 1%"],
      ignore: ["rem"], // an optional array of features to ignore
      //   an optional array of file globs to match against original source file path, to ignore
      //   ignoreFiles: ['css/animate.min.css', 'index.min.css', 'login.min.css'],
      onFeatureUsage: function(usageInfo) {
        fs.appendFile(
          "doiuse.txt",
          usageInfo.message.substring(
            usageInfo.message.indexOf(" "),
            usageInfo.message.length
          ) + "\n",
          err => {
            if (err) throw err;
            console.log("The file has been saved!");
          }
        );
      }
    })
    // autoprefixer({
    //   browsers: ['last 1 version']
    // }),
  ];
  return (
    gulp
      .src(["./src/css/announcement.css", "./src/css/announcement.min.css"], {
        //如果该项被设置为 false，那么将会以 stream 方式返回 file.contents 而不是文件 buffer 的形式。这在处理一些大文件的时候将会很有用。**注意：**插件可能并不会实现对 stream 的支持。
        buffer: true,
        //如果该项被设置为 false， 那么 file.contents 会返回空值（null），也就是并不会去读取文件。
        read: true
        //base: 'test' String 默认值： 将会加在 glob 之前
      })
      // .pipe(sourcemaps.init())
      .pipe(postcss(plugins))
      // .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest("./dist"))
  );
});

gulp.task("compressJs", function(cb) {
  pump([gulp.src("./src/js/announcement.babel.js"), uglify(), gulp.dest("./dist")], cb);
});
