<html>
<head>
    <title>Eres Widget</title>
</head>
<body>
    <div id="CalendarWidget">
        <link type="text/css" href="ew_css/CalendarWidget.css" rel="stylesheet" />
        <link type="text/css" href="ew_css/CalendarWidget_MultiProperty.css" rel="stylesheet" />
        <link type="text/css" href="ew_css/humanity/jquery-ui-1.8.9.custom.css" rel="stylesheet" />
        <script type="text/javascript" src="ew_js/jquery-1.4.4.min.js"></script>
        <script type="text/javascript" src="ew_js/jquery-ui-1.8.9.custom.min.js"></script>
        <script type="text/javascript" src="ew_js/CalendarWidget.js"></script>
        <div class="divArrivalDate">
            <span id="lblArrivalDate" class="w_label">Arrival Date</span>
            <input id="w_txtArrivalDate" readonly="true" class="w_textbox txtDates" onchange="SetArrivalDate()" type="text" />
        </div>

        <div class="divNights">
            <span id="lblNights" class="w_label">Nights</span>
            <input id="w_txtNights" class="w_textbox txtNights" onchange="NightsChanged()" onkeydown="return CheckNumbers(event)" type="text" />
            <img id="imgDown" src="ew_images/Down.png" alt="Arrow" title="Scroll Nights Down" class="w_cursor imgNightsDown" onclick="ScrollDateDown()" />
            <img id="imgUp" src="ew_images/Up.png" alt="Arrow" title="Scroll Nights Up" class="w_cursor imgNightsUp" onclick="ScrollDateUp()" />
        </div>
        <div class="divDepartureDate">
            <span id="lblDepartureDate" class="w_label">Departure Date</span>
            <input id="w_txtDepartureDate" readonly="true" class="w_textbox txtDates" onchange="SetDepartureDate()" type="text" />
        </div>

        <span id="lblReset" class="w_cursor w_label_reset" onclick="ResetDates()">Reset Dates</span>

        <div class="divAdults">
            <span id="lblAdults" class="w_label">Adults</span>
            <select id="ddAdults" class="w_dropdown" onchange="SetAdults()">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="11">12</option>
            </select>
        </div>
        <div class="divChildren">
            <span id="lblChildren" class="w_label">Children</span>
            <select id="ddChildren" class="w_dropdown" onchange="SetChildren()">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>

        <span id="w_lblErrorMessage" class="w_label_error">Error Message</span>
        <div class="divPromo">
            <span id="lblPromoCode" class="w_label">Promo Code</span>
            <input id="w_txtPromoCode" class="w_textbox txtPromoCode" onchange="PromoCode()" type="text" />
        </div>
		
        <input id="btnBook" type="button" value="Book Now" class="btnBook" onclick="BookNow()" />
        <input id="w_hfArrivalDate" type="hidden" />
    </div>
</body>
</html>