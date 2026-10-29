Kapsülleme (Encapsulation); bir nesnenin verilerini (niteliklerini) ve bu verileri işleyen metotlarını tek bir sınıf yapısı altında paketleyerek, **doğrudan kontrolsüz dış müdahalelere ve veri bozulmalarına karşı koruma altına alma** prensibidir.

## 1. Python'da Erişim Belirteçleri Seviyeleri

Python'da C++ veya Java'daki gibi `public`, `protected`, `private` anahtar sözcükleri yoktur; bunun yerine **alt çizgi isimlendirme kuralları** kullanılır:

|**Erişim Türü**|**İsimlendirme**|**Erişim Kapsamı**|**Açıklama**|
|---|---|---|---|
|**Genel (Public)**|`nitelik`|Sınıf içi, alt sınıflar ve sınıf dışı|Her yerden serbestçe okunabilir ve değiştirilebilir.|
|**Yarı-Özel (Protected)**|`_nitelik`|Sınıf içi ve türetilen alt sınıflar|Bir geliştirici uyarısıdır (konvansiyon); doğrudan dışarıdan çağrılmaması önerilir.|
|**Tam-Özel (Private)**|`__nitelik`|Sadece tanımlandığı sınıfın içi|Sınıf dışından ve alt sınıflardan doğrudan erişime kapatılır (**Name Mangling** uygulanır).|

## 2. Özel (Private) Nitelikler ve Metotlar (`__`)

Bir değişkenin veya metodun başına **iki alt çizgi (`__`)** konulduğunda, o öğe sınıf dışından doğrudan çağrılamaz hale gelir:


```Python
class HesapMakinesi:
    def __init__(self):
        self.sonuc = 0

    # Private Metot: Sadece sınıf içindeki diğer metotlar kullanabilir
    def __sayi_mi(self, deger):
        return isinstance(deger, (int, float))

    # Public Metot: Dışarıya açık arayüz
    def topla(self, deger):
        if self.__sayi_mi(deger):
            self.sonuc += deger
        else:
            raise ValueError("Geçersiz sayısal veri!")

calc = HesapMakinesi()
calc.topla(15)
print(calc.sonuc)  # 15

# Doğrudan private metoda erişim denemesi:
# calc.__sayi_mi(10)  # HATA: AttributeError fırlatır
```

## 3. Name Mangling (İsim Dönüştürme) Mekanizması

Python'da `__nitelik` şeklinde tanımlanan öğeler silinmez veya tamamen kilitlenmez; Python arka planda bu ismi otomatik olarak **`_SinifAdi__nitelik`** formatına dönüştürür.


```Python
class Kasa:
    def __init__(self, bakiye):
        self.__bakiye = bakiye  # Arka planda '_Kasa__bakiye' oldu

k = Kasa(5000)

# Doğrudan erişim hata verir:
# print(k.__bakiye)  # AttributeError: 'Kasa' object has no attribute '__bakiye'

# Name Mangling ile dolaylı zorla erişim (Önerilmez ama mümkündür):
print(k._Kasa__bakiye)  # 5000
```

## 4. Getter ve Setter Mantığı

Özel verilere erişmek ve bu verilere yazılırken **veri doğrulama (validation)** kuralları uygulamak için Getter ve Setter yapıları kullanılır.

### Yöntem A: Klasik Metotlarla Getter / Setter (Java Tarzı)


```Python
class BankaHesabi:
    def __init__(self, baslangic_bakiye):
        self.__bakiye = baslangic_bakiye

    # Getter: Güvenli okuma
    def bakiye_al(self):
        return self.__bakiye

    # Setter: Doğrulama ile güvenli yazma
    def bakiye_guncelle(self, miktar):
        if miktar >= 0:
            self.__bakiye = miktar
        else:
            print("Hata: Bakiye negatif olamaz!")

hesap = BankaHesabi(1000)
print(hesap.bakiye_al())  # 1000

hesap.bakiye_guncelle(1500)
print(hesap.bakiye_al())  # 1500

hesap.bakiye_guncelle(-200)  # "Hata: Bakiye negatif olamaz!"
```

### Yöntem B: Pythonik Standart (`@property` ve `@setter` Dekoratörleri)

Python'da metot çağırma parantezleri (`hesap.get_bakiye()`) yerine, niteliğe sanki düz bir değişkenmiş (`hesap.bakiye`) gibi erişmeyi sağlayan `@property` kullanılır:


```Python
class TermalSensor:
    def __init__(self, sicaklik):
        self.__sicaklik = sicaklik

    # Getter
    @property
    def sicaklik(self):
        return self.__sicaklik

    # Setter
    @sicaklik.setter
    def sicaklik(self, yeni_deger):
        if -50 <= yeni_deger <= 150:
            self.__sicaklik = yeni_deger
        else:
            raise ValueError("Sıcaklık değeri güvenlik sınırları dışında (-50 ile 150 C)!")

    # Deleter (Opsiyonel - del ile silindiğinde tetiklenir)
    @sicaklik.deleter
    def sicaklik(self):
        print("Sıcaklık verisi temizlendi.")
        self.__sicaklik = 0

# Kullanım:
sensor = TermalSensor(25)

# Getter tetiklenir (parantezsiz):
print(sensor.sicaklik)  # 25

# Setter tetiklenir:
sensor.sicaklik = 40
print(sensor.sicaklik)  # 40

# Hatalı atama:
# sensor.sicaklik = 300  # ValueError: Sıcaklık değeri güvenlik sınırları dışında!

# Deleter tetiklenir:
del sensor.sicaklik
print(sensor.sicaklik)  # 0
```

## 5. Kapsüllemenin Sağladığı Temel Avantajlar

1. **Veri Bütünlüğü (Data Integrity):** Hatalı veya mantıksız değerlerin nesne içine aktarılması setter katmanında engellenir.
    
2. **Uygulama Detaylarını Gizleme:** Sınıfın iç mimarisi (örneğin bir listenin sözlüğe dönüştürülmesi) değişse bile dışarıya sunulan `@property` arayüzü aynı kalır, dış kodlar bozulmaz.
    
3. **Sadece Okunabilir (Read-Only) Nitelikler:** Bir niteliğe yalnızca `@property` (getter) tanımlayıp `@setter` eklemezseniz, o nitelik dışarıdan değiştirilemez (salt okunur) hale gelir.