<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
   <meta charset="utf-8">
   <title>Speedy Auto Centre</title>
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
</head>

<body>
   <header id="homeHeader">
      <?php
         require "header-footer-php/header.php";
      ?>
   </header>

   <main>
      <section id="loadingSection">
         <div class="animationContainer">
            <i class="fas fa-car-side car"></i>
            <div class="road"></div>
            <div class="lanes">
               <?php
               for ($i = 0; $i < 8; $i++):
               ?>
               <div class="laneDivision"></div>
               <?php
               endfor;
               ?>
            </div>
            <h3 class="loadingText">Loading</h3>
            <div class="loadingIndicator"></div>
         </div>
      </section>

      <section id="homeFirstSection">
         <div class="firstSentence">
            <h2>Yes, we can service your brand new car</h2>
            <a class="bookNowButton" href="./booking.php">Book Now</a>
         </div>
      </section>

      <section id="homeSecondSection">
         <div class="briefIntro">
            <h2>High quality service for your car</h2>
            <p>Speedy Auto Centre – the car experts. This is the right address for outstanding service quality for your car. Whether you are looking for advice, repair or service work, we can offer the full package.</p><br/>
            <p>The experts from Speedy Auto Centre are equipped to deal with the latest automotive technology in vehicles of all makes and keep them in perfect working order. And so your car is always in the best possible hands and your manufacturer’s warranty is safe with us, when you take it to Speedy Auto Centre Service for maintenance and repair.</p><br/>
            <p>For everything your car needs.</p>
            <a class="bookNowBlueButton" href="./booking.php">Book Now</a>
         </div>
         <div class="verticalImage"></div>
      </section>

      <section id="homeThirdSection">
         <h2>What our clients say</h2>
         <div id="firstComment" class="firstComment comments">
            <img class="profileImage" src="./images/profile/profile1.png" alt="Profile Image 1">
            <h3>Great Service!</h3>
            <div class="rating">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
            </div>
            <p>Great Service! Perfect value! John and his team are just fabulous! Had my 2010 Corolla there for a repair. Very uncomplicated and quick service at a fair price! Thanks</p>
            <h4>Dennis Forster</h4>
         </div>
         <div id="secondComment" class="secondComment comments">
            <img class="profileImage" src="./images/profile/profile2.png" alt="Profile Image 1">
            <h3>Great Mechanic!</h3>
            <div class="rating">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
            </div>
            <p>Great Mechanic! John and Carson are friendly and helpful. I've had my Nissan X-trail serviced here 2 years in a row and I found them to be honest and professional with there work. Priced fairly well too. definitely recommend this place. keep up the good work. Thanks Carson for the extra time you spent on my car.</p>
            <h4>Sam Youchaa</h4>
         </div>
         <div id="thirdComment" class="thirdComment comments">
            <img class="profileImage" src="./images/profile/profile3.png" alt="Profile Image 1">
            <h3>Excellent customer service</h3>
            <div class="rating">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
            </div>
            <p>Excellent customer service and also my car service was great!</p>
            <h4>Gaston Gonzalez</h4>
         </div>
         <div class="referenceCircleContainer">
            <div class="referenceCircle referenceCircleOne referenceCircleActive"></div>
            <div class="referenceCircle referenceCircleTwo"></div>
            <div class="referenceCircle referenceCircleThree"></div>
         </div>
      </section>
   </main>

   <footer id="websiteFooter">
      <?php
         require "header-footer-php/footer.php";
      ?>
   </footer>

   <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
   <script defer src="./js/main.js" type="text/javascript"></script>
   <script defer src="./js/slider.js" type="text/javascript"></script>
</body>
</html>
