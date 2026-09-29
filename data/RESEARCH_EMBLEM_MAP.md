# Riset Emblem & Map — Patch 2.2.16 / Season 42 (29 Sep 2026)

## 1. Sistem talent emblem (model yang benar)

- Tiap emblem memberi **base stats tetap** + **3 tier talent, pilih 1 per tier**.
- **Pool talent per tier bersifat GLOBAL** — hero/emblem apapun bisa memilih talent dari tier mana pun (**cross-emblem selection**). Terkonfirmasi dari:
  - Wiki: "you can also customize them by replacing the default talents … with any emblem talents you unlock" (noypigeeks, mengutip sistem game).
  - ONE Esports (guide Sun): emblem Assassin + Swift (T1) / Tenacity (T1, default Tank) + Master Assassin (T2) + Weakness Finder / Concussive Blast (core).
  - LootBar (Jun 2026): "swap Tier 1 from Inspire to Vitality" pada emblem Mage; jungler mage "keep Seasoned Hunter in Tier 2".
  - BitTopup FAQ: "Can I use talents from different emblem sets on the same hero? Absolutely."
- Komposisi pool: **Tier 1 = 8** (Thrill, Swift, Vitality, Rupture, Inspire, Firmness, Agility, Fatal), **Tier 2 = 8** (Wilderness Blessing, Seasoned Hunter, Tenacity, Master Assassin, Bargain Hunter, Festival of Blood, Pull Yourself Together, Weapon Master), **Tier 3 core = 10** (Impure Rage, Quantum Charge, War Cry, Temporal Reign, Concussive Blast, Killing Spree, Lethal Ignition, Brave Smite, Focusing Mark, Weakness Finder). Total 26 (konsisten dengan BitTopup "26 total options" & video guide 2026).
- Wiki hanya mendokumentasikan **default bawaan tiap emblem** (Basic Common: 2+2 T1/T2 & 4 core; 6 emblem custom: 1+1+1). File `emblem_talents.json` memakai format 3+3+2 per emblem sebagai **kurasi pilihan populer** = default wiki + alternatif dari guide 2025–2026. Field `defaults` menyimpan default asli wiki.

### Sumber per emblem (kurasi 3+3+2)

| Emblem | T1 (default + alt) | T2 (default + alt) | T3 (default + alt) |
|---|---|---|---|
| Common | Thrill, Swift (wiki); Vitality (prinsip defensif umum, LootBar) | Seasoned Hunter, Wilderness Blessing (wiki); Bargain Hunter (ekonomi, prinsip umum) | Impure Rage (jungle, BitTopup), Quantum Charge (wiki) |
| Tank | Vitality (wiki); Firmness, Agility (Atlas roam, BitTopup) | Tenacity (wiki); Seasoned Hunter (Akai jungle, BitTopup); Pull Yourself Together (Atlas roam, BitTopup) | Concussive Blast (wiki); Focusing Mark (Atlas roam, BitTopup) |
| Assassin | Rupture (wiki, LootBar); Swift (Sun side, ONE Esports/BitTopup); Tenacity (Sun jungle, ONE Esports) | Master Assassin (wiki); Seasoned Hunter (LootBar: "every single game" untuk jungler); Wilderness Blessing (rotasi — confidence sedang) | Killing Spree (wiki); Lethal Ignition (magic assassin — umum, confidence sedang) |
| Mage | Inspire (wiki); Rupture (Zetian, BitTopup; LootBar); Vitality (vs assassin, LootBar) | Bargain Hunter (wiki); Wilderness Blessing (LootBar); Weapon Master (Zetian, BitTopup) | Lethal Ignition (wiki); Impure Rage (LootBar, BitTopup) |
| Fighter | Thrill (LootBar); Firmness (wiki); Vitality (prinsip defensif umum) | Festival of Blood (wiki); Seasoned Hunter (jungler, LootBar); Tenacity (confidence sedang) | Brave Smite (wiki); Quantum Charge (fighter mobil — confidence sedang) |
| Support | Agility (wiki); Inspire (LootBar; Kalea, BitTopup); Vitality (prinsip defensif umum) | Pull Yourself Together (wiki); Tenacity (Kalea, BitTopup); Wilderness Blessing (rotasi roam — confidence sedang) | Focusing Mark (wiki); Impure Rage (Diggie poke, 1v9.gg) |
| Marksman | Fatal (wiki); Swift (LootBar); Agility (Lesley, ONE Esports) | Weapon Master (wiki); Bargain Hunter (LootBar; BitTopup); Master Assassin (duel lane — confidence sedang) | Weakness Finder (wiki); Quantum Charge (LootBar, BitTopup) |

## 2. Map & jungle — temuan penting patch 2.2.16

