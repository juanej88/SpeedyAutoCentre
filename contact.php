<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
   <meta charset="utf-8">
   <title>Contact | Speedy Auto Centre</title>
   <?php
      require "header-footer-php/head.php";
   ?>
   <script src="https://www.google.com/recaptcha/api.js?render=6LeKc84ZAAAAANHC0n-3Q3cthsyhJ-WEOmUxkJSj"></script>
</head>

<?php
   require "send-email-php/send-contactEmail.php";
?>

<body>
   <header id="contactHeader" class="whiteHeader">
      <?php
         require "header-footer-php/header.php";
      ?>
   </header>

   <main>
      <section id="contactFirstSection"></section>

      <section id="bookingSecondSection">
         <?=$formHeading;?>
         <?=$formInstructions;?>
         <form class="bookingForm" action="#bookingSecondSection" method="POST">
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
               <input id="phoneNumber" class="input2" type="tel" name="phone-number" minlength="8" maxlength="18" pattern="[+]?([(][0-9]{1,3}[)])?[0-9- ]{8,12}" required />
            </section>

            <h3 class="formTitles bigSpan">Message Details</h3>
            <section class="addComments bigSpan">
               <label for="addComments" class="blockText">Message</label>
               <textarea id="addComments" name="comments" rows="5" maxlength="250"><?=$comments;?></textarea>
            </section>

            <section class="submitButton smallSpan">
               <input id="submitButton" type="submit" name="submit" value="Submit Message" />
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

   <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
   <script src="./js/main.js" type="text/javascript"></script>
   <script>
      let startRecaptcha = document.getElementById("phoneNumber");
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
