---
title: "3. Değerleri Kaydır"
---

# 3. Değerleri Kaydır

<span class="zorluk zorluk--kolay">Kolay</span> <span class="konu-etiketi">3.3 Değişken Tanımlama</span>

Sana `a`, `b` ve `c` adında üç değişken hazır olarak veriliyor. Bu değişkenlerin değerlerini **bir adım sola kaydır**:

- `a` değişkeni `b`'nin değerini,
- `b` değişkeni `c`'nin değerini,
- `c` değişkeni de `a`'nın **eski** değerini almalı.

Kaydırmadan sonra `print(a, b, c)` ile üç değişkeni ekrana yazdır.

**Örnek 1:**

```text
Girdi:  a = 1, b = 2, c = 3
Çıktı:  2 3 1
```

Kaydırmadan sonra a = 2, b = 3, c = 1 olur.

**Örnek 2:**

```text
Girdi:  a = "x", b = "y", c = "z"
Çıktı:  y z x
```

**Kısıtlar:**

- Değerler herhangi bir türde olabilir (sayı, metin, `True`, `None`...).
- Son satırın `print(a, b, c)` olmalı; değerleri yeni değişkenlere değil, `a`, `b`, `c`'nin kendisine ata.

??? tip "İpucu"
    `a = b` yazdığın anda `a`'nın eski değeri kaybolur. Ya eski değeri geçici bir değişkende sakla ya da Python'un **çoklu atamasını** kullan: `x, y = y, x`.

<div class="kod-sorusu" data-id="ornek2-3-v2">
<script type="application/json">{"baslangic": "# a, b, c değişkenleri sana hazır olarak verilir; onlara kendin değer atama.\n# Kodunu aşağıya yaz ve sonucu print() ile ekrana yazdır.\n\n\nprint(a, b, c)\n", "degiskenler": ["a", "b", "c"], "testler": [{"girdi": "1, 2, 3", "gosterim": "a = 1, b = 2, c = 3", "beklenen": "2 3 1", "ornek": true}, {"girdi": "'x', 'y', 'z'", "gosterim": "a = \"x\", b = \"y\", c = \"z\"", "beklenen": "y z x", "ornek": true}, {"girdi": "5, 5, 5", "gosterim": "a = 5, b = 5, c = 5", "beklenen": "5 5 5", "ornek": false}, {"girdi": "0, -1, 3.5", "gosterim": "a = 0, b = -1, c = 3.5", "beklenen": "-1 3.5 0", "ornek": false}, {"girdi": "True, None, 'a'", "gosterim": "a = True, b = None, c = \"a\"", "beklenen": "None a True", "ornek": false}, {"girdi": "'elma', 10, 2.5", "gosterim": "a = \"elma\", b = 10, c = 2.5", "beklenen": "10 2.5 elma", "ornek": false}, {"girdi": "'bir', 'iki', 3", "gosterim": "a = \"bir\", b = \"iki\", c = 3", "beklenen": "iki 3 bir", "ornek": false}]}</script>
</div>

??? success "Çözümü göster"
    ```python
    a, b, c = b, c, a
    print(a, b, c)
    ```

    Çoklu atamada Python önce sağ taraftaki değerleri (`b, c, a`) hesaplar, sonra hepsini aynı anda sol taraftaki değişkenlere yazar; bu yüzden hiçbir değer kaybolmaz. Aynı işi geçici bir değişkenle de yapabilirsin: `gecici = a`, `a = b`, `b = c`, `c = gecici`.
