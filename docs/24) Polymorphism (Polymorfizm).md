Çok Biçimlilik (Polymorphism), Yunanca kökenli bir kelime olup **"birçok form/biçim"** anlamına gelir. Programlamada; farklı sınıflara ait nesnelerin, **aynı isimdeki metot veya arayüz üzerinden** kendilerine özgü davranışlar sergileyebilme yeteneğidir.

## 1. Fonksiyon ve Operatör Polimorfizmi

Polimorfizm yalnızca sınıflarla sınırlı değildir; Python'ın kendi gömülü fonksiyonlarında ve operatörlerinde de bulunur:

### Yerleşik Fonksiyonlarda:

`len()` fonksiyonu; bir metin (`str`), liste (`list`) veya sözlük (`dict`) üzerinde çalıştığında veri yapısına göre arka planda o nesnenin `__len__()` metodunu çağırarak uzunluğu hesaplar:


```Python
print(len("Python"))       # 6 (Karakter sayısı)
print(len([10, 20, 30]))   # 3 (Eleman sayısı)
print(len({"a": 1, "b": 2})) # 2 (Anahtar sayısı)
```

### Operatörlerde (Operator Overloading):

`+` operatörü sayılarda aritmetik toplama yaparken, metin ve listelerde birleştirme yapar:


```Python
print(10 + 20)           # 30 (Toplama)
print("Veri " + "Madenciliği") # "Veri Madenciliği" (Metin birleştirme)
print([1, 2] + [3, 4])   # [1, 2, 3, 4] (Liste birleştirme)
```

## 2. Kalıtım Temelli Polimorfizm (Class & Inheritance Polymorphism)

Üst sınıfta tanımlanan bir metot, alt sınıflar tarafından ezilerek (_override edilerek_) her sınıfın kendi ihtiyacına göre yeniden şekillendirilir:


```Python
class Arac:
    def __init__(self, marka, model):
        self.marka = marka
        self.model = model

    def hareket_et(self):
        print("Araç hareket ediyor.")

class Otomobil(Arac):
    def hareket_et(self):
        print("Karayolunda sürülüyor.")

class Tekne(Arac):
    def hareket_et(self):
        print("Denizde yüzüyor.")

class Ucak(Arac):
    def hareket_et(self):
        print("Havada uçuyor.")

# Farklı nesneler tek bir döngüde aynı metotla yönetilir:
filo = [Otomobil("Model-A", 2024), Tekne("Model-B", 2022), Ucak("Model-C", 2025)]

for arac in filo:
    print(f"{arac.marka} {arac.model} -> ", end="")
    arac.hareket_et()

# Çıktı:
# Model-A 2024 -> Karayolunda sürülüyor.
# Model-B 2022 -> Denizde yüzüyor.
# Model-C 2025 -> Havada uçuyor.
```

## 3. Bağımsız Sınıflarda Polimorfizm ve Ördek Tiplemesi (Duck Typing)

Python dinamik tipli bir dil olduğu için, nesnelerin aynı arayüzü paylaşması için **ortak bir üst sınıftan türemeleri şart değildir**. Tek gereken, nesnelerin aynı isimli metoda sahip olmasıdır.


```Python
class PDFRaporu:
    def disari_aktar(self):
        return "PDF formatında rapor üretildi."

class ExcelRaporu:
    def disari_aktar(self):
        return "Excel tablosu formatında rapor üretildi."

class JSONRaporu:
    def disari_aktar(self):
        return "JSON veri formatında rapor üretildi."

# Ortak bir fonksiyon, tipi ne olursa olsun 'disari_aktar' metoduna sahip her nesneyi kabul eder:
def rapor_uret(rapor_nesnesi):
    print(rapor_nesnesi.disari_aktar())

rapor_uret(PDFRaporu())
rapor_uret(ExcelRaporu())
rapor_uret(JSONRaporu())
```

## 4. Soyut Temel Sınıflar ile Arayüz Zorunluluğu (`abc.ABC`)

Büyük projelerde belirli metotların alt sınıflar tarafından tanımlanmasını **zorunlu kılmak** için Python'ın yerleşik `abc` (_Abstract Base Classes_) modülü kullanılır. Soyut sınıfın kendisinden doğrudan nesne türetilemez.


```Python
from abc import ABC, abstractmethod

class VeritabaniSurucusu(ABC):
    @abstractmethod
    def baglan(self):
        """Tüm alt sınıflar bu metodu tanımlamak ZORUNDADIR."""
        pass

class PostgreSQL(VeritabaniSurucusu):
    def baglan(self):
        print("PostgreSQL sunucusuna bağlandı.")

class SQLite(VeritabaniSurucusu):
    def baglan(self):
        print("SQLite yerel dosyasına bağlandı.")

# Alt sınıf soyut metodu tanımlamazsa nesne oluşturulurken hata fırlatılır:
# class MySQL(VeritabaniSurucusu):
#     pass
# db = MySQL()  # HATA: TypeError: Can't instantiate abstract class MySQL with abstract method baglan
```

## 5. Dunder Metotlar ile Özel Sınıflara Polimorfizm Kazandırma

Kendi yazdığınız sınıflara yerleşik Python operatörlerinin (`+`, `==`, `<`) çalışabilmesi için özel dunder metotlar ekleyebilirsiniz:


```Python
class Vektor:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    # '+' operatörü polimorfizmi
    def __add__(self, diger):
        return Vektor(self.x + diger.x, self.y + diger.y)

    # '==' operatörü polimorfizmi
    def __eq__(self, diger):
        return self.x == diger.x and self.y == diger.y

    def __repr__(self):
        return f"Vektor({self.x}, {self.y})"

v1 = Vektor(2, 4)
v2 = Vektor(3, 1)

print(v1 + v2)     # Vektor(5, 5)
print(v1 == v2)    # False
```