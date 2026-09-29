# Çayan Kuzu — Özgeçmiş

Türkçe (`/tr`) ve İngilizce (`/en`) sürümleri olan, iki sütunlu A4 belge olarak tasarlanmış özgeçmiş. Web sayfası, yazdırma çıktısı ve PDF aynı veri kaynağından üretilir.

## Yapı

- `data/cv-content.ts` — özgeçmişin tüm metni (iki dil): profil, deneyim, seçili projeler, akademik çalışmalar, eğitim, yetkinlikler, diller.
- `data/profile.ts` — ad, iletişim bilgileri, bağlantılar ve canlı alan adı.
- `data/i18n.ts` — sayfa başlıkları, paylaşım metinleri ve arayüz etiketleri.
- `components/cv-document.tsx` — belgenin kendisi (sunucu bileşeni).
- `components/portrait.tsx` — fotoğraf ve lightbox'ı (ESC, dışarı tıklama ve klavyeyle kapanır).
- `components/cv-toolbar.tsx` — dil seçimi, PDF indirme ve yazdırma; kağıdın dışında durur, baskıda gizlenir.
- `app/[locale]/layout.tsx` — kök düzen: `<html lang>`, fontlar, meta etiketleri, hreflang ve paylaşım görselleri.
- `proxy.ts` — `/` adresini son seçilen dile ya da tarayıcı diline yönlendirir.
- `app/globals.css` — ekran, duyarlı düzen ve A4 baskı stilleri.

## Tasarım ilkeleri

- Ekranda nötr bir zeminin ortasında duran A4 oranlı bir kağıt: solda koyu arduvaz kenar çubuğu (fotoğraf, iletişim, eğitim, yetkinlikler), sağda numaralı bölümler.
- Açılır/kapanır alan ve WebGL yoktur; ekranda ne varsa baskıda da odur.
- Başlıklar Source Serif 4, metin Inter; tek vurgu rengi (#1F6F63). Boşluklar 8 px katlarıdır.
- 768 px altında tek sütun: koyu başlık bloğu (fotoğraf, isim, iletişim, eğitim), ana içerik, en sonda yetkinlikler.
- Telefon numarası web sayfasında gizlidir; yalnızca baskıda ve PDF'te görünür.
- Doğrulanmamış bilgi yazılmaz. `languages` listesi boşken Diller bölümü hiç çizilmez.

## PDF

"PDF indir" butonu `public/cayan-kuzu-cv-tr.pdf` ve `public/cayan-kuzu-cv-en.pdf` dosyalarını indirir. Bu dosyalar elle yüklenmez; çalışan siteden üretilir:

```bash
npm run dev          # ayrı bir terminalde, http://localhost:3001 (ya da CV_BASE_URL)
npm run pdf          # iki PDF'i ve data/pdf-manifest.json'u yeniler
```

`npm run build` öncesinde `check:pdf` çalışır. İçerik, stil veya fotoğraf değiştiği halde PDF'ler yenilenmemişse derleme durur, böylece eski bir PDF yayına çıkmaz. İndirme bağlantısı içerik özetini (`?v=`) taşıdığından tarayıcı önbelleği de eski dosyayı göstermez.

Paylaşım görselleri (`public/og/cv-tr.png`, `cv-en.png`) `npm run og` ile üretilir ve canlı alan adına mutlak URL olarak bağlanır.

## Kontroller

```bash
npm run lint
npx tsc --noEmit
npm run build
```
