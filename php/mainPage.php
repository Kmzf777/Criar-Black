<?php

$sqlGetAccessAmount = "SELECT * FROM `users`";
$queryGetAccessAmount = mysqli_query($connection, $sqlGetAccessAmount);

$amountOfUsers = mysqli_fetch_array($queryGetAccessAmount)["amount"];

$newNumber = intval($amountOfUsers) + 1;
$sqlNewAccess = "UPDATE `users` SET `amount` = $newNumber WHERE `id` = 1";
$queryNewAccess = mysqli_query($connection, $sqlNewAccess);
