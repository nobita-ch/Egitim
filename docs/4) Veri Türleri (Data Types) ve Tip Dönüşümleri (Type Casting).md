Python'da her değer bir nesnedir ve her nesnenin bellekte kapladığı alanı ile üzerinde yapılabilecek işlemleri belirleyen bir **veri türü** vardır.

## 1. Yerleşik Veri Türleri Kategorileri

|**Kategori**|**Veri Türü (Keyword)**|**Tanım / Özellik**|**Değiştirilebilirlik (Mutability)**|
|---|---|---|---|
|**Metin Türü**|`str`|Metinsel karakter dizileri|Değiştirilemez (_Immutable_)|
|**Sayısal Türler**|`int`, `float`, `complex`|Tam sayılar, ondalıklı sayılar ve karmaşık sayılar|Değiştirilemez (_Immutable_)|
|**Sıra (Sequence) Türleri**|`list`, `tuple`, `range`|Sıralı eleman koleksiyonları|`list` (Mutable), `tuple`/`range` (Immutable)|
|**Eşleme (Mapping) Türü**|`dict`|Anahtar-Değer (_Key-Value_) çiftleri|Değiştirilebilir (_Mutable_)|
|**Küme (Set) Türleri**|`set`, `frozenset`|Eşsiz (benzersiz) ve sırasız elemanlar|`set` (Mutable), `frozenset` (Immutable)|
|**Boole Türü**|`bool`|Mantıksal doğruluk değerleri (`True`, `False`)|Değiştirilemez (_Immutable_)|
|**İkili (Binary) Türler**|`bytes`, `bytearray`, `memoryview`|Bayt tabanlı ham veri yapıları|`bytearray` (Mutable), `bytes` (Immutable)|
|**Boşluk Türü**|`NoneType`|Değerin veya nesnenin yokluğunu simgeler (`None`)|Değiştirilemez (_Immutable_)|

## 2. Doğrudan Değer Atama ile Tür Belirleme

Bir değişkene değer atandığı anda Python dinamik olarak o değişkenin türünü belirler. Tür kontrolü `type()` fonksiyonu ile yapılır:



```Python
# Metin (str)
metin = "Python Programlama"

# Sayısal Türler
tam_sayi = 42              # int
ondalikli_sayi = 3.14      # float
karmasik_sayi = 2 + 3j     # complex (j sanal birimi temsil eder)

# Sıra Türleri
liste = ["veri_a", "veri_b", "veri_c"]  # list
demet = ("veri_a", "veri_b", "veri_c")  # tuple
sayi_araligi = range(10)                 # range

# Eşleme Türü
kullanici_bilgisi = {"kod": 101, "durum": "aktif"}  # dict

# Küme Türleri
benzersiz_kume = {"veri_a", "veri_b", "veri_c"}      # set
dondurulmus_kume = frozenset({"veri_a", "veri_b"})  # frozenset

# Boole Türü
sistem_aktif_mi = True  # bool

# İkili Türler
ham_bayt = b"Veri"                     # bytes
bayt_dizisi = bytearray(5)             # bytearray
bellek_gorunumu = memoryview(bytes(5))  # memoryview

# Boşluk Türü
sonuc = None  # NoneType
```

## 3. Kurucu (Constructor) Fonksiyonlar ile Tür Belirleme

Bir değişkenin türünü doğrudan kurucu fonksiyonları çağırarak da açıkça tanımlayabilirsiniz:



```Python
metin = str("Python")
sayi_tam = int(50)
sayi_ondalik = float(12.5)
sayi_karmasik = complex(1j)

liste = list(("veri_1", "veri_2", "veri_3"))
demet = tuple(("veri_1", "veri_2", "veri_3"))
aralik = range(5)

sozluk = dict(kod=200, durum="basarili")
kume = set(("veri_1", "veri_2"))
sabit_kume = frozenset(("veri_1", "veri_2"))

mantiksal = bool(1)
bayt_verisi = bytes(5)
bayt_dizi_verisi = bytearray(5)
bellek_nesnesi = memoryview(bytes(5))
```

## 4. Tip Dönüşümleri (Type Casting)

Python'da değişkenlerin türü yerleşik dönüşüm fonksiyonları (`int()`, `float()`, `str()`, `bool()`, `complex()`) ile değiştirilebilir.

### Sayısal Tür Dönüşümleri



```Python
x = 10     # int
y = 4.85   # float
z = 5j     # complex

# int -> float
a = float(x)  # 10.0

# float -> int (Ondalık kısmı tamamen atar, yuvarlama yapmaz)
b = int(y)    # 4

# int -> complex
c = complex(x)  # (10+0j)
```

> **Kritik Kural:** `complex` (karmaşık) bir sayı doğrudan `int()` veya `float()` türüne dönüştürülemez. Bu işlem `TypeError` hatası verir.

### Metin (String) ve Sayı Dönüşümleri

- `int()`: Sayı içeren bir metni tam sayıya çevirir. Metin tam sayı formatında değilse (örn: `"12.5"` veya `"abc"`) `ValueError` fırlatır.
    
- `float()`: Sayısal metinleri veya tam sayıları ondalıklı sayıya çevirir.
    
- `str()`: Tüm veri türlerini metin formatına çevirir.
    



```Python
sayi1 = int("150")       # 150 (int)
sayi2 = float("12.75")   # 12.75 (float)
sayi3 = float("10")      # 10.0 (float)

metin1 = str(45)         # "45" (str)
metin2 = str(3.14)       # "3.14" (str)
metin3 = str([1, 2, 3])  # "[1, 2, 3]" (str)
```

## 5. Boole (Mantıksal) Tip Dönüşümleri: Truthy ve Falsy Değerler

`bool()` fonksiyonu, verilen değerin mantıksal karşılığını döndürür.

### Falsy (Mantıksal Olarak `False` Dönen) Değerler

Aşağıdaki değerler her zaman `False` sonucunu üretir:

- `False` sabiti
    
- `None` sabiti
    
- Sayısal sıfır değerleri: `0`, `0.0`, `0j`
    
- Boş koleksiyon ve diziler: `""` (boş metin), `[]` (boş liste), `()` (boş demet), `{}` (boş sözlük), `set()` (boş küme), `range(0)`
    



```Python
print(bool(0))       # False
print(bool(""))      # False
print(bool([]))      # False
print(bool(None))    # False
```

### Truthy (Mantıksal Olarak `True` Dönen) Değerler

Falsy kategorisinde olmayan tüm dolu veriler ve sıfır dışındaki tüm sayılar `True` döner:



```Python
print(bool(1))            # True
print(bool(-5))           # True
print(bool("Metin"))      # True
print(bool([10, 20]))     # True
```