/* 루트 디렉토리 설정 -------------------------- */
var root = 'www'; // project라는 폴더 이름을 바꿀 수도 있다.

/*! 환경설정 모듈 정의/출력 © yamoo9.net, 2015 */
module.exports = {
	'root': root,
	// Browser-sync 옵션
	// http://www.browsersync.io/docs/options/
	// 'port': 9090 ==> 8000, 8080 써도 된다
	'browserSync': {
		'server'  : [ root ],
		'port'    : 9090,
		'notify'  : false // 알림창
	},

	// Node Sass 설정 : 브라우저 싱크
	// root + '/sass/**/*.{sass,scss}' ==> root는 'www' 가르키도, www 폴더 안에 sass/모든 하위폴더 .sass,scss 확장자로 컨버팅 
	// dest : destination ==> www/css 폴더에 최종으로 내 보낸다.
	'sass': {
		'src': root + '/sass/**/*.{sass,scss}',
		'dest': root + '/css',
		'options': {
			// compact, compressed, nested, expanded
			'outputStyle'    : 'expanded',
			//!ture, false ==> scss 사용하겠다
			'indentedSyntax' : true
		}
	},

	// Sourcemap 설정
	'sass_sourcemaps': './maps',

	// 브라우저 리스트 참고 URL
	// https://github.com/ai/browserslist#queries
	// 밴더 프리픽스를 자동으로 붙여주는 기능
	'autoprefixer': [
		'> 1%',
		'last 2 versions'
	]
};