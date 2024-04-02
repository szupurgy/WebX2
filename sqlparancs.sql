-- admin-
USE projekt;

INSERT INTO `admin` (`id`, `nev`, `jelszo`) VALUES
(1, 'admin', '$argon2id$v=19$m=65536,t=3,p=4$ypCgpMyNBQZYOUTWJi/FWg$MHjZD4X9XWKDcWmMF5HDAB9K3X2j9jvLjEQesanfzD4');

INSERT INTO `termekek` (`id`, `nev`, `leiras`, `ar`, `akcios`, `akciosar`) VALUES
(1, 'Samsung Galaxy S23 Ultra', 'Samsung Galaxy S23 Ultra telefon', 350240, 0, 5),
(2, 'Xiaomi 13 Pro', 'Xiaomi 13 Pro telefon', 104400, 0, 10),
(3, 'iPhone 15 Pro Max', 'iPhone 15 Pro Max telefon', 509790, 0, 20),
(4, 'OnePlus 11 Pro', 'OnePlus 11 Pro telefon', 325590, 1, 10),
(5, 'Google Pixel 7 Pro', 'Google Pixel 7 Pro telefon', 291190, 1, 7),
(6, 'Honor X7', 'Honor X7 telefon', 62875, 0, 10),
(7, 'HUAWEI NOVA 9 SE', 'HUAWEI NOVA 9 SE telefon', 134106, 1, 10),
(8, 'CAT S75', 'CAT S75 telefon', 143590, 1, 5),
(9, 'SOYES XS16 Mini', 'SOYES XS16 Mini telefon', 32983, 1, 24),
(10, 'SKYSHOP® BM25 Small Mini', 'SKYSHOP® BM25 Small Mini telefon', 29000, 1, 40);

INSERT INTO `termekparams` (`id`, `TmkID`, `kijelzo`, `magassag`, `szelesseg`, `vastagsag`, `tomeg`, `szin`, `usb`, `vizallo`, `wifi`, `kamera`, `gpu`, `CPU`) VALUES
(1, 1, 7, 158, 77, 8, 188, 'Fekete', 'Type-C', 'IP68', 'Wi-Fi 6E', '48MP tripla', 'Adreno 740', 'Snapdragon 8 Gen 2'),
(2, 2, 6, 147, 72, 8, 174, 'Kék', 'Type-C', 'IP67', 'Wi-Fi 6', '20MP tripla', 'Mali-G710 MP10', 'Dimensity 9000'),
(3, 3, 7, 165, 78, 9, 228, 'Ezüst', 'Type-C', 'IP68', 'Wi-Fi 6E', '108MP dupla', 'Apple A16 Bionic', 'Nincs'),
(4, 4, 7, 161, 75, 8, 202, 'Zöld', 'Type-C', 'IP65', 'Wi-Fi 6', '48MP quad', 'PowerVR G9A', 'MediaTek Dimensity 8100'),
(5, 5, 6, 147, 71, 8, 173, 'Fekete', 'Type-C', 'IP53', 'Wi-Fi 5', '16MP tripla', 'Adreno 660', 'Snapdragon 888'),
(6, 6, 6, 152, 75, 8, 190, 'Piros', 'Type-C', 'IP68', 'Wi-Fi 6', '64MP quad', 'Mali-G710 MP10', 'Exynos 2300'),
(7, 7, 6, 149, 69, 8, 165, 'Kék', 'Type-C', 'IP67', 'Wi-Fi 6E', '48MP tripla', 'Adreno 730', 'Snapdragon 8+ Gen 1'),
(8, 8, 7, 163, 78, 9, 210, 'Ezüst', 'Type-C', 'IP68', 'Wi-Fi 6', '108MP quad', 'Kirin 9000', 'Nincs'),
(9, 9, 6, 155, 73, 8, 182, 'Zöld', 'Type-C', 'IP65', 'Wi-Fi 5', '40MP tripla', 'Imagination IMG A7AE', 'MediaTek Dimensity 8000'),
(10, 10, 6, 147, 70, 8, 158, 'Fekete', 'Type-C', 'IP53', 'Wi-Fi 5', '16MP dupla', 'Adreno 640', 'Snapdragon 870');

INSERT INTO `eleresek` (`id`, `TmkID`, `kep`) VALUES
(1, 1, '4292f893-ab12-40a0-9989-a3fa02f85612.jpeg'),
(2, 2, '9d3dc8fa-09bd-4b91-a47f-646df37b17a4.jpeg'),
(3, 3, 'c24318a9-e365-4494-a756-b3396b517405.jpeg'),
(4, 4, '6cfdd66e-34ca-44cf-a7b6-da3cd21f7949.jpeg'),
(5, 5, '25b621bf-ce23-499e-9ba7-717754c447a6.jpeg'),
(6, 7, 'f23dcd55-c24d-4732-b12e-d441beba8e82.png'),
(7, 8, '00821486-2c49-4829-bade-ce5e01728875.png'),
(8, 9, '53cb3f06-d9d1-4871-80a7-5d9c577ee788.png'),
(9, 10, 'daaae2a0-d549-4638-90a0-3786758d2dc1.jpeg'),
(10, 6, 'c7199b80-c104-4337-8ee9-0a2edb9a91cd.png');