import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 font-sans text-gray-900">
      <header className="mx-auto max-w-5xl px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.svg"
            alt="Sate Putri Kembar logo"
            width={64}
            height={64}
          />
          <div>
            <h1 className="text-2xl font-extrabold">Sate Putri Kembar</h1>
            <p className="text-sm text-gray-600">
              Sate Ayam khas rumahan — rasa yang selalu dirindukan
            </p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#about" className="hover:underline">
            Tentang
          </a>
          <a href="#menu" className="hover:underline">
            Menu
          </a>
          <a href="#order" className="hover:underline">
            Pesan
          </a>
          <a href="#contact" className="hover:underline">
            Kontak
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">
              Sate Putri Kembar — Kenikmatan Sate Ayam Otentik
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Dibuat dengan resep keluarga, dibakar sempurna dan disajikan
              dengan bumbu kacang istimewa. Nikmati sate yang empuk, gurih, dan
              penuh cita rasa.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#order"
                className="inline-flex items-center gap-3 rounded-full bg-orange-600 px-6 py-3 text-white shadow hover:bg-orange-700"
              >
                Pesan Sekarang
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-3 rounded-full border border-orange-600 px-6 py-3 text-orange-600 hover:bg-orange-50"
              >
                Lihat Menu
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <p>
                <strong>Lokasi:</strong> Gerobak di pasar tradisional & layanan
                antar sekitar area.
              </p>
              <p className="mt-1">
                <strong>Jam Buka:</strong> 10:00 – 20:00 (setiap hari)
              </p>
            </div>
          </div>

          <div className="order-first md:order-last flex justify-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/hero.svg"
                alt="Paket Sate Putri Kembar"
                width={800}
                height={600}
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-12 bg-white/70 rounded-2xl p-6 shadow"
        >
          <h3 className="text-2xl font-bold">Tentang Kami</h3>
          <p className="mt-3 text-gray-700">
            Sate Putri Kembar dimulai dari gerobak kecil dengan cita rasa
            rumahan. Kami menggunakan bahan segar, daging ayam pilihan, dan
            resep bumbu kacang yang turun-temurun.
          </p>
        </section>

        <section id="menu" className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow">
            <h4 className="font-semibold">Sate Original</h4>
            <p className="mt-2 text-sm text-gray-600">
              Sate ayam dengan bumbu kacang klasik, 10 tusuk.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow">
            <h4 className="font-semibold">Sate Bumbu Pedas</h4>
            <p className="mt-2 text-sm text-gray-600">
              Tambahan sambal pedas rumah, cocok untuk pecinta pedas.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow">
            <h4 className="font-semibold">Paket Hemat</h4>
            <p className="mt-2 text-sm text-gray-600">
              Paket 3 box lengkap untuk keluarga atau acara kecil.
            </p>
          </div>
        </section>

        <section id="order" className="mt-10 rounded-2xl bg-orange-50 p-6">
          <h3 className="text-2xl font-bold">Cara Pesan</h3>
          <ol className="mt-3 list-decimal list-inside text-gray-700">
            <li>Pilih menu dan jumlah tusuk/box.</li>
            <li>
              Hubungi kami via WhatsApp di <strong>0823-7XXX-XXXX</strong>.
            </li>
            <li>Kami akan konfirmasi estimasi antar dan total harga.</li>
          </ol>
          <a
            href="https://wa.me/6282370000000"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-full bg-green-600 px-5 py-3 text-white"
          >
            Chat WhatsApp
          </a>
        </section>

        <section id="contact" className="mt-10 rounded-2xl bg-white p-6 shadow">
          <h3 className="text-2xl font-bold">Kontak & Sosial</h3>
          <p className="mt-3 text-gray-700">
            Telepon / WA: <strong>0823-7XXX-XXXX</strong>
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
