Metotlar, bir sınıfa bağlı olan ve o sınıftan üretilen nesnelerin **davranışlarını, işlevlerini ve durum değişikliklerini** tanımlayan fonksiyonlardır.

## 1. Örnek Metotları (Instance Methods) ve `self` Parametresi

En yaygın kullanılan metot türüdür. Doğrudan nesnenin kendisine (`self`) bağlıdır ve nesnenin niteliklerini okuyabilir ya da değiştirebilir.

- İlk parametresi daima **`self`** olmak zorundadır.
    
- `self`, çağrıyı yapan geçerli nesnenin bellek referansını taşır.
    

```Python
class GorevKuyrugu:
    def __init__(self, kuyruk_adi):
        self.ad = kuyruk_adi
        self.gorevler = []

    def gorev_ekle(self, gorev):
        self.gorevler.append(gorev)
        print(f"Eklendi: {gorev}")

    def gorev_tamamla(self, gorev):
        if gorev in self.gorevler:
            self.gorevler.remove(gorev)
            print(f"Tamamlandı: {gorev}")

    def listele(self):
        print(f"Kuyruk '{self.ad}':")
        for gorev in self.gorevler:
            print(f"- {gorev}")

# Kullanım:
kuyruk = GorevKuyrugu("Veri İşleme")
kuyruk.gorev_ekle("CSV Ayrıştırma")
kuyruk.gorev_ekle("Veritabanı Senkronizasyonu")
kuyruk.listele()
```

### `self` Çağrısının Arka Planı

Python'da nesne üzerinden metot çağrıldığında:

```Python
kuyruk.listele()
# Arka planda aslında şu şekilde çalıştırılır:
GorevKuyrugu.listele(kuyruk)
```

## 2. Python'da 3 Farklı Metot Türü

Python'da metotlar kullanım amaçlarına göre üçe ayrılır:

|**Metot Türü**|**Dekoratör**|**İlk Parametre**|**Erişim Kapsamı**|**Kullanım Amacı**|
|---|---|---|---|---|
|**Örnek Metodu (Instance Method)**|_(Yok)_|`self`|Nesne nitelikleri ve sınıf nitelikleri|Nesne durumunu okuma / güncelleme|
|**Sınıf Metodu (Class Method)**|`@classmethod`|`cls`|Yalnızca sınıf nitelikleri|Alternatif yapıcılar (`constructors`) ve sınıf düzeyinde işlemler|
|**Statik Metot (Static Method)**|`@staticmethod`|_(Parametre zorunluluğu yok)_|Ne nesneye ne de sınıfa doğrudan erişir|Sınıfla mantıksal bağı olan bağımsız yardımcı fonksiyonlar|

### Kod Örneği:

```Python
class AgPaketi:
    varsayilan_protokol = "TCP"

    def __init__(self, veri, boyut):
        self.veri = veri
        self.boyut = boyut

    # 1. Instance Method (self alır)
    def paketi_gonder(self):
        return f"{self.boyut} KB veri {self.varsayilan_protokol} üzerinden iletildi."

    # 2. Class Method (cls alır - Sınıf seviyesinde işlem yapar)
    @classmethod
    def varsayilan_degistir(cls, yeni_protokol):
        cls.varsayilan_protokol = yeni_protokol

    # 3. Static Method (self veya cls almaz - Bağımsız yardımcı araç)
    @staticmethod
    def boyut_dogrula(boyut):
        return 0 < boyut <= 65535

# Statik metot çağrısı:
print(AgPaketi.boyut_dogrula(1024))  # True

# Sınıf metodu çağrısı:
AgPaketi.varsayilan_degistir("UDP")

paket = AgPaketi("payload_verisi", 512)
print(paket.paketi_gonder())  # 512 KB veri UDP üzerinden iletildi.
```

## 3. Metot Silme (`del`)

Bir sınıfın veya nesnenin metodu `del` ifadesi ile kaldırılabilir:

```Python
class Test:
    def calis(self):
        print("Çalışıyor")

t = Test()
del Test.calis  # Sınıf düzeyinden metot silindi

# t.calis()  # HATA: AttributeError verir
```

## 4. Özel Temsil Metotları: `__str__()` ve `__repr__()`

Bir nesneyi `print()` ile yazdırdığınızda veya `str()` içine aldığınızda anlamlı bir metin döndürmek için bu metotlar kullanılır:

```Python
class SunucuYapilandirmasi:
    def __init__(self, host, port):
        self.host = host
        self.port = port

    # Kullanıcı odaklı, okunabilir metin çıktısı:
    def __str__(self):
        return f"Sunucu: {self.host}:{self.port}"

    # Geliştirici / Hata ayıklama odaklı resmi çıktı (nesneyi yeniden üretmeye uygun format):
    def __repr__(self):
        return f"SunucuYapilandirmasi(host='{self.host}', port={self.port})"

s = SunucuYapilandirmasi("127.0.0.1", 8000)

print(str(s))   # "Sunucu: 127.0.0.1:8000" (print doğrudan __str__ çağırır)
print(repr(s))  # "SunucuYapilandirmasi(host='127.0.0.1', port=8000)"
```