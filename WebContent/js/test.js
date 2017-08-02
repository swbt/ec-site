
var Login = {};
/*超簡易ログイン認証*/
Login.doLogin = function doLogin(loginForm) {
	// 空チェック
	if (loginForm.username.value == '') {
		return Login.doError('ユーザー名を入力してください。');
	}
	if (loginForm.password.value == '') {
		return Login.doError('パスワードを入力してください。');
	}
	return true;
}
/*エラー時の動作*/
Login.doError = function doError(msg) {
	alert(msg);
	return false;
}

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
$(function(){
	setTimeout(function(){
		$('.banner js-example-1').remove('.banner js-example-1');
		$(document).ready(function() {
			$('body').fadeIn(3000);
			},390);
	});
});
//ロードしたらゆっくり表示させる
$(document).ready(function() {
$('body').fadeIn(2000);
});

//okvideo部分
$(function(){
    $(".video").okvideo({ source: 'https://vimeo.com/129901967',
    	 adproof: true,
    	 volume: 0,
         loop: true,
    	 })
  });

// crossfade部分
$(function() {
	// １つ目のsection
	$('.js-example-1').crossfade({
		start : 'img/masumi2.jpg', // スタートの画像URLを指定
		end : 'img/masumikura.jpg', // フェードアウトする画像URLを指定
		threshold : 0.5,
		backgroundPosition : 'center center' // 画像の位置

	});
	// ２つ目のsection
	$('.js-example-2').crossfade({
		start : 'img/kurahito2.jpg', // スタートの画像URLを指定
		end : 'img/kawa.jpg', // フェードアウトする画像URLを指定
		threshold : 0.5, // フェードアウトの速さ
		backgroundPosition : 'center center' // 画像の位置
	});
	$('.js-example-3').crossfade({
		start : 'img/hito.png', // スタートの画像URLを指定
		end : 'img/masumi4.jpg', // フェードアウトする画像URLを指定
		threshold : 0.5, // フェードアウトの速さ
		backgroundPosition : 'center center' // 画像の位置
	});
});
//ブラックアンドホワイト部分
$(function () {
	$('.bwWrapper').BlackAndWhite({
		// エフェクト有無を設定
		hoverEffect : true,
		// エフェクトの順番を逆に設定
		invertHoverEffect : false,
		// フェードのスピードを設定
		speed : {
			fadeIn : 500,
			fadeOut : 700
		}
	});
});
// ハンバーガーメニュー部分
$('.menu').on('click', function() {
	$('#navigation').fadeToggle(700);
	$('.navigation_item').css({
		top : '30px',
		opacity : 0
	}).each(function(i) {
		$(this).delay(700 * i).animate({
			top : '0',
			opacity : 1
		}, 1500);
	})
});

//見本
//$(function() {
//	// 引き金となる要素を設定
//	var triggerNode = $("h1");
//	// 画面スクロール毎に判定を行う
//	$(window).scroll(function(){
//		// 引き金となる要素の位置を取得
//		var triggerNodePosition = $(triggerNode).offset().top - $(window).height();
//		// 現在のスクロール位置が引き金要素の位置より下にあれば‥
//		if ($(window).scrollTop() > triggerNodePosition) {
//			$("h1").letterfx({
//				"fx" : "fade fly-bottom",
//				"backwards" : false,
//				"timing" : 250,
//				"fx_duration" : "1000ms",
//				"letter_end" : "stay",
//				"element_end" : "stay"
//			});
//		};
//	});
//});

//inviewとanimate_cssの部分
$(function() {
	  $('.index').on('inview', function(event, isInView) {
	    if (isInView) {
	    //表示領域に入った時
	      $(this).addClass('fadeInDown');
	    } else {
	    //表示領域から出た時
      $(this).removeClass('fadeInDown');
	      $(this).css('opacity',0); //非表示にしておく
  }
	  });
	  $('.story_text').on('inview', function(event, isInView) {
		    if (isInView) {
		    //表示領域に入った時
		      $(this).addClass('fadeInUp');
		    } else {
		    //表示領域から出た時
	      $(this).removeClass('fadeInUp');
		      $(this).css('opacity',0); //非表示にしておく
	  }
		  });
	  $('.kerning_js').on('inview', function(event, isInView) {
		    if (isInView) {
		    //表示領域に入った時
		      $(this).addClass('fadeIn');
		    } else {
		    //表示領域から出た時
	      $(this).removeClass('fadeIn');
		      $(this).css('opacity',0); //非表示にしておく
	  }
		  });
	  $('.shop_info2').on('inview', function(event, isInView) {
		    if (isInView) {
		    //表示領域に入った時
		      $(this).addClass('fadeInDown');
		    } else {
		    //表示領域から出た時
	      $(this).removeClass('fadeInDown');
		      $(this).css('opacity',0); //非表示にしておく
	  }
		  });
	});

//sliderの部分
$(function() {
    $(".center-item").slick({
          infinite: true,
          dots:false,
          speed: 500,
          slidesToShow: 4,
          centerMode: true, //要素を中央寄せ
          centerPadding:'100px', //両サイドの見えている部分のサイズ
          autoplay:true, //自動再生
  responsive: [{
              breakpoint: 480,
                   settings: {
                        centerMode: false,
              }
         }]
     });
});
var scene = document.getElementById('scene')
//or, if you use jQuery
var scene = $('#scene').get(0)

var parallax = new Parallax(scene)

