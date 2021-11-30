const { src, dest, watch } = require('gulp');
const gulpPlumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');


function css( done ) {
	src( 'src/scss/**/*.scss' )
	.pipe( plumber() )
	.pipe( sass() )
	.pipe( dest( 'build/css' ) );
	done();
}

function dev( done ) {
	watch('src/scss/**/*.scss', css);
	done();
}

function images(done) {
	src( 'src/img/**/*' )
	.pipe( dest( 'build/img' ) );
	done();
}

exports.css = css;
exports.dev = dev;
exports.images = images;