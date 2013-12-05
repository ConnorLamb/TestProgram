function run(htag1,htag2) {
	var list = document.getElementById("lastFourList");
	list.insertAdjacentHTML('afterbegin', '<li>' + htag1 + '</li>')
	list.insertAdjacentHTML('afterbegin', '<li>' + htag2 + '</li>')	
	localStorage.setItem('hashtags', {h1:hash1, h2:hash2})
	}

