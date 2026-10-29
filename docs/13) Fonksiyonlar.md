Fonksiyonlar; belirli bir görevi yerine getirmek üzere gruplanmış, yeniden kullanılabilir (**reusable**), bağımsız kod bloklarıdır. Kod tekrarını önler, okunabilirliği artırır ve programı modüler hale getirir.

- `def` anahtar kelimesi ile tanımlanır.
    
- Yalnızca açıkça çağrıldıklarında (_invoked/called_) çalışırlar.
    
- Bir dönüş değeri belirtilmemişse varsayılan olarak **`None`** döndürürler.
    

## 1. Temel Fonksiyon Tanımlama ve Çağırma

```Python
# Fonksiyon tanımlama
def selam_ver():
    print("Sisteme hoş geldiniz.")

# Fonksiyonu çağırma (İstenilen sayıda çağrılabilir)
selam_ver()
selam_ver()
```

### `return` İfadesi ve `pass` Yer Tutucusu

- **`return`:** Fonksiyonun çalışmasını sonlandırır ve üretilen veriyi çağıran satıra geri gönderir. Birden fazla değer döndürülürse Python bunları bir **`tuple`** olarak paketler.
    
- **`pass`:** Gövdesi henüz yazılmamış fonksiyonlarda sözdizimi hatası almamak için kullanılır.
    

```Python
def deger_dondur():
    return "İşlem Başarılı"

mesaj = deger_dondur()
print(mesaj)  # "İşlem Başarılı"

# Çoklu değer döndürme (Tuple Unpacking)
def koordinat_al():
    return 100, 200  # (100, 200)

x, y = koordinat_al()
```

## 2. Parametre ve Argüman Mantığı

- **Parametre:** Fonksiyon tanımlanırken parantez içinde belirtilen değişken taslağıdır (_placeholder_).
    
- **Argüman:** Fonksiyon çağrılırken parametrelere gönderilen gerçek veridir.


```Python
def kare_al(sayi):  # sayi -> Parametre
    return sayi ** 2

sonuc = kare_al(8)  # 8 -> Argüman
```

### Konumsal (Positional) ve Anahtar Kelime (Keyword) Argümanları

```Python
def sunucu_baglan(host, port):
    print(f"Bağlantı kuruluyor: {host}:{port}")

# 1. Konumsal Argüman (Sıra önemlidir):
sunucu_baglan("127.0.0.1", 8080)

# 2. Anahtar Kelime Argümanı (Sıra önemsizdir):
sunucu_baglan(port=8080, host="127.0.0.1")

# Karışık kullanımda: Konumsal argümanlar daima anahtar kelimelerden ÖNCE gelmelidir!
sunucu_baglan("127.0.0.1", port=8080)
```

## 3. Varsayılan Parametreler ve Tehlikeli Varsayılan Değer Tuzağı

Parametrelere varsayılan bir değer atanabilir. Değer verilmezse bu varsayılan kullanılır:

```Python
def baglanti_ayarla(zaman_asimi=30):
    print(f"Zaman aşımı süresi: {zaman_asimi} sn")

baglanti_ayarla(60)  # 60 sn
baglanti_ayarla()    # 30 sn
```

> **Kritik Hata Tuzağı (Mutable Default Argument):**
> 
> Varsayılan değer olarak **asla** değiştirilebilir bir nesne (`list`, `dict`) tanımlanmamalıdır. Bu nesne fonksiyon tanımlandığında yalnızca bir kez oluşturulur ve tüm çağrılarda ortak paylaşılır.

```Python
# HATALI KULLANIM:
def eleman_ekle(oge, liste=[]):
	liste.append(oge)
	return liste

# DOĞRU VE STANDART KULLANIM:
def eleman_ekle(oge, liste=None):
	if liste is None:
		liste = []
	liste.append(oge)
	return liste
```

## 4. Özel Parametre Belirteçleri: Sadece Konumsal (`/`) ve Sadece Anahtar Kelime (`*`)

- **`/` (Slash):** Solundaki tüm parametrelerin **yalnızca konumsal** olarak girilmesini zorunlu kılar.
    
- **`*` (Yıldız):** Sağındaki tüm parametrelerin **yalnızca anahtar kelime** olarak girilmesini zorunlu kılar.
    

```Python
def veri_isle(konum_a, konum_b, /, standart, *, anahtar_x, anahtar_y):
    return konum_a + konum_b + standart + anahtar_x + anahtar_y

# Doğru çağrı:
sonuc = veri_isle(1, 2, 3, anahtar_x=4, anahtar_y=5)

# Hatalı çağrılar:
# veri_isle(konum_a=1, 2, 3, anahtar_x=4, anahtar_y=5)  # HATA! konum_a anahtar olamaz
# veri_isle(1, 2, 3, 4, 5)                             # HATA! anahtar_x ve y anahtar olmalıdır
```

## 5. Değişken Sayıda Argüman Alma: `*args` ve `**kwargs`

