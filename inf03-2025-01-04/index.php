<?php
$connection = mysqli_connect("localhost", "root", "", "obuwie");

$query1 = $connection->query("SELECT model FROM produkt");

$models = $query1->fetch_all(MYSQLI_ASSOC);

$query2 = $connection->query("SELECT b.model, b.nazwa, b.cena, p.nazwa_pliku 
           FROM buty b 
           JOIN produkt p ON b.model = p.model");

$products = $query2->fetch_all(MYSQLI_ASSOC);

$connection->close();
?>

<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <title>Obuwie</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>Obuwie męskie</h1>
    </header>
    <main>
      <section>
        <form action="zamow.php" method="post">
          <label for="model">Model:</label>
          <select name="model" id="model" class="kontrolki">
            <?php foreach ($models as $model): ?>
            <option value="<?= $model["model"] ?>">
              <?= $model["model"] ?>
            </option>
            <?php endforeach; ?>
          </select>
          <label for="size"> Rozmiar: </label>
          <select name="size" id="size" class="kontrolki">
            <?php for ($index = 40; $index <= 43; $index++): ?>
            <option value="<?= $index ?>">
              <?= "{$index}" ?>
            </option>
            <?php endfor; ?>
          </select>
          <label for="numberOfPairs">
            Liczba par:
          </label>
          <input
            type="number"
            name="numberOfPairs"
            id="numberOfPairs"
            class="kontrolki"
            min="1"
            required
          />
          <input type="submit" value="Zamów" class="kontrolki">
        </form>
      </section>
      <section>
        <?php foreach ($products as $product): ?>
        <div class="buty">
          <img src="<?= $product["nazwa_pliku"] ?>" alt="but męski" />
          <h2>
            <?= $product["nazwa"] ?>
          </h2>
          <h5>
            <?= "Model: {$product["model"]}" ?>
          </h5>
          <h4>
            <?= "Cena: {$product["cena"]}" ?>
          </h4>
        </div>
        <?php endforeach; ?>
      </section>
    </main>
    <footer>
      <p>Autor strony: 00000000000</p>
    </footer>
  </body>
</html>
