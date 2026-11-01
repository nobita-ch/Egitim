---
title: "4. Market Fişi"
---

# 4. Market Fişi

<span class="zorluk zorluk--orta">Orta</span> <span class="konu-etiketi">3.4 Uygulama – Değişken Tanımlama</span>

Bir market kasası için fiş tutarını hesaplayacağız. Sana `birim_fiyat`, `adet`, `indirim_yuzde` ve `kdv_yuzde` değişkenleri hazır olarak veriliyor. Hesap şu sırayla yapılır:

1. **Ara toplam** = birim fiyat × adet
2. Ara toplama **indirim** uygulanır (yüzde olarak).
3. İndirimli tutarın üzerine **KDV** eklenir (yüzde olarak).

Sonucu `round(..., 2)` ile **virgülden sonra 2 basamağa** yuvarlayıp ekrana yazdır.

Her adımı ayrı bir değişkende tutmak kodu okumayı kolaylaştırır.

**Örnek 1:**

```text
Girdi:  birim_fiyat = 50, adet = 4, indirim_yuzde = 10, kdv_yuzde = 20
Çıktı:  216.0
```

Ara toplam 50 × 4 = 200. %10 indirimle 180. %20 KDV eklenince 180 + 36 = 216.0.

**Örnek 2:**

```text
Girdi:  birim_fiyat = 19.99, adet = 3, indirim_yuzde = 0, kdv_yuzde = 18
Çıktı:  70.76
```

19.99 × 3 = 59.97. İndirim yok. %18 KDV ile 70.7646 → 2 basamağa yuvarlanınca 70.76.

**Örnek 3:**

```text
Girdi:  birim_fiyat = 120, adet = 1, indirim_yuzde = 25, kdv_yuzde = 0
Çıktı:  90.0
```

**Kısıtlar:**

- `0 <= birim_fiyat <= 10 000`
- `1 <= adet <= 1000`
- `0 <= indirim_yuzde <= 100`
- `0 <= kdv_yuzde <= 100`

??? tip "İpucu"
    Bir sayının yüzde `y`'si `sayi * y / 100` ile bulunur. Önce indirimi düşüp yeni tutarı bir değişkene kaydet, KDV'yi bu yeni tutar üzerinden hesapla.

<div class="kod-sorusu" data-id="ornek2-4-v2">
<script type="application/json">{"baslangic": "# birim_fiyat, adet, indirim_yuzde, kdv_yuzde değişkenleri sana hazır olarak verilir; onlara kendin değer atama.\n# Kodunu aşağıya yaz ve sonucu print() ile ekrana yazdır.\n\n", "degiskenler": ["birim_fiyat", "adet", "indirim_yuzde", "kdv_yuzde"], "testler": [{"girdi": "50, 4, 10, 20", "gosterim": "birim_fiyat = 50, adet = 4, indirim_yuzde = 10, kdv_yuzde = 20", "beklenen": "216.0", "ornek": true}, {"girdi": "19.99, 3, 0, 18", "gosterim": "birim_fiyat = 19.99, adet = 3, indirim_yuzde = 0, kdv_yuzde = 18", "beklenen": "70.76", "ornek": true}, {"girdi": "120, 1, 25, 0", "gosterim": "birim_fiyat = 120, adet = 1, indirim_yuzde = 25, kdv_yuzde = 0", "beklenen": "90.0", "ornek": true}, {"girdi": "0, 10, 50, 20", "gosterim": "birim_fiyat = 0, adet = 10, indirim_yuzde = 50, kdv_yuzde = 20", "beklenen": "0.0", "ornek": false}, {"girdi": "7.5, 8, 15, 8", "gosterim": "birim_fiyat = 7.5, adet = 8, indirim_yuzde = 15, kdv_yuzde = 8", "beklenen": "55.08", "ornek": false}, {"girdi": "1250, 2, 100, 20", "gosterim": "birim_fiyat = 1250, adet = 2, indirim_yuzde = 100, kdv_yuzde = 20", "beklenen": "0.0", "ornek": false}, {"girdi": "3.33, 3, 0, 0", "gosterim": "birim_fiyat = 3.33, adet = 3, indirim_yuzde = 0, kdv_yuzde = 0", "beklenen": "9.99", "ornek": false}, {"girdi": "45.9, 7, 30, 18", "gosterim": "birim_fiyat = 45.9, adet = 7, indirim_yuzde = 30, kdv_yuzde = 18", "beklenen": "265.39", "ornek": false}, {"girdi": "10000, 1000, 0, 0", "gosterim": "birim_fiyat = 10000, adet = 1000, indirim_yuzde = 0, kdv_yuzde = 0", "beklenen": "10000000.0", "ornek": false}]}</script>
</div>

??? success "Çözümü göster"
    ```python
    ara_toplam = birim_fiyat * adet
    indirim = ara_toplam * indirim_yuzde / 100
    indirimli = ara_toplam - indirim
    kdv = indirimli * kdv_yuzde / 100
    toplam = indirimli + kdv
    print(round(toplam, 2))
    ```

    Her adımı anlamlı adlı bir değişkende tutmak hatayı bulmayı kolaylaştırır. KDV'nin indirimden **sonra**, indirimli tutar üzerinden hesaplandığına dikkat et.
