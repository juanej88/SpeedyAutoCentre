<?php

// ===== First Section =====
// ====> Form Set Up 

date_default_timezone_set("Australia/Sydney");

function getMinDate() {
    $getDay = date("D");

    if($getDay === "Fri" || $getDay === "Sat") {
        $min_date = date("Y-m-d", strtotime("Tuesday next week"));
    } else {
        $min_date = date("Y-m-d", strtotime("+2 days"));
    }

    return $min_date;
}

function getCarYear() {
    $getYear = date("Y");

    for ($i = 0; $i < 32 ; $i++) {  
        if ($i < 31) {
            echo "<option value=\"$getYear\">$getYear</option>\n";
        } else {
            $getYear += 1;
            echo "<option value=\"$getYear\">Older than $getYear</option>\n";
        }
        
        $getYear -= 1;
    }
}

$car_makes = ["Audi", "BMW", "Citroen", "Fiat", "Ford", "Holden", "Honda", "Hyundai", "Infiniti", "Jeep", "Kia", "Land Rover", "Lexus", "Mazda", "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan", "Peugeot", "Renault", "Skoda", "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo", "Other"];

function getCarMake() {
    global $car_makes;

    foreach ($car_makes as $make) {
        echo "<option value=\"$make\">$make</option>\n";
    }
}

// ===== End First Section

// ===== Second Section =====
// ====> Form Validation

// Booking form variables
// Personal Details Section
$fullName = trim($_POST["full-name"]);
$email = trim(filter_var($_POST["email"], FILTER_SANITIZE_EMAIL));
$phoneNumber = trim($_POST["phone-number"]);
// Booking Details Section
$preferredDate = $_POST["preferred-date"];
$getDatePHP = strtotime($preferredDate);
$preferredDatePHP = date("l, d F Y", $getDatePHP);
$preferredTime = $_POST["preferred-time"];
$carRego = trim($_POST["car-rego"]);
$carYear = $_POST["car-year"];
$carMake = $_POST["car-make"];
$carModel = trim($_POST["car-model"]);
$comments = trim($_POST["comments"]);

// Regex for every "text" input, excluding the email
$fullNamePattern = "/^[A-z-_ ]{2,30}$/";
$phoneNumberPattern = "/^[+]?([(][0-9]{1,3}[)])?[0-9- ]{8,12}$/";
$carRegoPattern = "/^[A-Za-z0-9- ]{2,8}$/";
$carModelPattern = "/^[A-Za-z0-9- ]{2,15}$/";
$commentsPattern = "/^[\w\s\?\!\'\"\,\;\:\(\)\-\_]{0,250}$/";

// It gets the day selected e.g. "Sunday"
$check_date = $_POST["preferred-date"];
$get_date_PHP = strtotime($check_date);
$check_date_PHP = date("l", $get_date_PHP);

function validatePreferredTime() {
    global $check_date_PHP, $preferredTime;
    if ($check_date_PHP === "Saturday" && $preferredTime === "9:00am - 12:00pm") {
        return TRUE;
    } else if ($check_date_PHP !== "Saturday" && ($preferredTime === "8:30am - 12:00pm" || $preferredTime === "12:00pm - 4:00pm")) {
        return TRUE;
    } else {
        return FALSE;
    }
}

// Default variables
$formHeading = "<h1>Booking</h1>";
$formInstructions = "<h3 id=\"bookingInstructions\">Simply fill out the details below and one of our staff will contact you to confirm your appointment date and time.</h3>";

// Successful variables
$formHeading_successful = "<div class=\"temporalBar successfulBar\"></div><h1>Thank you for your booking</h1>";
$formInstructions_successful = "<h3 id=\"bookingInstructions\">Your booking has been sent successfully.<br/></br>One of our staff members will contact you to confirm your appointment date and time.</h3>
    <p class=\"bookingDetails\">Preferred Date: $preferredDatePHP</p>
    <p class=\"bookingDetails\">Preferred Time: $preferredTime</p><br>
    <h3>Location:</h3>
    <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6627.276781805231!2d151.013035!3d-33.847435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d7b9250de022da0!2sSpeedy%20Auto%20Centre!5e0!3m2!1sen!2sau!4v1599907668963!5m2!1sen!2sau\" width=\"800\" height=\"600\" frameborder=\"0\" style=\"border:0;width: 90%;max-width: 950px;margin-bottom: 1rem;position: relative;transform: translateX(-50%);left: 50%;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>";

// Error variables
$formHeading_error = "<div class=\"temporalBar errorBar\"></div><h1 class=\"errorMsg\">Your booking is incomplete</h1>";
$formInstructions_error = "<h3 id=\"bookingInstructions\" class=\"errorMsg\"><br/>Your booking hasn't been sent yet.</h3><h3 class=\"errorMsg\">You must:</h3>";
// Specific error variables
$fullName_error = "<h3 class=\"errorMsg\">- Submit a valid NAME</h3>";
$email_error = "<h3 class=\"errorMsg\">- Submit a valid EMAIL</h3>";
$phoneNumber_error = "<h3 class=\"errorMsg\">- Submit a valid phone NUMBER</h3>";
$preferredDate_error = "<h3 class=\"errorMsg\">- Select a valid DATE. Sundays are not available</h3>";
$preferredTime_error = "<h3 class=\"errorMsg\">- Select a valid TIME</h3>";
$carRego_error = "<h3 class=\"errorMsg\">- Select a valid car REGO</h3>";
$carMake_error = "<h3 class=\"errorMsg\">- Select a valid car MAKE</h3>";
$carModel_error = "<h3 class=\"errorMsg\">- Select a valid car MODEL</h3>";
$service_error = "<h3 class=\"errorMsg\">- Select at least one SERVICE for your car</h3>";
$comments_error = "<h3 class=\"errorMsg\">- Submit valid COMMENTS. Special characters which are allowed: ? ! % ' \" . , ; : ( ) - _</h3>";

