var player;
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var interval = false;

function clickHead() {
  var element = document.getElementsByClassName('head')[0];
  element.style.backgroundImage = 'url(images/' + this.id + '.png)';
}


function clickBody() {
  var element = document.getElementsByClassName('body')[0];
  element.style.backgroundImage = 'url(images/' + this.id + '.png)';
}



function move() {
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	if (downPressed) {
		player.style.top = positionTop+1 + 'px';
		player.className = 'character walkDown';
	}
	if (upPressed) {
		player.style.top = positionTop-1 + 'px';
		player.className = 'character walkUp';
	}
	if (leftPressed) {
		player.style.left = positionLeft-1 + 'px';
		player.className = 'character walkLeft';
	}
	if (rightPressed) {
		player.style.left = positionLeft+1 + 'px';
		player.className = 'character walkRight';
	}

}


function keydown(event) {
	if (event.keyCode == 37) {		
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}	
}

function keyup(event) {
	if (event.keyCode == 37) {		
		leftPressed = false;
		if (!leftPressed && !rightPressed && !upPressed && !downPressed) {
			player.className = 'character standLeft';
		}
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		if (!leftPressed && !rightPressed && !upPressed && !downPressed) {
			player.className = 'character standRight';
		}
	}
	if (event.keyCode == 38) {
		upPressed = false;
		if (!leftPressed && !rightPressed && !upPressed && !downPressed) {
			player.className = 'character standUp';
		}
	}
	if (event.keyCode == 40) {
		downPressed = false;
		if (!leftPressed && !rightPressed && !upPressed && !downPressed) {
			player.className = 'character standDown';
		}
	}	
}

function sideBarHide() {
	var sidebar = document.getElementsByTagName('aside')[0];
	var positionLeft = parseInt(sidebar.style.marginLeft);
	sidebar.style.marginLeft = (positionLeft + 1) + 'px';
	if (positionLeft == 0) clearInterval(interval);
}

function sideClose() {
	var sidebar = document.getElementsByTagName('aside')[0];
	sidebar.style.marginLeft = '-240px';
	interval = setInterval(sideBarHide, 1);
}


function sideBarShow() {
	var sidebar = document.getElementsByTagName('aside')[0];
	var positionLeft = parseInt(sidebar.style.marginLeft);
	sidebar.style.marginLeft = (positionLeft - 1) + 'px';
	if (positionLeft == -240) clearInterval(interval);
}


function sideOpen() {
	var sidebar = document.getElementsByTagName('aside')[0];
	sidebar.style.marginLeft = '0px';
	interval = setInterval(sideBarShow, 1);
}

function myLoadFunction() {
	player = document.getElementById('player');

    var elements = document.getElementsByTagName('li');

    for (var i = 0; i < 10; i++) {
            elements[i].addEventListener('click', clickHead);
    }
    
	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);

	var close = document.getElementById('closeside');
	close.addEventListener('click', sideClose);

	player.addEventListener('click', sideOpen);
}

document.addEventListener('DOMContentLoaded', 
				myLoadFunction);


