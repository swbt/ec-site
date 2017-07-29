var Login = {};

/**
 * 超簡易ログイン認証
 *
 * @param loginForm
 *            formエレメント
 * @return 成功時true,失敗時false
 */
Login.doLogin = function doLogin(loginForm) {

	// 空チェック
	if (loginForm.username.value == '') {
		return Login.doError('ユーザー名を入力してください。');
	}
	if (loginForm.password.value == '') {
		return Login.doError('パスワードを入力してください。');
	}

	// エラーなし
	return true;
}
/**
 * エラー時の動作
 *
 * @param msg
 *            エラーメッセージ
 * @return falseを返す
 */
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
		threshold : 0.9
	// フェードアウトの速さ
	});
	// ２つ目のsection
	$('.js-example-2').crossfade({
		start : 'img/Exterior_website.jpg', // スタートの画像URLを指定
		end : 'img/home-right.jpg', // フェードアウトする画像URLを指定
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
			fadeIn : 200,
			fadeOut : 800
		}
	});
});
// ハンバーガーメニュー部分
$('.menu').on('click', function() {
	$('#navigation').fadeToggle(600);
	$('.navigation_item').css({
		top : '30px',
		opacity : 0
	}).each(function(i) {
		$(this).delay(400 * i).animate({
			top : '0',
			opacity : 1
		}, 1500);
	})
});

		//letterfxの部分
//$(function() {
//	$(".spin").letterfx({
//		"fx" : "fade fly-bottom",
//		"backwards" : false,
//		"timing" : 250,
//		"fx_duration" : "1000ms",
//		"letter_end" : "stay",
//		"element_end" : "stay"
//	});
//});
//$(function() {
//	$("h1").letterfx({
//		"fx" : "fade fly-top",
//		"backwards" : false,
//		"timing" : 250,
//		"fx_duration" : "1000ms",
//		"letter_end" : "stay",
//		"element_end" : "stay"
//	});
//});

$(function() {
	// 引き金となる要素を設定
	var triggerNode = $("h1");
	// 画面スクロール毎に判定を行う
	$(window).scroll(function(){
		// 引き金となる要素の位置を取得
		var triggerNodePosition = $(triggerNode).offset().top - $(window).height();
		// 現在のスクロール位置が引き金要素の位置より下にあれば‥
		if ($(window).scrollTop() > triggerNodePosition) {
			$("h1").letterfx({
				"fx" : "fade fly-bottom",
				"backwards" : false,
				"timing" : 250,
				"fx_duration" : "1000ms",
				"letter_end" : "stay",
				"element_end" : "stay"
			});
		};
	});
});