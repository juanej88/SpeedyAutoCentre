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

function getCarYears() {
    for ($i = 0; $i < 40 ; $i++) {  
        $getYear = date("Y");
        $getYear -= $i;

        if ($i < 39) {
            echo "<option value=\"$getYear\">$getYear</option>";
        } else {
            $getYear += 1;
            echo "<option value=\"$getYear\">Older than $getYear</option>";
        }        
    }
}
