const nameMap = new Map([
	[1, "John"],
	[2, "Jane"],
	[3, "Joe"]
]);

const myFunction = () => {};
const emptyObj = {};

const map2 = new Map([
	["name", "John"],
	[1, "number one"],
	[true, "really true"],
	[null, "null"],
	[myFunction, "empty function"],
	[emptyObj, "empty object"]
]);

// Getting values
nameMap.get(1);
map2.get(myFunction);
map2.get(emptyObj);

// Setting values
nameMap.set(4, "Jack");
nameMap.set(5, "Jill");

// Checking values
nameMap.has(1);
nameMap.has(6);

// Deleting values
nameMap.delete(1);
nameMap.has(1);

// Get Size
nameMap.size;

// Iterating (for...of)
for (let [key, value] of nameMap) {
	key, value;
}

// Using forEach
nameMap.forEach((value, key) => {
	key, value;
});

// Looping keys and values
nameMap.keys();
nameMap.values();

// Clearing
nameMap.clear();
nameMap.size;

// (nameMap);
