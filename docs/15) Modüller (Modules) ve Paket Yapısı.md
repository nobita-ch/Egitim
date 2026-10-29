Python'da **Modül**, birbiriyle ilişkili fonksiyonları, sınıfları ve değişkenleri içeren, `.py` uzantılı standart bir Python kaynak kod dosyasıdır. Kodun modüler olmasını, tekrar kullanılabilmesini ve projelerin temiz bir şekilde organize edilmesini sağlar.

- **Modül (Module):** Tek bir `.py` dosyasıdır.
    
- **Paket (Package):** Birden fazla modülü bir arada tutan ve içinde genellikle `__init__.py` dosyası barındıran bir klasördür.
    
- **Kütüphane (Library):** Geniş kapsamlı bir görevi yerine getirmek için geliştirilmiş modül ve paketler bütünüdür.
    

## 1. Modül Türleri

1. **Yerleşik (Built-in) Modüller:** Python yüklendiğinde standart kütüphane ile hazır gelen modüllerdir (`math`, `random`, `sys`, `os`, `json`, `re`, `datetime`, `platform`).
    
2. **Üçüncü Taraf (Third-Party) Modüller:** Standart kütüphanede bulunmayan, `pip` paket yöneticisi ile harici olarak yüklenen modüllerdir (`requests`, `numpy`, `pygame` vb.).
    
3. **Özel (Kullanıcı Tanımlı) Modüller:** Geliştiricinin kendi yazdığı `.py` dosyalarıdır.
    

## 2. Özel Modül Oluşturma ve İçe Aktarma (`import`)

Herhangi bir `.py` dosyası oluşturup içine fonksiyonlar ve veri yapıları tanımlayarak bir modül oluşturulabilir.

### Adım 1: Modül Dosyasını Oluşturma (`sistem_araclari.py`)

```Python
# sistem_araclari.py

SURUM = "1.0.0"

varsayilan_yapilandirma = {
    "host": "localhost",
    "port": 8080,
    "zaman_asimi": 30
}

def baglanti_testi(ip_adresi):
    return f"{ip_adresi} adresine bağlantı başarılı."
```

### Adım 2: Modülü Ana Dosyada Kullanma (`main.py`)

```Python
# main.py
import sistem_araclari

# Modül içindeki fonksiyona erişim:
mesaj = sistem_araclari.baglanti_testi("192.168.1.1")
print(mesaj)  # 192.168.1.1 adresine bağlantı başarılı.

# Modül içindeki değişkene erişim:
port = sistem_araclari.varsayilan_yapilandirma["port"]
print(port)   # 8080
```

## 3. İçe Aktarma (Import) Yöntemleri ve Sözdizimleri

### 1. Takma Ad Kullanarak İçe Aktarma (`as`)

Modül adını kısaltmak veya isim çakışmalarını önlemek için kullanılır:

```Python
import sistem_araclari as araclar

print(araclar.SURUM)  # "1.0.0"
```

### 2. Belirli Parçaları İçe Aktarma (`from ... import`)

Modülün tamamı yerine yalnızca ihtiyaç duyulan fonksiyon veya değişkeni doğrudan içe aktarmayı sağlar. Bu yöntemde modül adını önek olarak yazmaya gerek kalmaz:

```Python
from sistem_araclari import baglanti_testi, SURUM

print(baglanti_testi("10.0.0.1"))
print(SURUM)
```

### 3. Yıldız ile Tamamını İçe Aktarma (`from ... import *` - ÖNERİLMEZ)

Modül içindeki her şeyi ana alana döker. Hangi fonksiyonun nereden geldiğini belirsizleştirdiği ve isim çakışmalarına yol açtığı için standart olarak tercih edilmez.

## 4. Modül İçeriğini İnceleme: `dir()` Fonksiyonu

`dir()` yerleşik fonksiyonu, bir modülün veya nesnenin içerdiği tüm fonksiyonları, sınıfları, değişkenleri ve dunder (`__...__`) metotlarını bir liste olarak döndürür:


```Python
import math

icerik = dir(math)
print(icerik[:5])  # ['__doc__', '__file__', '__loader__', '__name__', '__package__']
print("sqrt" in icerik)  # True
```

## 5. Kritik Standart: `if __name__ == "__main__":`

Bir modül yazılırken, o dosya **doğrudan çalıştırıldığında** test kodlarının devreye girmesi, ancak başka bir dosyaya **`import` edildiğinde** otomatik olarak çalışmaması istenir. Bunun için `__name__` özel değişkeni kontrol edilir:

- Dosya doğrudan çalıştırılırsa Python `__name__` değişkenine `"__main__"` değerini atar.
    
- Dosya başka bir yere import edilirse `__name__` değişkeni modülün kendi dosya adı olur.

```Python
# sistem_araclari.py

def baglanti_testi(ip):
    return f"{ip} kontrol edildi."

# Bu blok sadece dosya doğrudan çalıştırılırsa (python sistem_araclari.py) çalışır.
# Başka dosya 'import sistem_araclari' derse bu blok ASLA çalıştırılmaz:
if __name__ == "__main__":
    print("Modül doğrudan test modunda çalıştırıldı:")
    print(baglanti_testi("127.0.0.1"))
```

## 6. Modül Arama Yolu (`sys.path`)

Python bir modülü import ederken sırasıyla şu dizinlere bakar:

1. Çalıştırılan ana dosyanın bulunduğu mevcut dizin.
    
2. `PYTHONPATH` ortam değişkeninde tanımlı dizinler.
    
3. Python'ın standart kütüphane dizinleri.
    
4. `pip` ile kurulan paketlerin yer aldığı `site-packages` dizini.
    

```Python
import sys
print(sys.path)  # Python'ın modülleri aradığı dizinlerin listesi
```
