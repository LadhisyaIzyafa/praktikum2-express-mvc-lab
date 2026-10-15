
## Dokumentasi Praktikum

### 1. Inisialisasi Server Express
Screenshot ini menunjukkan proses awal pembuatan server menggunakan Express.js. Server dijalankan untuk memastikan aplikasi dapat berjalan pada port yang telah ditentukan.

![Inisialisasi Server](docs/screenshots/01-init-server.png)

### 2. Pengujian Static File dan 404
Screenshot ini menunjukkan pengujian akses halaman atau file statis. Jika alamat yang diminta tidak ditemukan, aplikasi menampilkan respons 404.

![Static File dan 404](docs/screenshots/02-static-404.png)

### 3. Implementasi EJS Partials
Screenshot ini menunjukkan penggunaan EJS partials untuk memisahkan bagian header dan footer agar dapat digunakan kembali pada beberapa halaman.

![EJS Partials](docs/screenshots/03-ejs-partials.png)

### 4. Refactoring ke Pola MVC
Screenshot ini menunjukkan pemisahan kode aplikasi ke dalam model struktur MVC yang digunakan pada praktikum, yaitu routes, controllers, dan views agar kode lebih terorganisasi.

![MVC Refactor](docs/screenshots/04-mvc-refactor.png)

### 5. Pengujian POST Payload
Screenshot ini menunjukkan pengiriman data formulir menggunakan metode POST. Data yang dikirim dapat diperiksa melalui `req.body` setelah middleware `express.urlencoded()` dipasang.

![POST Payload](docs/screenshots/05-post-payload.png)

### 6. Penanganan Error Undefined
Screenshot ini mendokumentasikan error ketika data yang diakses bernilai `undefined`. Salah satu penyebabnya adalah middleware untuk membaca data formulir belum dipasang atau urutannya belum tepat.

![Error Undefined](docs/screenshots/06-error-undefined.png)

### 7. Penanganan Error Lookup View
Screenshot ini menunjukkan error ketika Express tidak dapat menemukan file view yang diminta. Hal ini dapat terjadi jika nama file atau lokasi folder view tidak sesuai.

![Error Lookup View](docs/screenshots/07-error-lookup.png)

### 8. Penanganan Error Port
Screenshot ini menunjukkan error `EADDRINUSE`, yaitu ketika port yang ingin digunakan sudah dipakai oleh proses lain. Solusinya adalah menghentikan proses tersebut atau menggunakan port lain.

![Error Port](docs/screenshots/08-error-port.png)
