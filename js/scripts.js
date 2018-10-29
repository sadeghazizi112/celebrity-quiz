var age;
var gender;
var realornot;
var genre;


$(document).ready(function() {
  $('#bradpitt').hide();
  $('#jackblack').hide();
  $('#darthvader').hide();
  $('#cateblanchett').hide();
  $('#abbottandcostello').hide();
  $("form#info").submit(function(event) {
    age = $("input#age").val();
    gender = $("select#gender").val();
    realornot = $("select#realornot").val();
    genre = $("select#genre").val();


  $("#result").show();

if (parseInt(age) >= 20 && (gender === 'female') && (realornot === 'real') && (genre === 'action')) {
  $('#bradpitt').show();
}
if ((parseInt(age) >= 20 && (gender === 'female') || (gender === 'male')) && (realornot === 'real') && (genre === 'comedy')) {
  $('#jackblack').show();
}
if (parseInt(age) >= 12 && (gender === 'male') && (realornot === 'fictional') && ((genre === 'fantasy')) || (genre === 'scifi') || (genre === 'action')) {
  $('#darthvader').show();
}
if (parseInt(age) >= 15 && (gender === 'female') && (realornot === 'real') && ((genre === 'fantasy')) || (genre === 'action')) {
  $('#cateblanchett').show();
}
if (parseInt(age) >= 50 && (gender === 'male') && (realornot === 'fictional') && (genre === 'comedy')) {
  $('#abbottandcostello').show();
}
    event.preventDefault();
 });

});
