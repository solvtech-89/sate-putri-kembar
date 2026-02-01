import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-hero-pattern font-poppins text-gray-900">
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/logo-sate-ayam.jpeg"
            alt="Sate Putri Kembar logo"
            width={64}
            height={64}
          />
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Sate Putri Kembar
            </h1>
            <p className="text-xs text-gray-600">
              Sate Ayam Rumahan — Bumbu Kacang Rahasia
            </p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#about" className="nav-link">
            Tentang
          </a>
          <a href="#menu" className="nav-link">
            Menu
          </a>
          <a href="#order" className="nav-link">
            Pesan
          </a>
          <a href="#contact" className="nav-link">
            Kontak
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-10 md:grid-cols-2 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-extrabold leading-tight">
              Rasakan Sate Ayam yang Menghangatkan
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Dari gerobak tradisional ke piring Anda — sate empuk, bumbu kacang
              kental, dan sambal rumah yang bikin nagih.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#order" className="btn-primary shadow-lg">
                Pesan Sekarang
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-3 rounded-full border border-orange-600 px-6 py-3 text-orange-600 hover:bg-orange-50"
              >
                Lihat Menu
              </a>
            </div>

            <div className="mt-6 flex gap-6 text-sm text-gray-600">
              <div>
                <div className="text-xs text-gray-500">Lokasi</div>
                <div className="font-semibold">
                  Pasar Tradisional & Antar Lokal
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Jam</div>
                <div className="font-semibold">10:00 — 20:00</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-xl transform hover:scale-102 transition-all duration-400">
              <Image
                src="/tukang-sate.png"
                alt="Paket Sate Putri Kembar"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-12 grid gap-6 md:grid-cols-2 items-start"
        >
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-2xl font-bold">Tentang Kami</h3>
            <p className="mt-3 text-gray-700">
              Sate Putri Kembar hadir dari resep keluarga yang diwariskan
              turun-temurun. Kami mengutamakan kesegaran bahan dan teknik bakar
              yang sempurna agar daging tetap juicy.
            </p>
            <ul className="mt-4 text-sm text-gray-600 space-y-2">
              <li>• Daging ayam pilihan</li>
              <li>• Bumbu kacang khas rumah</li>
              <li>• Layanan takeaway & delivery</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-2xl font-bold">Testimoni Pelanggan</h3>
            <blockquote className="mt-3 text-gray-700 italic">
              “Rasanya otentik dan empuk — lauk favorit keluarga setiap minggu!”
            </blockquote>
            <p className="mt-4 text-sm text-gray-600">
              — Ibu Siti, pelanggan sejak 2021
            </p>
          </div>
        </section>

        <section id="menu" className="mt-10">
          <h3 className="text-2xl font-bold">Menu Pilihan</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="card">
              <div className="card-img" />
              <h4 className="font-semibold">Sate Original</h4>
              <p className="text-sm text-gray-600">
                10 tusuk — bumbu kacang klasik
              </p>
            </div>
            <div className="card">
              <div className="card-img" />
              <h4 className="font-semibold">Sate Pedas</h4>
              <p className="text-sm text-gray-600">
                Dengan sambal rumah yang menggigit
              </p>
            </div>
            <div className="card">
              <div className="card-img" />
              <h4 className="font-semibold">Paket Hemat</h4>
              <p className="text-sm text-gray-600">Box keluarga lengkap</p>
            </div>
          </div>
        </section>

        <section id="order" className="mt-10 rounded-2xl bg-orange-50 p-6">
          <h3 className="text-2xl font-bold">Cara Pesan</h3>
          <ol className="mt-3 list-decimal list-inside text-gray-700">
            <li>Pilih menu dan jumlah.</li>
            <li>
              Hubungi kami via WhatsApp: <strong>+62 823-7128-6545</strong>.
            </li>
            <li>Kami konfirmasi dan antar sesuai waktu.</li>
          </ol>
          <a
            href="https://wa.me/6282371286545"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block btn-primary"
          >
            Chat WhatsApp
          </a>
        </section>

        <section
          id="contact"
          className="mt-10 rounded-2xl bg-white p-6 shadow-md"
        >
          <h3 className="text-2xl font-bold">Kontak & Sosial</h3>
          <p className="mt-3 text-gray-700">
            WA: <strong>+62 823-7128-6545</strong>
          </p>
          <p className="mt-1 text-gray-700">
            Instagram:{" "}
            <a href="#" className="text-orange-600">
              @sateputrikembar
            </a>
          </p>
        </section>
      </main>

      <footer className="mt-12 border-t py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Sate Putri Kembar — Semua hak dilindungi
      </footer>
    </div>
  );
}
