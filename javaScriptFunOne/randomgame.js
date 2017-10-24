//Win condition is to have the win & roulette be equal. (Random # between 1 & 10)
var win = 1;
var roulette = 2;
var userQuarters = 100;
var betAmount = prompt("How many quarters do you wanna spend? (1 - 20)");
var quarters = parseInt(betAmount);
var attempt = 0;
while (userQuarters >= 0 || userQuarters >= 300) {
	win = Math.trunc(Math.random()*10)+1;
	roulette = Math.trunc(Math.random()*10)+1;
	if(win === roulette){
	userQuarters += Math.trunc(Math.random()*50)+51;
	alert("Congrats you won! You now have " + userQuarters + " quarters/quarter." );
	}else{
	userQuarters-=quarters*2;
	alert("You did not win, you have " + userQuarters + " quarters/quarter left.");
	}
}
// attempt+=
// if(attempt > 15){
// 	alert("Wow you made " attempt + " attempts. That's great!!!");}
// else if (attempt > 8 && attempt < 15){
// 	alert("Wow " + attempt + " attempts is impressive, nice job!"); }
// else if (attempt < 8) {
// 	alert(attempt + " attempts is decent, try again.")
// }
// }


console.log(win);
console.log(roulette);
console.log(quarters);
