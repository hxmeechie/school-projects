<?php

require_once "db.php";

require_once "request_handler.php";

$artists = $conn->query("SELECT * FROM Artysta");

$bands = $conn->query("SELECT z.*, 
art.imie AS imie_lidera, 
art.nazwisko AS nazwisko_lidera 
FROM Zespol z 
INNER JOIN Artysta art ON z.id_lider = art.id_artysta");

$albums = $conn->query("SELECT a.*,  
z.nazwa AS nazwa_zespolu,
art.imie as imie_artysty, 
art.nazwisko as nazwisko_artysty
FROM Album a 
INNER JOIN Zespol z ON a.id_zespol = z.id_zespol
INNER JOIN Artysta art ON z.id_lider = art.id_artysta");

$songs = $conn->query("SELECT p.*, 
a.tytul AS tytul_albumu, 
z.nazwa AS nazwa_zespolu, 
art.imie as imie_artysty, 
art.nazwisko as nazwisko_artysty
FROM Piosenka p 
INNER JOIN Album a ON p.id_album = a.id_album 
INNER JOIN Zespol z ON a.id_zespol = z.id_zespol
INNER JOIN Artysta art ON z.id_lider = art.id_artysta");

?>

<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <title>Agencja Artystyczna</title>
</head>

<body>

    <h1>Dodaj Artystę</h1>
    <form method="POST">
        <label for="imie">Imię:</label>
        <input type="text" id="imie" name="imie" required><br>

        <label for="nazwisko">Nazwisko:</label>
        <input type="text" id="nazwisko" name="nazwisko" required><br>

        <label for="data_urodzenia">Data urodzenia:</label>
        <input type="date" id="data_urodzenia" name="data_urodzenia" required><br>

        <label for="narodowosc">Narodowość:</label>
        <input type="text" id="narodowosc" name="narodowosc" required><br>

        <label for="typ">Typ:</label>
        <select id="typ" name="typ" required>
            <option value="wokalista">Wokalista</option>
            <option value="instrumentalista">Instrumentalista</option>
        </select><br>

        <label for="wysokosc_glosu">Wysokość głosu (dla wokalisty):</label>
        <input type="text" id="wysokosc_glosu" name="wysokosc_glosu"><br>

        <label for="instrument">Instrument (dla instrumentalisty):</label>
        <input type="text" id="instrument" name="instrument"><br>

        <button type="submit" name="dodaj_artyste">Dodaj Artystę</button>
    </form>

    <h2>Dodaj Zespół</h2>
    <form method="POST">
        <label for="nazwa">Nazwa:</label>
        <input type="text" id="nazwa" name="nazwa" required><br>

        <label for="data_utworzenia">Data utworzenia:</label>
        <input type="date" id="data_utworzenia" name="data_utworzenia" required><br>

        <label for="styl_muzyki">Styl muzyki:</label>
        <input type="text" id="styl_muzyki" name="styl_muzyki" required><br>

        <label for="id_lider">Lider (Artysta):</label>
        <select id="id_lider" name="id_lider" required>
            <?php
            $artists->data_seek(0);

            while ($artist = $artists->fetch_assoc()): ?>
                <option value="<?= $artist['id_artysta'] ?>">
                    <?= "{$artist['imie']} {$artist['nazwisko']}" ?>
                </option>
            <?php endwhile; ?>
        </select><br>

        <button type="submit" name="dodaj_zespol">Dodaj Zespół</button>
    </form>

    <h2>Dodaj Album</h2>
    <form method="POST">
        <label for="tytul_albumu">Tytuł:</label>
        <input type="text" id="tytul_albumu" name="tytul_albumu" required><br>

        <label for="rok_wydania">Rok wydania:</label>
        <input type="number" id="rok_wydania" name="rok_wydania" required><br>

        <label for="id_zespol">Zespół:</label>
        <select id="id_zespol" name="id_zespol" required>
            <?php
            $bands->data_seek(0);

            while ($band = $bands->fetch_assoc()): ?>
                <option value="<?= $band['id_zespol'] ?>">
                    <?= $band['nazwa'] ?>
                </option>
            <?php endwhile; ?>
        </select><br>

        <button type="submit" name="dodaj_album">Dodaj Album</button>
    </form>

    <h2>Dodaj Piosenkę</h2>
    <form method="POST">
        <label for="tytul">Tytuł:</label>
        <input type="text" id="tytul" name="tytul" required><br>

        <label for="czas_trwania">Czas trwania:</label>
        <input type="time" id="czas_trwania" name="czas_trwania" required><br>

        <label for="id_album">Album:</label>
        <select id="id_album" name="id_album" required>
            <?php
            $albums->data_seek(0);

            while ($album = $albums->fetch_assoc()): ?>
                <option value="<?= $album['id_album'] ?>">
                    <?= $album['tytul'] ?>
                </option>
            <?php endwhile; ?>
        </select><br>

        <button type="submit" name="dodaj_piosenke">Dodaj Piosenkę</button>
    </form>


    <h2>Lista Artystów</h2>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Data urodzenia</th>
            <th>Narodowość</th>
            <th>Typ</th>
            <th>Wysokość głosu</th>
            <th>Instrument</th>
        </tr>
        <?php
        $artists->data_seek(0);

        while ($artist = $artists->fetch_assoc()): ?>
            <tr>
                <td><?= $artist['id_artysta'] ?></td>
                <td><?= $artist['imie'] ?></td>
                <td><?= $artist['nazwisko'] ?></td>
                <td><?= $artist['data_urodzenia'] ?></td>
                <td><?= $artist['narodowosc'] ?></td>
                <td><?= $artist['typ'] ?></td>
                <td><?= $artist['wysokosc_glosu'] ?></td>
                <td><?= $artist['instrument'] ?></td>
            </tr>
        <?php endwhile; ?>
    </table>

    <h2>Lista Albumów</h2>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Tytuł</th>
            <th>Rok Wydania</th>
            <th>Zespół</th>
            <th>Artysta</th>

        </tr>
        <?php
        $albums->data_seek(0);

        while ($album = $albums->fetch_assoc()): ?>
            <tr>
                <td><?= $album['id_album'] ?></td>
                <td><?= $album['tytul'] ?></td>
                <td><?= $album['rok_wydania'] ?></td>
                <td><?= $album['nazwa_zespolu'] ?></td>
                <td><?= "{$album['imie_artysty']} {$album['nazwisko_artysty']}" ?></td>

            </tr>
        <?php endwhile; ?>
    </table>


    <h2>Lista Zespołów</h2>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Nazwa</th>
            <th>Data Utworzenia</th>
            <th>Styl Muzyki</th>
            <th>Lider</th>
        </tr>
        <?php
        $bands->data_seek(0);

        while ($band = $bands->fetch_assoc()): ?>
            <tr>
                <td><?= $band['id_zespol'] ?></td>
                <td><?= $band['nazwa'] ?></td>
                <td><?= $band['data_utworzenia'] ?></td>
                <td><?= $band['styl_muzyki'] ?></td>
                <td><?= "{$band['imie_lidera']} {$band['nazwisko_lidera']}" ?></td>
            </tr>
        <?php endwhile; ?>
    </table>

    <h2>Lista Piosenek</h2>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Tytuł</th>
            <th>Czas Trwania</th>
            <th>Album</th>
            <th>Zespół</th>
            <th>Artysta</th>
        </tr>
        <?php
        $songs->data_seek(0);

        while ($song = $songs->fetch_assoc()): ?>
            <tr>
                <td><?= $song['id_piosenka'] ?></td>
                <td><?= $song['tytul'] ?></td>
                <td><?= $song['czas_trwania'] ?></td>
                <td><?= $song['tytul_albumu'] ?></td>
                <td><?= $song['nazwa_zespolu'] ?></td>
                <td><?= "{$song['imie_artysty']} {$song['nazwisko_artysty']}" ?></td>

            </tr>
        <?php endwhile; ?>
    </table>

</body>

</html>