
### 01. Inisialisasi Server
Tahap ini menunjukkan proses menjalankan aplikasi Express menggunakan Nodemon. Server berhasil dijalankan dan dapat diakses melalui `http://localhost:3000`.

![Inisialisasi Server](screenshots/01-init-server.png)

### 02. Pengujian Static File dan 404
Pengujian dilakukan untuk memastikan aplikasi dapat menangani permintaan halaman yang tidak ditemukan. Jika URL yang diakses tidak sesuai dengan route yang tersedia, aplikasi menampilkan respons `404 Not Found`.

![Static File dan 404](screenshots/02-static-404-png.png)

### 03. EJS Partials
Pada tahap ini, tampilan halaman disusun menggunakan EJS partials agar bagian antarmuka yang digunakan berulang dapat dipisahkan ke dalam file tersendiri. Pendekatan ini membantu menjaga struktur view tetap rapi dan mudah dikelola.

![EJS Partials](screenshots/03-ejs-partials.png)

### 04. Refactoring MVC
Tahap ini menunjukkan pemisahan tanggung jawab aplikasi menggunakan pola Model-View-Controller (MVC). Routing ditempatkan di folder `routes/`, logika request dan response berada di `controllers/`, sedangkan tampilan dikelola di folder `views/`.

![MVC Refactor](screenshots/04-mvc-refactor.png)

### 05. Pengujian Form POST
Pengujian dilakukan dengan mengirimkan data dari form menggunakan metode POST. Controller menerima data melalui `req.body`, menampilkannya di terminal menggunakan `console.log()`, kemudian mengarahkan pengguna kembali ke halaman katalog.

![Pengujian Form POST](screenshots/05-post-payload.png)

### 06. Error Cannot Read Properties of Undefined
Error ini diuji dengan menonaktifkan middleware `express.urlencoded()`. Akibatnya, data form tidak tersedia melalui `req.body`, sehingga akses terhadap properti data menghasilkan error. Perbaikan dilakukan dengan mengaktifkan kembali middleware tersebut.

![Error Undefined](screenshots/06-error-undefined.png)

### 07. Error Failed to Lookup View
Pengujian dilakukan dengan mengubah path view menjadi tidak sesuai dengan lokasi file EJS. Express tidak dapat menemukan template yang diminta. Error diperbaiki dengan mengembalikan path view ke lokasi yang benar.

![Error Lookup View](screenshots/07-error-lookup.png)

### 08. Error EADDRINUSE
Pengujian ini menunjukkan konflik penggunaan port ketika port 3000 sudah digunakan oleh proses server lain. Percobaan membuka port yang sama menghasilkan error `EADDRINUSE`.

![Error EADDRINUSE](screenshots/08-error-port.png)
