Python'da string (`str`), Unicode karakterlerden oluşan sıralı ve **değiştirilemez (immutable)** bir veri türüdür.

- Python'da ayrı bir `char` (tek karakter) veri tipi yoktur; tek bir karakter, uzunluğu `1` olan bir `str` nesnesidir.
    
- String üzerinde yapılan değişiklikler orijinal metni değiştirmez; hafızada yeni bir string nesnesi üretir.
    

## 1. String Tanımlama ve Çok Satırlı Metinler

Tek tırnak (`'...'`), çift tırnak (`"..."`) veya çok satırlı metinler için üçlü tırnak (`'''...'''` / `"""..."""`) kullanılır:



```Python
metin1 = 'Python Programlama'
metin2 = "Veri Analizi"

cok_satirli = """Bu metin
birden fazla satır
boyunca devam eder."""
```

## 2. İndeksleme (Indexing) ve Dilimleme (Slicing)

Stringler sıralı dizi mantığıyla çalıştığından her karaktere 0 tabanlı indekslerle erişilebilir.

```
 İndeks (Pozitif):   0   1   2   3   4   5
 Karakter:           P   y   t   h   o   n
 İndeks (Negatif):  -6  -5  -4  -3  -2  -1
```

### Dilimleme Sözdizimi: `metin[start:stop:step]`

- `start`: Başlangıç indeksi (dahil)
    
- `stop`: Bitiş indeksi (**hariç**)
    
- `step`: Atlama/adım miktarı (negatif verilirse ters yönde ilerler)
    



```Python
dil = "Python Programlama"

# Belirli aralık alma
print(dil[0:6])    # "Python" (0'dan 6'ya kadar, 6 hariç)
print(dil[:6])     # "Python" (baştan 6'ya kadar)
print(dil[7:])     # "Programlama" (7'den sona kadar)

# Negatif indeksleme
print(dil[-11:-4]) # "Program"

# Adım (Step) kullanımı ve metni ters çevirme
print(dil[::2])    # "Pto rgalm" (2'şer atlayarak)
print(dil[::-1])   # "amalmargorP nohtyP" (Metni tamamen tersine çevirir)
```

## 3. String İşlemleri ve Fonksiyonlar

```Python
ornek = "Açık Kaynak Yazılım"

# Uzunluk bulma
print(len(ornek))  # 19 (boşluklar da birer karakterdir)

# Varlık kontrolü (in / not in)
print("Kaynak" in ornek)       # True
print("Donanım" not in ornek)  # True

# Metin birleştirme (+) ve tekrarlama (*)
baslik = "Python" + " " + "3"  # "Python 3"
cizgi = "-" * 10               # "----------"

# Döngü ile karakterler üzerinde gezinme
for harf in "Veri":
    print(harf)
```

## 4. String Biçimlendirme (f-string) ve `format`

Python'da metinler ile değişkenleri, sayısal formatları veya hesaplama sonuçlarını birleştirmek için temel olarak iki modern yöntem kullanılır: **`f-string`** (Python 3.6+) ve **`str.format()`** metodu.

### 1. `str.format()` Yöntemi (Python 3.0+)

f-string öncesinde standart olarak kullanılan yöntemdir. Dizgi içindeki `{}` yer tutucularına parametre olarak verilen değerleri yerleştirir.

### Temel Kullanım Şekilleri:


```Python
# 1. Sıralı / Otomatik Yerleşim:
metin = "Kullanıcı: {}, Durum Kodu: {}".format("sistem_yoneticisi", 200)
print(metin)  # Kullanıcı: sistem_yoneticisi, Durum Kodu: 200

# 2. Konumsal İndeks Kullanımı (Positional Index):
metin = "{1} sunucusu {0} portunu dinliyor. Tekrar: {1}".format(8080, "Web")
print(metin)  # Web sunucusu 8080 portunu dinliyor. Tekrar: Web

# 3. İsimlendirilmiş Argümanlar (Named Arguments):
metin = "İşlem: {islem}, Süre: {sure} sn".format(islem="Yedekleme", sure=1.45)
print(metin)  # İşlem: Yedekleme, Süre: 1.45 sn

# 4. Sözlük ve Liste Açma ile Kullanım:
sunucu_bilgi = {"ip": "192.168.1.1", "hiz": 1000}
metin = "IP: {ip} - Hız: {hiz} Mbps".format(**sunucu_bilgi)
print(metin)  # IP: 192.168.1.1 - Hız: 1000 Mbps
```

