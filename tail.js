const tail = function(arr) {
  if (!arr) {
    return;
  }
  
  return arr.slice(1);
};
 
module.exports = tail;
