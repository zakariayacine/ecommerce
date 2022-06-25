-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 25 juin 2022 à 00:20
-- Version du serveur : 8.0.27
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ecommerce`
--

-- --------------------------------------------------------

--
-- Structure de la table `inovices`
--

DROP TABLE IF EXISTS `inovices`;
CREATE TABLE IF NOT EXISTS `inovices` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `delivery` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_price` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `inovices`
--

INSERT INTO `inovices` (`id`, `delivery`, `price`, `total_price`, `created_at`, `updated_at`) VALUES
(1, '0', '0', '0', '2022-06-07 10:08:51', '2022-06-07 10:08:51');

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `qtt` int NOT NULL,
  `product_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `inovice_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_product_id_foreign` (`product_id`),
  KEY `orders_user_id_foreign` (`user_id`),
  KEY `orders_inovice_id_foreign` (`inovice_id`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `orders`
--

INSERT INTO `orders` (`id`, `qtt`, `product_id`, `user_id`, `inovice_id`, `created_at`, `updated_at`) VALUES
(37, 11, 3, 1, 1, '2022-06-16 22:30:52', '2022-06-16 22:30:52'),
(38, 1, 14, 1, 1, '2022-06-24 23:37:33', '2022-06-24 23:37:33'),
(36, 20, 2, 1, 1, '2022-06-16 22:14:12', '2022-06-16 22:14:12');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `photos` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int NOT NULL,
  `stock` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `photos`, `price`, `stock`, `created_at`, `updated_at`) VALUES
(1, 'batata', 'efezfzefzefzefe', 'https://source.unsplash.com/user/c_v_r/1900x800', 500, 50, '2022-06-04 12:19:52', '2022-06-04 12:19:52'),
(2, 'tomate', 'tomat cerise', 'https://source.unsplash.com/user/c_v_r/1900x800', 500, 500, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'khorchef', 'khorchef', 'https://source.unsplash.com/user/c_v_r/1900x800', 500, 500, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'khorchef', 'khorchef', 'https://source.unsplash.com/user/c_v_r/1900x800', 500, 500, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'khorchef', 'khorchef', 'https://source.unsplash.com/user/c_v_r/1900x800', 500, 500, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'khorchef', 'khorchef', 'https://source.unsplash.com/user/c_v_r/1900x800', 500, 500, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'khorchef', 'khorchef', 'https://source.unsplash.com/user/c_v_r/1900x800', 500, 500, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'khorchef', 'khorchef', 'https://source.unsplash.com/user/c_v_r/1900x800', 500, 500, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'khorchef', 'khorchef', 'https://source.unsplash.com/user/c_v_r/1900x800', 500, 500, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'khorchef', 'khorchef', 'https://source.unsplash.com/user/c_v_r/1900x800', 500, 500, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'khorchef', 'khorchef', 'https://source.unsplash.com/user/c_v_r/1900x800', 500, 500, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'zrodia', 'zrodia frech', 'https://source.unsplash.com/user/c_v_r/1900x800', 200, 500, NULL, NULL),
(13, 'dtgbhd', 'zefezfezfze', 'https://source.unsplash.com/user/c_v_r/1900x800', 651651, 6511651, NULL, NULL),
(14, 'pomme de terre', 'sqcsqcqsc', 'https://source.unsplash.com/user/c_v_r/1900x800', 500, 10, NULL, NULL),
(15, 'qscqsc', 'qscsqc', 'https://source.unsplash.com/user/c_v_r/1900x800', 0, 0, NULL, NULL),
(16, 'zridia kahla', 'fgnfgnfgn', 'https://source.unsplash.com/user/c_v_r/1900x800', 5453, 5616516, NULL, NULL),
(17, 'zefezf', 'ezfezf', 'https://source.unsplash.com/user/c_v_r/1900x800', 0, 651651, NULL, NULL),
(18, 'zefezf', 'ezfezf', 'https://source.unsplash.com/user/c_v_r/1900x800', 0, 651651, NULL, NULL),
(19, 'zefezf', 'ezfezf', 'https://source.unsplash.com/user/c_v_r/1900x800', 0, 651651, NULL, NULL),
(20, 'zefezfze', 'azdazdazd', 'https://source.unsplash.com/user/c_v_r/1900x800', 65165156, 51651651, NULL, NULL),
(21, 'qscsqcq', 'qscqscqsc', 'https://source.unsplash.com/user/c_v_r/1900x800', 65165151, 65165, NULL, NULL),
(22, 'azdazd', 'azdazd', 'https://source.unsplash.com/user/c_v_r/1900x800', 26516, 65165, NULL, NULL),
(23, 'patate', 'pomme de terre', 'https://source.unsplash.com/user/c_v_r/1900x800', 90, 500, NULL, NULL),
(24, 'hello', 'azdazd', 'https://source.unsplash.com/user/c_v_r/1900x800', 165165, 651651, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` int NOT NULL,
  `password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `password`, `created_at`, `updated_at`) VALUES
(1, 'zakaria', 'zakaria-yacine@hotmail.com', 1, '123456', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'zakaria', 'zakaria-yacine2@hotmail.com', 1, '123456', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'zakaria', 'zakaria-yacine32@hotmail.com', 1, '123456', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'zakaria', 'zakaria-yacine82@hotmail.com', 1, '123456', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'zakaria', 'zakaria-yacine829@hotmail.com', 1, '123456', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'zakaria', 'zakaria-yacine5129@hotmail.com', 1, '123456', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
