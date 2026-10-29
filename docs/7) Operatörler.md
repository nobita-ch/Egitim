Operatörler; değişkenler, sabitler ve nesneler üzerinde matematiksel, mantıksal, karşılaştırma veya bit düzeyinde işlemler yürütmek için kullanılan özel sembollerdir.

## 1. Aritmetik Operatörler

Matematiksel hesaplamaları gerçekleştirmek için kullanılır.

|**Operatör**|**İsim**|**Açıklama**|**Örnek (a = 10, b = 3)**|**Sonuç**|
|---|---|---|---|---|
|`+`|Toplama|İki değeri toplar|`a + b`|`13`|
|`-`|Çıkarma|Sol değerden sağ değeri çıkarır|`a - b`|`7`|
|`*`|Çarpma|İki değeri çarpar|`a * b`|`30`|
|`/`|Ondalıklı Bölme|Sonucu her zaman `float` üretir|`a / b`|`3.3333...`|
|`//`|Tam Sayı Bölmesi|Bölümün tam kısmını alır (`floor division`)|`a // b`|`3`|
|`%`|Modül (Kalan)|Bölme işleminden kalanı döner|`a % b`|`1`|
|`**`|Üs Alma|Sol sayının sağ sayı kadar üssünü alır ($a^b$)|`a ** b`|`1000`|



```Python
x = 17
y = 5

print(x / y)   # 3.4 (float)
print(x // y)  # 3 (int - taban değeri)
print(x % y)   # 2 (kalan)
print(2 ** 4)  # 16
```

## 2. Atama Operatörleri

Bir değişkene değer atamak veya aritmetik/bitsel işlemlerle birlikte mevcut değerini güncellemek için kullanılır.

|**Operatör**|**Örnek**|**Açılımı / Karşılığı**|
|---|---|---|
|`=`|`x = 5`|`x = 5`|
|`+=`|`x += 3`|`x = x + 3`|
|`-=`|`x -= 3`|`x = x - 3`|
|`*=`|`x *= 3`|`x = x * 3`|
|`/=`|`x /= 3`|`x = x / 3`|
|`//=`|`x //= 3`|`x = x // 3`|
|`%=`|`x %= 3`|`x = x % 3`|
|`**=`|`x **= 3`|`x = x ** 3`|
|`&=`|`x &= 3`|`x = x & 3` (Bitsel AND Atama)|
|`\|=`|`x \|= 3`|`x = x \| 3` (Bitsel OR Atama)|
|`^=`|`x ^= 3`|`x = x ^ 3` (Bitsel XOR Atama)|
|`>>=`|`x >>= 3`|`x = x >> 3` (Sağa Kaydırma Atama)|
|`<<=`|`x <<= 3`|`x = x << 3` (Sola Kaydırma Atama)|
|`:=`|`(x := 3)`|Walrus (Mors) Operatörü: Atama yapar ve değeri döndürür|

### Mors / Walrus Operatörü (`:=`)

Python 3.8 ile eklenen bu operatör, bir ifade değerlendirilirken aynı anda değişkene atama yapılmasına olanak tanır.



```Python
# Standart Yöntem:
veri = [10, 20, 30, 40, 50]
eleman_sayisi = len(veri)
if eleman_sayisi > 3:
    print(f"Liste sınırı aştı: {eleman_sayisi} eleman.")

# Walrus Kullanımı (Atama ve koşul tek satırda):
if (eleman_sayisi := len(veri)) > 3:
    print(f"Liste sınırı aştı: {eleman_sayisi} eleman.")
```

## 3. Karşılaştırma Operatörleri

İki değeri karşılaştırır ve sonuç olarak mantıksal bir Boole (`True` veya `False`) değeri üretir.

|**Operatör**|**Anlamı**|**Örnek (x = 5, y = 10)**|**Sonuç**|
|---|---|---|---|
|`==`|Eşittir|`x == y`|`False`|
|`!=`|Eşit Değildir|`x != y`|`True`|
|`>`|Büyüktür|`x > y`|`False`|
|`<`|Küçüktür|`x < y`|`True`|
|`>=`|Büyük veya Eşittir|`x >= 5`|`True`|
|`<=`|Küçük veya Eşittir|`y <= 10`|`True`|

## 4. Mantıksal Operatörler ve Kısa Devre Mantığı

Koşullu ifadeleri birleştirmek için kullanılır.

|**Operatör**|**Açıklama**|**Örnek**|
|---|---|---|
|`and`|Her iki koşul da `True` ise `True` döner|`(x > 0) and (x < 10)`|
|`or`|Koşullardan en az biri `True` ise `True` döner|`(x < 0) or (x > 10)`|
|`not`|Mantıksal sonucu tersine çevirir (`True` $\rightarrow$ `False`, `False` $\rightarrow$ `True`)|`not(x > 0)`|



```Python
durum = True
hata_kodu = 0

if durum and not (hata_kodu != 0):
    print("Sistem kararlı çalışıyor.")
```

