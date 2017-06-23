/*jshint esversion: 6*/
var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

 global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length-1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, element) {
    for (let i = 0; i < arr.length; i++){
      if(arr[i] === element){
        return i;
      }
    }
    return -1;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, element) {
    for (let i = arr.length -1; i >= 0; i--){
      if(arr[i] === element){
        return i;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr;
  },

  // returns an array with all falsey values removed
  compact: function(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++){
      if(arr[i] === null || arr[i] === 0 || arr[i] === undefined || arr[i] === false || arr[i] === "" || isNaN(arr[i])){
      } else{
        arr2.push(arr[i]);
      }
    }
    return arr2;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    let newArr = arr.slice(start, end);
    return newArr;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    if( isNaN(n)){
      n = 1;

    }
    let newArr = arr.slice(n);
    return newArr;

  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    if( isNaN(n)){
      n = -1;
    }
    else if ( n === 0){
     n = undefined;
   }
   else {
    n *= -1;
  }
  let newArr = arr.slice(0, n);
  return newArr;
},

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    if ( isNaN(n)){
      n = 1;
    }
    return  arr.slice(0, n);
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    if(isNaN(n)){
      return arr.slice(arr.length -1);
    }else if(n > arr.length){
     n = arr.length;
   } else{
    return arr.slice(arr.length - n);
  }
},

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, n, start, end) {
    if( isNaN(end)){
      end = arr.length;
    }
    if(isNaN(start)){
      start = 0;
    }
    for (let i = start; i < end; i++){
      arr[i]= n;
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr, indices) {
    for (let i = 0; i < arr.length; i++){
      for (let j = 0; j < indices.length; j++){
        if (arr[i] === indices[j]){
          arr.splice(i,1);
        }
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr ,indices) {
    for ( let i = 0; i < arr.length; i++){
      for (let j = 0; j < indices.length; j++){
        if(arr[i] === indices[j]){
          indices.splice(j,1);
        }
      }
    }
    return indices;
  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {

  }
};