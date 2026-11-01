---
title: "1. Sayının Türü"
---

# 1. Sayının Türü

<span class="zorluk zorluk--kolay">Kolay</span> <span class="konu-etiketi">3.1 Sayı Veri Tipleri</span>

Python'da üç temel sayı türü vardır: **tam sayı** (`int`), **ondalıklı sayı** (`float`) ve **karmaşık sayı** (`complex`).

Sana `x` adında bir değişken hazır olarak veriliyor. `type()` fonksiyonunu kullanarak bu sayının türünü ekrana yazdır.

**Örnek 1:**

```text
Girdi:  x = 42
Çıktı:  <class 'int'>
```

**Örnek 2:**

```text
Girdi:  x = 3.14
Çıktı:  <class 'float'>
```

**Örnek 3:**

```text
Girdi:  x = (2+3j)
Çıktı:  <class 'complex'>
```

**Kısıtlar:**

- `x` her zaman `int`, `float` ya da `complex` türündedir.

??? tip "İpucu"
    `type(x)` bir değerin türünü verir. Sonucu ekranda görmek için onu `print()` içine yazman gerekir.

<div class="kod-sorusu" data-id="ornek2-1-v3">
<script type="application/json">{"baslangic": "# x değişkeni sana hazır olarak verilir; ona kendin değer atama.\n# Kodunu aşağıya yaz ve sonucu print() ile ekrana yazdır.\n\n", "degiskenler": ["x"], "testler": [{"girdi": "42", "gosterim": "x = 42", "beklenen": "<class 'int'>", "ornek": true}, {"girdi": "3.14", "gosterim": "x = 3.14", "beklenen": "<class 'float'>", "ornek": true}, {"girdi": "2+3j", "gosterim": "x = (2+3j)", "beklenen": "<class 'complex'>", "ornek": true}, {"girdi": "-7", "gosterim": "x = -7", "beklenen": "<class 'int'>", "ornek": false}, {"girdi": "0", "gosterim": "x = 0", "beklenen": "<class 'int'>", "ornek": false}, {"girdi": "3.0", "gosterim": "x = 3.0", "beklenen": "<class 'float'>", "ornek": false}, {"girdi": "0.5", "gosterim": "x = 0.5", "beklenen": "<class 'float'>", "ornek": false}, {"girdi": "5j", "gosterim": "x = 5j", "beklenen": "<class 'complex'>", "ornek": false}, {"girdi": "100", "gosterim": "x = 100", "beklenen": "<class 'int'>", "ornek": false}, {"girdi": "-2.5", "gosterim": "x = -2.5", "beklenen": "<class 'float'>", "ornek": false}]}</script>
</div>

??? success "Çözümü ve açıklamasını göster"
    ```python
    print(type(x))
    ```

    **Adım adım:**

    1. `type(x)` → `x` değişkeninin içindeki değerin türünü bulur.
    2. `print(...)` → bulunan türü ekrana yazar. Python türü `<class 'int'>` biçiminde gösterir; buradaki `int`, türün adıdır.

    **Örnek üzerinden:**

    ```text
    x = 42      →  type(x) = int      →  ekrana: <class 'int'>
    x = 3.14    →  type(x) = float    →  ekrana: <class 'float'>
    x = 2+3j    →  type(x) = complex  →  ekrana: <class 'complex'>
    x = 3.0     →  type(x) = float    →  ekrana: <class 'float'>
    ```

    Son satıra dikkat: `3.0` değeri tam sayıya eşit olsa da **noktayla yazıldığı için** `float` sayılır. Karmaşık sayılar ise `j` harfiyle yazılır (`2+3j`, `5j`).

    **Sık yapılan hatalar:**

    - `print("type(x)")` → Tırnak içine yazınca Python bunu kod değil metin sanar ve ekrana olduğu gibi `type(x)` yazar.
    - `type(x)` yazıp `print` kullanmamak → Değer bulunur ama ekrana hiçbir şey yazılmaz.
    - `x = 42` diye kendin değer atamak → Her testte `x` farklı bir değerle gelir; senin atadığın değer bunu bozar.
