var gulp=require("gulp"),
	less=require("gulp-less"),
	watch=require("gulp-watch");



gulp.task("testLess",function(){
	gulp.src("css/*.css")
		.pipe(less())
		.pipe(gulp.dest("css"));
})

gulp.task("watch",function(){
	watch(("css/*.less"),function(){
		gulp.start("testLess");
	});
})

gulp.task("default",["watch"]);