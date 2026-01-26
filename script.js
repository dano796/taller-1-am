$(document).ready(function() {
  
  $(".panel").click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $('.panel').removeClass("active");
      $(this).addClass("active");
    }
  });

  // Navegación del header
  $(".nav a").click(function(e) {
    e.preventDefault();
    const text = $(this).text();
    
    $('.panel').removeClass("active");
    
    if (text === "Food") {
      $(".panel.food").addClass("active");
    } else if (text === "Retail") {
      $(".panel.retail").addClass("active");
    } else if (text === "Community") {
      $(".panel.community").addClass("active");
    }
  });
  
});