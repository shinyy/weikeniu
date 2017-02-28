var gulp=require("gulp"),
	less=require("gulp-less"),
	// postcss=require("postcss"),
	watch=require("gulp-watch");



gulp.task("testLess",function(){
	gulp.src("css/*.css")
		.pipe(less())
		// .pipe(postcss())
		.pipe(gulp.dest("css"));
})

gulp.task("watch",function(){
	watch(("css/*.less"),function(){
		gulp.start("testLess");
	});
})

gulp.task("default",["watch"]);