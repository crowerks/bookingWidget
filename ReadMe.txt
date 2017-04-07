Instructions to incorperate calender widget dropdown:
    1.) Include this function in functions.php to render button in navigation.
    add_filter( 'wp_nav_menu_items', 'your_custom_menu_item');
    function your_custom_menu_item ($items) {
        $items .= '<li id="menu-item-721" class="menu-item menu-item-type-custom menu-item-object-custom" style="margin-top: 35px;"><button id="check_availability" class="book-toggle" onClick="toggleDiv(); darkOverlay();" ">Book</button><!-- this is appended in functions --></li>';
        return $items;  
        
        }
        
    2.) Include this code in header.php
    
		
<div id="minibooker_dropdown" style="display:none;">
    <div id="CalendarWidget">

        <link type="text/css" href="<?php echo get_stylesheet_directory_uri();?>/minibooker_scripts/ew_css/humanity/jquery-ui-1.8.9.custom.css" rel="stylesheet" />

        <link type="text/css" href="<?php echo get_stylesheet_directory_uri();?>/minibooker_scripts/mini-booker.css" rel="stylesheet" />
        <!--  <link type="text/css" href="<?php echo get_stylesheet_directory_uri();?>/TestStyle.css" rel="stylesheet"/> -->
        <link type="text/css" href="<?php echo get_stylesheet_directory_uri();?>/minibooker_scripts/ew_css/CalendarWidget_MultiProperty.css" rel="stylesheet" />

        <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri();?>/minibooker_scripts/ew_js/jquery-1.4.4.min.js"></script>
          <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri();?>/minibooker_scripts/ew_js/jquery-ui-1.8.9.custom.min.js"></script>



 

        <div class="row">
            <div class="divArrivalDate col-sm-6 col-xs-12 padding-bottom">
                <span id="lblArrivalDate" class="w_label">Arrival Date</span>
                <div class="input-group">
                    <input id="w_txtArrivalDate" readonly class="w_textbox height40 input-font-size" onchange="SetArrivalDate()" type="text" placeholder="Select Dates" style="padding-right:10px;" />
                </div>

            </div>
            <div class="divDepartureDate col-sm-6 col-xs-12 padding-bottom">
                <span id="lblDepartureDate" class="w_label">Departure Date</span>
                <div class="input-group">
                    <input id="w_txtDepartureDate" readonly class="w_textbox height40 input-font-size" onchange="SetDepartureDate()" type="text" placeholder="Select Dates" />
                </div>
            </div>
            <div class="divNights" style="display:none; visibility:hidden;">
                <!-- <span id="lblNights" class="w_label">Nights</span>-->
                <input id="w_txtNights" class="w_textbox txtNights" onchange="NightsChanged()" onkeydown="return CheckNumbers(event)" type="text" />

            </div>
        </div>

        <div class="row">

            <div class="divAdults col-sm-3 col-sm-3 col-xs-6 visible-xs padding-bottom">

                <select id="ddAdultsSelect" class="selectpicker btn-block height40" onchange="SetAdultSelect(); ">
                    <option disabled="disabled" selected="selected">&nbsp;Adults</option>
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                    <option value="5">5 Adults</option>
                    <option value="6">6 Adults</option>
                    <option value="7">7 Adults</option>
                    <option value="8">8 Adults</option>
                    <option value="9">9 Adults</option>
                </select>
            </div>
            <div class="divAdults col-sm-3 col-sm-3 col-xs-6 hidden-xs padding-bottom" id="adultsDivLi">
                <div class="btn-group btn-block ">
                    <button type="button" class="btn-underline dropdown-toggle textHover" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="adultButton"><span id="updateAdult"></span> <span id="staticAdultUpdate" >Adult</span>
                    </button>
                    <ul class="dropdown-menu ul-dropdown font-25 listHover" id="ddAdultsLi">

                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                    </ul>
                </div>
            </div>

            <div class="divChildren col-sm-3 col-sm-3 col-xs-6 visible-xs padding-bottom">

                <select id="ddChildrenSelect" class="selectpicker btn-block height40 selectHover" onchange="SetChildrenSelect()">
                    <option disabled="disabled" selected="selected">&nbsp;Children</option>
                    <option class="selectHover"value="0">None</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                    <option value="3">3 Children</option>
                    <option value="4">4 Children</option>
                    <option value="5">5 Children</option>
                    <option value="6">6 Children</option>
                    <option value="7">7 Children</option>
                    <option value="8">8 Children</option>
                    <option value="9">9 Children</option>
                </select>
            </div>
            <div class="divChildren col-sm-3 col-sm-3 col-xs-6 hidden-xs paddingottom" id="childrenDivLi">
                <div class="btn-group btn-block">
                    <button type="button" class="btn-underline dropdown-toggle textHover" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span id="updateChildren"></span> <span id="staticChildrenUpdate" >Children </span>
                    </button>

                    <ul class="dropdown-menu ul-dropdown font-25 listHover" id="ddChildrenLi">
                        <li>None</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                    </ul>
                </div>

            </div>

            <span id="w_lblErrorMessage" class="w_label_error" style="display:none; visibility:hidden;">Error Message</span>

            <div class="divPromo col-sm-3 col-xs-12" id="promoCode" >
