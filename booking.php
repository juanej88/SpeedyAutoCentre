<?php
require "forms-php/booking-form.php";
// require("send-email-php/recaptcha.php");
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
   <meta charset="utf-8">
   <title>Booking | Speedy Auto Centre</title>
   <link href="./images/favicon/logo_Speedy_64.png" type="image/png" rel="icon" />
   <link href="./images/favicon/logo_Speedy_128.png" type="image/png" rel="icon" sizes="128x128" />
   <link href="./images/favicon/logo_Speedy_256.png" type="image/png" rel="icon" sizes="256x256" />
   <link href="./images/favicon/logo_Speedy_512.png" type="image/png" rel="icon" sizes="512x512" />
   <link href="./images/favicon/logo_Speedy_128.png" rel="apple-touch-icon" sizes="128x128" />
   <link href="./images/favicon/logo_Speedy_256.png" rel="apple-touch-icon" sizes="256x256" />
   <link href="./images/favicon/logo_Speedy_512.png" rel="apple-touch-icon" sizes="512x512" />
   <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@500;700;900&display=swap" rel="stylesheet">
   <script src="https://kit.fontawesome.com/cdd38ef8d8.js"></script>
   <link href="./css/style.css" type="text/css" rel="stylesheet" />
   <script src="https://www.google.com/recaptcha/api.js?render=6LfXT74ZAAAAAP1dpPcxjBryqxydqlfl3FO4X06n"></script>
