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
	var temp = 0;
	for(var i = 0; i < arr.length-1; i++){
		if(typeof arr[i] == "number"){
			for(var j = i; j < arr.length-1; j++){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
			arr.pop();
			i--;
		}
	}
	return arr;
	}
}


console.log(numbersOnly([3,"yo", 5, "fds", "gfsa", 7, -4, "fsf"]));

console.log(stringsOnly([4, "toteorgn", 7, -2, -43, "sgerg", 3, "sdfgr", 4, "ft"]));



i = 0
arr[0] = 3

j = 1
temp = "yo"
arr[1] = 5
arr[2] = "yo"

[]