<!--                 <span id="lblPromoCode" class="w_label">Promo</span>-->
                <input id="w_txtPromoCode" class="w_textbox txtPromoCode" onchange="PromoCode()" type="text" placeholder="Promo"/> 
                <div class="input-group">
<!--                    <input type="text" id="w_txtPromoCode" class="form-control txtPromoCode height40 input-font-size" placeholder="Promo Code" aria-describedby="basic-addon1" onchange="PromoCode()">-->
                    <!-- <span class="input-group-addon" id="basic-addon1">&bull;</span> -->
                </div>
            </div>
            <div class="col-sm-3 col-xs-12 padding-bottom">
                <input id="btnBook" type="button" value="Check Availability" class="btn btn-lg btn-info" onclick="BookNow(); " />
                <input id="w_hfArrivalDate" type="hidden" />
            </div>

        </div>
        <!-- /row -->
    </div>
    <!-- / #CalendarWidget -->

</div>
<!-- / #minibooker_dropdown -->
<div class="container content-container ">
    
    3.) Include in header.php directly under <body <?php body_class(); ?>> 
      
    <div id="darkOverlay" class="overlay"></div>
    
    4.) Include in footer.php
        
    <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri();?>/minibooker_scripts/ew_js/CalendarWidget.js"></script>
    <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri();?>/minibooker_scripts/tm-miniBooker.js"></script>
    
    5.) create file named tm-miniBooker.js and add the following javascript
        
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




    6.) Include correct booking ID in miniBooker_scripts/ew_js/CalenderWidget.js
    
    7.) Place button above in <head>
    
     <button id="check_availability" class="visible-xs visible-sm book-toggle" onClick="toggleDiv(); darkOverlay();" >Book</button>


    8.) add this style to style.css
    
    @media (max-width: 990px) {
    .navbar-header {
        float: none;
    }
    .navbar-left,.navbar-right {
        float: none !important;
    }
    .navbar-toggle {
        display: block;
    }
    .navbar-collapse {
        border-top: 1px solid transparent;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
    }
    .navbar-fixed-top {
        top: 0;
        border-width: 0 0 1px;
    }
    .navbar-collapse.collapse {
        display: none!important;
    }
    .navbar-nav {
        float: none!important;
        margin-top: 7.5px;
    }
    .navbar-nav>li {
        float: none;
    }
    .navbar-nav>li>a {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 20px;
    }
    .collapse.in{
        display:block !important;
    }
    .navbar-collapse {
	    position: absolute;
	    background-color: white;
	    right: 0px;
	    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 3px;
	    padding: 20px;
	}
	.navbar-default .navbar-nav>li>a {
	    height: auto !important;
	}
	.nav {
	    height: auto !important;
	}
	.navbar-toggle {
	    margin-right: 0 !important;
	}
}

        