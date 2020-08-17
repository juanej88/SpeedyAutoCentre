<?php

date_default_timezone_set("Australia/Sydney");

function getMinDate() {
    $getDay = date("D");

    if($getDay === "Fri" || $getDay === "Sat") {
        $getNextDate = date("Y-m-d", strtotime("Tuesday next week"));
    } else {
        $getNextDate = date("Y-m-d", strtotime("+2 days"));
    }

    return $getNextDate;
}

$min_date = getMinDate();
