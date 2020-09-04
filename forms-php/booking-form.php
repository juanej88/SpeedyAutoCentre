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

function getCarMake() {
    $car_makes = ["Audi", "BMW", "Citroen", "Fiat", "Ford", "Holden", "Honda", "Hyundai", "Infiniti", "Jeep", "Kia", "Land Rover", "Lexus", "Mazda", "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan", "Peugeot", "Renault", "Skoda", "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo", "Other"];

    foreach ($car_makes as $make) {
        echo "<option value=\"$make\">$make</option>\n";
    }
}

// ===== Second Section =====
// ====> Form Validation 
$formHeading_error = "<h1>Booking</h1>";
$instructions_error = "<h3 id=\"bookingInstructions\">Simply fill out the details below and one of our staff will contact you to confirm your appointment date and time.</h3>";

$check_date = $_POST["preferred-date"];
$get_date_PHP = strtotime($check_date);
$check_date_PHP = date("l", $get_date_PHP);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    if($_POST["service"] === NULL) {
        $formHeading_error = "<h3><br/><br/></h3><h1 class=\"errorMsg\">Your booking is incomplete</h1>";
        $instructions_error = "<h3 id=\"bookingInstructions\" class=\"errorMsg\"><br/>Your booking hasn't been submitted yet.<br/><br/>You must:<br/>-Select at least one SERVICE for your car";
    }

    if ($check_date_PHP === "Sunday") {
        $instructions_error = "Sundays are not available";
        $date_error = "<p class='invalidSmallText'>Closed on Sundays</p>";
    }
    
}


// function validateForm() {
// }

// ===== Third Section =====
// ====> Email Composition 

// Booking form variables
$fullName = $_POST["full-name"];
$email = $_POST["email"];
$phoneNumber = $_POST["phone-number"];

$preferredDate = $_POST["preferred-date"];
$getDatePHP = strtotime($preferredDate);
$preferredDatePHP = date("l, d F Y", $getDatePHP);

$preferredTime = $_POST["preferred-time"];
$carRego = $_POST["car-rego"];
$carYear = $_POST["car-year"];
$carMake = $_POST["car-make"];
$carModel = $_POST["car-model"];
$comments = $_POST["comments"];

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
