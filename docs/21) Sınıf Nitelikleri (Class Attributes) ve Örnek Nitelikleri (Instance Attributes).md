
pthon sınıflarında veri depolayan değişkenler iki temel kategoriye ayrılır: **Sınıf Nitelikleri (Class Attributes)** ve **Örnek Nitelikleri (Instance Attributes)**.

## 1. Sınıf Niteliği vs. Örnek Niteliği

|**Nitelik Türü**|**Tanımlandığı Yer**|**Kapsam / Paylaşım**|**Erişim Yolu**|
|---|---|---|---|
|**Sınıf Niteliği (Class Attribute)**|Metotların dışında, doğrudan sınıf gövdesinde|O sınıftan üretilen **tüm nesneler tarafından ortak paylaşılır**.|`SinifAdi.nitelik` veya `nesne.nitelik`|
|**Örnek Niteliği (Instance Attribute)**|Metotların içinde (genellikle `__init__`) `self.` öneki ile|**Yalnızca tanımlandığı nesneye özeldir**, bağımsız kopyadır.|`nesne.nitelik`|

```Python
class Sunucu:
    varsayilan_bolge = "eu-central-1"  # Sınıf Niteliği (Ortak paylaşılır)

    def __init__(self, ip_adresi):
        self.ip = ip_adresi  # Örnek Niteliği (Nesneye özeldir)

s1 = Sunucu("192.168.1.10")
s2 = Sunucu("192.168.1.20")

print(s1.ip)                # "192.168.1.10"
print(s2.ip)                # "192.168.1.20"
print(s1.varsayilan_bolge)  # "eu-central-1"
print(s2.varsayilan_bolge)  # "eu-central-1"
```

## 2. Kritik Kural: Sınıf Niteliklerini Güncelleme ve Gölgeleme (Shadowing)

Bir sınıf niteliğini değiştirmek istediğinizde bunu **sınıf adı üzerinden** yapmalısınız.


```Python
# 1. Doğru Güncelleme (Tüm nesneleri etkiler):
Sunucu.varsayilan_bolge = "us-east-1"
print(s1.varsayilan_bolge)  # "us-east-1"
print(s2.varsayilan_bolge)  # "us-east-1"

# 2. Gölgeleme Tuzağı (Yalnızca o nesneyi etkiler):
s1.varsayilan_bolge = "ap-south-1"  # Sınıf niteliğini DEĞİŞTİRMEZ, s1'e özel yeni bir örnek niteliği ekler!

print(s1.varsayilan_bolge)      # "ap-south-1" (s1'in kendi örneğindeki nitelik)
print(s2.varsayilan_bolge)      # "us-east-1" (Sınıf niteliği s2 için korunur)
print(Sunucu.varsayilan_bolge)  # "us-east-1" (Sınıfın orijinal niteliği değişmedi)
```

## 3. Dinamik Nitelik Ekleme, Güncelleme ve Silme (`del`)

Python nesnelerine çalışma zamanında (_runtime_) yeni nitelikler eklenebilir veya var olanlar `del` deyimi ile kaldırılabilir:


```Python
class Cihaz:
    def __init__(self, model):
        self.model = model

c = Cihaz("Router-A")

# 1. Nitelik Değerini Güncelleme:
c.model = "Router-X"

# 2. Dinamik Olarak Yeni Nitelik Ekleme:
c.seri_no = "SN-102938"
c.firmware = "v2.4.1"

print(c.seri_no)    # "SN-102938"
print(c.firmware)   # "v2.4.1"

# 3. Nitelik Silme (del):
del c.firmware
# print(c.firmware) # HATA: AttributeError verir
```

## 4. Dinamik Nitelik Yönetim Fonksiyonları

Python, nitelikleri dizgi (_string_) anahtarları üzerinden yönetmek için yerleşik yardımcı fonksiyonlar sunar:


```Python
class Yapilandirma:
    port = 8080

cfg = Yapilandirma()

# hasattr(): Nitelik nesnede tanımlı mı?
print(hasattr(cfg, "port"))       # True
print(hasattr(cfg, "zaman_asimi")) # False

# getattr(): Niteliğin değerini al (yoksa varsayılan değer dön)
print(getattr(cfg, "port"))                 # 8080
print(getattr(cfg, "zaman_asimi", 30))      # 30 (Hata vermek yerine 30 döner)

# setattr(): Çalışma zamanında yeni nitelik ata
setattr(cfg, "host", "127.0.0.1")
print(cfg.host)                             # "127.0.0.1"

# delattr(): Niteliği sil
delattr(cfg, "host")
```

## 5. Gerçek Özellik Yapısı: `@property` Dekoratörü (Kapsülleme)

Niteliklere erişimi denetlemek ve veri doğrulaması (_validation_) yapmak için Python'ın yerleşik `@property` dekoratörü kullanılır:


```Python
class TermalSensor:
    def __init__(self, sicaklik):
        self._sicaklik = sicaklik  # Yarı-özel değişken

    @property
    def sicaklik(self):
        return self._sicaklik

    @sicaklik.setter
    def sicaklik(self, yeni_deger):
        if -50 <= yeni_deger <= 120:
            self._sicaklik = yeni_deger
        else:
            raise ValueError("Sıcaklık değeri -50 ile 120 C arasında olmalıdır!")

sensor = TermalSensor(20)
print(sensor.sicaklik)  # 20 (Metot yerine değişken gibi okunur)

sensor.sicaklik = 35    # Setter tetiklenir
print(sensor.sicaklik)  # 35
```