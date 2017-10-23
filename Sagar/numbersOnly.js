function numbersOnly(arr){
	var numArr = [];
	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] == "number"){
			numArr.push(arr[i]);
		}
	}
	return numArr;
}


function stringsOnly(arr){
	for(var i = arr.length-1; i <= 0; i--){
		if(typeof arr[i] == "number"){
			arr.pop();
		}
	}
	return arr;
}


console.log(numbersOnly([3,"yo", 5, "fds", "gfsa", 7, -4, "fsf"]));

console.log(stringsOnly([4, "toteorgn", 7, -2, -43, "sgerg", 3, "sdfgr", 4, "ft"]));
