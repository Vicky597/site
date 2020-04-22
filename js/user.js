var user = window.location.search;
var star = user.indexOf('?')+1;
var end = user.length;
var userName=user.substr(star,end);
	userName=decodeURIComponent(userName);	
// 获取要加入用户名的li
var userLi = document.querySelector('.nav-right .reg a');
// 获取每个li的点击事件
	var oLi = document.querySelectorAll('.nav-right ul li');
	// console.log(oLi);
	// 设置点击事件的跳转
	oLi[0].onclick = function() {
		// alert(1111)
		location.href = `main.html?${userLi.innerHTML}`;

	}
	oLi[1].onclick = function() {
		location.href = `aboutMe.html?${userLi.innerHTML}`;
	}
	oLi[2].onclick = function() {
		location.href = `food.html?${userLi.innerHTML}`;
	}
	oLi[3].onclick = function() {
		location.href =	`tour.html?${userLi.innerHTML}`;
	}
	oLi[4].onclick = function() {
		location.href =	`game.html?${userLi.innerHTML}`;
	}
	oLi[5].onclick = function() {
		// location.href =	`tour.html?${userLi.innerHTML}`;
	}
	oLi[6].onclick = function() {
		location.href = `register.html?${userLi.innerHTML}`;
	}
	
	// console.log(user);
userLi.innerHTML = userName;