### 2. Modern Standart: F-Strings (Formatted String Literals)

Python 3.6 ile eklenen `f"..."` sözdizimi, hem okunabilirliği en üst düzeye çıkarır hem de arka planda optimize edildiği için `format()` metoduna göre **daha hızlıdır**.



```Python
fiyat = 59
vergi = 0.20

# Doğrudan değişken ve matematiksel işlem gömme:
print(f"Toplam Tutar: {fiyat * (1 + vergi)} TL")

# Yer tutucu içinde fonksiyon ve metot çağırma:
etiket = "sistem hatası"
print(f"Uyarı: {etiket.upper()}")

# Yer tutucu içinde tek satırlık koşul (Ternary If):
puan = 85
print(f"Sonuç: {'Geçti' if puan >= 50 else 'Kaldı'}")
```

#### Kritik Özellikler:

- **Süslü Parantez Kaçışı (`{{` ve `}}`):** f-string içinde ekrana literal `{}` basmak için çift parantez kullanılır:
    
    ```Python
    sayi = 10
    print(f"{{Değer}}: {sayi}")  # Çıktı: {Değer}: 10
    ```
    
- **Hata Ayıklama Modu (`=` Belirteci - Python 3.8+):** Değişkenin hem adını hem değerini hızlıca yazdırmak için kullanılır:
    
    ```Python
    oran = 0.85
    print(f"{oran=}")  # Çıktı: oran=0.85
    ```
    

### 3. Biçimlendirme Belirteçleri (Format Specifiers) Tablosu

Yer tutucu içerisine `:` işareti eklenerek verinin ekranda nasıl konumlanacağı ve sayının nasıl temsil edileceği belirlenir.

|**Belirteç**|**Açıklama**|**Örnek İfade**|**Çıktı**|
|---|---|---|---|
|`:<N` $N$ '`**sola`'Sol `:` f"{'Sol':<8}"` alanda karakterlik yaslar**|>N`|$N$ karakterlik alanda **sağa yaslar**|`f"{'Sağ':>8}"`|
|`:^N`|$N$ karakterlik alanda **ortalar**|`f"{'Orta':^8}"`|`' Orta '`|
|`:=N`|İşareti en sola, dolguyu araya yerleştirir|`f"{-42:=6}"`|`'- 42'`|
|`:+`|Pozitif/negatif işaretini daima gösterir|`f"{42:+}"`|`'+42'`|
|`:-`|Sadece negatif sayılarda eksi koyar (varsayılan)|`f"{42:-}"`|`'42'`|
|`:` _(boşluk)_|Pozitif sayıların önüne bir boşluk bırakır|`f"{42: }"`|`' 42'`|
|`:,`|Binlik basamakları virgülle ayırır|`f"{1000000:,}"`|`'1,000,000'`|
|`:_`|Binlik basamakları alt çizgiyle ayırır|`f"{1000000:_}"`|`'1_000_000'`|
|`:.Nf`|$N$ basamaklı sabit kayan noktalı sayı (ondalık)|`f"{3.14159:.2f}"`|`'3.14'`|
|`:.N%`|Sayıyı yüzdeye çevirir ($N$ basamaklı)|`f"{0.255:.1%}"`|`'25.5%'`|
|`:b`|İkilik (_Binary_) taban karşılığı|`f"{10:b}"`|`'1010'`|
|`:o`|Sekizlik (_Octal_) taban karşılığı|`f"{10:o}"`|`'12'`|
|`:x` / `:X`|Onaltılık (_Hexadecimal_) taban (küçük/büyük harf)|`f"{255:x}"` / `f"{255:X}"`|`'ff'` / `'FF'`|
|`:c`|Sayının karşılık geldiği Unicode karakteri|`f"{65:c}"`|`'A'`|
|`:e` / `:E`|Bilimsel gösterim (_Exponential_)|`f"{1500:e}"`|`'1.500000e+03'`|

