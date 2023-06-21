<?php
include("../php/connection.php");
include("../php/dashboard.php");
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
  <script src="https://kit.fontawesome.com/3f3417947e.js" crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <link rel="stylesheet" href="../css/dashboard.css" />
  <title>Criar Ideias - Home</title>
</head>

<body>
  <section class="body-left">
    <main class="inner-left">
      <div class="user-box">
        <div class="user-img">
          <img src="../assets/pessoa-1.jpg" alt="pessoa 1" />
        </div>
        <h2>Nome Usuario</h2>
        <h3>Web Designer</h3>
      </div>
      <div class="dash-menu">
        <div class="dash-overflow">
          <label id="menu-btn" for="dashboard">
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
            <h2>Dashboard</h2>
          </label>
          <label id="menu-btn" for="clients">
            <i class="fa fa-users" aria-hidden="true"></i>
            <h2>Clientes</h2>
          </label>
          <label for="sair">
            <i class="fa fa-sign-out" aria-hidden="true"></i>
            <h2>Sair</h2>
          </label>
        </div>
      </div>
    </main>
  </section>
  <section class="body-right">
    <section class="dashboard-body" id="right-section">
      <main class="inner-right">
        <div class="right-overflow">
          <div class="welcome-area">
            <h2>Seja Bem-Vindo à Dashboard</h2>
            <h3>
              Olá <span>Usuario</span>, Seja bem-vindo à sua Dashboard Pessoal
              & Empresarial
            </h3>
          </div>

          <main class="money-area">
            <div class="money-box">
              <div class="money-img">
                <i class="fa fa-bar-chart" aria-hidden="true"></i>
              </div>
              <h2><?php echo($amountOfUsers) ?></h2>
              <h3>Usuarios Hoje</h3>
            </div>
            <div class="money-box">
              <div class="money-img">
                <i class="fa fa-bar-chart" aria-hidden="true"></i>
              </div>
              <h2><?php echo($amountOfUsers) ?></h2>
              <h3>Usuarios Mensais</h3>
            </div>

            <div class="money-box">
              <div class="money-img">
                <i class="fa fa-bar-chart" aria-hidden="true"></i>
              </div>
              <h2><?php echo($amountOfUsers) ?></h2>
              <h3>Usuarios Totais</h3>
            </div>
          </main>
        </div>
      </main>
    </section>
    <section class="clients-body" id="right-section">
      <main class="inner-right2">
        <main class="clientes-left">
          <h2>Clientes Ativos</h2>
          <div class="clientes-area">
            <?php

            while ($client = mysqli_fetch_array($queryClients)) {
              echo '
                  <div class="cliente-box">
                    <img src="../assets/' . $client["banner"] . '" />
                    <button id="delete-client" value="' . $client["id"] . '" class="delete-cliente">
                      <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </div>
                  ';
            }

            ?>
          </div>
        </main>
        <main class="clientes-right">
          <form name="add-client" method="POST" enctype="multipart/form-data">
            <h2>Adicionar Cliente</h2>
            <input type="file" name="banner" accept="image/*" />
            <button name="add-client-submit" type="submit">Adicionar</button>
          </form>
        </main>
      </main>
    </section>
  </section>
  <script type="text/javascript" src="https://www.google.com/jsapi"></script>
  <script type="text/javascript">
    google.load("visualization", "1", {
      packages: ["corechart"]
    });
  </script>
  <!-- <script type="text/javascript" src="../scripts/chart.js"></script> -->
  <script src="../scripts/dashboard-menu.js"></script>
  <script src="../scripts/dashboard-clients.js"></script>
</body>

</html>