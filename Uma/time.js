function time(hr, min, period){
	if(period=="AM" && min>30){
			console.log("It's almost "+(hr+1)+" in the morning");
		}	
	else if(period=="AM" && min<30)
			console.log("It's just after "+hr+" in the morning");
	else if(period=="PM" && min>30)
			console.log("It's almost "+(hr+1)+" in the evening");
	else if(period=="PM" && min<30)
			console.log("It's just after "+hr+" in the evening");	
}
time(4, 15, "AM");
time(4, 45, "AM");
time(8, 15, "PM");
time(4, 55, "PM");