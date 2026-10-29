Python Nesne Yönelimli Programlamada (OOP) **`self`**, bir sınıfın o an üzerinde işlem yapılan **geçerli nesne örneğini (_instance_)** temsil eden bir referanstır.

- Sınıfa ait örnek metotlarının (**Instance Methods**) ve yapıcı metodun (`__init__`) **ilk parametresi** olmak zorundadır.
    
- Nesnenin kendi niteliklerine (`self.nitelik`) ve diğer metotlarına (`self.diger_metot()`) erişmesini sağlar.
    
- `self` parametresi sayesinde Python; _"Genel bir değişkenden değil, o an çağrılan nesnenin kendi belleğindeki verisinden bahsediyorum"_ ayrımını yapar.
    

## 1. Temel Kullanım ve Metot İçi Erişim

```Python
class Cihaz:
    def __init__(self, model, durum="Beklemede"):
        self.model = model
        self.durum = durum

    def durum_guncelle(self, yeni_durum):
        self.durum = yeni_durum

    def rapor_ver(self):
        # self üzerinden hem niteliklere hem de aynı sınıftaki diğer metotlara erişilebilir
        return f"Cihaz: {self.model} | Durum: {self.durum}"

c1 = Cihaz("Switch-X1")
c1.durum_guncelle("Aktif")
print(c1.rapor_ver())  # Cihaz: Switch-X1 | Durum: Aktif
```

## 2. Nesne Oluşturma ve `self` Adım Adım Çalışma Akışı

```Python
class Sunucu:
    def __init__(self, ip, port):
        self.ip = ip
        self.port = port

sunucu1 = Sunucu("192.168.1.1", 8080)
```

|**Adım**|**İşlem**|**Açıklama**|
|---|---|---|
|**1**|`Sunucu("192.168.1.1", 8080)`|Nesne örneği oluşturma çağrısı yapılır; Python bellekte nesneyi açar ve `__init__` metodunu tetikler.|
|**2**|`self` $\rightarrow$ `sunucu1`|Python bellekteki yeni nesne referansını `self` parametresine **otomatik olarak** aktarır (geliştirici elle yazmaz).|
|**3**|`ip="192.168.1.1"`, `port=8080`|Fonksiyon çağrısında iletilen gerçek argümanlar parametre değişkenlerine atanır.|
|**4**|`self.ip = ip`|`sunucu1.ip = "192.168.1.1"` şeklinde nesneye özel örnek niteliği oluşturulur.|
|**5**|`self.port = port`|`sunucu1.port = 8080` şeklinde nesneye özel örnek niteliği oluşturulur.|

## 3. Arka Plandaki Çağrı Mekanizması

Python'da bir nesne üzerinden metot çağrıldığında, sözdizimsel kolaylık (_syntactic sugar_) devreye girer. Aşağıdaki iki satır arka planda tamamen aynı işlemi yürütür:

```Python
c = Cihaz("Router-A")

# 1. Standart Çağrı (Geliştiricinin yazdığı):
c.rapor_ver()

# 2. Arka Plandaki Gerçek Çağrı (Python'ın çalıştırdığı):
Cihaz.rapor_ver(c)  # c nesnesi self parametresi olarak metoda açıkça gönderilir
```

## 4. `self` Hakkında Bilinmesi Gereken Teknik Kurallar

1. **Ayrılmış Bir Kelime (Keyword) Değildir:**
    
    Python dilinde `self` yerine `this`, `me` veya başka bir isim yazsanız da kod teknik olarak çalışır. Ancak **PEP 8** standartlarına göre topluluk ve araç uyumluluğu için **daima `self` yazılmalıdır**.
    
    ```Python
    # Teknik olarak geçerli ama standart dışı (ÖNERİLMEZ):
    class Test:
        def __init__(this, veri):
            this.veri = veri
    ```
    
2. **Metotlar Arası Çağrı:**
    
    Bir sınıf içindeki bir metodun, aynı sınıftaki başka bir metodu çağırabilmesi için başına mutlaka `self.` getirilmelidir:
    
    ```Python
    class Dogrulayici:
        def temel_kontrol(self):
            return True
    
        def tam_analiz(self):
            if self.temel_kontrol():  # self olmadan doğrudan 'temel_kontrol()' yazılırsa NameError verir
                print("Analiz tamamlandı.")
    ```