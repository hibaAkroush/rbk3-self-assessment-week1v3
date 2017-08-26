// your code here
var Arrayy = function (arr) {
	instance = {}
	instance.first = first
	instance.last = last
	instance.arr = arr 
return instance
}

this.first = function(){
	return this.arr[0]
}

this.last = function(){
	return this.arr[this.arr.length-1]
}// your code here
