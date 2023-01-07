/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];


function PrintDeveloperswithMap() {
  //Write your code here
  //map function syntatx array.map(function(currentValue, index, arr), thisValue)
  arr.map(developerfilter);
  function developerfilter(arrayData) {
    if (arrayData.profession === "developer") {
      console.log(arrayData);
    }
  }

}

function PrintDeveloperbyForEach() {
  //Write your code here
  //for each function syntax array.forEach(function(currentValue, index, arr), thisValue)
  arr.forEach(developerfilter);
  function developerfilter(arrayData) {
    if (arrayData.profession === "developer") {
      console.log(arrayData);
    }
  }
}

function addData() {
  //Write your code here
  //we can add data using array push function. and then print the whole array
  let newRecord = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newRecord);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  //we can remove admin using splice funcion of java script
  const admincheck = "admin";
  i;                                  
  for (i = arr.length - 1; i >= 0; --i) { 
    if (arr[i].type == admincheck) {
      arr.splice(i, 1);
    }
  }

  console.log(arr);
}

function concatenateArray() {
  //Write your code here
  let newwarr = [
    { id: 1, name: "rajat", age: "1", profession: "developer" },
    { id: 2, name: "rajat", age: "1", profession: "developer" },
    { id: 3, name: "rajat", age: "1", profession: "developer" },
  ];
  let botharr = arr.concat(newwarr);
  console.log(botharr);
}
