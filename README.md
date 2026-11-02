# Kali dan Bagi Kelereng (PWA)

Isi folder ini:

- index.html : halaman aplikasinya
- manifest.json : nama dan ikon aplikasi
- sw.js : membuat aplikasi bisa dibuka tanpa internet
- icons/ : ikon aplikasi

## Mencoba di komputer (VS Code)

1. Buka folder ini di VS Code.
2. Pasang ekstensi "Live Server" (Ritwick Dey).
3. Klik kanan index.html lalu pilih "Open with Live Server".

Service worker hanya jalan lewat alamat localhost atau https. Kalau index.html dibuka dengan klik dua kali (alamat file://), halaman tetap tampil tapi tidak bisa dipasang sebagai aplikasi.

## Menayangkan gratis di GitHub Pages

1. Buat akun di github.com, lalu buat repository baru bernama kali-bagi (public).
2. Klik "uploading an existing file", lalu seret SEMUA isi folder ini (termasuk folder icons) ke halaman itu. Klik "Commit changes".
3. Buka Settings > Pages. Pada "Build and deployment", pilih Source: Deploy from a branch, Branch: main, folder: / (root). Klik Save.
4. Tunggu 1 sampai 2 menit. Alamatnya akan muncul di halaman yang sama, bentuknya:
   https://NAMAAKUN.github.io/kali-bagi/

## Memasang di HP Android

1. Buka alamat di atas dengan Chrome. Pertama kali HARUS ada internet, karena font disimpan saat itu.
2. Ketuk titik tiga di pojok kanan atas, lalu pilih "Instal aplikasi" (atau "Tambahkan ke layar utama").
3. Ikon kelereng muncul di layar utama. Selanjutnya aplikasi bisa dibuka tanpa internet.

## Kalau Anda mengubah index.html

Ganti angka VERSI di baris pertama sw.js (misalnya kali-bagi-v1 menjadi kali-bagi-v2), unggah ulang, lalu buka aplikasi dua kali di HP supaya versi baru terpakai.

## Catatan

- Skor terbaik tersimpan di HP itu saja (di browser). Kalau data Chrome dihapus, skornya ikut hilang.
- Bila nanti ingin menjadi file APK, folder ini bisa dipakai di PWABuilder (pwabuilder.com) setelah tayang di alamat https.