### 4. Özel Dolgu Karakterleri ve Tarih Formatlama

#### Özel Dolgu Karakteri Tanımlama

Hizalama belirteçlerinin önüne herhangi bir karakter yazılarak boşluk yerine o karakterle doldurma yapılabilir:


```Python
baslik = " RAPOR "
print(f"{baslik:=^20}")  # "====== RAPOR ======="
print(f"{baslik:*<15}")  # " RAPOR *********"

# Sıfırla doldurma (Sayılar için standart):
kayit_no = 7
print(f"{kayit_no:05d}")  # "00007"
```

### Tarih ve Saat (`datetime`) Formatlama

`datetime` nesneleri yer tutucu içinde doğrudan C/POSIX tarih format kodlarıyla biçimlendirilebilir:

```Python
from datetime import datetime

simdi = datetime(2026, 8, 29, 21, 45)

print(f"Tarih: {simdi:%d.%m.%Y}")        # Tarih: 29.08.2026
print(f"Saat: {simdi:%H:%M}")            # Saat: 21:45
print(f"Tam Format: {simdi:%Y-%m-%d %H:%M:%S}") # Tam Format: 2026-08-29 21:45:00
```

## 5. Kaçış Karakterleri (Escape Characters)

Özel anlama sahip veya doğrudan yazılamayan karakterleri string içine eklemek için ters bölü (`\`) kullanılır:

|**Kaçış Dizisi**|**Görevi**|**Örnek**|**Çıktı**|
|---|---|---|---|
|`\'`|Tek Tırnak|`'Python\'un gücü'`|Python'un gücü|
|`\"`|Çift Tırnak|`"\"Linux\" Çekirdeği"`|"Linux" Çekirdeği|
|`\\`|Ters Bölü|`"C:\\dosyalar\\kod"`|C:\dosyalar\kod|
|`\n`|Yeni Satır (_New Line_)|`"Satır 1\nSatır 2"`|Satır 1<br><br>  <br><br>Satır 2|
|`\t`|Tab Boşluğu|`"Sütun 1\tSütun 2"`|Sütun 1 Sütun 2|

## 6. En Sık Kullanılan String Metotları (Kod Örnekleriyle)

```Python
metin = "  Python ile Yazılım Geliştirme  "

# 1. Boşluk Temizleme
print(metin.strip())   # "Python ile Yazılım Geliştirme" (Baştaki/sondaki boşlukları siler)
print(metin.lstrip())  # Sadece soldaki boşlukları siler
print(metin.rstrip())  # Sadece sağdaki boşlukları siler

# 2. Harf Büyüklüğü Dönüşümleri
print(metin.lower())       # Tüm harfleri küçük yapar
print(metin.upper())       # Tüm harfleri büyük yapar
print(metin.title())       # Her kelimenin ilk harfini büyük yapar
print(metin.capitalize())  # Sadece ilk cümlenin ilk harfini büyük yapar

# 3. Arama ve Sayma
veri = "makine öğrenmesi ve derin öğrenme"
print(veri.count("öğrenme"))  # 2 (Kaç defa geçtiğini sayar)
print(veri.find("derin"))     # 20 (Başlangıç indeksini döner, bulamazsa -1 döner)
print(veri.index("derin"))    # 20 (Bulamazsa ValueError fırlatır!)

# 4. Değiştirme (Replace)
print(veri.replace("makine", "robotik"))  # "robotik öğrenmesi ve derin öğrenme"

# 5. Bölme ve Birleştirme (Split & Join)
etiketler = "python,yapay-zeka,robotik"
parcalar = etiketler.split(",")  # ['python', 'yapay-zeka', 'robotik']
print(parcalar)

birlestirilmis = " - ".join(parcalar)  # "python - yapay-zeka - robotik"
print(birlestirilmis)

# 6. Başlangıç / Bitiş ve Tip Kontrolleri
dosya = "rapor.pdf"
print(dosya.startswith("rapor"))  # True
print(dosya.endswith(".pdf"))      # True
print("12345".isdigit())          # True (Tamamı rakam mı?)
print("Python3".isalnum())        # True (Alfanümerik mi?)
print("   ".isspace())            # True (Tamamen boşluk mu?)
```

## 7. Tüm Yerleşik String Metotları Özeti

|**Metot**|**Açıklama**|**Metot**|**Açıklama**|
|---|---|---|---|
|`capitalize()`|İlk karakteri büyük harfe çevirir|`ljust()`|Metni sola yaslar (belirtilen genişlikte)|
|`casefold()`|Agresif küçük harfe dönüştürme (karşılaştırmalar için)|`lower()`|Tüm harfleri küçültür|
|`center()`|Metni ortalar|`lstrip()`|Sol taraftaki boşlukları/karakterleri siler|
|`count()`|Değerin metinde kaç kez geçtiğini sayar|`maketrans()`|Karakter değişim tablosu oluşturur|
|`encode()`|Dizeyi bayt formatında kodlar|`partition()`|Metni ilk eşleşmeye göre 3 elemanlı tuple yapar|
|`endswith()`|Belirtilen değerle bitip bitmediğini kontrol eder (`bool`)|`replace()`|Belirtilen parçayı yeni değerle değiştirir|
|`expandtabs()`|Sekme (`\t`) boyutunu ayarlar|`rfind()`|Sondan arama yapar, bulamazsa `-1` döner|
|`find()`|Değeri arar, bulduğu ilk indeksi döner (`-1` döner)|`rindex()`|Sondan arar, bulamazsa hata fırlatır|
|`format()`|Metin biçimlendirme yapar (eski yöntem)|`rjust()`|Metni sağa yaslar|
|`index()`|Değeri arar, bulduğu indeksi döner (`ValueError` verir)|`rpartition()`|Metni sondaki eşleşmeye göre böler|
|`isalnum()`|Tamamı alfanümerik mi kontrol eder|`rsplit()`|Sağdan başlayarak böler|
|`isalpha()`|Tamamı harflerden mi oluşuyor kontrol eder|`rstrip()`|Sağ taraftaki boşlukları/karakterleri siler|
|`isascii()`|Tamamı ASCII karakterlerden mi oluşuyor kontrol eder|`split()`|Belirtilen ayırıcıya göre listeye böler|
|`isdecimal()`|Tamamı ondalık tabanlı rakam mı kontrol eder|`splitlines()`|Satır sonlarından bölerek liste yapar|
|`isdigit()`|Tamamı rakam mı kontrol eder|`startswith()`|Belirtilen değerle başlıyor mu kontrol eder|
|`isidentifier()`|Geçerli bir değişken ismi mi kontrol eder|`strip()`|İki taraftaki boşlukları siler|
|`islower()`|Tamamı küçük harf mi kontrol eder|`swapcase()`|Büyükleri küçük, küçükleri büyük yapar|
|`isnumeric()`|Tamamı sayısal mı kontrol eder|`title()`|Her kelimenin ilk harfini büyütür|
|`isprintable()`|Tamamı yazdırılabilir karakter mi kontrol eder|`translate()`|`maketrans` tablosuna göre harfleri çevirir|
|`isspace()`|Tamamı boşluk karakteri mi kontrol eder|`upper()`|Tüm harfleri büyütür|
|`istitle()`|Başlık formatına uygun mu kontrol eder|`zfill()`|Başına belirtilen uzunluğa kadar sıfır ekler|
|`isupper()`|Tamamı büyük harf mi kontrol eder|`join()`|Bir diziyi/listeyi string ile birleştirir|

