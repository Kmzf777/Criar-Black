<?php

$sqlClients = "SELECT * FROM `clients`";
$queryClients = mysqli_query($connection, $sqlClients);

$targetDir = "../uploads/";

function createCallback($msg)
{
    echo "
    <script>
        window.alert('" . $msg . "');
    </script>
    ";
}

$sqlGetAccessAmount = "SELECT * FROM `users`";
$queryGetAccessAmount = mysqli_query($connection, $sqlGetAccessAmount);

$amountOfUsers = mysqli_fetch_array($queryGetAccessAmount)["amount"];

if (isset($_POST["add-client-submit"])) {
    if (!isset($_FILES["banner"])) {
        createCallback("ERRO: O arquivo do banner não pode estar vazio.");
        return;
    }

    $banner = $_FILES["banner"];
    $bannerType = explode(".", $banner["name"])[1];
    $bannerNewName = md5(time()) . "." . $bannerType;

    $newBannerFile = $targetDir . basename($bannerNewName);

    if (!move_uploaded_file($banner["tmp_name"], $newBannerFile)) {
        createCallback("ERRO: Não foi possível enviar o arquivo do banner.");
        return;
    }

    $sqlNewClient = "INSERT INTO `clients` (`banner`) VALUES ('" . $newBannerFile . "')";
    $queryNewClient = mysqli_query($connection, $sqlNewClient);

    if (!$queryNewClient) {
        createCallback("ERRO: Ocorreu um erro desconhecido ao tentar inserir o novo cliente.");
        return;
    }

    createCallback("Novo cliente criado com sucesso!");
    header("Location: ./index.php");
}
