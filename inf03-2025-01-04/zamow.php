<?php
$connection = mysqli_connect("localhost", "root", "", "obuwie");

$selectedModel = $_POST["model"];
$size = $_POST["size"];
$numberOfPairs = $_POST["numberOfPairs"];

$stmt = $connection->prepare("SELECT b.nazwa, b.cena, p.kolor, p.kod_produktu, p.material, p.nazwa_pliku 
                              FROM buty b 
                              JOIN produkt p ON b.model = p.model
                              WHERE b.model = ?");

$stmt->bind_param("s", $selectedModel);
$stmt->execute();

$result = $stmt->get_result();
$product = $result->fetch_assoc();

$stmt->close();
$connection->close();

$orderTotal = $product["cena"] * $numberOfPairs;
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Zamówienie</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1><?= "Obuwie męskie" ?></h1>
  </header>
  <main>
    <section>
      <h2>Zamówienie</h2>
        <img src="<?= $product["nazwa_pliku"] ?>" alt="but męski">
        <h2>
            <?= $product["nazwa"] ?>
        </h2>
        <p>
            <?= "Cena za {$numberOfPairs} par: {$orderTotal} zł" ?>
        </p>
        <p>
            <?= "Szczegóły produktu: {$product["kolor"]}, {$product["material"]}" ?>
        </p>
        <p>
            <?= "Rozmiar: {$size}" ?>
        </p>
      <a href="index.php">Strona główna</a>
    </section>
  </main>
  <footer>
    <p>Autor strony: 00000000000</p>
  </footer>
</body>
</html>
