Python'da **İç Sınıf (Inner Class / Nested Class)**, başka bir sınıfın gövdesi içinde tanımlanan sınıftır.

- Yalnızca belirli bir dış sınıfla doğrudan ilişkili olan yardımcı veri modellerini ve mantıkları bir arada gruplamak (kapsüllemek) için kullanılır.
    
- Kodun modülerliğini ve okunabilirliğini artırır.
    
- **Kritik Kural:** Python'da iç sınıf, Java gibi dillerin aksine dış sınıfa **otomatik olarak örtük bir referansla bağlı değildir**. Dış sınıfın niteliklerine erişmesi gerekiyorsa, dış sınıf nesnesi (`self`) iç sınıfa açıkça parametre olarak aktarılmalıdır.
    

## 1. Temel İç Sınıf Tanımlama ve Doğrudan Başlatma

İç sınıfa, dış sınıfın ad alanı (_namespace_) üzerinden doğrudan erişilebilir:

```Python
class Sunucu:
    class AgYapilandirmasi:
        def __init__(self, ip, port):
            self.ip = ip
            self.port = port

        def bilgileri_yazdir(self):
            print(f"Ağ Ayarı: {self.ip}:{self.port}")

# Dış sınıftan bağımsız olarak iç sınıf nesnesi oluşturma:
ag_ayari = Sunucu.AgYapilandirmasi("192.168.1.50", 443)
ag_ayari.bilgileri_yazdir()  # Çıktı: Ağ Ayarı: 192.168.1.50:443
```

## 2. İç Sınıfın Dış Sınıf Niteliklerine Erişmesi

İç sınıfın dış sınıfın dinamik verilerine erişebilmesi için dış sınıf nesnesi (`outer_instance`) başlatıcıya parametre olarak iletilir:

```Python
class Donanim:
    def __init__(self, seri_no):
        self.seri_no = seri_no

    class Denetleyici:
        def __init__(self, dis_nesne):
            self.dis = dis_nesne  # Dış sınıf nesnesinin referansı saklanır

        def rapor_ver(self):
            print(f"Denetlenen Donanım Seri No: {self.dis.seri_no}")

cihaz = Donanim("HW-9082")
kontrol = cihaz.Denetleyici(cihaz)
kontrol.rapor_ver()  # Çıktı: Denetlenen Donanım Seri No: HW-9082
```

## 3. Bileşim (Composition) Deseni ile Çoklu İç Sınıf Kullanımı

Dış sınıf, kendi `__init__` metodu içinde iç sınıflarından otomatik nesneler türeterek parçaları bir bütün altında toplayabilir:

```Python
class Bilgisayar:
    def __init__(self, islemci_modeli, ram_gb):
        # Dış sınıf oluşturulurken iç sınıfları otomatik başlatır:
        self.cpu = self.Islemci(islemci_modeli)
        self.ram = self.Bellek(ram_gb)

    # 1. İç Sınıf
    class Islemci:
        def __init__(self, model):
            self.model = model

        def calis(self):
            print(f"İşlemci ({self.model}) veri işliyor...")

    # 2. İç Sınıf
    class Bellek:
        def __init__(self, kapasite):
            self.kapasite = kapasite

        def yukle(self):
            print(f"{self.kapasite} GB RAM üzerine veriler yüklendi.")

# Kullanım:
pc = Bilgisayar("ARM64", 32)
pc.cpu.calis()
pc.ram.yukle()

# Çıktı:
# İşlemci (ARM64) veri işliyor...
# 32 GB RAM üzerine veriler yüklendi.
```

## 4. İç Sınıflar Ne Zaman Tercih Edilmelidir?

|**Durum**|**Tercih Edilmeli mi?**|**Açıklama**|
|---|---|---|
|**Sıkı Bağlı Yardımcı Sınıflar**|**Evet**|Eğer bir sınıf sadece tek bir ana sınıfın içinde anlamlıysa (örn: Django ORM modellerindeki `Meta` sınıfı).|
|**Bağımsız / Yeniden Kullanılabilir Sınıflar**|**Hayır**|Sınıf başka yerlerde de bağımsız olarak kullanılacaksa dosya düzeyinde ayrı bir sınıf olarak tanımlanmalıdır.|