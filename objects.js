//OBJECTS IN JS
let cap = {
    fName : "Steve",
    // lName : "Rodgers",
    "last Name" : "Rodgers",
    friends : ["Tony", "Peter", "Bruce"],
    address : {
        city : "Manhattan",
        State : "NY City"
    },
    age : 34,
    isAvenger : true
}

// print using dot notation
console.log(cap);
console.log(cap.address.State);
console.log(cap.friends[1]);

// print using [] notation (useful for string Keys : Eg - "last Name")
let varName = "fName";
console.log(cap[varName]);
console.log(cap["fName"]);
varName = "last Name";
console.log(cap[varName]);
console.log(cap["last Name"]);

// Delete : 
delete cap.friends;

// Add :
cap.movies = ["Winter Soldier", "firstAvenger", "CivilWar"];
let key = "Company";
cap[key] = "DCU";

//UPDATE :
cap.isAvenger = false;

console.log(cap);

