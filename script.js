var $textInput = $("#textInput"),
    $button = $("#doAction"),
    $display = $("#display"),
    $options = $("input[type=radio]"),
    method = "reverse";

$options.on("click", function(){
  method = $(this).val();
});


$button.on("click", function (){
  
  if (method === "reverse") {
     let word = $textInput.val();
     let reversedWord = word.split("").reverse().join("");
     $display.text(reversedWord);
  } 
  
   if (method === "random") {
     let word = $textInput.val();
     let randomizedWord = word.split("").sort(function(a, b) {
       return 0.5 - Math.random();
     });
     $display.text(randomizedWord.join(""));
   }  
  
   if (method === "alphabetize") {
     let word = $textInput.val();
     let alphabetizedWord = word.split("").sort().join("");
     $display.text(alphabetizedWord);
   }
 });