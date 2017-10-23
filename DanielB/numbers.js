function numbersOnly(arr){
    var newArray =[];
    for(var i=0; i<arr.length; i++){
        if(typeof arr[i] === "number"){
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
}

function everythingBut(arr){
    var count=0;
    for(var i=0; i<arr.length; i++){
        if(typeof arr[i] != "number"){
            if(count!=i){
                arr[count]=arr[i];
            }
            count++;
        }
    }
    arr.length=count;
    console.log(arr);
}

numbersOnly([10, "cats", true, 12, 1245]);
everythingBut([10, "cats", true, 12, 1245]);