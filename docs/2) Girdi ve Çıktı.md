Python'da kullanıcı ile etkileşim kurmak, ekrana bilgi basmak ve kullanıcıdan veri almak için `print()` ve `input()` fonksiyonları kullanılır.

## 1. Çıktı Alma: `print()` Fonksiyonu

`print()` fonksiyonu, parantez içine yazılan verileri standart çıktı birimine (genellikle terminal/ekran) yazdırır.

### Temel Yazdırma Kuralları

- **Metinler (String):** Tek tırnak (`'...'`) veya çift tırnak (`"..."`) içinde yazılır.
    
- **Sayılar ve Değişkenler:** Tırnak işareti olmadan doğrudan yazılır.
    
- **Çok Satırlı Metinler:** Üçlü tırnak (`"""..."""` veya `'''...'''`) kullanılarak satır sonları korunarak yazdırılabilir.
    



```Python
print("Python Programlama")
print('Tek tırnak da geçerlidir')
print(100)

print("""
Bu metin
birden fazla
satırdan oluşuyor.
""")
```

### `print()` Fonksiyonunun Özel Parametreleri

|**Parametre**|**Görevi**|**Varsayılan Değer**|
|---|---|---|
|`*objects`|Ekrana yazdırılacak bir veya birden fazla değer/değişken|—|
|`sep`|Birden fazla değer yazdırılırken aralarına koyulacak ayırıcı karakter|`' '` (Boşluk)|
|`end`|Çıktının sonuna eklenecek karakter (alt satıra geçmeyi veya aynı satırda kalmayı belirler)|`'\n'` (Yeni satır)|
|`file`|Çıktının ekrana değil, bir dosyaya veya akışa yönlendirilmesini sağlar|`sys.stdout`|
|`flush`|Çıktı tamponunun (buffer) anında temizlenip ekrana basılmasını zorlar|`False`|

### Parametre Kullanım Örnekleri



```Python
# sep parametresi ile özel ayırıcı tanımlama
print("17", "02", "2026", sep="/")
# Çıktı: 17/02/2026

print("Adım 1", "Adım 2", "Adım 3", sep=" ---> ")
# Çıktı: Adım 1 ---> Adım 2 ---> Adım 3

# end parametresi ile satır sonunu değiştirme (aynı satırda devam ettirme)
print("Yükleniyor", end="...")
print("Tamamlandı!")
# Çıktı: Yükleniyor...Tamamlandı!
```

## 2. Metin Formatlama Yöntemleri (f-string)

Metinler ve değişkenler ekrana basılırken virgülle ayırmak, `+` ile birleştirmek veya en çok tercih edilen yöntem olan **f-string** yapısını kullanmak mümkündür:



```Python
sehir = "Ankara"
plaka = 6

# 1. Yöntem: Virgül kullanımı (otomatik boşluk ekler)
print("Şehir:", sehir, "- Kod:", plaka)

# 2. Yöntem: f-string (Önerilen modern standart)
print(f"Şehir: {sehir} - Kod: {plaka}")
```

## 3. Girdi Alma: `input()` Fonksiyonu

`input()` fonksiyonu kullanıcıdan klavye yoluyla veri almak için kullanılır.

- Fonksiyon çalıştığı anda programın yürütülmesi durur ve beklemeye geçer.
    
- Kullanıcı bir metin yazıp **Enter** tuşuna bastığı anda girilen veri değişkene aktarılır ve program bir sonraki satırdan çalışmaya devam eder.
    

### Temel Kullanım



```Python
# Kullanıcıya mesaj göstererek girdi alma
sehir = input("Bulunduğunuz şehri girin: ")
print(f"Girilen şehir: {sehir}")

# Parametresiz kullanım (mesaj vermeden sadece girdi bekler)
input()  # Genellikle konsol ekranının kapanmasını engellemek veya bir tuşa basılmasını beklemek için kullanılır
```

### Tip Dönüşümü (Type Casting)

`input()` fonksiyonu üzerinden gelen tüm veriler **her zaman `str` (metin) tipindedir**. Sayısal bir işlem yapılacaksa tür dönüşümü zorunludur:



```Python
# Kullanıcı rakam girse bile metin olarak okunur
girilen_fiyat = input("Ürün fiyatı: ")  # Tip: str

# Matematiksel işlem için tam sayıya (int) veya ondalıklı sayıya (float) çevrilmelidir
fiyat = float(girilen_fiyat)
kdv_dahil = fiyat * 1.20
print(f"KDV Dahil Tutar: {kdv_dahil}")
```

> **Önemli Not:** Eğer `int()` veya `float()` dönüşümü yapılırken kullanıcı sayı yerine harf veya geçersiz bir karakter girerse Python `ValueError` hatası vererek programı durdurur.

## 4. Tek Satırda Çoklu Komut (Noktalı Virgül: `;`)

Python'da normalde her komut ayrı bir satıra yazılır. Ancak yeni bir blok (örneğin `if`, `for`, `def` gibi iki nokta `:` ile başlayan yapılar) başlatmadığı sürece, birden fazla ifade aynı satıra noktalı virgül (`;`) ile bağlanabilir:



```Python
print("Başlangıç"); print("Bitiş")
x = 10; y = 20; print(x + y)
```