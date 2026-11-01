---
title: "2. Saniyeyi Saate Çevir"
---

# 2. Saniyeyi Saate Çevir

<span class="zorluk zorluk--kolay">Kolay</span> <span class="konu-etiketi">3.2 Matematiksel Operatörler</span>

Bir video oynatıcısı süreyi toplam saniye olarak tutuyor, ama ekranda **saat, dakika ve saniye** olarak göstermek istiyoruz.

Toplam `saniye` değerini alıp `(saat, dakika, saniye)` şeklinde üç tam sayı döndüren `zaman_cevir(saniye)` fonksiyonunu yaz.

Üç değeri birlikte döndürmek için `return saat, dakika, kalan` yazman yeterli.

**Örnek 1:**

```text
Girdi:  saniye = 3661
Çıktı:  (1, 1, 1)
```

3661 saniye = 1 saat (3600 sn) + 1 dakika (60 sn) + 1 saniye.

**Örnek 2:**

```text
Girdi:  saniye = 59
Çıktı:  (0, 0, 59)
```

**Örnek 3:**

```text
Girdi:  saniye = 7325
Çıktı:  (2, 2, 5)
```

7325 saniyenin 7200'ü 2 saat eder; kalan 125 saniye de 2 dakika 5 saniyedir.

**Kısıtlar:**

- `0 <= saniye <= 1 000 000`
- Saat değeri 24'ü geçebilir (gün hesabı yapılmaz).

??? tip "İpucu"
    Tam sayı bölmesi `//` kaç tane tam saat/dakika olduğunu, mod operatörü `%` ise geriye ne kaldığını verir. Örneğin `125 // 60` → `2`, `125 % 60` → `5`.

<div class="kod-sorusu" data-id="ornek2-2" data-fonksiyon="zaman_cevir">
<script type="application/json">{"baslangic": "def zaman_cevir(saniye):\n    # Kodunu buraya yaz\n    pass\n", "testler": [{"girdi": "3661", "gosterim": "saniye = 3661", "beklenen": "(1, 1, 1)", "ornek": true}, {"girdi": "59", "gosterim": "saniye = 59", "beklenen": "(0, 0, 59)", "ornek": true}, {"girdi": "7325", "gosterim": "saniye = 7325", "beklenen": "(2, 2, 5)", "ornek": true}, {"girdi": "0", "gosterim": "saniye = 0", "beklenen": "(0, 0, 0)", "ornek": false}, {"girdi": "60", "gosterim": "saniye = 60", "beklenen": "(0, 1, 0)", "ornek": false}, {"girdi": "3600", "gosterim": "saniye = 3600", "beklenen": "(1, 0, 0)", "ornek": false}, {"girdi": "86399", "gosterim": "saniye = 86399", "beklenen": "(23, 59, 59)", "ornek": false}, {"girdi": "90061", "gosterim": "saniye = 90061", "beklenen": "(25, 1, 1)", "ornek": false}, {"girdi": "1000000", "gosterim": "saniye = 1000000", "beklenen": "(277, 46, 40)", "ornek": false}]}</script>
</div>

??? success "Çözümü göster"
    ```python
    def zaman_cevir(saniye):
        saat = saniye // 3600
        dakika = (saniye % 3600) // 60
        kalan = saniye % 60
        return saat, dakika, kalan
    ```

    Önce 3600'e tam bölerek saati buluruz. Saatten artan kısmı (`saniye % 3600`) 60'a tam bölünce dakika çıkar. `saniye % 60` ise en sondaki saniyeleri verir.
