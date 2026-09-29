# Laporan Refresh Database — Patch 2.2.16 (Season 42 "Starward Decade")

- **Patch live:** 2.2.16 — Season 42 "Starward Decade", live sejak **16 September 2026** (server original).
- **Tanggal refresh:** 29 September 2026.
- **Sumber utama:** Mobile Legends: Bang Bang Wiki (mobile-legends.fandom.com) via MediaWiki API
  (Category:Equipment, Category:Heroes, Module:Equipment/data, halaman Emblems & item/hero),
  + catatan patch Liquipedia (Patch 2.2.16) & liputan media (gamingonphone, timesaver.gg, blooing).

## Ringkasan angka

| File | Sebelum | Sesudah |
|---|---|---|
| items.json | 114 | **113** (−1) |
| heroes.json | 134 | 134 (0 baru; 1 hero diupdate: Bruno) |
| emblems.json | 7 set | 7 set (tidak berubah) |

## ITEM — dihapus (1)

- **Scarlet Phantom** (`scarlet_phantom`) — DIHAPUS dari game. Wiki: *"Scarlet Phantom has been
  removed and replaced by Great Dragon Spear."* Great Dragon Spear sudah ada di database.
  ⚠️ `index.html` baris ±391 masih mereferensikan `'scarlet_phantom'` di `GLOBAL_POOLS.Marksman`
  → ganti ke `'great_dragon_spear'` (pengganti resmi) agar pool marksman tidak kehilangan 1 slot.

## ITEM — klaim "dihapus" yang ternyata SALAH (7, diperbaiki deskripsinya)

Database lama menandai 8 item "Sudah dihapus dari game". Verifikasi ulang (kategori wiki,
teks halaman present-tense, Module:Equipment/data terkini, build pro patch 2.2.16) menunjukkan
**hanya Scarlet Phantom yang benar-benar dihapus**. Tujuh item berikut MASIH ADA di game dan
deskripsinya sudah diperbaiki (tanpa klaim dihapus):

- **Bloodlust Axe** — masih dipakai di build pro S42 (mis. Paquito).
- **Necklace of Durance** — anti-heal/shield untuk mage, masih di game.
- **Calamity Reaper** — item basic-attack untuk mage, masih di game.
- **Shadow Twinblades** — burst untuk mage assassin, masih di game.
- **Twilight Armor** — counter burst tunggal, masih di game.
- **Bud of Hope** — item khusus Floryn, tercantum di Module:Equipment/data terkini.
- **Shimmering Lantern** — item khusus Floryn, tercantum di Module:Equipment/data terkini.

(Catatan: navbox "Removed Equipment" di wiki mencantumkan nama-nama di atas, tapi navbox itu
kedaluwarsa — halaman masing-masing item menulis dalam present tense, tidak ada di
Category:Removed equipment, dan tidak ada flag removed di infobox.)

## ITEM — hasil cek 39 item kunci

Semua 39 item yang diminta dicek statusnya:
**Athena's Shield**, Radiant Armor, Antique Cuirass, Dominance Ice, Blade Armor, Immortality,
Winter Crown, Sky Piercer, Sea Halberd, Necklace of Durance, Berserker's Fury, Windtalker,
Demon Hunter Sword, Corrosion Scythe, Golden Staff, War Axe, Bloodlust Axe, Hunter Strike,
Endless Battle, Blade of Despair, Malefic Roar, Lightning Truncheon, Holy Crystal,
Divine Glaive, Blood Wings, Glowing Wand, Genius Wand, Clock of Destiny, Enchanted Talisman,
Fleeting Time, Tough Boots, Warrior Boots, Arcane Boots, Swift Boots, Conceal, Dire Hit,
Encourage, Favor → **semua masih ada di game**, kecuali Scarlet Phantom (dihapus, lihat atas).

Tidak ada item BARU dan tidak ada RENAME terdeteksi (semua nama lokal cocok dengan judul
halaman wiki; tidak ada perubahan harga pada 55 item yang terdaftar di Module:Equipment/data).

## HERO — tidak ada hero baru (134 → 134)

Category:Heroes wiki = 134 hero asli (160 halaman − 26 halaman non-hero seperti role/lists/blog).
Semua 134 hero lokal cocok. Season 42 tidak merilis hero baru (fokus: rework Masha & Bruno).

**Update skill (patch 2.2.16):**
- **Bruno** — rework: ulti **Worldie kini hook** (menarik hero pertama ke tepi attack range +
  stun 0,5 dtk + slow 80%; bola tetap memantul ≤10x); **Slide** kini memberi Powerball di akhir
  dash; pasif Mecha Legs tidak berubah. `traits` + deskripsi Slide/Worldie di heroes.json
  sudah disesuaikan dari halaman wiki terkini.
- **Masha** — rework kit (3 bar HP, Feral, Wound); data lokal sudah selaras, tidak diubah.
- Paquito: hanya visual rework + nerf kecil Enhanced Jab (tidak mengubah data).

## EMBLEM — tidak berubah

Tetap 7 set (Basic Common + Tank/Assassin/Mage/Fighter/Support/Marksman); nama talent
di wiki cocok 1:1 dengan emblems.json.

## Hal yang belum terverifikasi / meragukan

1. **Athena's Shield tidak punya halaman wiki** (pencarian hanya menemukan penyebutan di
   halaman item lain). Item ini standar dan ada di game — tetap dipertahankan, tapi
   stats/harga mengandalkan data lama.
2. **Module:Equipment/data wiki kini hanya memuat 59 dari ~135 item** (tidak lengkap) dan
   memunculkan seksi baru **"Adaptive"** (Fleeting Time, Sky Piercer, Winter Crown,
   Expert Gloves). Arti tipe "Adaptive" di dalam game belum dikonfirmasi — kategori lokal
   tidak diubah.
3. Perubahan angka detail (stats/harga/pasif) antar-patch kecil tidak diverifikasi satu per
   satu untuk semua 113 item; patch 2.2.16 sendiri tidak memuat perubahan equipment
   (sumber: Liquipedia Patch 2.2.16).
4. Data hero Dori/Ixia/Kalea/Marcel masih mengikuti catatan verifikasi SOURCES.md sebelumnya.
5. Advanced Server sudah di patch 2.2.22 (Belum live di original server) — jika ingin
   antisipasi, cek ulang saat 2.2.22 rilis.