> **Kısa Devre (Short-Circuit) Değerlendirmesi:**
> 
> - `and` işleminde ilk ifade `False` ise, Python ikinci ifadeye hiç bakmaz ve doğrudan `False` döner.
>     
> - `or` işleminde ilk ifade `True` ise, Python ikinci ifadeyi çalıştırmadan doğrudan `True` döner.
>     

## 5. Kimlik (Identity) Operatörleri: `is` ve `is not`

Kimlik operatörleri, iki değişkenin **bellekte aynı nesneye işaret edip etmediğini** (`id()` kontrolü) doğrulamak için kullanılır. Değer eşitliği (`==`) ile karıştırılmamalıdır.

|**Operatör**|**Açıklama**|**Örnek**|
|---|---|---|
|`is`|Değişkenler bellekte aynı nesneyi gösteriyorsa `True`|`x is y`|
|`is not`|Değişkenler bellekte farklı nesneleri gösteriyorsa `True`|`x is not y`|



```Python
liste_a = [1, 2, 3]
liste_b = [1, 2, 3]
liste_c = liste_a

print(liste_a == liste_b)  # True  (Değerleri aynı)
print(liste_a is liste_b)  # False (Bellekteki adresleri farklı iki ayrı nesne)
print(liste_a is liste_c)  # True  (Aynı bellek adresine referans veriyorlar)

# Bellek adres kontrolü:
print(id(liste_a) == id(liste_c))  # True
```

> **Önemli Standart:** Python'da `None` kontrolü yapılırken `== None` yerine her zaman `is None` veya `is not None` kullanımı tercih edilir.

## 6. Üyelik (Membership) Operatörleri: `in` ve `not in`

Bir değerin dizi, liste, demet, metin veya küme gibi yinelenebilir bir koleksiyonun içinde bulunup bulunmadığını test eder.

|**Operatör**|**Açıklama**|**Örnek**|
|---|---|---|
|`in`|Değer koleksiyonun içindeyse `True`|`"a" in "ankara"`|
|`not in`|Değer koleksiyonun içinde değilse `True`|`10 not in [1, 2, 3]`|



```Python
roller = ["yönetici", "editör", "analist"]
mevcut_rol = "ziyaretçi"

if mevcut_rol not in roller:
    print("Erişim yetkisi yetersiz.")
```

## 7. Bitsel (Bitwise) Operatörler

Tam sayıları ikili (binary) bit düzeyinde işlemek için kullanılır. Düşük seviyeli sistem programlama, maskeleme, kriptografi ve performans optimizasyonlarında tercih edilir.

|**Operatör**|**İsim**|**Açıklama**|**Örnek (a = 5 (0101), b = 3 (0011))**|**Sonuç**|
|---|---|---|---|---|
|`&`|AND (VE)|Her iki bit de 1 ise sonuç 1 olur|`a & b`|`1` (0001)|
|`\|`|OR (VEYA)|İki bitten en az biri 1 ise sonuç 1 olur|`a \| b`|`7` (0111)|
|`^`|XOR (Özel Veya)|Bitler birbirinden farklıysa 1 olur|`a ^ b`|`6` (0110)|
|`~`|NOT (Tersleme)|Tüm bitleri tersine çevirir (İkiye tümleyen: `-(x + 1)`)|`~a`|`-6`|
|`<<`|Sola Kaydırma|Bitleri $n$ adım sola kaydırır ($a \times 2^n$)|`a << 1`|`10` (1010)|
|`>>`|Sağa Kaydırma|Bitleri $n$ adım sağa kaydırır ($a // 2^n$)|`a >> 1`|`2` (0010)|

## 8. Operatör Önceliği Tablosu

Birden fazla operatörün bulunduğu ifadelerde işlemler bu öncelik sırasına göre icra edilir. Eşit öncelikli işlemlerde sıra soldan sağa doğrudur (Üs alma `**` hariç; üs alma sağdan sola değerlendirilir).

|**Öncelik Seviyesi**|**Operatör(ler)**|**İşlem Türü**|
|---|---|---|
|**1 (En Yüksek)**|`()`|Parantez İçi Gruplamalar|
|**2**|`**`|Üs Alma (_Exponentiation_)|
|**3**|`+x`, `-x`, `~x`|Tekli (Unary) Artı/Eksi ve Bitsel NOT|
|**4**|`*`, `/`, `//`, `%`|Çarpma, Bölme, Taban Bölme, Modül|
|**5**|`+`, `-`|Toplama ve Çıkarma|
|**6**|`<<`, `>>`|Bit Düzeyinde Kaydırmalar|
|**7**|`&`|Bit Düzeyinde AND|
|**8**|`^`|Bit Düzeyinde XOR|
|**9**|`\|`|Bit Düzeyinde OR|
|**10**|`==`, `!=`, `>`, `>=`, `<`, `<=`, `is`, `is not`, `in`, `not in`|Karşılaştırma, Kimlik ve Üyelik Kontrolleri|
|**11**|`not`|Mantıksal NOT|
|**12**|`and`|Mantıksal AND|
|**13 (En Düşük)**|`or`|Mantıksal OR|