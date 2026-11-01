---
title: "4. İndirimli Fiyat"
---

# 4. İndirimli Fiyat

<span class="zorluk zorluk--orta">Orta</span> <span class="konu-etiketi">3.4 Uygulama – Değişken Tanımlama</span>

Bir mağazada indirim var. Sana `fiyat` (bir ürünün fiyatı), `adet` (kaç tane alındığı) ve `indirim_yuzde` (yüzde kaç indirim yapıldığı) değişkenleri hazır olarak veriliyor.

Ödenecek tutarı şu sırayla hesapla ve ekrana yazdır:

1. **Toplam** = fiyat × adet
2. **İndirim miktarı** = toplamın yüzde `indirim_yuzde`'si
3. **Ödenecek tutar** = toplam − indirim miktarı

Her adımı ayrı bir değişkende tutarsan kodun daha kolay okunur.

**Örnek 1:**

```text
Girdi:  fiyat = 50, adet = 4, indirim_yuzde = 10
Çıktı:  180.0
```

Toplam 50 × 4 = 200. İndirim 200'ün %10'u = 20. Ödenecek: 200 − 20 = 180.0

**Örnek 2:**

```text
Girdi:  fiyat = 120, adet = 1, indirim_yuzde = 25
Çıktı:  90.0
```

**Örnek 3:**

```text
Girdi:  fiyat = 30, adet = 2, indirim_yuzde = 0
Çıktı:  60.0
```

**Kısıtlar:**

- `fiyat` ve `adet` pozitif tam sayılardır.
- `0 <= indirim_yuzde <= 100`

??? tip "İpucu"
    Bir sayının yüzde `y`'si `sayi * y / 100` ile bulunur. Örneğin 200'ün %10'u: `200 * 10 / 100 = 20.0`.

<div class="kod-sorusu" data-id="ornek2-4-v3">
<script type="application/json">{"baslangic": "# fiyat, adet, indirim_yuzde değişkenleri sana hazır olarak verilir; onlara kendin değer atama.\n# Kodunu aşağıya yaz ve sonucu print() ile ekrana yazdır.\n\n", "degiskenler": ["fiyat", "adet", "indirim_yuzde"], "testler": [{"girdi": "50, 4, 10", "gosterim": "fiyat = 50, adet = 4, indirim_yuzde = 10", "beklenen": "180.0", "ornek": true}, {"girdi": "120, 1, 25", "gosterim": "fiyat = 120, adet = 1, indirim_yuzde = 25", "beklenen": "90.0", "ornek": true}, {"girdi": "30, 2, 0", "gosterim": "fiyat = 30, adet = 2, indirim_yuzde = 0", "beklenen": "60.0", "ornek": true}, {"girdi": "0, 5, 20", "gosterim": "fiyat = 0, adet = 5, indirim_yuzde = 20", "beklenen": "0.0", "ornek": false}, {"girdi": "200, 3, 50", "gosterim": "fiyat = 200, adet = 3, indirim_yuzde = 50", "beklenen": "300.0", "ornek": false}, {"girdi": "8, 5, 100", "gosterim": "fiyat = 8, adet = 5, indirim_yuzde = 100", "beklenen": "0.0", "ornek": false}, {"girdi": "99, 2, 10", "gosterim": "fiyat = 99, adet = 2, indirim_yuzde = 10", "beklenen": "178.2", "ornek": false}, {"girdi": "15, 4, 20", "gosterim": "fiyat = 15, adet = 4, indirim_yuzde = 20", "beklenen": "48.0", "ornek": false}, {"girdi": "1000, 1, 5", "gosterim": "fiyat = 1000, adet = 1, indirim_yuzde = 5", "beklenen": "950.0", "ornek": false}]}</script>
</div>

??? success "Çözümü ve açıklamasını göster"
    ```python
    toplam = fiyat * adet
    indirim = toplam * indirim_yuzde / 100
    odenecek = toplam - indirim
    print(odenecek)
    ```

    **Adım adım:**

    1. `toplam = fiyat * adet` → İndirimsiz toplam tutarı hesaplar.
    2. `indirim = toplam * indirim_yuzde / 100` → Toplamın yüzde kaçının düşüleceğini hesaplar.
    3. `odenecek = toplam - indirim` → Toplamdan indirimi çıkarır.
    4. `print(odenecek)` → Sonucu ekrana yazar.

    **Örnek üzerinden (fiyat = 50, adet = 4, indirim_yuzde = 10):**

    ```text
    toplam   = 50 * 4         = 200
    indirim  = 200 * 10 / 100 = 20.0
    odenecek = 200 - 20.0     = 180.0
    ekrana:    180.0
    ```

    **Neden `180` değil de `180.0`?** Python'da `/` ile yapılan bölmenin sonucu her zaman `float` olur. `indirim` bir `float` olduğu için `odenecek` de `float` çıkar. (Bu soruda `180` yazdırsan da doğru kabul edilir.)

    **Sık yapılan hatalar:**

    - `toplam - indirim_yuzde` yazmak → Yüzdeyi tutar sanıp doğrudan çıkarmak. %10 indirim 10 TL değil, toplamın onda biridir.
    - Toplamı hesaplamadan `fiyat * indirim_yuzde / 100` ile indirimi bulmak → İndirim tek ürüne uygulanmış olur, adet unutulur.
