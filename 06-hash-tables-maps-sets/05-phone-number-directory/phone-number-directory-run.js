const phoneNumberDirectory = require("./phone-number-directory");

const phoneNumbers = [
	"John:123-456-7890",
	"Jane:987-654-3210",
	"Joe:555-555-5555"
];

const result = phoneNumberDirectory(phoneNumbers);

result.get("John");
