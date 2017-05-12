var speed = 100;
var scrollTop = null;
var hold = 0;
var pos = null;
var timer = null;
var moveHeight = null;
var nav = document.getElementsByClassName("nav")[0];
window.onscroll = scroll_ad;

function scroll_ad() {
	scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
	pos = scrollTop - nav.offsetTop;
	pos = pos / 10
	moveHeight = pos > 0 ? Math.ceil(pos) : Math.floor(pos);
	if(moveHeight != 0) {
		nav.style.top = nav.offsetTop + moveHeight + "px";
		setTimeout(scroll_ad, speed);
	}
	//alert(scrollTop);
}

//var vip_name = document.getElementsByClassName("vip_name")[0];
//var login = document.getElementsByClassName("nav_right_one")[0];
//var vip_name_content = document.getElementsByClassName("vip_name_content");
//login.onmousemove = function() {
//	vip_name.style.display = "block";
//	vip_name.onmousemove = function() {
//		vip_name.style.display = "block";
//		for(var i = 0; i < vip_name_content.length; i++) {
//			vip_name_content[i].index = i;
//			vip_name_content[i].onmousemove = function() {
//				vip_name_content[this.index].style.backgroundColor = "red";
//				for(var j = 0; j < vip_name_content.length; j++) {
//					if(this.index != j) {
//						vip_name_content[j].style.backgroundColor = "#e5e5e5"
//					}
//				}
//			}
//		}
//	}
//}
//login.onmouseleave = function() {
//	vip_name.style.display = "none";
//	vip_name.onmouseleave = function() {
//		vip_name.style.display = "none";
//	}
//}