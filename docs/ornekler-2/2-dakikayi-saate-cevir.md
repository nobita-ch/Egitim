---
title: "2. Dakikayı Saate Çevir"
---

# 2. Dakikayı Saate Çevir

<span class="zorluk zorluk--kolay">Kolay</span> <span class="konu-etiketi">3.2 Matematiksel Operatörler</span>

Bir filmin süresi dakika olarak verilmiş; biz bunu **saat ve dakika** olarak göstermek istiyoruz.

Sana `dakika` adında bir değişken hazır olarak veriliyor. Bunun kaç tam saat ettiğini ve geriye kaç dakika kaldığını bul, ikisini **aralarında bir boşlukla** ekrana yazdır.

`print(saat, kalan)` yazarsan Python iki değerin arasına kendiliğinden boşluk koyar.

**Örnek 1:**

```text
Girdi:  dakika = 135
Çıktı:  2 15
```

135 dakika = 2 saat (120 dakika) + 15 dakika.

**Örnek 2:**

```text
Girdi:  dakika = 45
Çıktı:  0 45
```

**Örnek 3:**

```text
Girdi:  dakika = 60
Çıktı:  1 0
```

**Kısıtlar:**

- `0 <= dakika <= 10 000`

??? tip "İpucu"
    `//` (tam bölme) kaç tane tam saat olduğunu, `%` (mod) ise geriye kalan dakikayı verir. 1 saat = 60 dakika.

<div class="kod-sorusu" data-id="ornek2-2-v3">
<script type="application/json">{"baslangic": "# dakika değişkeni sana hazır olarak verilir; ona kendin değer atama.\n# Kodunu aşağıya yaz ve sonucu print() ile ekrana yazdır.\n\n", "degiskenler": ["dakika"], "testler": [{"girdi": "135", "gosterim": "dakika = 135", "beklenen": "2 15", "ornek": true}, {"girdi": "45", "gosterim": "dakika = 45", "beklenen": "0 45", "ornek": true}, {"girdi": "60", "gosterim": "dakika = 60", "beklenen": "1 0", "ornek": true}, {"girdi": "0", "gosterim": "dakika = 0", "beklenen": "0 0", "ornek": false}, {"girdi": "59", "gosterim": "dakika = 59", "beklenen": "0 59", "ornek": false}, {"girdi": "61", "gosterim": "dakika = 61", "beklenen": "1 1", "ornek": false}, {"girdi": "150", "gosterim": "dakika = 150", "beklenen": "2 30", "ornek": false}, {"girdi": "600", "gosterim": "dakika = 600", "beklenen": "10 0", "ornek": false}, {"girdi": "1439", "gosterim": "dakika = 1439", "beklenen": "23 59", "ornek": false}]}</script>
</div>

??? success "Çözümü ve açıklamasını göster"
    ```python
    saat = dakika // 60
    kalan = dakika % 60
    print(saat, kalan)
    ```

    **Adım adım:**

    1. `saat = dakika // 60` → `//` operatörü bölmenin **sadece tam kısmını** verir. Kaç tane tam 60 dakika olduğunu, yani kaç saat ettiğini buluruz.
    2. `kalan = dakika % 60` → `%` operatörü bölmeden **kalanı** verir. Saatlere ayrıldıktan sonra artan dakikayı buluruz.
    3. `print(saat, kalan)` → İki değeri aralarında boşlukla yazar.

    **Örnek üzerinden (dakika = 135):**

    ```text
    135 // 60  =  2     (60, 135'in içinde 2 kez tam olarak var)
    135 %  60  =  15    (2 × 60 = 120; 135 - 120 = 15 kalır)
    ekrana:    2 15
    ```

    **Sık yapılan hatalar:**

    - `dakika / 60` kullanmak → Normal bölme ondalıklı sonuç verir: `135 / 60 = 2.25`. Biz tam saati istiyoruz, bu yüzden `//` kullanılmalı.
    - `print(saat, ":", kalan)` → Ekrana `2 : 15` yazar; beklenen çıktı `2 15`.
