Python'da `__init__()`, bir sınıftan yeni bir nesne örneği (_instance_) türetildiği anda otomatik olarak çalışan özel bir **dunder (double underscore)** metottur.

- İsmi İngilizce **"initialize"** (başlatmak / ilk duruma getirmek) kelimesinden gelir.
    
- Nesneye ait örnek niteliklerine (_instance attributes_) başlangıç değerlerini atamak veya nesne ayağa kalkarken yapılması zorunlu işlemleri (bağlantı açma, doğrulama vb.) yürütmek için kullanılır.
    
- `__init__()` metodu olmasaydı, üretilen her nesnenin özellikleri sonradan tek tek elle atanmak zorunda kalırdı:
## 1. Temel Yapı ve Çalışma Mantığı


```Python
class Cihaz:
    def __init__(self, cihaz_id, ip_adresi):
        # self.nitelik_adi = parametre_degeri
        self.id = cihaz_id
        self.ip = ip_adresi
        self.durum = "Hazır"  # Sabit başlangıç değeri

# Nesne oluşturulduğu anda __init__ otomatik tetiklenir:
cihaz1 = Cihaz("DEV-101", "192.168.1.10")

print(cihaz1.id)     # DEV-101
print(cihaz1.ip)     # 192.168.1.10
print(cihaz1.durum)  # Hazır
```

## 2. Varsayılan Parametre Değerleri (Default Arguments)

Fonksiyonlarda olduğu gibi `__init__()` parametrelerine de varsayılan değerler atanabilir. Çağrı sırasında değer girilmezse varsayılan değer devreye girer:

```Python
class Sunucu:
    def __init__(self, host, port=80, ssl_aktif=False):
        self.host = host
        self.port = port
        self.ssl = ssl_aktif

# Sadece zorunlu parametre ile nesne oluşturma:
s1 = Sunucu("api.sistem.local")
print(s1.host, s1.port, s1.ssl)  # api.sistem.local 80 False

# Varsayılanları ezerek nesne oluşturma:
s2 = Sunucu("db.sistem.local", port=5432, ssl_aktif=True)
print(s2.host, s2.port, s2.ssl)  # db.sistem.local 5432 True
```

## 3. Çok Parametreli Yapılandırmalar

Bir nesne başlatılırken istenilen sayıda parametre alabilir:

```Python
class AgBirimi:
    def __init__(self, model, mac_adresi, port_sayisi, vlan_id):
        self.model = model
        self.mac = mac_adresi
        self.port_sayisi = port_sayisi
        self.vlan = vlan_id

switch1 = AgBirimi("Cisco-2960", "00:1A:2B:3C:4D:5E", 24, 100)

print(switch1.model)        # Cisco-2960
print(switch1.port_sayisi)  # 24
```

## 4. `__init__()` Hakkında Bilinmesi Gereken Kritik Kurallar


### 1. `return` Yasağı

`__init__()` metodu geriye **asla bir değer döndüremez**. Eğer `return "metin"` veya `return 5` gibi bir ifade yazılırsa Python `TypeError` hatası fırlatır. Yalnızca erken çıkış için `return` veya `return None` kullanılabilir.

```Python
class Test:
    def __init__(self, x):
        self.x = x
        # return x  # HATA! TypeError: __init__() should return None, not 'int'
```

### 2. `__new__()` ile `__init__()` Arasındaki Fark

- **`__new__()`:** Nesneyi bellekte **yaratan** asıl yapıcıdır (_constructor_). `self` nesnesini oluşturup geri döndürür.
    
- **`__init__()`:** Yaratılmış olan nesnenin içini dolduran ve ilk değerlerini atayan **başlatıcıdır** (_initializer_).
    

### 3. Değiştirilebilir Varsayılan Değer Tuzağı

`__init__` parametrelerinde `liste=[]` veya `sozluk={}` gibi varsayılan değerler tanımlanmamalıdır; `None` atanıp içeride kontrol edilmelidir:


```Python
# Doğru yaklaşım:
class PaketKuyrugu:
    def __init__(self, paketler=None):
        if paketler is None:
            self.paketler = []
        else:
            self.paketler = paketler
```