var w_monthname = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
var w_Adults = 1;
var w_Children = 0;

var URL = 'PropertyURL';
var AliasID = '0000000000';
var isTest = false;
var premium_test = false;
var ServerSite = 'west';

if (premium_test)
    ServerSite += '/premium_test/';
else
    ServerSite += '/premium/';


//Eres Premium ID -- PLEASE ENTER ME HERE
var id= 'xQaW7aJ%2b4t8CKiREJhhXpmt3XDGoonl5Dzx%2bI0FYxLo%3d';

function BookNow() {
    var ArrivalDate = $("#w_hfArrivalDate").val();
    var Nights = $("#w_txtNights").val();
    var PromoCode = $("#w_txtPromoCode").val();
    var ddRateCategories = $('select[id*="ddl_RateCategories_"]');
    var rateCategory = ddRateCategories.val();


    if ((AliasID != "0000000000") || (id != 'EnterPropertyIDhere')) {
        var BookingSite = isTest ? 'http://localhost/Eres2012/' : 'https://www.bookonthenet.net/' + ServerSite;
        BookingSite +='eresmain.aspx?id=' + id
                    + '&arrival_date=' + ArrivalDate
                    + '&stay_nights=' + Nights
                    + '&adults=' + w_Adults
                    + '&children=' + w_Children;

        if (PromoCode != '') {
            BookingSite = BookingSite + '&promo_code=' + PromoCode;
        }
        if (rateCategory != '' && rateCategory != undefined)
            BookingSite = BookingSite + '&rate_cat_id=' + rateCategory;

        window.open(BookingSite, 'EresBook');
    }
    else {
        var ErrorMsg = 'Please Select a Property.';
        $("#w_lblErrorMessage").show();
        $("#w_lblErrorMessage").html(ErrorMsg);
    }
};

$(function () {
    // Datepicker
    $("#w_txtArrivalDate").datepicker({
        showOn: "both",
        buttonImage: "http://escapelodging.com/wp-content/uploads/2017/02/calender-icon-40px.png",
        buttonImageOnly: true,
        dateFormat: 'M d, yy',
        minDate: new Date(),
        buttonText: 'Select Arrival Date',
        changeMonth: true,
        changeYear: true
    });

    $("#w_txtDepartureDate").datepicker({
        showOn: "both",
        buttonImage: "http://escapelodging.com/wp-content/uploads/2017/02/calender-icon-40px.png",
        buttonImageOnly: true,
        dateFormat: 'M d, yy',
        minDate: '+1d',
        maxDate: '+180d',
        buttonText: 'Select Departure Date',
        changeMonth: true,
        changeYear: true
    });

    ResetDates();
});

function SetArrivalDate() {
    var c1ArrivalDate = new Date($("#w_txtArrivalDate").val());
    var ONE_DAY = 1000 * 60 * 60 * 24;
    var c1ArrivalDate_ms = c1ArrivalDate.getTime();
    var c1MinDate_ms = c1ArrivalDate_ms + ONE_DAY;
    var c1MinDate = new Date(c1MinDate_ms);
    var c1MaxDate_ms = c1ArrivalDate_ms + (ONE_DAY * 180);
    var c1MaxDate = new Date(c1MaxDate_ms);
    var c1ArrivalYear = c1ArrivalDate.getFullYear();
    var c1ArrivalMonth = c1ArrivalDate.getMonth() + 1;
    var c1ArrivalDay = c1ArrivalDate.getDate();
    $("#w_hfArrivalDate").val(c1ArrivalYear + '-' + c1ArrivalMonth + '-' + c1ArrivalDay);
    $("#w_txtDepartureDate").datepicker("option", "minDate", c1MinDate);
    $("#w_txtDepartureDate").datepicker("option", "maxDate", c1MaxDate);
    NightsChanged();
};

function SetDepartureDate() {
    $("#w_lblErrorMessage").hide();
    var ONE_DAY = 1000 * 60 * 60 * 24;
    var c1ArrivalDate = new Date($("#w_txtArrivalDate").val());
    var c1DepartureDate = new Date($("#w_txtDepartureDate").val());

    var c1days = Math.round((c1DepartureDate.getTime() - c1ArrivalDate.getTime()) / ONE_DAY);
    $("#w_txtNights").val(c1days);
};

