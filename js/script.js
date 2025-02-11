const btn = document.getElementById("btn");
const body = document.getElementById("body");
const key = document.getElementById("lock");
function Unlock() {
	key.classList.add('active');
	body.classList.add('active');
}