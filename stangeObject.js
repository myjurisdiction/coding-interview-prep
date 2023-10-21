(() => {
  try {
    let mapKey = [1, 2, 3];
    var obj = { greet: "Hello world" };

    console.log(["not null"], obj.__proto__);

    var obj2 = Object.create({ greet: "Hello world" });
    // obj2.greet = "Hello world"; -> this does nothing when Object.create(null)
    console.log(["null"], obj2.__proto__);

    var map = new Map();
    map.set([1, 2, 3], "My keys is any array withy 3 elements");
    console.log(["map.__proto__"], map.__proto__);
    console.log(["map"], map);

    //
    map.set([1, 2, 3], "I am a changed key now !!");
    console.log(["map"], map);

    map.set(Symbol([1, 2, 3]), "I am unique");
    map.set(Symbol([1, 2, 3]), "I am unique but my value is changed !!");
    console.log(["map"], map);

    map.set(mapKey, "THIS IS CRAZY !!");
    console.log(map.get(mapKey), map);

    //  Something different

    var o = {
      property1: "Cats are good",
      property2: "Dogs are good",
    };

    Object.freeze(o);

    let x = "property1";

    console.log(o[x], o.property1);

    o[x] = "Cats are bad";

    console.log(o[x], o.property1);

    // This is dangerous code
    /**
     *  Bracket object notation with user input grants access to every property available on the object, including prototypes.
     */

    var object = { name: "abhishek" };

    var userInput = ["hasOwnProperty", () => "Fuck Off"];

    object[userInput[0]] = userInput[1];

    console.log("exploit code", object.hasOwnProperty("name"));

    /**
     * EXPLOIT 2
     */

    var userInput = ["constructor", "{}"];
    var user = function () {
      this.name = "jon";
      //An empty user constructor.
    };

    function handler(userInput) {
      var anyVal = "anyVal"; // This can be any attribute, and does not need to be user controlled.
      user[anyVal] = user[userInput[0]](userInput[1]);
    }

    function exploit(cmd) {
      var userInputStageOne = [
        "constructor",
        'require("child_process").exec(arguments[0],console.log)',
      ];
      var userInputStageTwo = ["anyVal", cmd];

      handler(userInputStageOne);
      handler(userInputStageTwo);
    }

    exploit("date");

    // This could be a research topic for me !!
  } catch (e) {
    console.log(e);
    // do nothing with the ERROR
  }
})();
