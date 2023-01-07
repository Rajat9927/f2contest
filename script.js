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
  function developerfilter(arrayData){
    if(arrayData.profession==="developer"){
      console.log(arrayData);
    }
  }
  
}

function PrintDeveloperbyForEach() {
      //Write your code here
    }

function addData() {
      //Write your code here
    }

function removeAdmin() {
      //Write your code here
    }

function concatenateArray() {
      //Write your code here
    }
