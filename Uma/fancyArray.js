function fancyArray(arr, symbol, reversed){
	if(typeof(symbol)==='undefined'){
		symbol = "->";
	}
	if(typeof(reversed)==='undefined'){
		reversed = false;
	}
	if(reversed){
		for(var i=0; i<arr.length; i++){
			console.log(i+symbol+arr[i]);
		}
	}
	else{
		for(var i=0; i<arr.length; i++){
			console.log(i+symbol+arr[i]);
		}
	}
}
fancyArray([ "James", "Jill", "Jane", "Jack" ], "=>", true);
fancyArray([ "James", "Jill", "Jane", "Jack" ], "::", true);
fancyArray([ "James", "Jill", "Jane", "Jack" ]);