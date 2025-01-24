/*
Event Module in Node.js:
    ->Node.js has a built-in module, called "Events", where you can create, fire, and listen your own events.
    ->The event module allows us to work with events in node.js
        {event: its an action or occurrence that has happened in our application that we can respond to}
    ->using Event Module, we can dispatch our own custom events and respoont to those custom events in a non-blocking manner

    Example: Event Module Scenario:
        ->Let's say you are hungry and we can to pizza hut.
        ->At the counter you placed the order for the pizza
        ->The cook in the kitchen starts making your order the moment cook sees your order
        {
        ->Here in this scenario:
            ->the order being placed for pizza is the event
            ->the cook making the pizza is the response to the event
        }

    ->to use the built-in module we first import it:
    const EventEmitter=require("node:events") 
 {why i used EventEmitter because events module returns a class called EventEmitter which includes functionality to
  emmit events and respond to events.
  ALthough we can use any name but "EventEmitter" is mostly used}

*/
const EventEmitter=require("node:events") //import built-in module: events

const emitter=new EventEmitter();
//using this "emitter" object we can emit events. (to emit and event we use .emit method of emitter)
//to respond to the event to use .on method of emitter
/*emitter.on(); accepts two paramters:
 1)event name i.e order-pizza here, and 2)listern (callback fuction, gets executed when the event is emitted)
   and this callback function allows us to delay execution till an event has occurred.
*/
//responding to the event
emitter.on("order-pizza",()=>{
    console.log("Order received! Baking a pizza")
})

console.log("Do Work Before Event Occurs In The System")
//dispatching the event
emitter.emit("order-pizza",)

//Note: listener/respond should always be written before the dispatch/emit
/*Note: we are not blocking the execution of the code, example add log statement before event it will be 
  printed first then logs from emitter.on
  This is know as event-driven programming and its used a lot in node.js
*/
//Example 2: passing data to the listener and adding multiple listeners
emitter.on("order-juice",(flavour,size)=>{
    console.log(`Order received: ${flavour} juice of ${size} size`)
})

//we can have multiple listeners for the same event
emitter.on("order-juice",(flavour)=>{
    console.log(`${flavour} Juice is ready!`)
})


//specify the arguments after the event namer it could be any number of arguments;
emitter.emit("order-juice","Orange","Small"); //Orange and Small are the arguments

