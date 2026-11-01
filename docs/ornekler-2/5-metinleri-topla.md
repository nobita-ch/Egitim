---
title: "5. Metinleri Sayıya Çevir"
---

# 5. Metinleri Sayıya Çevir

<span class="zorluk zorluk--kolay">Kolay</span> <span class="konu-etiketi">3.5–3.6 Veri Tipi Dönüşümleri</span>

Bir formdan iki sayı geldi, ama formdan gelen her şey **metin** (`str`) olduğu için sayılar `"12"` ve `"30"` gibi tırnak içinde duruyor.

Sana `sayi1` ve `sayi2` değişkenleri hazır olarak veriliyor. Bu iki sayının **toplamını** ekrana yazdır.

**Örnek 1:**

```text
Girdi:  sayi1 = "12", sayi2 = "30"
Çıktı:  42
```

12 + 30 = 42. Dikkat: `"12" + "30"` yazarsan metinler yan yana eklenir ve `1230` olur.

**Örnek 2:**

```text
Girdi:  sayi1 = "100", sayi2 = "1"
Çıktı:  101
```

**Örnek 3:**

```text
Girdi:  sayi1 = "7", sayi2 = "-2"
Çıktı:  5
```

**Kısıtlar:**

- Her iki değer de tam sayı içeren birer metindir (ör. `"12"`, `"-5"`).

??? tip "İpucu"
    Metni tam sayıya çevirmek için `int()` kullanılır: `int("12")` → `12`.

<div class="kod-sorusu" data-id="ornek2-5-v3">
<script type="application/json">{"baslangic": "# sayi1, sayi2 değişkenleri sana hazır olarak verilir; onlara kendin değer atama.\n# Kodunu aşağıya yaz ve sonucu print() ile ekrana yazdır.\n\n", "degiskenler": ["sayi1", "sayi2"], "testler": [{"girdi": "\"12\", \"30\"", "gosterim": "sayi1 = \"12\", sayi2 = \"30\"", "beklenen": "42", "ornek": true}, {"girdi": "\"100\", \"1\"", "gosterim": "sayi1 = \"100\", sayi2 = \"1\"", "beklenen": "101", "ornek": true}, {"girdi": "\"7\", \"-2\"", "gosterim": "sayi1 = \"7\", sayi2 = \"-2\"", "beklenen": "5", "ornek": true}, {"girdi": "\"0\", \"0\"", "gosterim": "sayi1 = \"0\", sayi2 = \"0\"", "beklenen": "0", "ornek": false}, {"girdi": "\"250\", \"750\"", "gosterim": "sayi1 = \"250\", sayi2 = \"750\"", "beklenen": "1000", "ornek": false}, {"girdi": "\"-5\", \"-5\"", "gosterim": "sayi1 = \"-5\", sayi2 = \"-5\"", "beklenen": "-10", "ornek": false}, {"girdi": "\"999\", \"1\"", "gosterim": "sayi1 = \"999\", sayi2 = \"1\"", "beklenen": "1000", "ornek": false}, {"girdi": "\"8\", \"15\"", "gosterim": "sayi1 = \"8\", sayi2 = \"15\"", "beklenen": "23", "ornek": false}]}</script>
</div>

??? success "Çözümü ve açıklamasını göster"
    ```python
    s1 = int(sayi1)
    s2 = int(sayi2)
    print(s1 + s2)
    ```

    **Adım adım:**

    1. `s1 = int(sayi1)` → `"12"` metnini `12` sayısına çevirir.
    2. `s2 = int(sayi2)` → `"30"` metnini `30` sayısına çevirir.
    3. `print(s1 + s2)` → Artık ikisi de sayı olduğu için matematiksel toplama yapılır.

    **Örnek üzerinden (sayi1 = "12", sayi2 = "30"):**

    ```text
    sayi1 + sayi2            →  "12" + "30"  =  "1230"   (metinler yan yana eklenir!)
    int(sayi1) + int(sayi2)  →   12  +  30   =   42      (sayılar toplanır)
    ekrana:  42
    ```

    `type(sayi1)` yazdırırsan `<class 'str'>`, `type(int(sayi1))` yazdırırsan `<class 'int'>` görürsün: `int()` değerin türünü değiştirir.

    **Sık yapılan hatalar:**

    - Çevirmeden toplamak → `print(sayi1 + sayi2)` ekrana `1230` yazar.
    - Sonucu çevirmek → `int(sayi1 + sayi2)` önce metinleri birleştirir (`"1230"`), sonra çevirir: yine `1230`. Çeviri, toplamadan **önce** yapılmalı.
    - Ondalıklı metinlerde `int()` hata verir: `int("2.5")` → `ValueError`. Böyle durumlarda `float("2.5")` kullanılır.
