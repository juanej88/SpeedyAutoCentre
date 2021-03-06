<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
   <meta charset="utf-8">
   <title>Booking | Speedy Auto Centre</title>
   <script async src="https://www.googletagmanager.com/gtag/js?id=UA-179410478-1"></script>
   <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-179410478-1');
   </script>
   <?php
      require "header-footer-php/head.php";
   ?>
   <script src="https://www.google.com/recaptcha/api.js?render=6LeKc84ZAAAAANHC0n-3Q3cthsyhJ-WEOmUxkJSj"></script>
</head>

<?php
   require "forms-php/booking-form.php";
   require "send-email-php/send-email.php";
?>

<body>
   <header id="bookingHeader" class="whiteHeader">
      <?php
         require "header-footer-php/header.php";
      ?>
   </header>

   <main>
      <section id="bookingFirstSection">
         <h2 class="bookingHeader">Organising a booking is quick and easy</h2>
      </section>

      <section id="bookingSecondSection">
         <?=$formHeading;?>
         <?=$formInstructions;?>
         <form class="bookingForm" action="" method="POST">
            <h3 class="formTitles bigSpan">Personal Details</h3>
            <section class="fullName bigSpan spanGrid">
               <label for="fullName" class="blockText">Full Name</label>
               <input id="fullName" class="input0" type="text" name="full-name" minlength="2" maxlength="30" pattern="[’'A-zÀ-ÿ- ]{2,30}" value="<?=$fullName;?>" required />
            </section>
            <section class="email mediumSpan spanGrid">
               <label for="email" class="blockText">Email</label>
               <input id="email" class="input1" type="email" name="email" value="<?=$emailAddress;?>" required />
            </section>
            <section class="phoneNumber mediumSpan spanGrid">
               <label for="phoneNumber" class="blockText">Phone Number</label>
               <input id="phoneNumber" class="input2" type="tel" name="phone-number" minlength="8" maxlength="18" pattern="[+]?([(][0-9]{1,3}[)])?[0-9- ]{8,12}" value="<?=$phoneNumber;?>" required />
            </section>

            <h3 class="formTitles bigSpan">Booking Details</h3>
            <section class="preferredDate smallSpan spanGrid">
               <label for="preferredDate" class="blockText">Preferred Date</label>
               <input id="preferredDate" type="date" name="preferred-date" min="<?=getMinDate();?>" pattern="\d{2}/\d{2}/\d{4}" placeholder="dd/mm/yyyy" required />
               <?=$date_error;?>
            </section>
            <section class="preferredTime smallSpan spanGrid">
               <label for="preferredTime" class="blockText">
                  Preferred Time
                  <div class="downArrowContainer">
                     <div class="downArrow"></div>
                  </div>
               </label>
               <select id="preferredTime" class="selectInput" name="preferred-time" required>
               </select>
            </section>
            <section class="rego smallSpan spanGrid">
               <label for="rego" class="blockText">Vehicle Registration Number</label>
               <input id="rego" class="input3" type="text" name="car-rego" minlength="2" maxlength="8" pattern="[A-Za-z0-9- ]{2,8}" value="<?=$carRego;?>" required />
            </section>
            <section class="carYear smallSpan spanGrid">
               <label for="carYear" class="blockText">
                  Year
                  <div class="downArrowContainer">
                     <div class="downArrow"></div>
                  </div>
               </label>
               <select id="carYear" class="input4 selectInput" name="car-year" required>
                  <option value=""></option>
                  <?=getCarYear();?>
               </select>
            </section>
            <section class="carMake smallSpan spanGrid">
               <label for="carMake" class="blockText">
                  Make
                  <div class="downArrowContainer">
                     <div class="downArrow"></div>
                  </div>
               </label>
               <select id="carMake" class="input5 selectInput" type="text" name="car-make" required>
                  <option value=""></option>
                  <?=getCarMake();?>
               </select>
            </section>
            <section class="carModel smallSpan spanGrid">
               <label for="carModel" class="blockText">Model</label>
               <input id="carModel" class="input6" type="text" name="car-model" minlength="1" maxlength="15" pattern="[A-Za-z0-9- ]{1,15}" value="<?=$carModel;?>" required />
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
               <textarea id="addComments" name="comments" rows="4" maxlength="250"><?=$comments;?></textarea>
            </section>

            <section class="submitButton smallSpan">
               <input id="submitButton" type="submit" name="submit" value="Submit Booking" />
            </section>
            <input id="gToken" type="hidden" name="g-token" />
         </form>
      </section>
   </main>

   <footer id="websiteFooter">
      <?php
         require "header-footer-php/footer.php";
      ?>
   </footer>

   <script defer src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
   <script defer src="./js/main.js" type="text/javascript"></script>
   <script>
      let startRecaptcha = document.getElementById("carMake");
      startRecaptcha.addEventListener("click", onClick);
      function onClick(e) {
         e.preventDefault();
         grecaptcha.ready(function() {
            grecaptcha.execute('6LeKc84ZAAAAANHC0n-3Q3cthsyhJ-WEOmUxkJSj', {action: 'submit'}).then(function(token) {
               document.getElementById('gToken').value = token;
            });
         });
      }
   </script>
</body>
</html>
