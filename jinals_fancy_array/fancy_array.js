var arr = ["James", "Jill", "Jane", "Jack"];
var symbol ;
var reversed = false;
fancyArray(arr, symbol);
fancyRevArray(arr, symbol, reversed);

function fancyArray(arr, symbol) {
    if (symbol != undefined) {
        for (var i = 0; i < arr.length; i++) {
            console.log(i + symbol + arr[i]);
        }
    } else {
        for (var i = 0; i < arr.length; i++) {
            console.log(i + '->' + arr[i]);
        }
    }

}

function fancyRevArray(arr, symbol, reversed) {
    if (symbol != undefined) {
        console.log(reversed);
        if (reversed) {
            console.log("reversed array is:");
            for (var i = arr.length - 1; i >= 0; i--) {
                console.log(i + symbol + arr[i]);
            }
        }else {
            for (var i = 0; i < arr.length; i++) {
                console.log(i + symbol + arr[i]);
            }
        }
    }else{
        if (reversed) {
            console.log("reversed array is:");
            for (var i = arr.length - 1; i >= 0; i--) {
                console.log(i + '->' + arr[i]);
            }
        }else {
            for (var i = 0; i < arr.length; i++) {
            console.log(i + '->' + arr[i]);
            }
        }
    }
}