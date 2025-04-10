/*
Event Module in Node.js:
    ->Node.js has a built-in module, called "Events", where you can create, fire and listen your own events.
    ->The event module allows us to work with events in node.js
        {event: its an action or occurrence that has happened in our application that we can respond to}
    ->using Event Module, we can dispatch our own custom events and respond to those custom events in a non-blocking manner

    Example: Event Module Scenario:
        ->Let's say you are hungry and you went to pizza hut.
        ->At the counter you placed the order for the pizza
        ->The cook in the kitchen starts making your order the moment cook sees your order
        {
        ->Here in this scenario:
            ->The order being placed for pizza is the event
            ->The cook making the pizza is the response to the event
        }

    ->to use event built-in module we first have to import it:
    const EventEmitter=require("node:events") 
 {why i used EventEmitter because events module returns a class called EventEmitter which includes functionality to
  emmit events and respond to events.
  Although we can use any name but "EventEmitter" is mostly used
  }
*/
const EventEmitter = require("node:events"); //import built-in module: events

const emitter = new EventEmitter();
//using this "emitter" object we can emit events. (to emit and event we use .emit method of emitter)
//to respond to the event to use .on method of emitter
/*emitter.on(); accepts two paramters:
 1)event name i.e order-pizza here, and 2)listern (callback fuction, gets executed when the event is emitted)
   and this callback function allows us to delay execution till an event has occurred.
*/
//responding to the event
emitter.on("order-pizza", () => {
  console.log("Order received! Baking a pizza...");
});

console.log("Do Work Before Event Occurs In The System");
//dispatching the event
emitter.emit("order-pizza");

//Note: listener/respond should always be written before the dispatch/emit
/*Note: we are not blocking the execution of the code, example add log statement before emitting the event it will be 
  printed first then logs from emitter.on
  This is know as event-driven programming and its used a lot in node.js
*/
//Example 2: passing data to the listener and adding multiple listeners
//we can have multiple listeners for the same event
emitter.on("order-juice", (flavour, size) => {
  console.log(`Order received: ${flavour} juice of ${size} size`);
});

emitter.on("order-juice", (flavour) => {
  console.log(`${flavour} Juice is ready!`);
});

//specify the arguments after the event name it could be any number of arguments;
emitter.emit("order-juice", "Orange", "Small"); //Orange and Small are the arguments

//conditions inside listener
emitter.on("getDept", (branch) => {
  switch (branch) {
    case "cse":
      console.log("Cse dept. is of white color");
      break;
    case "civil":
      console.log("Civil dept. is of blue color");
      break;
    case "mechanical":
      console.log("Mechanical dept. is of green color");
      break;
    case "electronics":
      console.log("E&C dept. is of sky-blue color");
      break;
    case "Electrical":
      console.log("Electrical dept. is of Yellow coolor");
      break;
    default:
      console.log("Please enter a valid department name");
      break;
  }
});

emitter.emit("getDept", "cse");
