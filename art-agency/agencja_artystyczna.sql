-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 19, 2024 at 09:02 AM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agencja_artystyczna`
--

CREATE DATABASE agencja_artystyczna;

USE agencja_artystyczna;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `album`
--

CREATE TABLE `album` (
  `id_album` int(11) NOT NULL,
  `tytul` varchar(100) DEFAULT NULL,
  `rok_wydania` year(4) DEFAULT NULL,
  `id_zespol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `artysta`
--

CREATE TABLE `artysta` (
  `id_artysta` int(11) NOT NULL,
  `imie` varchar(50) DEFAULT NULL,
  `nazwisko` varchar(50) DEFAULT NULL,
  `data_urodzenia` date DEFAULT NULL,
  `narodowosc` varchar(50) DEFAULT NULL,
  `typ` enum('wokalista','instrumentalista') NOT NULL,
  `wysokosc_glosu` varchar(20) DEFAULT NULL,
  `instrument` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `artysta_piosenka`
--

CREATE TABLE `artysta_piosenka` (
  `id_artysta` int(11) NOT NULL,
  `id_piosenka` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `artysta_zespol`
--

CREATE TABLE `artysta_zespol` (
  `id_artysta` int(11) NOT NULL,
  `id_zespol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `piosenka`
--

CREATE TABLE `piosenka` (
  `id_piosenka` int(11) NOT NULL,
  `tytul` varchar(100) DEFAULT NULL,
  `czas_trwania` time DEFAULT NULL,
  `id_album` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zespol`
--

CREATE TABLE `zespol` (
  `id_zespol` int(11) NOT NULL,
  `nazwa` varchar(100) DEFAULT NULL,
  `data_utworzenia` date DEFAULT NULL,
  `styl_muzyki` varchar(50) DEFAULT NULL,
  `id_lider` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id_album`),
  ADD KEY `id_zespol` (`id_zespol`);

--
-- Indeksy dla tabeli `artysta`
--
ALTER TABLE `artysta`
  ADD PRIMARY KEY (`id_artysta`);

--
-- Indeksy dla tabeli `artysta_piosenka`
--
ALTER TABLE `artysta_piosenka`
  ADD PRIMARY KEY (`id_artysta`,`id_piosenka`),
  ADD KEY `id_piosenka` (`id_piosenka`);

--
-- Indeksy dla tabeli `artysta_zespol`
--
ALTER TABLE `artysta_zespol`
  ADD PRIMARY KEY (`id_artysta`,`id_zespol`),
  ADD KEY `id_zespol` (`id_zespol`);

--
-- Indeksy dla tabeli `piosenka`
--
ALTER TABLE `piosenka`
  ADD PRIMARY KEY (`id_piosenka`),
  ADD UNIQUE KEY `tytul` (`tytul`,`id_album`),
  ADD KEY `id_album` (`id_album`);

--
-- Indeksy dla tabeli `zespol`
--
ALTER TABLE `zespol`
  ADD PRIMARY KEY (`id_zespol`),
  ADD KEY `id_lider` (`id_lider`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `album`
--
ALTER TABLE `album`
  MODIFY `id_album` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `artysta`
--
ALTER TABLE `artysta`
  MODIFY `id_artysta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `piosenka`
--
ALTER TABLE `piosenka`
  MODIFY `id_piosenka` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `zespol`
--
ALTER TABLE `zespol`
  MODIFY `id_zespol` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `album`
--
ALTER TABLE `album`
  ADD CONSTRAINT `album_ibfk_1` FOREIGN KEY (`id_zespol`) REFERENCES `zespol` (`id_zespol`);

--
-- Constraints for table `artysta_piosenka`
--
ALTER TABLE `artysta_piosenka`
  ADD CONSTRAINT `artysta_piosenka_ibfk_1` FOREIGN KEY (`id_artysta`) REFERENCES `artysta` (`id_artysta`),
  ADD CONSTRAINT `artysta_piosenka_ibfk_2` FOREIGN KEY (`id_piosenka`) REFERENCES `piosenka` (`id_piosenka`);

--
-- Constraints for table `artysta_zespol`
--
ALTER TABLE `artysta_zespol`
  ADD CONSTRAINT `artysta_zespol_ibfk_1` FOREIGN KEY (`id_artysta`) REFERENCES `artysta` (`id_artysta`),
  ADD CONSTRAINT `artysta_zespol_ibfk_2` FOREIGN KEY (`id_zespol`) REFERENCES `zespol` (`id_zespol`);

--
-- Constraints for table `piosenka`
--
ALTER TABLE `piosenka`
  ADD CONSTRAINT `piosenka_ibfk_1` FOREIGN KEY (`id_album`) REFERENCES `album` (`id_album`);

--
-- Constraints for table `zespol`
--
ALTER TABLE `zespol`
  ADD CONSTRAINT `zespol_ibfk_1` FOREIGN KEY (`id_lider`) REFERENCES `artysta` (`id_artysta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
