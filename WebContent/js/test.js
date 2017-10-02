
//ロードしたらゆっくり表示させる
//jQuery(document).ready(function(){
//	 $("body").animsition({
//	      inClass : 'fade-in-up', //ページをロードした際のアニメーション
//	      outClass : 'fade-out', //ページを出る際のアニメーション
//	      /* 全アニメーションの名前
//	      *  Fade: fade-in fade-out fade-in-up fade-out-up fade-in-down fade-out-down fade-in-left fade-out-left fade-in-right fade-out-right
//	      *  Rotate: rotate-in rotate-out
//	      *  Flip: flip-in-x flip-out-x flip-in-y flip-out-y
//	      *  Zoom: zoom-in zoom-out
//	      */
//	      inDuration : 1500, //ページロードの際の表示までの時間
//	      outDuration : 1200, //ページが消えるまでの時間
//	      linkElement : '.animsition-link', //ページ遷移アニメーションをするクラス
//	      // e.g. linkElement : 'a:not([target="_blank"]):not([href^=#])' //#やtarget="_blank"を除くaリンクを全て対象なども出来ます
//	      touchSupport : true,
//	      loading : true, //ロードを有効/無効
//	      loadingParentElement : 'body', //ロード中を表示するラッパー要素
//	      loadingClass : 'animsition-loading', //ロードと表示するクラス
//	      unSupportCss : [ 'animation-duration',
//	                       '-webkit-animation-duration',
//	                       '-o-animation-duration'
//	                     ]
//	 });
//	});
$(document).ready(function() {
	$('body').fadeIn(1200);
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
//blackAndWhite部分
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
// menu部分
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
	$(function() {
	    $('.navigation_item').click(function(){
	        $('#navigation').fadeOut(700);
	    });
	});
});


//inview・animate_cssの部分
$(function() {
	  $('.index').on('inview', function(event, isInView) {
	    if (isInView) {
	    //表示領域に入った時
	      $(this).addClass('fadeIn');
	    } else {
	    //表示領域から出た時
      $(this).removeClass('fadeIn');
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
		      $(this).addClass('fadeInUp');
		    } else {
		    //表示領域から出た時
	      $(this).removeClass('fadeInUp');
		      $(this).css('opacity',0); //非表示にしておく
	  }
		  });
	  $('').on('inview', function(event, isInView) {
		    if (isInView) {
		    //表示領域に入った時
		      $(this).addClass('fadeIn');
		    } else {
		    //表示領域から出た時
	      $(this).removeClass('fadeIn');
		      $(this).css('opacity',0); //非表示にしておく
	  }
		  });
	});

//slick部分
$(function() {
    $(".center-item").slick({
          infinite: true,
          dots:false,
          draggable: false,
          speed: 200,
          slidesToShow: 3,
          centerMode: true, //要素を中央寄せ
          centerPadding:'100px', //両サイドの見えている部分のサイズ
          autoplay:true, //自動再生
          accessibility: true,
          touchMove:false,
          arrows: false,
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

//top画面に戻る動作
$(function() {
    // #back-to-topを消す
    $('#back-to-top').hide();

    $(window).scroll(function() {
        $('#pos').text($(this).scrollTop());
        if ($(this).scrollTop() > 120) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // #back-to-topがクリックされたら上に戻る
    $('#back-to-top a').click(function() {
        $('body').animate({
            scrollTop:0
        }, 1200);
        return false;
    });
});

