const { src, dest, series } = require("gulp");
const del = require("del");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("autoprefixer");

/**
 * clean the dist folder
 * before any re-build
 */
const clean = async () => {
  return del("./dist", { force: true });
};

/**
 * compile the main.scss
 * into a gigantic css file
 * using dart-sass
 */
sass.compiler = require("sass");
const scssCompile = () => {
  return src("./scss/cluster.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./dist"));
};

/**
 * exports the tasks
 * as default tasks
 */
if (process.env.NODE_ENV === "production") {
  exports.default = series(clean, scssCompile);
} else {
  exports.default = series(clean, scssCompile);
}