**Efek buff persis kata wiki:**
- **Orange Buff (Soul of Lava)** — Molten Fiend. Proc tiap serang hero (CD 3 dtk, slow 1 dtk): Assassin/Fighter/Tank = 50 (+20% Total Physical Attack) (+30×Attack Speed) True Damage + slow 60% + 5% adaptive pen; Marksman/Mage/Support = 50 (+30% Total Physical Attack) (+50×Attack Speed) True Damage + slow 20% + 10% adaptive pen.
- **Purple Buff (Soul of Wind)** — Thunder Fenrir. -10% CD skill, -40% mana cost, -25% energy cost; bunuh unit pulihkan HP: minion 3% / hero 8% / creep 12%.
- **Gold Buff** — Crab: +100 gold / 30 dtk (Little Crab +30 / 9 dtk). **Healing Buff** — Horned Lizard/Fire Beetle/Lava Golem: 5% mana + 350 HP / 2 dtk. **Walkie Grass** — Lithowanderer: speed di river + 1% mana/dtk.

**Timer turtle/lord (wiki):**
- Turtle: spawn **2:00** (sisi EXP lane), respawn **120 dtk**, stop **8:00** (tak ada turtle baru bila terakhir dibunuh setelah 6:00; yang tak dibunuh jadi Lord di 8:00–9:00). Reward tim 60/70/80 gold (ke-1/2/3).
- Lord: spawn **8:00** (atau 2 mnt setelah turtle terakhir), respawn **180 dtk** (8–18 mnt) → **150 dtk** (>18 mnt). Evolve 12:00 (damage reduction + aura magic damage 250 (+50% phys)(+50% magic)(+2,5% HP), CD 2 dtk). Charge turret pertama: true damage (30% max HP turret, Lord 8–18 mnt).

**Perubahan 2.2.16 (Liquipedia, live 16 Sep 2026):**
- Base gold Horned Lizard/Fire Beetle/Lava Golem **-13%**; team bounty threshold 2.000 → **1.500**; growth gold minion sedikit dikurangi.

**Annual Map Change (live 28 Sep 2026 — SUDAH AKTIF):**
- **Healing Turtle**: bunuh turtle **tidak lagi memberi shield** → spawn allied Turtle di lane terkuat musuh untuk push + heal cepat hero sekutu di dekatnya.
- **Revealing Wisps**: wisp vision bisa dipungut, reveal hero musuh tersembunyi dalam radius besar beberapa detik.
- **Golden Turret**: gold tim per turret hancur naik besar; HP inner & base turret naik.
- Enhanced BA dari skill hero kini bisa kena turret + trigger HP regen (Quantum Charge & HP regen Inspire dikecualikan).
- Sanctum Island revamp visual + Lord didesain ulang.

## 3. Belum terverifikasi

1. **War Cry & Temporal Reign**: wiki menampilkan deskripsi IDENTIK untuk keduanya (kemungkinan salah salin). Efek asli masing-masing belum terverifikasi. Di JSON keduanya diberi flag `verified:false`.
2. **Awe Inspiring** (disebut LootBar sebagai core talent alternatif Support): tidak ada di wiki sama sekali — kemungkinan talent baru yang belum didokumentasikan, atau kesalahan guide. TIDAK dimasukkan ke JSON.
3. **Durasi buff orange/ungu**: patch 1.5.38 tulis 75 dtk; bodi utama wiki tidak konsisten (dulu 120 dtk). Spawn elite creep 25 dtk/interval 90 dtk (patch 1.5.38) vs 30 dtk/2 mnt (bodi utama).
4. **Walkie Grass**: durasi mengikuti killer 120 dtk (bodi utama) vs 45 dtk (patch 1.5.62).
5. **Gold Buff**: durasi 30 dtk (bodi utama) vs 18 dtk (patch 1.4.86).
6. **Lord evolve**: 12:00 vs 18:00 (dua bagian wiki bertentangan).
7. **Maks turtle per game**: patch tulis 4, tapi dengan stop 8:00 praktisnya 3 (4 hanya edge case).
8. **Angka gold baru** creep setelah -13% (2.2.16): nilai pasti belum dihitung dari wiki.
9. **Cyclone Eye** (40 dtk spawn / 45 dtk CD) & **Little Crab → Crab di 180 dtk**: dari patch lama, belum dikonfirmasi masih berlaku.
10. Nilai talent lama di guide 2025 (Fatal 5%/10%, Weapon Master 5%, Firmness +6, Tenacity +15 def, PYT 15%): SUDAH diganti mengikuti wiki yang lebih baru (Fatal 5%/5%, Weapon Master 8%, Firmness +8, Tenacity 5% dmg reduction, PYT 12%).
11. Patch note wiki (fandom) tertinggal — versi terbaru yang terdokumentasi di sana hanya 2.1.67 (Apr 2026); patch 2.2.16 diambil dari Liquipedia.
