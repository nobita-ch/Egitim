Döngüler, belirli bir kod bloğunu bir koşula bağlı olarak veya belirli bir veri grubu üzerinde tekrar tekrar çalıştırmak için kullanılır.

## 1. `while` Döngüsü

`while` döngüsü, belirtilen **koşul `True` (doğru) olduğu sürece** içerisindeki kod bloğunu çalıştırmaya devam eder.

### Temel Yapı ve Sayaç Mantığı

`while` döngülerinde genellikle bir sayaç (index/counter) değişkeni tanımlanır ve döngü içinde bu sayaç güncellenir:

Python

```Python
i = 1  
while i < 6:  
    print(i)  
    i += 1  # Sayaç artırılmazsa döngü sonsuza kadar çalışır!

# Çıktı:
# 1
# 2
# 3
# 4
# 5
```

### Sonsuz Döngü (Infinite Loop)

Eğer döngü koşulu hiçbir zaman `False` durumuna geçmezse veya döngü bilinçli olarak `while True:` şeklinde başlatılırsa sonsuz döngü oluşur. Bu tür döngüler genellikle içerideki bir `if` koşulu ve `break` komutuyla sonlandırılır:

Python

```python
sayac = 0
while True:
    print("Çalışıyor:", sayac)
    sayac += 1
    if sayac == 3:
        break  # Koşul sağlandığında döngüyü zorla durdurur
```

## 2. `for` Döngüsü

Python'daki `for` döngüsü; bir dizi, koleksiyon veya yinelenebilir nesne (**liste, demet/tuple, sözlük/dict, küme/set veya metin/string**) üzerindeki her bir elemanı sırayla gezmek (iterate etmek) için kullanılır.

- C, Java veya C# dillerindeki geleneksel indeks tabanlı `for (int i=0; i<n; i++)` yapısından farklıdır; doğrudan nesne tabanlı dillerdeki _foreach_ veya yineleyici (_iterator_) yapısına benzer.
    
- Önceden bir sayaç değişkeni tanımlamayı veya indeks üzerinden manuel ilerlemeyi gerektirmez.
    

### Veri Yapıları Üzerinde Gezinme

**Liste üzerinde gezinme:**

Python

```python
fruits = ["apple", "banana", "cherry"]  
for x in fruits:  
    print(x)

# Çıktı:
# apple  
# banana  
# cherry 
```

**Metin (String) karakterleri üzerinde gezinme:**

Python

```python
for harf in "banana":  
    print(harf)
  
# Çıktı: 
# b  
# a  
# n  
# a  
# n  
# a
```

## 3. `range()` Fonksiyonu

Bir kod bloğunu belirli bir sayıda çalıştırmak veya ardışık sayı dizileri üretmek için `range()` fonksiyonu kullanılır.

- `range(stop)`: 0'dan başlar, `stop` değerine kadar (belirtilen sayı hariç) 1'er artarak gider.
    
- `range(start, stop)`: `start` değerinden başlar, `stop` değerine kadar (hariç) 1'er artar.
    
- `range(start, stop, step)`: `start` değerinden başlar, `stop` değerine kadar `step` (adım) miktarı kadar artar/azalır.
    

Python

```python
# 0'dan 6'ya kadar (6 hariç)
for x in range(6):  
    print(x)
# Çıktı: 0, 1, 2, 3, 4, 5

# 2'den 10'a kadar 3'er artarak (10 hariç)
for x in range(2, 10, 3):
    print(x)
# Çıktı: 2, 5, 8

# Geriye doğru sayma (adım negatif verilebilir)
for x in range(5, 0, -1):
    print(x)
# Çıktı: 5, 4, 3, 2, 1
```

## 4. Döngü Kontrol İfadeleri: `break`, `continue` ve `pass`

### `break` İfadesi

Döngüyü koşulun bitmesini beklemeden **tamamen sonlandırır** ve döngü dışındaki ilk kod satırına geçer.

Python

```python
sayilar = [1, 2, 3, 4, 5]

for sayi in sayilar:
    if sayi == 4:
        break  # 4'e gelince döngüyü tamamen durdurur
    print(sayi)

# Çıktı: 1, 2, 3
```

### `continue` İfadesi

Döngünün **o anki adımını (iterasyonunu) atlar** ve döngünün bir sonraki adımına geçer. Döngü durmaz, sadece `continue` satırından sonraki kodlar o tur için çalıştırılmaz.

Python

```python
for sayi in range(1, 6):
    if sayi == 3:
        continue  # 3'ü atlar, yazdırmaz ve 4'ten devam eder
    print(sayi)

# Çıktı: 1, 2, 4, 5
```

### `pass` İfadesi

Python'da sözdizimi gereği boş bırakılamayan bloklarda (örneğin henüz kodunu yazmadığınız bir döngüde) hata almamak için **yer tutucu (placeholder)** olarak kullanılır. Hiçbir işlem yapmaz.

Python

```python
for x in [0, 1, 2]:
    pass  # Kod henüz yazılmadı, hata vermeden devam eder
```

## 5. Döngülerde `else` Bloğu

Hem `for` hem de `while` döngülerinde `else` bloğu kullanılabilir.

- **Kural:** `else` bloğu, döngü **`break` komutuyla kesilmeden normal bir şekilde sonuna kadar tamamlandığında** çalışır. Eğer döngü `break` ile erken sonlandırılırsa `else` bloğu **çalıştırılmaz**.
    

### `for...else` Kullanımı:

Python

```python
# Normal tamamlanan döngü (else çalışır):
for x in range(3):  
    print(x)  
else:  
    print("Döngü break olmadan başarıyla tamamlandı!")

# Çıktı:
# 0
# 1
# 2
# Döngü break olmadan başarıyla tamamlandı!
```

Python

```python
# break ile kesilen döngü (else ÇALIŞMAZ):
for x in range(6):  
    if x == 3:
        break  
    print(x)  
else:  
    print("Bu satır ekrana yazdırılmaz!")

# Çıktı:
# 0
# 1
# 2
```

### `while...else` Kullanımı:

Python

```python
i = 1  
while i < 4:  
    print(i)  
    i += 1  
else:  
    print("i artık 4'ten küçük değil (koşul False oldu).")

# Çıktı:
# 1
# 2
# 3
# i artık 4'ten küçük değil (koşul False oldu).
```

## 6. İç İçe Döngüler (Nested Loops)

Bir döngünün içine başka bir döngü yerleştirilebilir. Dıştaki döngünün **her bir adımı** için içteki döngü **baştan sona tamamen** çalışır.

Python

```python
renkler = ["kırmızı", "yeşil"]
meyveler = ["elma", "biber"]

for r in renkler:
    for m in meyveler:
        print(r, m)

# Çıktı:
# kırmızı elma
# kırmızı biber
# yeşil elma
# yeşil biber
```