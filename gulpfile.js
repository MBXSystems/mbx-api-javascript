var ts = require('gulp-typescript');
var merge = require('merge2');
var gulp = require('gulp');
var concat = require('gulp-concat');
var addsrc = require('gulp-add-src');
var uglify = require('gulp-uglify');
var karma = require('karma').server;

gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('default', ['test'], function() {
    var tsResult = gulp.src(['typings/cryptojs/cryptojs.d.ts','lib/!(*.js|*_test.ts)'])
        .pipe(ts({
            declarationFiles: true,
            noExternalResolve: true,
            sortOutput: true
        }));

    return merge([
        tsResult.dts
            .pipe(concat('mbx-api.d.ts'))
            .pipe(gulp.dest('.')),
        tsResult.js
            .pipe(addsrc('lib/*.js'))
            .pipe(concat('mbx-api.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('.'))
    ]);
});