</head>
<body>
   <header id="bookingHeader" class="hideBookingNav">
      <div class="logoContainer">
         <img class="navLogo bigLogo" src="./images/logo/logo_Speedy.png" alt="Speedy Auto Centre's Logo">
      </div>
      <nav>
         <ul>
            <li class="homeLink">
               <a class="navLinks" href="./index.php">
                  Home
                  <div class="menuArrowContainer">
                     <div class="menuArrow"></div>
                  </div>
               </a>
            </li>
            <li>
               <a class="navLinks" href="./aboutus.html">
                  About Us
                  <div class="menuArrowContainer">
                     <div class="menuArrow"></div>
                  </div>
               </a>
            </li>
            <li>
               <a class="navLinks" href="./services.html">
                  Services
                  <div class="menuArrowContainer">
                     <div class="menuArrow"></div>
                  </div>
               </a>
            </li>
            <li>
               <a class="navLinks currentPage" href="./booking.php">
               Booking
               <div class="menuArrowContainer">
                  <div class="menuArrow"></div>
               </div>
               </a>
            </li>
            <li class="contactContainer">
               <a class="navLinks" href="./contact.html">
                  Contact
                  <div class="menuArrowContainer">
                     <div class="menuArrow"></div>
                  </div>
               </a>
            </li>
            <li class="bottomIcons phoneIconContainer">
               <a class="lastLinks" href="tel:0296821772">
                  <i id="phoneIcon" class="infoIcons fas fa-phone-alt"></i>
                  <p class="iconBtn">02 9682 1772</p>
               </a>
            </li>
            <li class="bottomIcons locationIconContainer">
               <a class="lastLinks" href="https://maps.google.com/maps?ll=-33.847435,151.013035&z=16&t=m&hl=en&gl=AU&mapclient=embed&cid=6736138543682432416" target="_blank">
                  <i id="locationIcon" class="infoIcons fas fa-map-marker-alt"></i>
                  <p class="iconBtn">Get Directions</p>
               </a>
            </li>
            <!-- <li class="infoBox">
               <div class="arrowUp"></div>
               <h3>Working Hours</h3>
               <p>Monday - Friday:</p>
               <p>8:00am - 5:00pm</p>
               <p>Saturday:</p>
               <p>By Appointment Only</p>
               <p>Sunday:</p>
               <p class="closedToday">Closed</p>
            </li> -->
         </ul>
      </nav>
      <div class="menuBars open">
         <div class="barLines firstLine"></div>
         <div class="barLines secondLine"></div>
         <div class="barLines thirdLine"></div>
      </div>
   </header>

   <main>
      <section id="bookingFirstSection">
         <h2 class="bookingHeader">Organising a booking is quick and easy</h2>
      </section>

      <section id="bookingSecondSection">
         <h1>Booking</h1>
         <h3>Simply fill out the details below and one of our staff will contact you to confirm your appointment date and time.</h3>
         <form class="bookingForm" action="./booking.php" method="POST">
            <h3 class="formTitles bigSpan">Personal Details</h3>
            <section class="fullName bigSpan">
               <label for="fullName" class="blockText">Full Name</label>
               <input id="fullName" type="text" name="full-name" required />
            </section>
            <section class="email mediumSpan">
               <label for="email" class="blockText">Email</label>
               <input id="email" type="email" name="email" required />
            </section>
            <section class="phoneNumber mediumSpan">
               <label for="phoneNumber" class="blockText">Phone Number</label>
               <input id="phoneNumber" type="tel" name="phone-number" minlength="8" maxlength="12" required />
            </section>

            <h3 class="formTitles bigSpan">Booking Details</h3>
            <section class="preferredDate smallSpan">
               <label for="preferredDate" class="blockText">Preferred Date</label>
               <input id="preferredDate" type="date" name="preferred-date" min="<?=getMinDate();?>" pattern="\d{2}/\d{2}/\d{4}" placeholder="dd/mm/yyyy" required />
            </section>
            <section class="preferredTime smallSpan">
               <label for="preferredTime" class="blockText">Preferred Time</label>
               <select id="preferredTime" name="preferred-time" required>
                  <option value=""></option>
                  <!-- <?=$preferred_time;?> -->
                  <option value="8:30am - 12:00pm">8:30am - 12:00pm</option>
                  <option value="12:00pm - 4:00pm">12:00pm - 4:00pm</option>
                  <option value="9:00am - 12:00pm">Sat: 9:00am - 12:00pm</option>
               </select>
            </section>
            <section class="rego smallSpan">
               <label for="rego" class="blockText">Vehicle Registration Number</label>
               <input id="rego" type="text" name="car-rego" required />
            </section>

            <section class="carYear smallSpan">
               <label for="carYear" class="blockText">Year</label>
               <select id="carYear" name="car-year" required>
                  <option value=""></option>
                  <?=getCarYears();?>
               </select>
            </section>
            <section class="carMake smallSpan">
               <label for="carMake" class="blockText">Make</label>
               <input id="carMake" type="text" name="car-make" required />
            </section>
            <section class="carModel smallSpan">
               <label for="carModel" class="blockText">Model</label>
               <label for=""></label>
               <input id="carModel" type="text" name="car-model" required />
            </section>

            <span class="blockText bigSpan">Service</span>
            <section class="smallSpan">
               <input id="bluePinkSlip" class="checkboxes" type="checkbox" name="service[]" value="Blue/Pink Slip" />
               <label id="bluePinkSlipBox" for="bluePinkSlip" class="textInBox">
                  Blue / Pink Slip
                  <div id="bluePinkSlipCircle" class="checkCircle">
                     <div class="checkMark"></div>
                  </div>
               </label>
            </section>
            <section class="smallSpan">
               <input id="engineService" class="checkboxes" type="checkbox" name="service[]" value="General Maintenance" />
               <label id="engineServiceBox" for="engineService" class="textInBox">
                  General Maintenance
                  <div id="engineServiceCircle" class="checkCircle">
                     <div class="checkMark"></div>
                  </div>
               </label>
            </section>
            <section class="smallSpan">
               <input id="safetyInspections" class="checkboxes" type="checkbox" name="service[]" value="Safety Inspection" />
               <label id="safetyInspectionsBox" for="safetyInspections" class="textInBox">
                  Safety Inspections
                  <div id="safetyInspectionsCircle" class="checkCircle">
                     <div class="checkMark"></div>
                  </div>
               </label>
               
            </section>
            <section class="smallSpan">
               <input id="tyreBrakeService" class="checkboxes" type="checkbox" name="service[]" value="Tyre/Brake Service" />
               <label id="tyreBrakeServiceBox" for="tyreBrakeService" class="textInBox">
                  Tyre / Brake Service
                  <div id="tyreBrakeServiceCircle" class="checkCircle">
                     <div class="checkMark"></div>
                  </div>
               </label>
            </section>
            <section class="smallSpan">
               <input id="repairs" class="checkboxes" type="checkbox" name="service[]" value="Repairs" />
               <label id="repairsBox" for="repairs" class="textInBox">
                  Repairs
                  <div id="repairsCircle" class="checkCircle">
                     <div class="checkMark"></div>
                  </div>
               </label>
            </section>
            <section class="smallSpan">
               <input id="otherService" class="checkboxes" type="checkbox" name="service[]" value="Other Service/Comments" />
               <label id="otherServiceBox" for="otherService" class="textInBox">
                  Other / Add Comments
                  <div id="otherServiceCircle" class="checkCircle">
                     <div class="checkMark"></div>
                  </div>
               </label>
            </section>

            <section class="addComments hideComments bigSpan">
               <label for="addComments" class="blockText">Comments</label>
               <textarea id="addComments" name="comments" rows="4"></textarea>
            </section>

            <section class="submitButton smallSpan">
               <input id="submitButton" type="submit" name="submit" value="Submit Booking" />
            </section>
            <input id="gToken" type="hidden" name="g-token" />
         </form>
      </section>
   </main>

   <footer id="websiteFooter">
      <div class="firstFooterColumn footerColumn">
         <h3>Speedy Auto Centre</h3>
         <p>Established in 2007. The experts from Speedy Auto Centre are equipped to deal with the latest automotive technology in vehicles of all makes and keep them in perfect working order.</p>
         <a class="footerButton" href="#bookingFirstSection">Book Now</a>
      </div>
      <div class="secondFooterColumn footerColumn">
         <h3>Working Hours</h3>
         <p>Monday-Friday:</p>
         <p>8:00am - 5:00pm</p>
         <p>Saturday:</p>
         <p>By Appointment Only</p>
         <p>Sunday:</p>
         <p class="closedToday">Closed</p>
      </div>
      <div class="thirdFooterColumn footerColumn">
         <h3>Contact Us</h3>
         <p><a class="footerInfoLink" href="tel:0296821772">02 9682 1772</a></p>
         <p class="row1"><a class="footerInfoLink" href="https://maps.google.com/maps?ll=-33.847435,151.013035&z=16&t=m&hl=en&gl=AU&mapclient=embed&cid=6736138543682432416" target="_blank">171 Clyde St, South Granville NSW 2142</a></p>
         <div class="socialMedia">
            <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="#" target="_blank"><i class="fab fa-facebook-square"></i></a>
         </div>
      </div>
      <p id="copyright">Copyright &copy; <span class="thisYear"></span> Speedy Auto Centre Pty Ltd. All rights reserved.</p>
      <p id="createdBy">Created by <a href="http://juanespinosa.me">Juan Espinosa</a></p>
   </footer>

   <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
   <script defer src="./js/main.js" type="text/javascript"></script>
   <script>
      grecaptcha.ready(function() {
         grecaptcha.execute('6LfXT74ZAAAAAP1dpPcxjBryqxydqlfl3FO4X06n', {action: 'homepage'}).then(function(token) {
            document.getElementById('gToken').value = token;
         });
      });
   </script>
</body>
</html>
