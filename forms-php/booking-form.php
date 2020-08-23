<?php

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
            echo "<option value=\"$getYear\">$getYear</option>";
        } else {
            $getYear += 1;
            echo "<option value=\"$getYear\">Older than $getYear</option>";
        }
        
        $getYear -= 1;
    }
}

function getCarMake() {
    $car_makes = ["Acura", "Audi", "BMW", "Citroen", "Fiat", "Ford", "Holden", "Honda", "Hyundai", "Infiniti", "Jeep", "Kia", "Land Rover", "Lexus", "Mazda", "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan", "Peugeot", "Renault", "Skoda", "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo", "Other"];

    foreach ($car_makes as $make) {
        echo "<option value=\"$make\">$make</option>";
    }
}
