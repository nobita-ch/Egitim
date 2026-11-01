---
title: "3. İki Değişkeni Değiştir"
---

# 3. İki Değişkeni Değiştir

<span class="zorluk zorluk--kolay">Kolay</span> <span class="konu-etiketi">3.3 Değişken Tanımlama</span>

Sana `a` ve `b` adında iki değişken hazır olarak veriliyor. Bu iki değişkenin **değerlerini yer değiştir**: `a`, `b`'nin değerini; `b` de `a`'nın değerini almalı.

Değiştirdikten sonra `print(a, b)` ile iki değişkeni ekrana yazdır (bu satır başlangıç kodunda hazır).

**Örnek 1:**

```text
Girdi:  a = 5, b = 9
Çıktı:  9 5
```

Değiştirmeden sonra a = 9, b = 5 olur.

**Örnek 2:**

```text
Girdi:  a = "elma", b = "armut"
Çıktı:  armut elma
```

**Kısıtlar:**

- Değerler sayı, metin veya `True`/`False` olabilir.
- `print(a, b)` satırını değiştirme; yer değiştirmeyi onun üstüne yaz.

??? tip "İpucu"
    `a = b` yazdığın anda `a`'nın eski değeri kaybolur. Eski değeri önce başka bir değişkende sakla. Python'da bunu tek satırda yapan kısa bir yol da var: `a, b = b, a`.

<div class="kod-sorusu" data-id="ornek2-3-v3">
<script type="application/json">{"baslangic": "# a, b değişkenleri sana hazır olarak verilir; onlara kendin değer atama.\n# Kodunu aşağıya yaz ve sonucu print() ile ekrana yazdır.\n\n\nprint(a, b)\n", "degiskenler": ["a", "b"], "testler": [{"girdi": "5, 9", "gosterim": "a = 5, b = 9", "beklenen": "9 5", "ornek": true}, {"girdi": "'elma', 'armut'", "gosterim": "a = \"elma\", b = \"armut\"", "beklenen": "armut elma", "ornek": true}, {"girdi": "0, 1", "gosterim": "a = 0, b = 1", "beklenen": "1 0", "ornek": false}, {"girdi": "7, 7", "gosterim": "a = 7, b = 7", "beklenen": "7 7", "ornek": false}, {"girdi": "-3, 2.5", "gosterim": "a = -3, b = 2.5", "beklenen": "2.5 -3", "ornek": false}, {"girdi": "'x', 10", "gosterim": "a = \"x\", b = 10", "beklenen": "10 x", "ornek": false}, {"girdi": "True, 'evet'", "gosterim": "a = True, b = \"evet\"", "beklenen": "evet True", "ornek": false}]}</script>
</div>

??? success "Çözümü ve açıklamasını göster"
    ```python
    gecici = a
    a = b
    b = gecici
    print(a, b)
    ```

    **Adım adım:**

    1. `gecici = a` → `a`'nın değerini kaybetmemek için önce `gecici` adlı yeni bir değişkene kopyalarız.
    2. `a = b` → Artık `a`'ya `b`'nin değerini verebiliriz; `a`'nın eski değeri `gecici`'de güvende.
    3. `b = gecici` → `b`'ye, sakladığımız eski `a` değerini veririz.
    4. `print(a, b)` → Yer değiştirmiş değerleri yazar.

    **Örnek üzerinden (a = 5, b = 9):**

    ```text
                     a    b    gecici
    başlangıç        5    9    -
    gecici = a       5    9    5
    a = b            9    9    5
    b = gecici       9    5    5
    ekrana:          9 5
    ```

    **Kısa yol:** Python'da `a, b = b, a` yazarak aynı işi tek satırda yapabilirsin. Python önce sağ taraftaki değerleri (`9, 5`) alır, sonra ikisini aynı anda sola yazar.

    **Sık yapılan hata:**

    ```python
    a = b    # a artık 9; a'nın eski değeri (5) kayboldu
    b = a    # b'ye de 9 yazılır
    ```

    Bu kodun sonunda ikisi de `9` olur: `9 9`. Bu yüzden eski değeri önce bir yere saklamamız gerekir.
