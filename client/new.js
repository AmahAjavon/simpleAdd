'use strict'

$(document).ready(init);

function init() {
  var uno = [5, 3, 4, 9];
  var dos = [9, 10, 8, 1];
  var sumo = [];

var arr1 = uno.split(',');
var arr2 = dos.split(',');

var arr1Map = arr1.map(function(item, index, array) {
  var arr2Map = arr2.map
})


function addArray() {
  for(var i = 0; i <= uno.length; i++) {
    for(var j = 0; j <= dos.length; j++) {
      arrSum = [i] + [j];
    }
  }
}

var array1 = [16,0,2,3,4],
    array2 = [3,5,6,7,8,13],
    l = Math.max(array1.length, array2.length);
    var result = Array(l);
    for(var i=0; i<l; ++i) result[i] = (array1[i] || 0) + (array2[i] || 0);
