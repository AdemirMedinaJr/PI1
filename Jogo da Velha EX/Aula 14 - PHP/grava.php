<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="shortcut icon" href="carrinho.png" />  
  <title>Supermercado Avenida</title>
</head>

<body>

  <!-- MENU SUPERIOR -->
  <nav class="navbar navbar-expand-md bg-primary navbar-dark sticky-top">
    <div class="container">
      <!-- Brand -->
      <a class="navbar-brand" href="index.php">
        <img src="carrinho.png" alt="Carrinho" width="50px">
        Super Avenida
      </a>

      <!-- Toggler/collapsibe Button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="cadastro.php">Cadastro</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="listagem.php">Listagem</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="balanco.php">Balanço</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-3">
    <h3>Cadastro de Produtos</h3>
    <hr>

<?php
//obtém o conteúdo dos campos de formulário enviados pelo método POST
$nome = $_POST["nome"];
$marca = $_POST["marca"];
$quant = $_POST["quant"];
$preco = $_POST["preco"];

echo "<h4>Produto a ser inserido no estoque</h4>";
echo "<h5>Produto: $nome</h5>";
echo "<h5>Marca: $marca</h5>";
echo "<h5>Quantidade: $quant</h5>";
echo "<h5>Preço R$: $preco</h5>";


// Define as configurações de conexão com o banco de dados
$servername = "localhost";
$username = "amj";
$password = "";
$dbname = "aula14";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO estoque (nome, marca, quant, preco)
        VALUES ('$nome', '$marca', $quant, $preco)";

if ($conn->query($sql) === TRUE) {
    echo  "<h5 style='color: blue'>ok! Produto cadastrado com sucesso</h5>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>

</body>

</html>