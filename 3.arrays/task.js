function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false; // массивы имеют разную длину
    }
    return arr1.every(function(value, index) {
      return value === arr2[index];
    });
  }
  function getUsersNamesInAgeRange(users, gender) {
    if (users.length==0 || (users.findIndex(rez => rez.gender == gender)<0)){
      return 0;
    } else {
      let result = users.filter(rez => rez.gender == gender ).reduce((accumulator, currentValue) => accumulator + currentValue.age, 0) / users.filter(rez => rez.gender == gender).length
      return result;
      }
  }
  