---
title: "3. Değerleri Kaydır"
---

# 3. Değerleri Kaydır

<span class="zorluk zorluk--kolay">Kolay</span> <span class="konu-etiketi">3.3 Değişken Tanımlama</span>

Üç değişkenin değerlerini **bir adım sola kaydır**:

- `a` değişkeni `b`'nin değerini,
- `b` değişkeni `c`'nin değerini,
- `c` değişkeni de `a`'nın **eski** değerini almalı.

Kaydırma işleminden sonra `return a, b, c` ile üç değeri döndüren `kaydir(a, b, c)` fonksiyonunu yaz.

**Örnek 1:**

```text
Girdi:  a = 1, b = 2, c = 3
Çıktı:  (2, 3, 1)
```

Kaydırmadan sonra a = 2, b = 3, c = 1 olur.

**Örnek 2:**

```text
Girdi:  a = "x", b = "y", c = "z"
Çıktı:  ('y', 'z', 'x')
```

**Kısıtlar:**

- Değerler herhangi bir türde olabilir (sayı, metin, `True`, `None`...).

??? tip "İpucu"
    `a = b` yazdığın anda `a`'nın eski değeri kaybolur. Ya eski değeri geçici bir değişkende sakla ya da Python'un **çoklu atamasını** kullan: `x, y = y, x`.

<div class="kod-sorusu" data-id="ornek2-3" data-fonksiyon="kaydir">
<script type="application/json">{"baslangic": "def kaydir(a, b, c):\n    # Kodunu buraya yaz\n\n    return a, b, c\n", "testler": [{"girdi": "1, 2, 3", "gosterim": "a = 1, b = 2, c = 3", "beklenen": "(2, 3, 1)", "ornek": true}, {"girdi": "'x', 'y', 'z'", "gosterim": "a = \"x\", b = \"y\", c = \"z\"", "beklenen": "('y', 'z', 'x')", "ornek": true}, {"girdi": "5, 5, 5", "gosterim": "a = 5, b = 5, c = 5", "beklenen": "(5, 5, 5)", "ornek": false}, {"girdi": "0, -1, 3.5", "gosterim": "a = 0, b = -1, c = 3.5", "beklenen": "(-1, 3.5, 0)", "ornek": false}, {"girdi": "True, None, 'a'", "gosterim": "a = True, b = None, c = \"a\"", "beklenen": "(None, 'a', True)", "ornek": false}, {"girdi": "'elma', 10, 2.5", "gosterim": "a = \"elma\", b = 10, c = 2.5", "beklenen": "(10, 2.5, 'elma')", "ornek": false}, {"girdi": "[], 0, ''", "gosterim": "a = [], b = 0, c = \"\"", "beklenen": "(0, '', [])", "ornek": false}]}</script>
</div>

??? success "Çözümü göster"
    ```python
    def kaydir(a, b, c):
        a, b, c = b, c, a
        return a, b, c
    ```

    Çoklu atamada Python önce sağ taraftaki değerleri (`b, c, a`) hesaplar, sonra hepsini aynı anda sol taraftaki değişkenlere yazar. Bu yüzden hiçbir değer kaybolmaz. Geçici değişkenle de yapılabilir: `gecici = a; a = b; b = c; c = gecici`.
