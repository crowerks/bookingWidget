'use strict'

// Updates Children button
$('#ddChildrenLi li').click(function() {
    var $this = $(this);
    var buttonText = $('#updateChildren').html($this.text());

    if ($this.text() === "None") {
        $('#staticChildrenUpdate').html("Children");
        $('#updateChildren').html("");
    }
    if ($this.text() === "1") {
        $('#staticChildrenUpdate').html("Child");
    } else {
        $('#staticChildrenUpdate').html("Children");
    }
})

// Updates Adult button
$('#ddAdultsLi li').click(function() {
    var $this = $(this);
    var buttonText = $('#updateAdult').html($this.text());

    if ($this.text() === "1") {
        $('#staticAdultUpdate').html("Adult");
    } else {
        $('#staticAdultUpdate').html("Adults"); 
    }
})


function toggleDiv() {
    $("#minibooker_dropdown").toggle(); 
   
}

function darkOverlay() {
    if ($("#darkOverlay").hasClass("active")) {
        $("#darkOverlay").removeClass("active");
    } else {
        $("#darkOverlay").addClass("active");
    
    }
}

function hideBookButton() {
    $("#check_availability").css('float', 'left');
}

function loadBookingPage() {
    var BookingSite = 'https://www.bookonthenet.net/west/premium/eresmain.aspx?id=xQaW7aJ%2b4t8CKiREJhhXpmt3XDGoonl5Dzx%2bI0FYxLo%3d&arrival_date=2017-3-29&stay_nights=1&adults=1&children=0#/search';
     window.open(BookingSite, 'EresBook');
}

$(function(){
   $(".book-toggle").click(function () {
       $(this).text(function(i, text){
          return text === "Book" ? "X" : "Book";
      })
   });
})