function ResetDates() {
    var c1ArrivalDate = new Date();
    var c1ArrivalYear = c1ArrivalDate.getFullYear();
    var c1ArrivalMonth = c1ArrivalDate.getMonth() + 1;
    var c1ArrivalDay = c1ArrivalDate.getDate();

    $("#w_lblErrorMessage").hide();
    $("#w_txtArrivalDate").val(w_monthname[c1ArrivalDate.getMonth()] + ' ' + c1ArrivalDay + ', ' + c1ArrivalYear);
    $("#w_hfArrivalDate").val(c1ArrivalYear + '-' + c1ArrivalMonth + '-' + c1ArrivalDay);
    $("#w_txtNights").val("1");

    var ONE_DAY = 1000 * 60 * 60 * 24;
    var c1ArrivalDate_ms = c1ArrivalDate.getTime();
    var c1MinDate_ms = c1ArrivalDate_ms + ONE_DAY;
    var c1MinDate = new Date(c1MinDate_ms);
    var c1MaxDate_ms = c1ArrivalDate_ms + (ONE_DAY * 180);
    var c1MaxDate = new Date(c1MaxDate_ms);
    $("#w_txtDepartureDate").datepicker("option", "minDate", c1MinDate);
    $("#w_txtDepartureDate").datepicker("option", "maxDate", c1MaxDate);
    NightsChanged();
};

function CheckNumbers(e) {
    var keynum;
    var keychar;
    var numcheck;
    if (window.event) {
        keynum = e.keyCode;
    }
    else if (e.which) {
        keynum = e.which;
    }

    keychar = String.fromCharCode(keynum);
    numcheck = /\d/;
    return numcheck.test(keychar);
};

function NightsChanged() {
    if ($("#w_txtNights").val() <= 0) {
        $("#w_lblErrorMessage").hide();

        if ($("#w_txtNights").val() == 0) {
            $("#w_txtNights").val("1");
        }
        else {
            $("#w_txtNights").val(Math.abs($("#w_txtNights").val()));
        }
    }
    else if ($("#w_txtNights").val() > 180) {
        $("#w_txtNights").val("1");
        var ErrorMsg = 'Max reservation length is 180 days.';
        $("#w_lblErrorMessage").show();
        $("#w_lblErrorMessage").html(ErrorMsg);
    }
    else {
        $("#w_lblErrorMessage").hide();
    }

    var c1ArrivalDate = new Date($("#w_txtArrivalDate").val());
    var ONE_DAY = 1000 * 60 * 60 * 24;
    // Convert date to milliseconds
    var c1ArrivalDate_ms = c1ArrivalDate.getTime();
    var c1DepartureDate_ms = c1ArrivalDate_ms + (ONE_DAY * parseInt($("#w_txtNights").val()));
    var c1DepartureDate = new Date(c1DepartureDate_ms);

    var c1DepartureYear = c1DepartureDate.getFullYear();
    var c1DepartureMonth = c1DepartureDate.getMonth() + 1;
    var c1DepartureDay = c1DepartureDate.getDate();
    $("#w_txtDepartureDate").val(w_monthname[c1DepartureDate.getMonth()] + ' ' + c1DepartureDay + ', ' + c1DepartureYear);
};

function ScrollDateDown() {
    var w_nights = parseInt($("#w_txtNights").val());
    if (w_nights > 1) {
        $("#w_txtNights").val(w_nights - 1);
        NightsChanged();
    }
};

function ScrollDateUp() {
    var w_nights = parseInt($("#w_txtNights").val());
    if (w_nights < 180) {
        $("#w_txtNights").val(w_nights + 1);
        NightsChanged();
    }
};

// Gets Children index
$('#ddChildrenLi li').click(function() {
    w_Children = $(this).index();
})

// Gets Adult index and increments it by one
$('#ddAdultsLi li').click(function() {
    w_Adults = $(this).index();
    w_Adults++;
})

function SetAdultSelect() {
    w_Adults = $("#ddAdultsSelect").val();

};

function SetChildrenSelect() {
    w_Children = $("#ddChildrenSelect").val();
    
};


function SetProperty() {
    $("#w_lblErrorMessage").hide();
    AliasID = $("#ddProperties").val();
};

function PromoCode()
{
	
	if($("#w_txtPromoCode").val() !='') 
	{
		var ddRateCategories = $('select[id*="ddl_RateCategories_"]');
		ddRateCategories.val("-1");
		ddRateCategories.attr("disabled", "disabled");
	}
	else
	{
		$('select[id*="ddl_RateCategories_"]').removeAttr('disabled');
	}
	
};



