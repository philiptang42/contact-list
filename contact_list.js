var friends = {
  bill: {
    firstName: "Bill",
    lastName: "Gates",
    number: "(206) 555-5555",
    address: ['One Microsoft Way','Redmond','WA','98052']
  },
  steve: {
    firstName: "Steve",
    lastName: "Jobs",
    number: "(555) 206-2066",
    address: ['One Apple Street', 'Grave', 'RIP', '66666']   }
};

var list = function(friends) {
  for (var key in friends) {
    friends[key];
    console.log(key)
  }
};

var search = function(name) {
  for (var key in friends) {
    if (friends[key].firstName === name) {
      console.log(friends[key]);
      return friends[key];
    }
  }
};

search('Steve')
