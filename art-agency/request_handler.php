<?php

// dodawanie artysty
if (isset($_POST['dodaj_artyste'])) {
    $stmt = $conn->prepare("INSERT INTO Artysta (imie, nazwisko, data_urodzenia, narodowosc, typ, wysokosc_glosu, instrument) 
                            VALUES (?, ?, ?, ?, ?, ?, ?)");

    $wysokosc_glosu = ($_POST['typ'] == 'wokalista') ? $_POST['wysokosc_glosu'] : null;
    $instrument = ($_POST['typ'] == 'instrumentalista') ? $_POST['instrument'] : null;

    $stmt->bind_param("sssssss", $_POST['imie'], $_POST['nazwisko'], $_POST['data_urodzenia'], $_POST['narodowosc'], $_POST['typ'], $wysokosc_glosu, $instrument);
    $stmt->execute();
}

// dodawanie zespołu
if (isset($_POST['dodaj_zespol'])) {
    $stmt = $conn->prepare("INSERT INTO Zespol (nazwa, data_utworzenia, styl_muzyki, id_lider) 
                            VALUES (?, ?, ?, ?)");

    $stmt->bind_param("sssi", $_POST['nazwa'], $_POST['data_utworzenia'], $_POST['styl_muzyki'], $_POST['id_lider']);
    $stmt->execute();
}

//  dodawanie piosenki
if (isset($_POST['dodaj_piosenke'])) {
    $stmt = $conn->prepare("INSERT INTO Piosenka (tytul, czas_trwania, id_album) VALUES (?, ?, ?)");

    $stmt->bind_param("ssi", $_POST['tytul'], $_POST['czas_trwania'], $_POST['id_album']);
    $stmt->execute();
}

// dodawanie albumu
if (isset($_POST['dodaj_album'])) {
    $stmt = $conn->prepare("INSERT INTO Album (tytul, rok_wydania, id_zespol) VALUES (?, ?, ?)");

    $stmt->bind_param("sii", $_POST['tytul_albumu'], $_POST['rok_wydania'], $_POST['id_zespol']);
    $stmt->execute();
}
