//your JS code here. If re

let student = {
	name: "Raul",
}
let arr = [];
Object.prototype.getKeys = () => {
	// return Object.keys(this);
	for(let t in student){
		arr.push(t);
	}
	return arr;
}