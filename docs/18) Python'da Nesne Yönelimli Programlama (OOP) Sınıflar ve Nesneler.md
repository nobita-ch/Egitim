
Python nesne yönelimli bir dildir. Python'da sayılar, metinler, listeler ve fonksiyonlar dahil hemen hemen her şey birer **nesnedir (object)**.

- **Sınıf (Class):** Bir nesnenin hangi özelliklere (niteliklere) ve davranışlara (metotlara) sahip olacağını belirleyen **şablondur (blueprint)**.
    
- **Nesne (Object / Instance):** Bu şablondan üretilen, bellekte yer kaplayan somut örnektir.
    

## 1. Temel Sınıf ve Nesne Tanımlama

Sınıflar `class` anahtar kelimesiyle tanımlanır. Python standartlarına (**PEP 8**) göre sınıf adları **PascalCase** biçiminde yazılır:

```Python
class Cihaz:
    pass  # Boş sınıf taslağı, hata vermez

# Sınıftan nesne üretme (Instantiation)
cihaz1 = Cihaz()
cihaz2 = Cihaz()
```

## 2. Yapıcı Metot (`__init__`) ve `self` Parametresi

Bir sınıftan yeni bir nesne oluşturulduğu anda Python otomatik olarak **`__init__()`** metodunu çalıştırır.

- **`self`:** O an üzerinde işlem yapılan nesnenin kendisini temsil eden bir referanstır. Nesnenin kendi niteliklerine ve metotlarına erişmesini sağlar. Metotların ilk parametresi olmak zorundadır.

```Python
class Sunucu:
    def __init__(self, ip_adresi, port):
        # Örnek Nitelikleri (Instance Attributes) - Her nesneye özeldir
        self.ip = ip_adresi
        self.port = port
        self.durum = "Kapalı"

    # Nesne Metodu (Instance Method)
    def baslat(self):
        self.durum = "Aktif"
        print(f"{self.ip}:{self.port} adresindeki sunucu başlatıldı.")

# Nesne oluşturma:
web_sunucusu = Sunucu("192.168.1.10", 8080)
db_sunucusu = Sunucu("192.168.1.20", 5432)

web_sunucusu.baslat()  # "192.168.1.10:8080 adresindeki sunucu başlatıldı."
print(db_sunucusu.durum)  # "Kapalı" (Her nesne birbirinden bağımsızdır)
```

## 3. Sınıf Niteliği (Class Attribute) vs. Örnek Niteliği (Instance Attribute)

- **Sınıf Niteliği:** Sınıf seviyesinde tanımlanır; o sınıftan üretilen **tüm nesneler tarafından ortak paylaşılır**.
    
- **Örnek Niteliği:** `__init__` içinde `self.` ile tanımlanır; **yalnızca o nesneye özeldir**.

```Python
class Baglanti:
    maksimum_baglanti = 100  # Sınıf Niteliği (Her nesne için ortaktır)

    def __init__(self, baglanti_id):
        self.id = baglanti_id  # Örnek Niteliği (Nesneye özeldir)

b1 = Baglanti(1)
b2 = Baglanti(2)

print(b1.maksimum_baglanti)  # 100
print(b2.maksimum_baglanti)  # 100

# Sınıf seviyesinde güncelleme tüm nesneleri etkiler:
Baglanti.maksimum_baglanti = 200
print(b1.maksimum_baglanti)  # 200
```

## 4. `__str__()` ve `__repr__()` Metotları

Bir nesne `print()` fonksiyonuna gönderildiğinde varsayılan olarak bellekteki adresini gösterir (`<__main__.Sunucu object at 0x...>`). Anlaşılır bir metin döndürmek için `__str__()` kullanılır:

```Python
class Robot:
    def __init__(self, model, pil_seviyesi):
        self.model = model
        self.pil = pil_seviyesi

    def __str__(self):
        return f"Robot Modeli: {self.model} (Pil: %{self.pil})"

r1 = Robot("Atlas-5", 85)
print(r1)  # Çıktı: Robot Modeli: Atlas-5 (Pil: %85)
```

## 5. Nitelik Değiştirme ve Silme (`del`)

Nesnelerin özellikleri sonradan güncellenebilir veya `del` ifadesi ile silinebilir:

```Python
class Sensör:
    def __init__(self, tur):
        self.tur = tur
        self.kalibre = True

s = Sensör("Sıcaklık")

# Nitelik güncelleme
s.tur = "Basınç"

# Niteliği nesneden silme
del s.kalibre

# Nesneyi bellekten tamamen silme
del s
```

## 6. Temel OOP Prensipleri Özeti

### 1. Kalıtım (Inheritance)

Bir sınıfın başka bir sınıfın özelliklerini ve metotlarını devralmasıdır. Üst sınıfa erişmek için `super()` kullanılır:

```Python
class Cihaz:
    def __init__(self, marka):
        self.marka = marka

class Bilgisayar(Cihaz):  # Cihaz sınıfından miras alır
    def __init__(self, marka, ram):
        super().__init__(marka)  # Üst sınıfın __init__ metodunu çalıştırır
        self.ram = ram
```

### 2. Kapsülleme (Encapsulation)

Verilere dışarıdan doğrudan erişimi sınırlandırmaktır:

- `_degisken`: Yarı-özel (Protected) - Alt sınıflar ve modül içi için konvansiyon.
    
- `__degisken`: Tam-özel (Private) - İsim karmaşası (_Name Mangling_) uygulayarak doğrudan dış erişimi engeller.
    

```Python
class Kasa:
    def __init__(self):
        self.__bakiye = 1000  # Private nitelik

    def bakiye_goster(self):
        return self.__bakiye  # Kontrollü erişim
```

### 3. Çok Biçimlilik (Polymorphism)

Farklı sınıfların aynı isimli metoda sahip olması ve kendi bünyelerinde farklı davranabilmesidir:

```Python
class Dosya:
    def oku(self):
        return "Düz metin okunuyor..."

class Resim:
    def oku(self):
        return "Piksel baytları çözümleniyor..."

for oge in [Dosya(), Resim()]:
    print(oge.oku())
```