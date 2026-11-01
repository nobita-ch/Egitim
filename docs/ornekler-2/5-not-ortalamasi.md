---
title: "5. Not Ortalaması"
---

# 5. Not Ortalaması

<span class="zorluk zorluk--orta">Orta</span> <span class="konu-etiketi">3.5–3.6 Veri Tipi Dönüşümleri</span>

Bir öğrencinin üç sınav notu bir formdan geliyor. Formdan gelen her şey **metin** (`str`) olduğu için `not1`, `not2` ve `not3` değişkenleri `"85"` ya da `"72.5"` gibi tırnak içinde geliyor; bazılarının başında veya sonunda boşluk da olabiliyor.

Üç notun ortalamasını hesapla ve **virgülden sonra 2 basamağa yuvarlayarak** ekrana yazdır.

**Örnek 1:**

```text
Girdi:  not1 = "80", not2 = "90", not3 = "70"
Çıktı:  80.0
```

`"80" + "90"` yazarsan metinler yan yana eklenir ve `"8090"` olur. Önce sayıya çevirmelisin.

**Örnek 2:**

```text
Girdi:  not1 = "72.5", not2 = " 88 ", not3 = "91"
Çıktı:  83.83
```

(72.5 + 88 + 91) / 3 = 83.8333... → 83.83

**Örnek 3:**

```text
Girdi:  not1 = "100", not2 = "0", not3 = "50"
Çıktı:  50.0
```

**Kısıtlar:**

- Her not, sayıya çevrilebilen bir metindir (ondalıklı olabilir).
- Metinlerin başında/sonunda boşluk olabilir.

??? tip "İpucu"
    `int("72.5")` hata verir, çünkü `int()` ondalıklı metni çeviremez. `float()` ise hem `"80"` hem `"72.5"` hem de `" 88 "` gibi boşluklu metinleri çevirebilir.

<div class="kod-sorusu" data-id="ornek2-5-v2">
<script type="application/json">{"baslangic": "# not1, not2, not3 değişkenleri sana hazır olarak verilir; onlara kendin değer atama.\n# Kodunu aşağıya yaz ve sonucu print() ile ekrana yazdır.\n\n", "degiskenler": ["not1", "not2", "not3"], "testler": [{"girdi": "\"80\", \"90\", \"70\"", "gosterim": "not1 = \"80\", not2 = \"90\", not3 = \"70\"", "beklenen": "80.0", "ornek": true}, {"girdi": "\"72.5\", \" 88 \", \"91\"", "gosterim": "not1 = \"72.5\", not2 = \" 88 \", not3 = \"91\"", "beklenen": "83.83", "ornek": true}, {"girdi": "\"100\", \"0\", \"50\"", "gosterim": "not1 = \"100\", not2 = \"0\", not3 = \"50\"", "beklenen": "50.0", "ornek": true}, {"girdi": "\"0\", \"0\", \"0\"", "gosterim": "not1 = \"0\", not2 = \"0\", not3 = \"0\"", "beklenen": "0.0", "ornek": false}, {"girdi": "\"45.5\", \"60.25\", \"70\"", "gosterim": "not1 = \"45.5\", not2 = \"60.25\", not3 = \"70\"", "beklenen": "58.58", "ornek": false}, {"girdi": "\"99.9\", \"99.9\", \"99.9\"", "gosterim": "not1 = \"99.9\", not2 = \"99.9\", not3 = \"99.9\"", "beklenen": "99.9", "ornek": false}, {"girdi": "\"  12 \", \"13  \", \"14\"", "gosterim": "not1 = \"  12 \", not2 = \"13  \", not3 = \"14\"", "beklenen": "13.0", "ornek": false}, {"girdi": "\"1e2\", \"50\", \"0\"", "gosterim": "not1 = \"1e2\", not2 = \"50\", not3 = \"0\"", "beklenen": "50.0", "ornek": false}, {"girdi": "\"33\", \"33\", \"34\"", "gosterim": "not1 = \"33\", not2 = \"33\", not3 = \"34\"", "beklenen": "33.33", "ornek": false}]}</script>
</div>

??? success "Çözümü göster"
    ```python
    n1 = float(not1)
    n2 = float(not2)
    n3 = float(not3)
    ortalama = (n1 + n2 + n3) / 3
    print(round(ortalama, 2))
    ```

    `float()` metni ondalıklı sayıya çevirir ve baştaki/sondaki boşlukları kendisi yok sayar. Toplama, çevirmeden **sonra** yapılmalı; yoksa metinler birleşir.
