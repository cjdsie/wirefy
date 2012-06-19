$(document).ready(function(){
   
  // Create the dropdown base
  $("<select />").appendTo("nav.main");
  
  // Create default option "Go to..."
  $("<option />", {
     "selected": "selected",
     "value"   : "",
     "text"    : "Go to..."
  }).appendTo("nav.main select");
  
  // Populate dropdown with menu items
  $("nav.main a").each(function() {
   var el = $(this);
   $("<option />", {
       "value"   : el.attr("href"),
       "text"    : el.text()
   }).appendTo("nav.main select");
  });
  
   // To make dropdown actually work
   // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
  $("nav.main select").change(function() {
    window.location = $(this).find("option:selected").val();
  });





$("<select />").appendTo("nav.menu1");

  // Create default option "Go to..."
  $("<option />", {
     "selected": "selected",
     "value"   : "",
     "text"    : "Go to..."
  }).appendTo("nav.menu1 select");

  // Populate dropdown with menu items
  $("nav.menu1 a").each(function() {
   var el = $(this);
   $("<option />", {
       "value"   : el.attr("href"),
       "text"    : el.text()
   }).appendTo("nav.menu1 select");
  });

   // To make dropdown actually work
   // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
  $("nav.menu1 select").change(function() {
    window.location = $(this).find("option:selected").val();
  });


 
 });