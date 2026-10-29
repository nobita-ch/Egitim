Python 3.10 sürümüyle birlikte eklenen **`match-case`** yapısı (Yapısal Örüntü Eşleme / _Structural Pattern Matching_), karmaşık `if-elif-else` zincirlerini daha okunaklı ve performanslı bir şekilde yönetmek için kullanılır.

- Diğer dillerdeki `switch-case` yapısına benzer ancak çok daha gelişmiştir.
    
- `match` ifadesi yalnızca **bir kez** değerlendirilir.
    
- Eşleşen `case` bloğu çalıştığı anda yapı otomatik olarak sonlanır (**`break` komutuna gerek yoktur**).
    

## 1. Temel Sözdizimi ve Varsayılan Durum (`case _`)

Eğer `case` bloklarından hiçbiri eşleşmezse devreye girmesi için alt çizgi (**`_`**) yani **joker (wildcard / default)** durum kullanılır:

```Python
gun = 4

match gun:
    case 6:
        print("Bugün Cumartesi")
    case 7:
        print("Bugün Pazar")
    case _:
        print("Hafta içi bir gün")

# Çıktı: Hafta içi bir gün
```


> **Kritik Kural:** `case _` durumu her zaman yapının **en son satırında** bulunmalıdır. Eğer başa veya araya yazılırsa her şeyi yakalayacağı için altındaki `case` blokları anlamsız kalır ve hata verir.

## 2. Çoklu Değer Eşleme (Boru `|` Operatörü)

Bir `case` bloğunun birden fazla değere karşılık gelmesi isteniyorsa, değerler arasına mantıksal VEYA anlamına gelen **`|`** (pipe) işareti konur:

```Python
komut = "start"

match komut:
    case "start" | "run" | "baslat":
        print("Sistem çalıştırılıyor...")
    case "stop" | "halt" | "durdur":
        print("Sistem durduruluyor...")
    case _:
        print("Geçersiz komut.")
```

## 3. Koşul Korumaları (Guards: `case ... if`)

Bir `case` durumuna ek bir mantıksal kontrol eklemek için `if` anahtar kelimesi kullanılır. Durum yalnızca **hem örüntü eşleştiğinde hem de `if` koşulu `True` olduğunda** çalışır:

```Python
ay = 5
gun = 4

match gun:
    case 1 | 2 | 3 | 4 | 5 if ay == 4:
        print("Nisan ayında bir hafta içi günü")
    case 1 | 2 | 3 | 4 | 5 if ay == 5:
        print("Mayıs ayında bir hafta içi günü")
    case _:
        print("Eşleşme bulunamadı")

# Çıktı: Mayıs ayında bir hafta içi günü
```

## 4. Yapısal Liste / Demet Eşleme (Pattern Matching)

`match-case` yapısının en güçlü yönü, koleksiyonların boyutuna ve içeriğine göre değişkenleri otomatik ayırabilmesidir:

```Python
nokta = (10, 20)

match nokta:
    case (0, 0):
        print("Orijin noktasında")
    case (0, y):
        print(f"Y ekseni üzerinde, y = {y}")
    case (x, 0):
        print(f"X ekseni üzerinde, x = {x}")
    case (x, y):
        print(f"Koordinat düzleminde: ({x}, {y})")
    case _:
        print("Geçersiz koordinat verisi")

# Çıktı: Koordinat düzleminde: (10, 20)
```

## 5. `if-elif-else` ile `match-case` Karşılaştırması

|**Özellik**|**if-elif-else**|**match-case**|
|---|---|---|
|**Python Sürümü**|Tüm Python sürümleri|Python 3.10 ve üzeri|
|**Kullanım Alanı**|Genel mantıksal ve karmaşık aralık kontrolleri (`x > 10 and y < 5`)|Sabit değerler, veri yapısı eşlemeleri ve komut ayrıştırmaları|
|**Okunabilirlik**|Çok fazla `elif` olduğunda karmaşıklaşabilir|Çoklu durumlarda daha temiz ve modülerdir|
|**Break İhtiyacı**|Gerekmez|Gerekmez (Otomatik sonlanır)|