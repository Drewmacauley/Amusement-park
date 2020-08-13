$(document).ready(function() {
  const height = parseInt(prompt("how tall are you in inches?"))

  if (height >= 48) {
    $("#tallEnough").show();
  } else {
    $("#tooShort").show();
  }
});  