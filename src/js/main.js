function setDate() {
	const secondHand = document.querySelector('.secondsHand');
	const minuteHand = document.querySelector('.minuteHand');
	const hourHand = document.querySelector('.hourHand');
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	const secondsDeg = ((seconds / 60) * 360) + 90;
	const minuteDeg = ((minutes / 60) * 360) + 90;
	const hourDeg = ((hours / 12) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDeg}deg)`;
	minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
	hourHand.style.transform = `rotate(${hourDeg}deg)`;
}


setInterval(setDate, 1000);