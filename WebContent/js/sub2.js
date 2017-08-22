

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


//$(document).ready(function() {
//        $('#calendar').fullCalendar({
//        	header: {
//                left: 'prev,next today',
//                center: 'title',
//                right: 'month,basicWeek,basicDay'
//             },
//             buttonText: {
//                 today: '今日'
//             },
//             lang: "ja",
//             firstDay : 1,
//             navLinks: true, // can click day/week names to navigate views
// 			editable: true,
// 			eventLimit: true, // allow "more" link when too many events
//			events: [
//				{
//					title: 'All Day Event',
//					start: '2017-08-01'
//				},
//				{
//					title: 'Long Event',
//					start: '2017-08-07',
//					end: '2017-08-10'
//				}
//			],
//             monthNames: ['１月','２月','３月','４月','５月','６月','７月','８月','９月','１０月','１１月','１２月'],
//         	monthNamesShort: ['１月','２月','３月','４月','５月','６月','７月','８月','９月','１０月','１１月','１２月'],
//         	dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
//         	dayNamesShort: ['日','月','火','水','木','金','土'],
//
//         });
//    });
//$('#btn-calender').click(function() {
//
//					$("#modal-body").empty();
//					$("#modal-body").append('<div id="calendar"></div>');
//
//					$('#modaldialog').modal('show');
//
//					// modalを表示した後に0.2秒スリープ
//					$(this).delay(200).queue(function() {
//
//						$('#calendar').fullCalendar({
//							header : {
//								left : 'prev,next today',
//								center : 'title',
//								right : 'month'
//							},
//							lang : 'ja',
//							editable : false,
//							eventLimit : true, // allow "more" link when too many events
//							eventSources : [ {
//								url : '/xxxx/xxxx.json',
//							}, ],
//						});
//
//						$(this).dequeue();
//					});
//				});