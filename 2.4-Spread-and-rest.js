<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2018 by platium111 (http://jsbin.com/qefijok/2/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
//2.4 Spread and rest
// spread ~ add some elements into array or object
// rest ~ ...args can be an array

// -> array
const numbers = [1,2,3];
const newNumbers = [...numbers, 4,5]; // rest and spread
console.log(newNumbers);

// -> object
const person = {
  name: 'Max'
};
const newPerson = {
  ...person,
  age:28
}
console.log(newPerson); 

// -> 1,2,3 as ...args
const filter = (...args) => {
  return args.filter(el => el === 1) // every element willgo through
  //filter-> filter function is used to go through elements in array
  // and run a inner method, it will return based on a condition
  //-> filter method: go through element and based on condition return appropriated the element
}
console.log(filter(1,2,3));
</script>
</body>
</html>