// Add the respective $input_error to the variable $formInstructions
function addErrorMessage($input_validation, $input_error) {
    if ($input_validation === 0 || 
        $input_validation === FALSE || 
        $input_validation === "Sunday" || 
        $input_validation === NULL) {
        return $input_error;
    }
}

// Validates all the inputs once the form is intended to be sumbitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // These variables validate all "text" inputs
    $fullName_validation = preg_match($fullNamePattern, $fullName);
    $email_validation = filter_var($email, FILTER_VALIDATE_EMAIL);
    $phoneNumber_validation = preg_match($phoneNumberPattern, $phoneNumber);
    $preferredTime_validation = validatePreferredTime();
    $carRego_validation = preg_match($carRegoPattern, $carRego);
    $carMake_validation = in_array($carMake, $car_makes);
    $carModel_validation = preg_match($carModelPattern, $carModel);
    // This validates the comments if the user submitted some
    $comments_validation = 1;
    if ($comments !== NULL) {
        $comments = str_replace(".", "_", $comments);
        $comments = str_replace("%", " percentage", $comments);
        $comments_validation = preg_match($commentsPattern, $comments);
    }
    // It checks if there is any invalid input in order to display
    // an error text to the user, so it can be fixed
    if ($fullName_validation === 0 || 
        $email_validation === FALSE || 
        $phoneNumber_validation === 0 || 
        $check_date_PHP === "Sunday" || 
        $preferredTime_validation === FALSE || 
        $carRego_validation === 0 || 
        $carMake_validation === FALSE ||
        $carModel_validation === 0 ||
        $_POST["service"] === NULL || 
        $comments_validation === 0) {

        $formHeading = $formHeading_error;
        $formInstructions = $formInstructions_error;
        // If there is an invalid input, it checks input by input
        // in order to display the specific error to the user
        $formInstructions .= addErrorMessage($fullName_validation, $fullName_error);
        $formInstructions .= addErrorMessage($email_validation, $email_error);
        $formInstructions .= addErrorMessage($phoneNumber_validation, $phoneNumber_error);
        $formInstructions .= addErrorMessage($check_date_PHP, $preferredDate_error);
        $formInstructions .= addErrorMessage($preferredTime_validation, $preferredTime_error);
        $formInstructions .= addErrorMessage($carRego_validation, $carRego_error);
        $formInstructions .= addErrorMessage($carMake_validation, $carMake_error);
        $formInstructions .= addErrorMessage($carModel_validation, $carModel_error);
        $formInstructions .= addErrorMessage($_POST["service"], $service_error);
        $formInstructions .= addErrorMessage($comments_validation, $comments_error);
        
        // if ($check_date_PHP === "Sunday") {
        //     $date_error = "<p class='invalidSmallText'>Closed on Sundays</p>";
        // }

    } else {
        echo 
        '<section id="loadingSection">
            <div class="animationContainer">
                <i class="fas fa-car-side car"></i>
                <div class="road"></div>
                <div class="lanes">';
                    for ($i = 0; $i < 8; $i++) {
                        echo '<div class="laneDivision"></div>';
                    }
        echo
                '</div>
                <h3 class="loadingText">Sending</h3>
                <div class="loadingIndicator"></div>
            </div>
        </section>';

        // If all inputs are successful, the heading displays
        // a successful text and the form is submitted
        $formHeading = $formHeading_successful;
        $formInstructions = $formInstructions_successful;
    }
};

// ===== End Second Section

// ===== Third Section =====
// ====> Email Composition

// It gets the selected checkbox(es) and store it(them)
// into the variable $serviceRequired
function getService() {
    global $_POST;
    $num_services = 1;

    // This if statement gets the number of the
    // checkboxes selected when they are 2 or more
    if(gettype($_POST["service"]) === "array") {
        $num_services = count($_POST["service"]);
    }

    $all_services = $_POST["service"][0];

    // If 2 or more options are selected, they are joined by a comma
    if($num_services > 1) {
        for ($i = 1; $i < $num_services; $i++) {
            $all_services = $all_services . ", " . $_POST["service"][$i];
        }
    }

    return $all_services;
}
$serviceRequired = getService();

// If comments are typed, they are added to the email, otherwise, they are not
function verifyComments() {
    global $comments;

    if ($comments) {
        return "<p>Comments: <strong>$comments</strong></p>";
    }
}
$addComents = verifyComments();

// The email composition
$subject = "New Booking Request | $fullName";
$message = "<h3>You have a new booking request</h3>
            <br />
            <h3>Client Details:</h3>
            <hr />
            <p>Name: <strong>$fullName</strong></p>
            <p>Email: <strong>$email</strong></p>
            <p>Phone Number: <strong>$phoneNumber</strong></p>
            <br />
            <h3>Booking Details:</h3>
            <hr />
            <p>Preferred Date: <strong>$preferredDatePHP</strong></p>
            <p>Preferred Time: <strong>$preferredTime</strong></p>
            <hr />
            <p>Rego: <strong>$carRego</strong></p>
            <p>Year: <strong>$carYear</strong></p>
            <p>Make: <strong>$carMake</strong></p>
            <p>Model: <strong>$carModel</strong></p>
            <p>Service: <strong>$serviceRequired</strong></p> 
            $addComents
            <hr />";

// ===== End Third Section
