
import chalk from 'chalk';
import cowsay from 'cowsay';
import figlet from 'figlet';
import boxen from 'boxen';

// --- (1) Mengambil Argumen dari Terminal ---
// process.argv berisi array path ke node, path ke file, lalu argumen yang diberikan
// Kita ambil argumen ke-3 dan ke-4 (indeks 2 dan 3)
const args = process.argv.slice(2);
const fullName = args[0] || 'Nama Lengkapmu'; // Default jika tidak ada input
const nim = args[1] || 'NIM Kamu'; // Default jika tidak ada input

// Cek jika argumen tidak diberikan dan berikan instruksi
if (args.length < 2) {
  console.log(chalk.yellow('Penggunaan: node index.js "Nama Lengkap" "NIM"'));
  console.log(chalk.cyan('Menjalankan dengan nilai default...'));
}

// --- (2) Styling Nama dan NIM dengan Chalk ---
// Menggabungkan beberapa style: bold, warna, dan underline
const styledName = chalk.bold.blue.underline(`Nama: ${fullName}`);
const styledNIM = chalk.bold.green(`NIM: ${nim}`);
const personalInfo = `${styledName}\n${styledNIM}`;


// --- (3) Pesan Motivasi dengan Cowsay ---
// Menggunakan karakter 'dragon' sebagai variasi
const motivationalQuote = `Namaku adalah ${fullName} !!!`;
const cowMessage = cowsay.say({
    text : motivationalQuote,
    f : "dragon-and-cow" // 'f' adalah opsi untuk memilih karakter
});


// --- (4) Membuat ASCII Art dengan Figlet ---
// Figlet bekerja secara asynchronous, jadi kita gunakan callback atau promise
// Di sini kita gunakan callback untuk menangani hasilnya
figlet(fullName, function(err, asciiName) {
    if (err) {
        console.log('Error');
        console.dir(err);
        return;
    }

    // Gabungkan semua output menjadi satu string
    const finalOutput = `${personalInfo}\n\n${cowMessage}\n${asciiName}`;

    // --- (5) Tambahan: Gunakan Boxen untuk mempercantik output ---
    // Menambahkan border di sekeliling output
    console.log(boxen(finalOutput, {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'cyan',
        title: 'Tugas Minggu 4',
        titleAlignment: 'center'
    }));
});

