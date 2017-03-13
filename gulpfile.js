var gulp=require("gulp"),
	less=require("gulp-less"),
	// postcss=require("postcss"),
	Autoprefixer = require('gulp-autoprefixer'),
	// csslint = require('gulp-csslint'),
	watch=require("gulp-watch");



gulp.task("testLess",function(){
	gulp.src("css/*.less")
		.pipe(less())
		.pipe(gulp.dest("css"));
})

// gulp.task("csslint",function(){
// 	gulp.src("css/*.css")
// 		.pipe(csslint())
// 		.pipe(csslint.reporter());
// })

gulp.task("watch",function(){
	gulp.watch(("css/*.less"),function(){
		gulp.start("testLess");
	});
	// gulp.watch(("css/*.css"),function(){
	// 	gulp.start("csslint");
	// });
})

gulp.task("default",["watch"]);