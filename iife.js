//IIFE: Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined.

(function (message) {
  const superHero = "Batman";
  console.log(message, superHero);
})("Hello");

(function (message) {
  const superHero = "Superman";
  console.log(message, superHero);
})("Hey");
