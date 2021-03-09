
exports.min = function min (array) {
  if(!array){
    return 0
  }
  if(array.length === 0 ){
    return array
  }
  let min = array[0];
  array.forEach(el=>{
    if(el<min){
      min = el;
    }
  })
  return min;
}

exports.max = function max (array) {
  if(!array){
    return 0
  }
  if(array.length === 0 ){
    return array
  }
  let max = array[0];
  array.forEach(el=>{
    if(el>max){
      max = el;
    }
  })
  return max;
}

exports.avg = function avg (array) {
  if(!array){
    return 0
  }
  if(array.length === 0 ){
    return array
  }
  let avg = 0
  array.forEach(el => {
    return avg += el
  });
  return avg/array.length
}
