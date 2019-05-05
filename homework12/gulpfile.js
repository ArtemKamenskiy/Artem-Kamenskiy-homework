const gulp = require('gulp');
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

const output = "dist/";

gulp.task('ts', function () {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest(output));
});