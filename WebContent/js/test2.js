$(document).ready(function(){

	//クッキーにて訪問数をカウント
window.onload = function () {
    // クッキーに保存した訪問回数を取得し、変数「$count」に格納
    var $count = getCookie( 'sampleNumberOfVisits' );
    if( !$count ){ // 変数「$count」が空の場合の処理
        setCookie( 'sampleNumberOfVisits', 1, 1 );
    }else{ // 変数「$count」が空でない場合の処理
        setCookie( 'sampleNumberOfVisits', ++$count, 1 );
    }
    // 訪問回数を表示する関数を呼び出す
    displayCookie( 'sampleNumberOfVisits' );
}

// クッキーを設定する関数
function setCookie( $cookieName, $cookieValue, $days ){
    // Dateオブジェクトを生成
    var $dateObject = new Date();
    // クッキーの有効期限を示すDateオブジェクトを生成
    $dateObject.setTime( $dateObject.getTime() + ( $days*24*60*60*1000 ) );
    // 有効期限をグリニッジ標準時に変換
    // 有効期限をクッキーに設定するための文字列を、変数「$expires」に代入
    var $expires = "expires=" + $dateObject.toGMTString();
    // 有効期限付きでクッキーを設定
    document.cookie = $cookieName + "=" + $cookieValue + "; " + $expires;
}

// クッキーを取得する関数
function getCookie( $cookieName ){

    // 「;」区切りで分割し、配列「$cookies」に格納
    var $cookies = document.cookie.split(';');

    // クッキーの数だけループ
    for( var $i=0; $i < $cookies.length; $i++ ){

        // クッキーを「=」区切りで分割し、配列「$cookie」に格納
        var $cookie = $cookies[$i].trim().split( '=' );

        // クッキー名が仮引数「$cookieName」と同じであれば値を返す
        if( $cookie[0] == $cookieName ){
            return $cookie[1];
        }
    }
    return "";
}
// クッキーを削除する関数
function deleteCookie( $cookieName ){
    // 過ぎた有効期限を設定することで削除できる
    document.cookie = $cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // 訪問回数を表示する関数を呼び出す
    displayCookie( $cookieName );
}
// 訪問回数を表示する関数
function displayCookie( $cookieName ){
    // クッキーに保存した訪問回数を取得
    var $cookieValue = getCookie( $cookieName );
    // 訪問回数を表示
    document.getElementById( 'sampleOutput' ).innerHTML = $cookieValue;
}

	 $('body').animsition({
	      inClass : 'fade-in-left', //ページをロードした際のアニメーション
	      outClass : 'zoom-out', //ページを出る際のアニメーション
	      /* 全アニメーションの名前
	      *  Fade: fade-in fade-out fade-in-up fade-out-up fade-in-down fade-out-down fade-in-left fade-out-left fade-in-right fade-out-right
	      *  Rotate: rotate-in rotate-out
	      *  Flip: flip-in-x flip-out-x flip-in-y flip-out-y
	      *  Zoom: zoom-in zoom-out
	      */
	      inDuration : 1500, //ページロードの際の表示までの時間
	      outDuration : 2000, //ページが消えるまでの時間
	      linkElement : '.animsition-link', //ページ遷移アニメーションをするクラス
	      // e.g. linkElement : 'a:not([target="_blank"]):not([href^=#])' //#やtarget="_blank"を除くaリンクを全て対象なども出来ます
	      touchSupport : true,
	      loading : true, //ロードを有効/無効
	      loadingParentElement : 'body', //ロード中を表示するラッパー要素
	      loadingClass : 'animsition-loading', //ロードと表示するクラス
	      unSupportCss : [ 'animation-duration',
	                       '-webkit-animation-duration',
	                       '-o-animation-duration'
	                     ]

	 });



// slickの部分
$(function() {
$(".center-item").slick({
	dots: false,
	autoplay: true,
	  infinite: true,
	  accessibility: true,
	  adaptiveHeight: false,
	  speed: 500,
	  fade: true,
	  cssEase: 'ease',
		  focusOnSelect: true,
	});
responsive: [{
  breakpoint: 480,
       settings: {
            centerMode: false,
  }
}]
});
// 商品メニュー部分
$(function(){
$('#nav li ul').hide();
$('#nav li').hover(function(){
$('>ul:not(:animated)',this).slideDown('fast');
},function(){
	$('>ul',this).slideUp('fast');
});
});

// ブラウザ背景画像（未定義）
(function(){
	var options={
			minWidth: 800,
			minHeight: 600,
	};

	var
	$window=$(window),
	$contains=$('#contentContainer'),
	$background=$('#background'),
	$img=$background.find('img');

	function adjustImage(_obj) {
		var
		ww=$window.width(),
		wh=$window.height(),
		iw=_obj.width(),
		ih=_obj.height(),
		scale=Math.max(ww / iw, wh /ih),
		sw=Math.floor(iw*scale),
		sh=Math.floor(ih*scale),
		moveX=Math.floor((ww-sw) / 2),
		moveY=Math.floor((wh-sh) / 2);

		_obj.css({
			width:sw,
			height:sh,
			left:moveX,
			top:moveY
		});
	}
	function resize(){
		var
		ww=$window.width(),
		wh=$window.height(),
		_opw=option.minWidth,
		_oph=option.minHeight,
		_res={
			w: _opw > ww ? _opw :ww,
			h: _oph > wh ? _oph : wh
		};
		$background.css({
			width: _res.w,
			height: _res.h
		});

		$contents.css({
			width: _res.w,
			height: _res.h
		});

		$background.find('img').each(function(){
			adjustImage($(this));
		});
	}

	$window.on('resize',resize);
	$window.on('load',function(){
		setTimeout(function(){
			$contents.css('background','none'),fadeIn();
		},400);
		resize();
	});

}());
// 写真をランダムで表示するスクリプト(未定義）
(function(){
	var options={
			minWidth: 800,
			minHeight: 600,
			images: {
				dir: 'img/',
				path: [
				'kaze4.jpg',
				'kura.jpg',
				'img/tedori2.png',
				'img/tama.jpg'
				],
				current: 0,
				duration: 8000
			}
	};
	function init(){
		var _imgspath= options.images.path,
		_imgsdir= options.images.dir,
		_rnd=Math.floor(Math.random()*_imgspath.length);

		for(var i=0; len= _imgspath.length, i< len; i++){
			imgs.push(jQuery("<img>").attr("src", _imgsdir + _imgspath[i]));
		}
		imgs.current= _rnd;

		setTimeout(function(){
			changeBgImage(_rnd);
			$contents.css('background', 'none').fadeIn();
		},1200);
		resize();
	};
	function changeBgImage(_cur){
		var _images= options.images, _$img;

		_cur= _cur > _images.path.length-1 ? 0 : _cur;
		_$img= imgs[_cur].appendTo($background).hide();
		_images.current= ++_cur;

		setTimeout( function(){ adjustImage(_$img)},100);
		setTimeout( function(){ changeBgImage(_cur)}, options.images.duration || 2000);
	}
})

$(function() {
	// 引き金となる要素を設定
	var triggerNode = $("#calendar");
	// 画面スクロール毎に判定を行う
	$(window).scroll(function(){
		// 引き金となる要素の位置を取得
		var triggerNodePosition = $(triggerNode).offset().top - $(window).height();
		// 現在のスクロール位置が引き金要素の位置より下にあれば‥
		if ($(window).scrollTop() > triggerNodePosition) {
			if ($(this).scrollTop() > pagetop_offset) {
			     $(".pagetop").fadeIn(400);
			    } else {
			     $(".pagetop").fadeOut(400);
			    }
		};
	});
});

});