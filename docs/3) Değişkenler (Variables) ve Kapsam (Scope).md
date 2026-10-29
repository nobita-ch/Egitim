Python'da C, C++ veya Java gibi dillerdeki gibi (`int x = 5;`) katı bir tür bildirim anahtar kelimesi bulunmaz.

## 1. Dinamik Tipli Yapı (Dynamic Typing) ve Bellek Modeli

- Python **dinamik tipli** bir dildir. Bir değişken, ona ilk değer atandığı (`=`) anda otomatik olarak oluşturulur ve veri tipini değerinden alır.
    
- Python'da değişkenler değer tutan sabit "kutular" değil; bellekteki nesnelere bağlanan **etiketler (referanslar)** gibidir. Bu nedenle aynı etiket farklı zamanlarda farklı tiplerdeki nesnelere bağlanabilir.

- Python'da C, C++ veya Java gibi dillerdeki gibi (`int x = 5;`) katı bir tür bildirim anahtar kelimesi bulunmaz.
    



```Python
deger = 100          # int tipinde
deger = "Metin Verisi" # Artık str tipinde
print(deger)
```

### Tip Kontrolü ve Tip İpuçları (Type Hints)

- **`type()` Fonksiyonu:** Bir değişkenin o an hangi veri tipine işaret ettiğini döndürür:
    
    
    
    ```Python
    puan = 85
    print(type(puan))  # Çıktı: <class 'int'>
    ```
    
- **Tip İpuçları (Type Annotations):** Kodun okunabilirliğini artırmak ve editör desteği sağlamak için tür belirtilebilir; ancak Python bu türü çalışma zamanında zorunlu kılmaz (hata vermez):
    
    
    
    ```Python
    miktar: int = 50
    sehir: str = "Ankara"
    ```
    

## 2. Değişken Adlandırma Kuralları

### Zorunlu Sözdizimi Kuralları

1. Değişken adı bir **harf (a-z, A-Z)** veya **alt çizgi (`_`)** ile başlamalıdır.
    
2. Değişken adı **rakamla başlayamaz** (`1sayi` geçersizdir; `sayi1` geçerlidir).
    
3. Yalnızca alfanümerik karakterler ve alt çizgi (`A-Z`, `a-z`, `0-9`, `_`) içerebilir (Türkçe karakterler teknik olarak desteklense de standart olarak kullanılmaz).
    
4. Python **büyük/küçük harfe duyarlıdır** (_case-sensitive_): `sayac`, `Sayac` ve `SAYAC` üç farklı değişkendir.
    
5. Python'ın rezerve edilmiş **anahtar sözcükleri (keywords)** değişken adı yapılamaz (`def`, `if`, `class`, `global`, `True` vb.).
    

### İsimlendirme Stilleri

|**Standart**|**Kural**|**Örnek**|**Tercih Alanı**|
|---|---|---|---|
|**Snake Case**|Tüm harfler küçük, kelimeler alt çizgiyle ayrılır|`toplam_ogrenci_sayisi`|**Python standart değişken ve fonksiyon adlandırması (PEP 8)**|
|**Camel Case**|İlk kelime küçük, sonraki kelimelerin ilk harfi büyük|`toplamOgrenciSayisi`|Bazı kütüphaneler ve diğer diller|
|**Pascal Case**|Tüm kelimelerin ilk harfi büyük|`ToplamOgrenciSayisi`|Python'da **Sınıf (Class)** adlandırması|
|**Büyük Harf**|Değişmeyen sabit değerler (_Constants_)|`MAX_BAGLANTI_SAYISI = 100`|Değeri sabit kalması gereken değişkenler|

### Alt Çizgi (`_`) İsimlendirme Anlamları

- **`_degisken` (Tek Başta):** Dahili kullanım içindir; modül dışına aktarılmaması (private) önerilen öğeleri simgeler (konvansiyondur, erişim engellenmez).
    
- **`__degisken` (İki Başta):** Sınıflarda isim karmaşasını önlemek (_Name Mangling_) için kullanılır, daha katı bir gizlilik simgeler.
    