Fonksiyona kaç adet argüman gönderileceği önceden bilinmiyorsa kullanılır.

- **`*args` (Arbitrary Positional Arguments):** Fazladan gelen tüm konumsal argümanları bir **`tuple`** olarak toplar.
    
- **`**kwargs` (Arbitrary Keyword Arguments):** Fazladan gelen tüm anahtar-değer çiftlerini bir **`dict`** olarak toplar.
    

```Python
def kayit_ekle(baslik, *args, **kwargs):
    print("Başlık:", baslik)
    print("Konumsal Argümanlar (Tuple):", args)
    print("Anahtar Argümanlar (Dict):", kwargs)

kayit_ekle("Sistem Günlüğü", 100, 200, 300, durum="Aktif", seviye="Kritik")
```

### Parametre Sıralama Kuralı

Bir fonksiyon imzasında parametreler şu sırayı takip etmelidir:

$$\text{Standart Parametreler} \rightarrow \text{Varsayılan Değerliler} \rightarrow \text{*args} \rightarrow \text{Yalnızca Anahtar Parametreler} \rightarrow \text{**kwargs}$$

## 6. Lambda (Anonim) Fonksiyonlar

Tek satırlık, isimsiz ve hızlıca tanımlanıp atılabilen fonksiyonlardır. `lambda argümanlar: ifade` sözdizimiyle yazılır. Çok satırlı kod veya blok içeremez.


```Python
kare = lambda x: x ** 2
print(kare(6))  # 36

# Lambda ile Veri Yapılarını Sıralama:
noktalar = [("A", 15), ("B", 5), ("C", 20)]
noktalar.sort(key=lambda oge: oge[1])
print(noktalar)  # [('B', 5), ('A', 15), ('C', 20)]

# map() ve filter() ile Kullanım:
sayilar = [1, 2, 3, 4, 5, 6]
ciftler = list(filter(lambda x: x % 2 == 0, sayilar))       # [2, 4, 6]
kareler = list(map(lambda x: x ** 2, sayilar))              # [1, 4, 9, 16, 25, 36]
```

## 7. Dekoratörler (Decorators)

Dekoratörler, mevcut bir fonksiyonun kaynak kodunu değiştirmeden ona dinamik olarak ek davranışlar kazandıran sarmalayıcı (_wrapper_) fonksiyonlardır. `@dekorator_adi` sözdizimi ile uygulanır.

```Python
import time
from functools import wraps

def sure_olcer(func):
    @wraps(func)  # Orijinal fonksiyonun __name__ ve docstring bilgilerini korur
    def wrapper(*args, **kwargs):
        baslangic = time.time()
        sonuc = func(*args, **kwargs)
        bitis = time.time()
        print(f"[{func.__name__}] fonksiyonu {bitis - baslangic:.6f} saniyede tamamlandı.")
        return sonuc
    return wrapper

@sure_olcer
def agir_islem():
    toplam = sum(range(1000000))
    return toplam

agir_islem()
```

## 8. Özyineleme (Recursion)

Bir fonksiyonun belirli bir amaca ulaşmak için **kendi kendini doğrudan çağırmasıdır**.

Her özyinelemeli fonksiyonda iki temel blok bulunmalıdır:

1. **Temel Durum (Base Case):** Özyinelemeyi durduran koşul (Aksi halde `RecursionError` / Stack Overflow hatası oluşur).
    
2. **Özyinelemeli Durum (Recursive Case):** Problemi küçülterek fonksiyonun kendini tekrar çağırdığı adım.
    

```Python
def faktoriyel(n):
    # Temel durum (Base Case)
    if n <= 1:
        return 1
    # Özyinelemeli durum (Recursive Case)
    return n * faktoriyel(n - 1)

print(faktoriyel(5))  # 120
```

## 9. Jeneratörler (Generators) ve `yield`

Jeneratörler, tüm veri kümesini bellekte tek seferde oluşturmak yerine, değerleri **ihtiyaç duyuldukça adım adım (lazy evaluation)** üreten özel fonksiyonlardır.

- `return` yerine **`yield`** kullanılır.
    
- Fonksiyon `yield` satırına geldiğinde o anki durumunu (değişkenler, sayaçlar) dondurur ve değeri döner.
    
- Bir sonraki çağrıda (`next()` veya döngü adımı) dondurulduğu yerden devam eder.
    
- Bellek tüketimini minimuma indirir.
    

```Python
def buyuk_aralik(limit):
    sayac = 0
    while sayac < limit:
        yield sayac
        sayac += 1

# Manuel ilerleme
gen = buyuk_aralik(3)
print(next(gen))  # 0
print(next(gen))  # 1
print(next(gen))  # 2
# print(next(gen)) # StopIteration hatası fırlatır

# Jeneratör İfadesi (Generator Expression)
kareler_gen = (x ** 2 for x in range(1000000))  # Bellekte yer kaplamaz, anlık üretir
```