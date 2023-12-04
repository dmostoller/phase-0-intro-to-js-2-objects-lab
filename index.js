// Write your solution in this file!
const employee = {
    name: "David:",
    streetAddress: "721 Mercy St",
  };

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
      };
  };
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
    return obj;
  };


function deleteFromEmployeeByKey(obj, key) {
    return {
        ...obj[key]
      };
    delete obj.key;
    return obj;
  };


function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj;

  };