- **`__init__` (Başta ve Sonda Çift):** Python'ın dile özgü özel (magic / dunder) metot ve nitelikleridir.
    

## 3. Çoklu Değer Atama Yöntemleri



```Python
# Tek satırda birden fazla değişkene farklı değerler atama:
en, boy, yukseklik = 10, 20, 30

# Tek bir değeri birden fazla değişkene aynı anda atama:
baslangic_puani = toplam_skor = 0
```

## 4. Değişken Kapsamı (Variable Scope) ve LEGB Kuralı

Bir değişkenin tanımlandığı yer, o değişkene programın hangi kısımlarından erişilebileceğini belirler. Python bir değişkeni ararken sırasıyla **LEGB** hiyerarşisini takip eder:

```python
[ L ] Local       -> Fonksiyonun kendi içi
  ↓
[ E ] Enclosing   -> İç içe fonksiyonlarda dıştaki çevreleyen fonksiyon
  ↓
[ G ] Global      -> Dosyanın en üst seviyesi (modül düzeyi)
  ↓
[ B ] Built-in    -> Python'ın gömülü isimleri (len, print, range vb.)
```

Eğer değişken bu dört katmanda da bulunamazsa Python `NameError` hatası fırlatır.

### Kapsam Türleri

#### 1. Yerel Kapsam (Local Scope)

Bir fonksiyonun içinde tanımlanan değişkenlerdir. Sadece o fonksiyon çalışırken bellekte kalır ve fonksiyon dışından erişilemez.



```Python
def hesaplama():
    sonuc = 100  # Yerel değişken
    return sonuc

# print(sonuc)  # HATA! NameError: name 'sonuc' is not defined
```

#### 2. Kapsayan Kapsam (Enclosing Scope)

İç içe fonksiyonlarda (_nested functions_) görülür. İçteki fonksiyon, kendisini çevreleyen dış fonksiyonun değişkenlerine erişebilir.



```Python
def dis_fonksiyon():
    mesaj = "Sistem Aktif"  # Enclosing değişken
    
    def ic_fonksiyon():
        print(mesaj)  # Dıştaki değişkeni doğrudan okuyabilir
    
    ic_fonksiyon()

dis_fonksiyon()
```

#### 3. Genel Kapsam (Global Scope)

Fonksiyonların ve sınıfların dışında, ana program seviyesinde tanımlanan değişkenlerdir. Dosyanın her yerinden okunabilir.



```Python
sistem_durumu = "Çalışıyor"  # Global değişken

def durum_kontrol():
    print(sistem_durumu)  # Global değişken fonksiyon içinden okunabilir

durum_kontrol()
```

#### 4. Gömülü Kapsam (Built-in Scope)

Python başlatıldığında belleğe otomatik yüklenen fonksiyon ve sabitlerdir (`print`, `int`, `len`, `range`, `ValueError`).

## 5. Kapsam Değiştirici Anahtar Kelimeler: `global` ve `nonlocal`

Fonksiyonlar varsayılan olarak dış kapsamdaki değişkenleri **okuyabilir**, ancak onları doğrudan **yeniden atayamaz / güncelleyemez**. Değiştirmek istendiğinde özel anahtar kelimeler kullanılır.

### `global` İfadesi

Fonksiyon içerisinden dosya düzeyindeki bir global değişkeni güncellemek için kullanılır:



```Python
sayac = 0  # Global değişken

def sayaci_arttir():
    global sayac  # Global sayac'ı değiştireceğimizi belirttik
    sayac += 1

sayaci_arttir()
print(sayac)  # Çıktı: 1
```

### `nonlocal` İfadesi

İç içe fonksiyonlarda, içteki fonksiyonun kendisini çevreleyen dış fonksiyondaki değişkeni güncellemesini sağlar (global değişkeni değil, bir üstteki yerel değişkeni etkiler):



```Python
def ana_sayac():
    deger = 10  # Enclosing değişken
    
    def artir():
        nonlocal deger  # Dış fonksiyondaki 'deger' değişkenini hedef alır
        deger += 5
    
    artir()
    print(deger)  # Çıktı: 15

ana_sayac()
```