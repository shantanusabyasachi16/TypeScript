/*An enum is a special "class" that represents a group of constants (unchangeable variables).

They are used to create a collection of related values that can be either numeric or string-based.
Enums provide a way to define a type with a limited set of values, making your code more readable and type-safe.*/
var choice;
(function (choice) {
    choice[choice["ASILE"] = 0] = "ASILE";
    choice[choice["MIDDLE"] = 1] = "MIDDLE";
    choice[choice["WINDOW"] = 2] = "WINDOW";
})(choice || (choice = {}));
var seat = choice.ASILE;
