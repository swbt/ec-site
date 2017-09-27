$(function() {
	$(".icon a").hover(function() {
		$(this).children("span").animate({
			opacity : "show",
			top : "-25px"
		}, "slow");
	}, function() {
		$(this).children("span").animate({
			opacity : "hide",
			top : "-10px"
		}, "fast");
	});

	$(".navi02").toggle(function() {
		$(".subnavi").animate({
			left : "250px"
		}, "slow");
		return false;
	}, function() {
		$(".subnavi").animate({
			left : "0"
		}, "fast");
	});

	$(".subnavi li:has(ul)").append("<span>&rsaquo;</span>");
	$(".subnavi li:has(ul)").toggle(function() {
		$(this).children("ul").animate({
			opacity : "show",
			left : "130px"
		}, "normal");
		return false;
	}, function() {
		$(this).children("ul").animate({
			opacity : "hide",
			left : "0px"
		}, "fast");
		return false;
	});
});

new function()
{
	function heightLine() {

		this.className = "heightLine";
		this.parentClassName = "heightLineParent"
		reg = new RegExp(this.className + "-([a-zA-Z0-9-_]+)", "i");
		objCN = new Array();
		var objAll = document.getElementsByTagName ? document
				.getElementsByTagName("*") : document.all;
		for (var i = 0; i < objAll.length; i++) {
			var eltClass = objAll[i].className.split(/\s+/);
			for (var j = 0; j < eltClass.length; j++) {
				if (eltClass[j] == this.className) {
					if (!objCN["main CN"])
						objCN["main CN"] = new Array();
					objCN["main CN"].push(objAll[i]);
					break;
				} else if (eltClass[j] == this.parentClassName) {
					if (!objCN["parent CN"])
						objCN["parent CN"] = new Array();
					objCN["parent CN"].push(objAll[i]);
					break;
				} else if (eltClass[j].match(reg)) {
					var OCN = eltClass[j].match(reg)
					if (!objCN[OCN])
						objCN[OCN] = new Array();
					objCN[OCN].push(objAll[i]);
					break;
				}
			}
		}

		// check font size
		var e = document.createElement("div");
		var s = document.createTextNode("S");
		e.appendChild(s);
		e.style.visibility = "hidden"
		e.style.position = "absolute"
		e.style.top = "0"
		document.body.appendChild(e);
		var defHeight = e.offsetHeight;

		changeBoxSize = function() {
			for ( var key in objCN) {
				if (objCN.hasOwnProperty(key)) {
					// parent type
					if (key == "parent CN") {
						for (var i = 0; i < objCN[key].length; i++) {
							var max_height = 0;
							var CCN = objCN[key][i].childNodes;
							for (var j = 0; j < CCN.length; j++) {
								if (CCN[j] && CCN[j].nodeType == 1) {
									CCN[j].style.height = "auto";
									max_height = max_height > CCN[j].offsetHeight ? max_height
											: CCN[j].offsetHeight;
								}
							}
							for (var j = 0; j < CCN.length; j++) {
								if (CCN[j].style) {
									var stylea = CCN[j].currentStyle
											|| document.defaultView
													.getComputedStyle(CCN[j],
															'');
									var newheight = max_height;
									if (stylea.paddingTop)
										newheight -= stylea.paddingTop.replace(
												"px", "");
									if (stylea.paddingBottom)
										newheight -= stylea.paddingBottom
												.replace("px", "");
									if (stylea.borderTopWidth
											&& stylea.borderTopWidth != "medium")
										newheight -= stylea.borderTopWidth
												.replace("px", "");
									if (stylea.borderBottomWidth
											&& stylea.borderBottomWidth != "medium")
										newheight -= stylea.borderBottomWidth
												.replace("px", "");
									CCN[j].style.height = newheight + "px";
								}
							}
						}
					} else {
						var max_height = 0;
						for (var i = 0; i < objCN[key].length; i++) {
							objCN[key][i].style.height = "auto";
							max_height = max_height > objCN[key][i].offsetHeight ? max_height
									: objCN[key][i].offsetHeight;
						}
						for (var i = 0; i < objCN[key].length; i++) {
							if (objCN[key][i].style) {
								var stylea = objCN[key][i].currentStyle
										|| document.defaultView
												.getComputedStyle(
														objCN[key][i], '');
								var newheight = max_height;
								if (stylea.paddingTop)
									newheight -= stylea.paddingTop.replace(
											"px", "");
								if (stylea.paddingBottom)
									newheight -= stylea.paddingBottom.replace(
											"px", "");
								if (stylea.borderTopWidth
										&& stylea.borderTopWidth != "medium")
									newheight -= stylea.borderTopWidth.replace(
											"px", "")
								if (stylea.borderBottomWidth
										&& stylea.borderBottomWidth != "medium")
									newheight -= stylea.borderBottomWidth
											.replace("px", "");
								objCN[key][i].style.height = newheight + "px";
							}
						}
					}
				}
			}
		}

		checkBoxSize = function() {
			if (defHeight != e.offsetHeight) {
				changeBoxSize();
				defHeight = e.offsetHeight;
			}
		}
		changeBoxSize();
		setInterval(checkBoxSize, 1000)
		window.onresize = changeBoxSize;
	}

	function addEvent(elm, listener, fn) {
		try {
			elm.addEventListener(listener, fn, false);
		} catch (e) {
			elm.attachEvent("on" + listener, fn);
		}
	}
	addEvent(window, "load", heightLine);
}
// pagetop
$(function() {
    var topBtn = $('.pagetop');
    topBtn.hide();
    // スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
        // ボタンの表示方法
            topBtn.fadeIn();
        } else {
        // ボタンの非表示方法
            topBtn.fadeOut();
        }
    });
    // スクロールしてトップ
    topBtn.click(function () {
        $('body,  html').animate({
            scrollTop: 0
        },   500);
        return false;
    });
});
$(function() {
    $(".img_box").colorbox({
    	width: 450,
    	height: 450
  });
});
