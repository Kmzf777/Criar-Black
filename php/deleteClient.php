<?php

include("./connection.php");

function createCallback($msg)
{
    echo "
    <script>
        window.alert('" . $msg . "');
        window.location.href = '../dashboard';
    </script>
    ";
}

function redirectBack() {
    echo "
    <script>
        window.location.href = '../dashboard';
    </script>
    ";
}

$id = mysqli_real_escape_string($connection, $_GET["id"]);

$sqlDeleteClient = "DELETE FROM `clients` WHERE `id` = '".$id."'";
$queryDeleteClient = mysqli_query($connection, $sqlDeleteClient);

if(!$queryDeleteClient) {
    createCallback("ERRO: Não foi possível deletar esse cliente.");
} else {
    redirectBack();
}

