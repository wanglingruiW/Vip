const gulp = require('gulp');//gulp
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const connect = require('gulp-connect');//connect
const concat = require("gulp-concat");
const uglify = require('gulp-uglify');//uglify
const sass = require("gulp-sass-china");//sass

// ./   当前路径;
// **/* 无论层级无论任何内容;
gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dest/css'))
      .pipe(connect.reload());
});

//css的预编译器; => SASS;
 
gulp.task('connect', function() {
    connect.server({
      port: 8888,
      root:"dest",
      livereload:true
    });
    // run some headless tests with phantomjs
    // when process exits:
    // connect.serverClose();
});
 
gulp.task('babelparse', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'))
);//es6---es5

gulp.task('Imagemin', function () {
    gulp.src('./src/images/*.{png,jpg,gif,ico,jpeg}')
        .pipe(imagemin())
        .pipe(gulp.dest('./dest/img'));
});

gulp.task("index",function(){
    return gulp.src("./src/*.html")
           .pipe(gulp.dest("./dest"))
           .pipe(connect.reload())
});


gulp.task('scripts', function() {
    return gulp.src('src/libs/*.*')
            .pipe(gulp.dest("./dest/libs"))
            .pipe(connect.reload())
        })
//         .pipe(concat('all.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist'));
// });
gulp.task("watch",()=>{
    gulp.watch("./src/*.html",["index"])
    gulp.watch("./src/sass/**/*.scss",["sass"])
})

gulp.task("build",["scripts","index","Imagemin"])

gulp.task('default', ['connect', 'watch']);
