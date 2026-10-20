# Casa Pokemon Rack: katalog HP rak display kartu TCG

Nama toko dan tagline (`TCG Rack`) diatur di `TOKO` pada `assets/js/app.js`.

Template website katalog untuk HP. Tanpa proses build, cukup upload ke GitHub Pages.

## Fitur

| Bagian | Isi |
|---|---|
| Intro | Orb kristal bergoyang 3 kali, pecah jadi cahaya, kartu beterbangan, lalu katalog terbuka. Ada suara dan getar (HP Android). |
| Lumi | Asisten di pojok kanan bawah. Kalimat dan tombolnya berubah sesuai bagian yang sedang dilihat: memutar rak, mengacak warna, mengisi deck, membuka pack. Tombol **Turun ↓** menggulir ke bagian berikutnya. Lingkaran di sekelilingnya menunjukkan posisi scroll. |
| Tema elemen | Lumi, Api, Air, Listrik, Daun, Psikis, Bayangan, Es. Setiap tema mengganti warna, partikel latar, dan karakter suara. |
| Katalog | Rak putar 3D. Bisa digeser, atau diputar oleh Lumi. |
| Custom | Model, warna badan (termasuk silk, galaxy, glow in the dark, bening, warna request), warna bibir rak, LED (hangat, dingin, RGB, pelangi), lampu sorot, plakat nama. Harga dihitung otomatis. |
| Build your deck | Ketuk slot untuk memasang kartu. Warna dan LED mengikuti pilihan di Custom. Bisa diisi acak oleh Lumi dan disimpan di HP pengunjung. |
| Titip cari | Form "Lagi cari kartu apa?" yang menyusun pesan WhatsApp otomatis. |
| Booster harian | 1 pack gratis per hari per HP. Hadiahnya kartu dan kode voucher (Umum, Langka, Ultra, Rahasia). |
| Keranjang | Checkout lewat WhatsApp, plus link Shopee dan TikTok. |

Link langsung ke bagian tertentu melewati intro, misalnya `.../#custom` atau `.../#cari`. Cocok untuk link di bio TikTok atau deskripsi Shopee.

## Yang wajib diubah sebelum online

Semua ada di bagian atas `assets/js/app.js`:

| Ubah | Cari |
|---|---|
| Nama toko, nomor WhatsApp, link Shopee/TikTok/Instagram | `TOKO` |
| Harga dasar per model | `MODELS` |
| Produk di rak putar (nama, foto, harga, spesifikasi) | `PRODUCTS` |
| Daftar filamen dan biaya tambahan | `FILAMENTS` |
| Pilihan LED, lampu sorot, plakat | `LEDS`, `ADDON` |
| Kode voucher booster | `VOUCHER` |
| Nama dan kekuatan kartu | `CARDS` |

Nomor WhatsApp sudah diisi `6282110365402` (+62 821-1036-5402). Semua harga masih **contoh**.

## Gambar

Ada di `assets/img/`. Semua dibuat dengan Google Flow.

- `stand-tangga-hitam.webp`, `stand-tangga-meja.webp`, `rak-grid-abu.webp`, `rak-grid-lumi.webp`: foto produk di rak putar.
- `lumi-wave.webp`: wajah Lumi (asisten, logo, orb, pack).
- `lumi-crystal.webp`: kartu rahasia "Lumi Kristal".
- `lumi-sheet.webp`: character sheet, belum dipakai di halaman.

Gambar kartu dipotong langsung dari foto rak (`ART` dan koordinat `cx`, `cy`, `cw` di `CARDS`). Kalau foto rak diganti, koordinat ini juga perlu disesuaikan.

Setelah rak asli dicetak, ganti foto AI dengan foto produk asli.

## Menjalankan dan deploy

Jalankan server lokal dari folder ini:

```bash
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

Untuk deploy, ikuti langkah GitHub Pages yang sama dengan proyek Lumina: upload **isi** folder ini (`index.html`, `assets`, `README.md`, `.nojekyll`), lalu aktifkan **Settings → Pages → Deploy from a branch → main → / (root)**.

## Catatan

- Suara dibuat langsung oleh browser (Web Audio), bukan rekaman. Tidak ada file audio dan tidak ada suara dari game atau anime mana pun.
- Lumi dan semua makhluk di kartu adalah desain original. Jangan tambahkan nama, logo, atau gambar karakter Pokémon resmi ke halaman ini. Itu merek dagang Nintendo/The Pokémon Company dan bisa membuat toko atau iklan diturunkan.
- Kedua model rak di MakerWorld memakai *Standard Digital File License* (non-komersial). Minta izin komersial ke desainernya atau buat desain sendiri sebelum menjual hasil cetaknya.
- Data pengunjung (keranjang, susunan deck, riwayat permintaan, pack harian) hanya disimpan di `localStorage` HP pengunjung. Tidak ada yang dikirim ke server.
