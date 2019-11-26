<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
  <title> Cadastro de Filmes </title>
</head>

<body>
  <div class="container">
    <h1>Vídeo Locadora Avenida</h1>
    <h2>Lista de Filmes Cadastrados</h2>
    <table class="table table-striped">
    <thead>
      <tr>
        <th>Código</th>
        <th>Título do Filme</th>
        <th>Gênero</th>
        <th>Duração</th>
      </tr>
    </thead>
    <tbody>

    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "video_avenida";

// Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM filmes";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        
      $num = 0;

      // output data of each row
        while ($linha = $result->fetch_assoc()) {
          $id = $linha["id"];
          $titulo = $linha["titulo"];
          $genero = $linha["genero"];
          $duracao = $linha["duracao"];

          echo "<tr><td>$id</td>";
          echo "<td>$titulo</td>";
          echo "<td>$genero</td>";
          echo "<td>$duracao</td></tr>";
          $num++;
        }
        echo "</tbody></table>";
        echo "<h4>Filmes Listados: $num </h4>";
        
    } else {
        echo "0 results";
    }
    $conn->close();
?>  

    

  </div>
</body>
</html>
