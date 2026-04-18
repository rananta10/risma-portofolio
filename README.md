# 🚀 Risma Portfolio — Cara Deploy

## Struktur Folder

```
risma-portfolio/
├── index.html          ← Halaman utama
├── css/
│   └── style.css       ← Semua styling
├── js/
│   ├── i18n.js         ← Bilingual (EN/ID)
│   └── main.js         ← Animasi & interaksi
└── README.md
```

---

## ☁️ CARA DEPLOY (3 Pilihan Gratis)

### 1. 🟣 Netlify (PALING MUDAH — Drag & Drop)
1. Buka https://netlify.com → Daftar gratis
2. Klik **"Add new site" → "Deploy manually"**
3. **Drag & drop folder `risma-portfolio`** ke kotak yang tersedia
4. Selesai! Dapat link seperti `https://risma-portfolio.netlify.app`
5. Optional: Ganti domain di **Site Settings → Domain management**

---

### 2. ⚫ GitHub Pages (Gratis + Custom Domain Support)
1. Buat akun di https://github.com
2. Buat repository baru: `risma-portfolio` (Public)
3. Upload semua file ke repo tersebut
4. Buka **Settings → Pages → Source: Deploy from branch → main**
5. Website live di: `https://username.github.io/risma-portfolio`

Atau dengan GitHub Desktop:
- Download GitHub Desktop → Login → Clone repo → Copy files → Commit → Push

---

### 3. 🟠 Vercel (Profesional)
1. Buka https://vercel.com → Login dengan GitHub
2. Klik **"New Project"** → Import repo GitHub
3. Klik **Deploy** — selesai dalam 30 detik!
4. Dapat link seperti `https://risma-portfolio.vercel.app`

---

## 🌐 Custom Domain (Opsional)
Beli domain `.id` atau `.com` di:
- **Niagahoster** — mulai Rp 15.000/tahun
- **Domainesia** — domain lokal terpercaya
- **Rumahweb** — cocok untuk pemula

Setelah beli, hubungkan ke Netlify/Vercel via **DNS Settings**.

---

## ✏️ Cara Update Konten

### Ganti info pribadi:
Edit `index.html` — cari teks yang ingin diubah

### Ganti terjemahan bilingual:
Edit `js/i18n.js` — sesuaikan teks EN dan ID

### Tambah proyek baru:
Di `index.html`, cari section `id="portfolio"` dan duplikat block `.port-card`

---

## 🎨 Cara Ganti Warna
Buka `css/style.css`, edit bagian `:root`:
```css
--lime:     #C8F135;   /* Warna aksen utama */
--electric: #3B5BFF;   /* Biru */
--coral:    #FF5F5F;   /* Merah */
--sky:      #00D4FF;   /* Cyan */
```
