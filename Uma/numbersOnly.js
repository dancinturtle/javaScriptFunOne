function numbersOnly(arr)
{
	var newArr = [], j=0;
	for(var i=0; i<arr.length; i++){
		if(typeof(arr[i])==="number")
		{
			newArr[j]=arr[i];
			j++;
		}
	}
	return newArr;
}
function notNumbers(arr){
	var undefinedCnt = 0;
	for(var i=0; i<arr.length; i++){
		if(typeof(arr[i])==="number"){
			{
				undefinedCnt++;
				for(var j=i; j<arr.length; j++)
				{
					arr[j]= arr[j+1];
				}
			}
		}
	}
	arr.length=arr.length-undefinedCnt;
}
var arr = [1, "apple", -3, "orange", 0.5];
console.log(numbersOnly(arr));
notNumbers(arr);
console.log(arr);