function printRange(start, end, skip){
	if(end<0){
		end=Math.abs(end);
	}
	if(typeof(skip)==='undefined'){
		skip=1;
	}
	if(typeof(end)==='undefined'){
		end=start;
		start=0;
	}
		for(var i=start; i<end; i=i+skip){
			console.log(i+"  ");
		}

}
console.log("printRange(-10, -30, 3)");
printRange(-10, -30, 3);
console.log("printRange(2,7)");
printRange(2,7);
console.log("printRange(7)");
printRange(7);

