//your JS code here. If required.
 let student = {
	 name : 'anish',
	 
 }
 
 let arr = [];
 

Object.prototype.getkeys = function() = {
	// for(let t in student){
	// 	arr.push(t);
	// }
	// //console.log(arr);
 //  return arr;
	return Object.keys(this);
	
}
student.getkeys();

