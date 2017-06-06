// import gulp
var gulp = require('gulp');

// import components
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('dev', function() {
    // js
    gulp.src('./src/js/*.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['transform-runtime']
        }))
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./dist/js'));
    // css
    gulp.src('./src/css/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(gulp.dest('./dist/css'));
    // images
    gulp.src('./src/images/**')
        .pipe(gulp.dest('./dist/images'));
    // html
    gulp.src('./src/*.htm')
        .pipe(plumber())
        .pipe(gulp.dest('./dist'));
});

gulp.task('dev-server', function() {
    browserSync.init({
        port: 8080,
        open: true,
        server: {
            baseDir: "dist",
            index: "main.htm"
        }
    });
    gulp.watch('./src/js/*.js', function(e){
        gulp.src(e.path)
            .pipe(plumber())
            .pipe(babel({
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }))
            .pipe(concat('index.js'))
            .pipe(gulp.dest('./dist/js'))
            .pipe(reload({ stream: true }));
        console.log(e.type, '-' , e.path);
    });
    gulp.watch('./src/css/*.scss', function(e){
        gulp.src(e.path)
            .pipe(plumber())
            .pipe(sass())
            .pipe(postcss([ autoprefixer({ browsers: ['last 4 versions'] }) ]))
            .pipe(gulp.dest('./dist/css'))
            .pipe(reload({ stream: true }));
        console.log(e.type, '-' , e.path);
    });
    gulp.watch('./src/images/**', function(e){
        gulp.src(e.path)
            .pipe(gulp.dest('./dist/images'))
            .pipe(reload({ stream: true }));
        console.log(e.type, '-' , e.path);
    });
    gulp.watch('./src/*.htm', function(e){
        gulp.src(e.path)
            .pipe(plumber())
            .pipe(gulp.dest('./dist'))
            .pipe(reload({ stream: true }));
        console.log(e.type, '-' , e.path);
    });
});

gulp.task('build', function() {
    gulp.src(['./src/js/*.js'])
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['transform-runtime']
        }))
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
    gulp.src('./src/css/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([ autoprefixer({ browsers: ['last 4 versions'] }) ]))
        .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./build/css'));
    gulp.src('./src/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
    gulp.src('src/**/*.htm')
        .pipe(plumber())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['dev', 'dev-server']);
