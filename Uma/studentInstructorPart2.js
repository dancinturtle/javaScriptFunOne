var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }
 var keys = Object.keys(users);
 for(key in keys){
 	var arr = users[keys[key]];
 	console.log(arr);
 	var i=1;
 	for(value in arr){
 		var len = arr[value].first_name.length+arr[value].last_name.length;
 		console.log(i+" - "+arr[value].first_name+" "+arr[value].last_name+" - "+len);
 		i++;
 	}
 }
 	
