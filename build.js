const sass = require("sass");

const compiled = sass.renderSync({
  file: "./src/styles/test.scss",
  outFile: "./dist/test.css",
});

console.log(compiled);
