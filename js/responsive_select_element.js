$(document).ready(function(){
   
  // Create the dropdown base
  $("<select />").appendTo("nav");
  
  // Create default option "Go to..."
  $("<option />", {
     "selected": "selected",
     "value"   : "",
     "text"    : "Go to..."
  }).appendTo("nav select");
  
  // Populate dropdown with menu items
  $("nav a").each(function() {
   var el = $(this);
   $("<option />", {
       "value"   : el.attr("href"),
       "text"    : el.text()
   }).appendTo("nav select");
  });
  
   // To make dropdown actually work
   // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
  $("nav select").change(function() {
    window.location = $(this).find("option:selected").val();
  });

 
 });