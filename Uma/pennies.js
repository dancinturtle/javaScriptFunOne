function reward()
{
	var sum=0;
	for(var i=1; i<=30; i++){
		sum+=Math.pow(2, i-1);
	}
	console.log("Reward in dollars is "+(sum/10000));
}
function make10000()
{
	var sum=0;
	for(var i=1; i<=30; i++){
		sum+=Math.pow(2, i-1);
		if((sum/10000)>=10000)
		{
			console.log("Days to get $10000 are "+i);
			break;
		}
	}
}
function makeBillion()
{
	var sum=0, i=1;
	while(sum<=1000000000)
	{
		sum+=Math.pow(2, i-1)/10000;
		i++;	
	}
	console.log("Days to get 1 billion are "+i);
}
reward();
make10000();
makeBillion();