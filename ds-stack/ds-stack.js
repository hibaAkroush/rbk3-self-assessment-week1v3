var Stack = function() {
  this._storage = []
  this.counter = 0;
};
    
Stack.prototype.add = function(value){
  this._storage[this.counter]=value
  this.counter ++ 
  console.log(this._storage)
};
    

Stack.prototype.remove = function() {
  this._storage.pop()
  this.counter --
  console.log(this._storage)
};
//   ## Stack
// * [ ] Implement a stack class.
//   * You can use an array for storage, and delegate to its methods
//   * The stack should only have `.add`, `.remove`, and `._storage`, with no other properties or methods (you can test this by calling Object.keys() on your stack instance).