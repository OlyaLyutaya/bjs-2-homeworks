function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false; // массивы имеют разную длину
    }
    return arr1.every(function(value, index) {
      return value === arr2[index];
    });
  }
  function getUsersNamesInAgeRange(users, gender) {
    let filteredUsers = users.filter(function(user) {
      return user.gender === gender;
    });
    let ages = filteredUsers.map(function(user) {
      return user.age;
    });
    let sum = ages.reduce(function(acc, value) {
      return acc + value;
    }, 0);
    let average = sum / ages.length;
    return average;
  }
  