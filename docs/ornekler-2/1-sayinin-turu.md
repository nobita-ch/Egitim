---
title: "1. Sayının Türü"
---

# 1. Sayının Türü

<span class="zorluk zorluk--kolay">Kolay</span> <span class="konu-etiketi">3.1 Sayı Veri Tipleri</span>

Python'da üç temel sayı türü vardır: **tam sayı** (`int`), **ondalıklı sayı** (`float`) ve **karmaşık sayı** (`complex`).

Sana bir `x` sayısı veriliyor. Bu sayının türünün adını metin (`str`) olarak döndüren `tur_adi(x)` fonksiyonunu yaz. Sonuç `"int"`, `"float"` veya `"complex"` olmalı.

**Örnek 1:**

```text
Girdi:  x = 42
Çıktı:  "int"
```

`3.0` değeri tam sayıya eşit olsa da noktalı yazıldığı için bir `float`tır.

**Örnek 2:**

```text
Girdi:  x = 3.0
Çıktı:  "float"
```

**Örnek 3:**

```text
Girdi:  x = (2+3j)
Çıktı:  "complex"
```

**Kısıtlar:**

- `x` her zaman `int`, `float` ya da `complex` türündedir.

??? tip "İpucu"
    Bir değerin türünü `type(x)` verir. Türün adını metin olarak almak için `type(x).__name__` kullanabilirsin.

<div class="kod-sorusu" data-id="ornek2-1" data-fonksiyon="tur_adi">
<script type="application/json">{"baslangic": "def tur_adi(x):\n    # Kodunu buraya yaz\n    pass\n", "testler": [{"girdi": "42", "gosterim": "x = 42", "beklenen": "'int'", "ornek": true}, {"girdi": "3.0", "gosterim": "x = 3.0", "beklenen": "'float'", "ornek": true}, {"girdi": "2+3j", "gosterim": "x = (2+3j)", "beklenen": "'complex'", "ornek": true}, {"girdi": "-7", "gosterim": "x = -7", "beklenen": "'int'", "ornek": false}, {"girdi": "0", "gosterim": "x = 0", "beklenen": "'int'", "ornek": false}, {"girdi": "0.5", "gosterim": "x = 0.5", "beklenen": "'float'", "ornek": false}, {"girdi": "1e3", "gosterim": "x = 1000.0", "beklenen": "'float'", "ornek": false}, {"girdi": "-2.25", "gosterim": "x = -2.25", "beklenen": "'float'", "ornek": false}, {"girdi": "100000000000000000000", "gosterim": "x = 100000000000000000000", "beklenen": "'int'", "ornek": false}, {"girdi": "5j", "gosterim": "x = 5j", "beklenen": "'complex'", "ornek": false}, {"girdi": "-1+0j", "gosterim": "x = (-1+0j)", "beklenen": "'complex'", "ornek": false}]}</script>
</div>

??? success "Çözümü göster"
    ```python
    def tur_adi(x):
        return type(x).__name__
    ```

    `type(5)` sonucu `<class 'int'>` olur; `.__name__` bu türün adını (`'int'`) metin olarak verir.
