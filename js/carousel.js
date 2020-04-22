// 获取元素的变量
var oimgBox = document.querySelector('.topImg');
var oimg = document.querySelectorAll('.topImg img');
var num = 0,timer,len=oimg.length;
// 自动播放切换图像
timer = setInterval(function() {
	// 调用换图函数
	play(num+1);
},2000);

// 鼠标经过暂停播放
oimgBox.onmouseover = function() {
	// 清除定时器
	clearInterval(timer);
}
// 鼠标离开继续播放
oimgBox.onmouseout = function() {
	timer = setInterval(function() {
		play(num+1);
	},2000)
}

// 换图函数
function play(x) {
	// 通过num找对象 其他图像隐藏
	for(var i = 0; i<len;i++){
		oimg[i].style.display = 'none';
	}

	// 图像的循环判断
	if (x>len-1) {
		x=0;
	}
	if (x<0) {
		x=len-1;
	}
	// 将num赋予x
	num = x;
	oimg[num].style.display='block';
}

// 设置专业技能按钮事件
var SC = document.querySelector('.skills-contant .big');
var btn = document.querySelectorAll('.main-skills .btn li');
btn[0].onclick = function() {
	SC.style.marginLeft = '0';
	btn[0].className = 'active';
	btn[1].className = '';
}
btn[1].onclick = function() {
	SC.style.marginLeft = '-800px';
	btn[0].className = '';
	btn[1].className = 'active';
}