
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});
;(function (d, $) {

	  var $pagetop = isMobile()?$('.pagetop'):
	  (function(){
	   return $('.pagetop').removeClass('pagetop').addClass('pagetop2');
	  })(), // タッチデバイスでなければ、pagetopをpagetop2に差し替える
	  pagetop_offset = 400;

	  // ページトップをクリックするとページの先頭へ戻る
	  $pagetop.on('click', function(e){
	      e.preventDefault();
	      var _dest = $($(this).find('a').attr('href')).offset().top;
	      $('html, body').animate({
	        scrollTop: _dest
	      }, 1200, 'easeInOutQuart');
	  });

	  // 一定量スクロールしたらページトップボタンをフェードイン
	  if( !isMobile() ) {
	   $pagetop.hide();
	   $(window).on('scroll', function () {
	    if ($(this).scrollTop() > pagetop_offset) {
	     $pagetop.fadeIn(400);
	    } else {
	     $pagetop.fadeOut(400);
	    }
	   });
	  }

	  // タッチデバイス（スマートフォンなど）かどうかを判定する関数
	  function isMobile(){
	   return typeof window.orientation != "undefined";
	  }

	})(document, jQuery);
(function(){

	  var options = {
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

	  //　変数の初期化と要素のキャッシュ
	  var
	    $window = $(window),
	    $contents = $('#contentContainer'),
	    $background = $('<div id="background">').prependTo($contents),
	    imgs = [];

	  //　初期設定
	  function init() {
	    //　画像のプリロード
	    var _imgspath = options.images.path,
	    _imgsdir = options.images.dir,
	    _rnd = Math.floor(Math.random()*_imgspath.length);

	    for(var i = 0; len = _imgspath.length, i < len; i++){
	     imgs.push(jQuery("<img>").attr("src", _imgsdir + _imgspath[i]));
	    }
	    imgs.current = _rnd;

	    setTimeout( function(){
	      changeBgImage(_rnd);
	      $contents.css('background','none').fadeIn();
	      }, 1200);

	    resize();
	  };

	  //　背景画像の切り替え処理
	  function changeBgImage(_cur) {
	    var _images = options.images,  _$img;

	    _cur = _cur > _images.path.length-1 ? 0 : _cur;
	    _$img = imgs[_cur].appendTo($background).hide();
	    _images.current = ++_cur;

	    setTimeout( function(){ adjustImage(_$img) }, 100);
	    setTimeout( function(){ changeBgImage(_cur) }, options.images.duration || 2000);
	  }

	  //　背景画像が画面中央に配置されるように調整
	  function adjustImage(_obj) {
	   var
	   ww = $window.width(),
	   wh = $window.height(),
	   iw = _obj.width(),
	   ih = _obj.height(),
	   scale = Math.max( ww / iw, wh / ih ),
	   sw = Math.floor( iw * scale ),
	   sh = Math.floor( ih * scale ),
	   moveX = Math.floor( (ww - sw) / 2 ),
	   moveY = Math.floor( (wh - sh) / 2 );

	   _obj.css({
	      width: sw,
	      height: sh,
	      left : moveX,
	      top : moveY
	   });
	   _obj.fadeIn(1000);
	  }

	  //　ブラウザウィンドウサイズに合わせて画像枠をリサイズ
	  function resize() {
	    var
	    ww = $window.width(),
	    wh = $window.height(),
	    _opw = options.minWidth,
	    _oph = options.minHeight,
	    _res = {
	      w: _opw > ww ? _opw : ww,
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

	  $window.on('resize', resize);
	  $window.on('load', function(){
	   init();
	  });

	}());