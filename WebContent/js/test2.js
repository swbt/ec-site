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

//メニュー部分
$(function(){
$('#nav li ul').hide();
$('#nav li').hover(function(){
$('>ul:not(:animated)',this).slideDown('fast');
},function(){
	$('>ul',this).slideUp('fast');
});
});
