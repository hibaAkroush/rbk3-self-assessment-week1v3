var makeHashTable = function() {
  //Do not change the max!
  var max = 4;
//
// i think maybe collision resolution is when the hash table changes size depending on how many elements it has 
// if the hash table has less elements it wil change size to 25%
// it the hash table is almost full it will change size to 75%
    return {
      _storage: [],

      retrieve: function(key) {
        var index = hashFn(key, max)
        var bucket = this._storage[index]
        // for retrieve if the key does not exist 
        // return null to user 
          if(!bucket){
            return null
          }
        //then  we loop inside the bucket if the key exists we return it  
        // creat tuple to check
          for (var i = 0; i < this._storage[i].length; i++) {
            var tuple = this._storage[i]
            if (tuple[0]===key) {
               return tuple [1]
            }
          }
// added line below /////////////////////////////////////LINE ADDED HERE //////////////////
       return null
      },

      insert: function(key, value) {
        // first we should retrieve the bucket
        var index = hashFn(key, max)
        var bucket = this._storage[index]
        // then we should check if the bucket does not exist we should creat it
        if(!bucket){
          bucket = []
          this._storage[index] = bucket
        }

        //then  we loop inside the bucket if the key exists we update it  
        // creat tuple to check
        // if tuple doesnt exist ceat it and push it in bucket 
        var boolian = false
          for (var i = 0; i < this._storage[i].length; i++) {
              var tuple = this._storage[i]
                if (tuple[0]===key) {
                  boolian=true
                   tuple [1] =  value
                }
          }
//to push if the value doest already exist //////////////////////LINEs ADDED HERE //////////////////
        if(!boolian){
          bucket.push(index,value)
        }
        // if the key does not exist we creat the tuple and push it in the bucket 


    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};