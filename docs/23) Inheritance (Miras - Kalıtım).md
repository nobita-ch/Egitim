Kalıtım; bir sınıfın (alt sınıf), başka bir sınıfın (üst sınıf) tüm metotlarını, niteliklerini ve işlevselliğini devralarak yeniden kullanabilmesini veya genişletebilmesini sağlayan temel bir Nesne Yönelimli Programlama (OOP) prensibidir.

- **Üst Sınıf / Ebeveyn (Parent / Base Class):** Özellikleri miras alınan temel sınıftır.
    
- **Alt Sınıf / Çocuk (Child / Derived Class):** Üst sınıftan türetilen, üst sınıfın özelliklerine ek olarak yeni yetenekler kazanabilen sınıftır.
    

## 1. Temel Kalıtım Tanımlama

Bir sınıfın başka bir sınıftan miras alması için, sınıf tanımlanırken parantez içine üst sınıfın adı yazılır:

```Python
# Üst Sınıf (Base Class)
class Kisi:
    def __init__(self, ad, soyad):
        self.ad = ad
        self.soyad = soyad

    def isim_yazdir(self):
        print(f"{self.ad} {self.soyad}")

# Alt Sınıf (Derived Class) - Kisi sınıfının tüm yeteneklerine sahip olur
class Ogrenci(Kisi):
    pass

# Kullanım:
ogr = Ogrenci("Mert", "Yılmaz")
ogr.isim_yazdir()  # Çıktı: Mert Yılmaz
```

## 2. Alt Sınıfta `__init__()` Ezme (Overriding) ve `super()` Kullanımı

Alt sınıfta yeni bir `__init__()` tanımlandığında, üst sınıfın başlatıcı metodu doğrudan **ezilir (override edilir)** ve otomatik çalışmaz. Üst sınıfın başlattığı özellikleri korumak için iki yöntem bulunur:

### Yöntem A: `super()` Fonksiyonu (Önerilen Modern Standart)

`super()` fonksiyonu, üst sınıfı dinamik olarak referans alır. Bu yöntemde **`self` argümanı verilmez**:


```Python
class Ogrenci(Kisi):
    def __init__(self, ad, soyad, ogrenci_no):
        super().__init__(ad, soyad)  # Üst sınıfın __init__ metodunu self vermeden çağırır
        self.no = ogrenci_no        # Alt sınıfa özel yeni nitelik
```

### Yöntem B: Doğrudan Üst Sınıf Adıyla Çağırma

Bu yöntemde üst sınıfın adı açıkça yazılır ve ilk parametre olarak **`self` geçilmek zorundadır**:


```Python
class Ogrenci(Kisi):
    def __init__(self, ad, soyad, ogrenci_no):
        Kisi.__init__(self, ad, soyad)  # self zorunludur
        self.no = ogrenci_no
```

## 3. Alt Sınıfa Yeni Nitelik ve Metot Ekleme

Alt sınıflar üst sınıfın var olan davranışlarını değiştirebilir veya tamamen yeni davranışlar kazanabilir:


```Python
class Kisi:
    def __init__(self, ad, soyad):
        self.ad = ad
        self.soyad = soyad

    def isim_yazdir(self):
        print(f"{self.ad} {self.soyad}")

class Ogrenci(Kisi):
    def __init__(self, ad, soyad, mezuniyet_yili):
        super().__init__(ad, soyad)
        self.mezuniyet_yili = mezuniyet_yili  # Yeni nitelik

    # Yeni metot
    def karsilama(self):
        print(f"Hoş geldin {self.ad} {self.soyad} - Mezuniyet: {self.mezuniyet_yili}")

    # Metot Ezme (Method Overriding): Üst sınıftaki metodu kendi ihtiyacına göre yeniden tanımlar
    def isim_yazdir(self):
        print(f"Öğrenci: {self.ad} {self.soyad} (Kayıtlı)")

ogr = Ogrenci("Mert", "Yılmaz", 2026)
ogr.karsilama()    # Hoş geldin Mert Yılmaz - Mezuniyet: 2026
ogr.isim_yazdir()  # Öğrenci: Mert Yılmaz (Kayıtlı)
```

## 4. Çoklu Kalıtım (Multiple Inheritance) ve MRO (Method Resolution Order)

Python, bir alt sınıfın **birden fazla üst sınıftan aynı anda** miras almasını destekler:


```Python
class Loglanabilir:
    def kaydet(self, mesaj):
        print(f"[LOG]: {mesaj}")

class VeritabaniNesnesi:
    def baglan(self):
        print("Veritabanı bağlantısı kuruldu.")

# İki ayrı sınıftan miras alan alt sınıf:
class KullaniciModeli(VeritabaniNesnesi, Loglanabilir):
    def olustur(self, ad):
        self.baglan()
        self.kaydet(f"Kullanıcı oluşturuldu: {ad}")

k = KullaniciModeli()
k.olustur("sistem_yoneticisi")
```

### Metot Arama Sırası (MRO):

Aynı isimli bir metot birden fazla üst sınıfta varsa, Python sol baştan başlayarak hiyerarşik bir arama sırası izler (C3 Linearization algoritması). Bu sıra `mro()` ile görüntülenebilir:

```Python
print(KullaniciModeli.mro())
# Çıktı: [<class 'KullaniciModeli'>, <class 'VeritabaniNesnesi'>, <class 'Loglanabilir'>, <class 'object'>]
```

## 5. Kalıtım Kontrol Fonksiyonları: `isinstance()` ve `issubclass()`

- **`isinstance(nesne, Sinif)`:** Bir nesnenin o sınıftan (veya o sınıfın türetildiği üst sınıflardan) üretilip üretilmediğini denetler.
    
- **`issubclass(AltSinif, UstSinif)`:** Bir sınıfın başka bir sınıftan türeyip türemediğini kontrol eder.
    

```Python
ogr = Ogrenci("Mert", "Yılmaz", 2026)

# Nesne tip kontrolleri:
print(isinstance(ogr, Ogrenci))  # True
print(isinstance(ogr, Kisi))     # True (Ogrenci aynı zamanda bir Kisi'dir)
print(isinstance(ogr, object))   # True (Python'daki her sınıf object'ten türer)

# Sınıf hiyerarşi kontrolleri:
print(issubclass(Ogrenci, Kisi)) # True
print(issubclass(Kisi, Ogrenci)) # False
```