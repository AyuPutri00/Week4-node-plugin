Oke Ayu 😊, ini aku gabungkan semua jadi **satu file `README.md`** siap dipakai di GitHub:

````markdown
# Tugas Minggu 4: Node.js Plugins (Week4-node-plugin)

Proyek ini adalah implementasi tugas untuk mendemonstrasikan penggunaan beberapa package **Node.js** yang populer untuk memanipulasi dan mempercantik output pada terminal.

---

## 📦 Package yang Digunakan
- **Chalk** → Memberikan warna dan style pada teks di terminal.  
- **Cowsay** → Menampilkan pesan dalam gelembung ucapan dari karakter ASCII.  
- **Figlet** → Mengubah teks menjadi seni ASCII berukuran besar.  
- **Boxen (Opsional)** → Membuat kotak atau border di sekeliling output agar lebih rapi.  

---

## ✨ Fitur Utama
- Menampilkan **Nama Lengkap** dan **NIM** dengan warna dan gaya teks yang berbeda menggunakan `chalk`.  
- Menampilkan **pesan motivasi** menggunakan karakter naga dari `cowsay`.  
- Menampilkan nama dalam format **ASCII Art besar** menggunakan `figlet`.  
- Menerima **input dinamis** dari terminal untuk Nama dan NIM.  
- Tampilan output akhir dibungkus dalam sebuah **kotak menarik** menggunakan `boxen`.  

---

## ⚙️ Cara Instalasi

### 1. Clone Repository
Jika proyek ini sudah ada di GitHub, clone repository ke komputermu:

```bash
git clone https://github.com/USERNAME/Week4-node-plugin.git
cd Week4-node-plugin
````

### 2. Install Dependencies

Gunakan salah satu package manager (`npm`, `pnpm`, atau `yarn`) untuk menginstal semua package yang diperlukan.

**Menggunakan NPM:**

```bash
npm install
```

**Menggunakan PNPM:**

```bash
pnpm install
```

**Menggunakan Yarn:**

```bash
yarn install
```

---

## ▶️ Cara Menjalankan Proyek

Untuk menjalankan skrip, gunakan perintah `node` diikuti dengan nama file (`index.js`), lalu berikan **Nama Lengkap** dan **NIM** kamu sebagai argumen.

⚠️ Penting: Gunakan tanda kutip `"` jika nama atau NIM kamu mengandung spasi.

### Format Perintah:

```bash
node index.js "Nama Lengkap Anda" "NIM Anda"
```

### Contoh Praktis:

```bash
node index.js "Andi Pratama" "192837465"
```

Jika kamu tidak memberikan argumen, skrip akan berjalan dengan **nilai default**.

---

## 🖼️ Screenshot Hasil Output

Berikut adalah contoh tampilan output dari program ketika dijalankan:

![Screenshot Output](screenshot.png)`

---

