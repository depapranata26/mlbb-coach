# Sumber Data — MLBB Coach

Seluruh data diambil dari **Mobile Legends: Bang Bang Wiki** (mobile-legends.fandom.com)
pada 29 September 2026, dengan verifikasi silang seperlunya.

**Refresh patch 2.2.16 (Season 42 "Starward Decade", live 16 Sep 2026): 29 September 2026.**
Lihat `DIFF_REPORT.md` untuk rincian perubahan.

## Wiki (sumber utama)
- Daftar hero: https://mobile-legends.fandom.com/wiki/Category:Heroes
- Daftar equipment: https://mobile-legends.fandom.com/wiki/Category:Equipment
- Halaman emblem: https://mobile-legends.fandom.com/wiki/Emblems
- Data item (modul Lua resmi wiki): https://mobile-legends.fandom.com/wiki/Module:Equipment/data
- Halaman per hero: https://mobile-legends.fandom.com/wiki/<Nama_Hero>
  (contoh: https://mobile-legends.fandom.com/wiki/Granger)
- Halaman per item: https://mobile-legends.fandom.com/wiki/<Nama_Item>

## Metode pengambilan
- MediaWiki API (`api.php`): `categorymembers`, `revisions` (wikitext), `categories`
- Skill hero diparsing dari section `==Abilities==` → template `{{Ability}}`
  (nama skill, efek, dan deskripsi asli berbahasa Inggris)
- Roles/lane/damage type dari kategori halaman wiki
  (`<Role> heroes`, `<Lane> heroes`, `Physical/Magic damage heroes`)
- Data item dari `Module:Equipment/data` (nama, harga, bonus, pasif, tipe)
- Data emblem dari template `{{New-basic-emblem-set}}` / `{{New-custom-emblem-set}}`
  di halaman Emblems
- Semua deskripsi diterjemahkan/diringkas ke Bahasa Indonesia (maks 140 karakter per skill/pasif)

## Verifikasi silang
- Obsidia (Marksman/gold) & Sora (Fighter/Assassin, exp): mlbb.tools, mlbbguides, mlbb.gg
  (halaman fandom Obsidia me-return HTTP 403 saat diverifikasi)
- Hirara (Assassin/jungle/physical): daftar navigasi wiki + beberapa panduan web

## Celah data (ditandai "belum terverifikasi" di traits)
- **Dori** (Tank/Support, roam) — halaman wiki gagal dibuka (HTTP 403)
- **Ixia** (Marksman, gold) — lane perkiraan standar
- **Kalea** (Fighter/Support, roam) — lane perkiraan
- **Marcel** (Support, roam) — lane perkiraan
- 8 item berstatus "Removed" di wiki tetap dicantumkan dengan penanda di deskripsi

## Catatan
- Angka/stat tidak dikarang; bila tidak ada di sumber, ditulis "belum terverifikasi".
- Meta game berubah tiap patch — data ini snapshot 29 Sep 2026.
