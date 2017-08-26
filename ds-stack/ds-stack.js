var Stack = function() {
  instance={}
    instance._storage = {}
    instance.counter = 0;
    instance.add = function(value){
      counter ++ 
      this._storage[counter]=value
      console.log(this._storage)
    };
    instance.remove = function() {
      delete this._storage[counter]
            counter --
      console.log(this._storage)
    };
    return instance
  };

//   ## Stack
// * [ ] Implement a stack class.
//   * You can use an array for storage, and delegate to its methods
//   * The stack should only have `.add`, `.remove`, and `._storage`, with no other properties or methods (you can test this by calling Object.keys() on your stack instance).