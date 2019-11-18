$("document").ready(function() {

//$("h1").text("jQuery is cool")

//$("#main-heading").text("jQuery is fun-tastic!")

//var headingText = $("#main-heading").text();
//console.log(headingText);
//$("#main-heading").text("!" + headingText + "!");

//The .text in the above example selects all the text that is inside the main-heading id.

//Or we can call the method .text on the variable "heading-text."
//var headingText = $("#main-heading")
//console.log(headingText);
//headingText.text(headingText.text() + " and fun!");

$(".note").text("This is a note.")

var msg = "Alo, Soha!";
console.log(msg);

$("h1").text("The puppies are coming!");
//$("p").html("<strong>Wooo hoo!</strong>") //However, you probs don't want to do this because you're mixing html and JS.
$("p").addClass("crocodile");
$("a").attr("href", "https://en.wikipedia.org/wiki/Puppy");
//$("img").attr("src", "https://i.pinimg.com/originals/e0/4b/4f/e04b4f3ef33a467ac843f09552ca8676.jpg");

//Here, I have created a new paragraph. I created a variable called newP which contains the JS function and a string of HTML as the selector. Then I modified the new variable by adding text via the .text method. Finally, I appended that variable to the body tag.
var newP = $("<p>");
newP.text("The puppies are attacking!");
$("body").append(newP);
newP.addClass("result");
//when you call a method on a variable, you don't need $("")...I think.

$("h1").click(function() {
  alert("This is the best thing that can possibly happen to you.");
});

$("p").click(function() {
  $(".second").toggle();
  $(".first").toggle();
});

});
