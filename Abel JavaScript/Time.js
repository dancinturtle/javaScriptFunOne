var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

console.log("It's");

if(MINUTE<30)
{
    console.log("just after", HOUR);

}

    else if(MINUTE>30)
{
    console.log("almost",HOUR+1);
    
}
if(PERIOD=="AM"){
    console.log("in the Morning");
}
    else if(PERIOD=="PM")
{
    console.log("in the Evening");