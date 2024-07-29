// Create a set (try adding duplicate Values)
const nameSet = new Set(["John", "Jane", "Joe", "John", "Joe"]);

// Add values to set
nameSet.add("Jack");
nameSet.add("Jill");

nameSet;

// Check for values
nameSet.has("Jill");

// Delete from set
nameSet.delete("Jill");

nameSet;

// Get size of set
nameSet.size;

// Get all values from set
nameSet.values();

// Iterate through set
for (const name of nameSet) {
	name;
}

// Convert set to array
const nameArray = [...nameSet];
nameArray;

// Clear set
nameSet.clear();
