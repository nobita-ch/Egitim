Python'da program akışını belirli şartlara ve mantıksal doğruluk durumlarına (`True`/`False`) göre yönlendirmek için koşul blokları kullanılır.

- Her koşul satırının sonuna iki nokta (`:`) konur.
    
- Koşula bağlı kod bloğu mutlaka **girintili (indentation - 4 boşluk)** yazılmalıdır.
    

## 1. Temel `if` İfadesi

Belirtilen koşul **`True`** olduğu sürece altındaki kod bloğu çalıştırılır; `False` ise blok tamamen atlanır.

```Python
hiz_limiti = 90
arac_hizi = 110

if arac_hizi > hiz_limiti:
    print("Hız sınırı aşıldı!")
```

Doğrudan Boole veya Truthy/Falsy değişkenler ile kontrol:


```Python
sistem_aktif = True

if sistem_aktif:
    print("Sistem çalışır durumda.")
```

Mantıksal operatörlerle çoklu koşul:


```Python
sicaklik = 24
nem = 40

if sicaklik > 20 and nem < 60:
    print("Ortam koşulları ideal.")
```

## 2. `elif` İfadesi (Else If)

Önceki koşullar `False` çıktığında sıradaki koşulu test etmek için kullanılır.

- `if` bloğundan sonra gelir.
    
- İhtiyaca göre **istendiği kadar (birden fazla)** `elif` bloğu eklenebilir.
    
- Yukarıdan aşağıya doğru kontrol edilir; **ilk doğru çıkan blok çalıştığı anda** diğer tüm `elif` ve `else` blokları atlanır.
    

```Python
puan = 75

if puan >= 90:
    print("Derece: A")
elif puan >= 80:
    print("Derece: B")
elif puan >= 70:
    print("Derece: C")
elif puan >= 60:
    print("Derece: D")
```

## 3. `else` İfadesi

Yukarıdaki `if` ve tüm `elif` koşullarının **hiçbiri sağlanmadığında (`False` olduğunda)** devreye giren varsayılan bloktur.

- Bir koşul yapısında **yalnızca 1 adet `else`** bulunabilir.
    
- Her zaman yapının **en sonunda** yer alır.
    
- Yanına herhangi bir koşul ifadesi yazılmaz.
    

```Python
x = 10
y = 20

if x > y:
    print("x büyüktür y'den")
elif x == y:
    print("x ve y eşittir")
else:
    print("y büyüktür x'ten")
```

## 4. `if` Bloklarında `pass` Deyimi

Python'da `if` gövdesi boş bırakılamaz (`IndentationError` verir). Kodun o an için bir işlem yapmaması isteniyorsa yer tutucu olarak **`pass`** kullanılır:


```Python
hata_kodu = 404

if hata_kodu == 200:
    pass  # İşlem yapılmayacak, hata vermeden geçer
else:
    print("Hata tespit edildi.")
```

## 5. İç İçe Koşul Yapıları (Nested If)

Bir `if` bloğunun içerisine başka bir `if-elif-else` yapısı yerleştirilebilir:

```Python
giris_yapildi = True
yetki_seviyesi = 3

if giris_yapildi:
    if yetki_seviyesi >= 2:
        print("Yönetici paneline erişim sağlandı.")
    else:
        print("Yetkiniz yetersiz.")
else:
    print("Lütfen önce giriş yapın.")
```

## 6. Tek Satırlık Koşul İfadesi (Ternary Operator / Short Hand If)

Basit bir atama veya tek satırlık bir karar mekanizması için `if-else` yapısı tek bir satıra indirgenebilir:

### Değişkene Atama Sözdizimi:

```Python
degisken = dogruysa_deger if kosul else yanlissa_deger
```


```Python
sayi = 15
durum = "Çift" if sayi % 2 == 0 else "Tek"
print(durum)  # "Tek"
```

### Tek Satırda Doğrudan Çalıştırma:

```Python
a = 10
b = 20

# Tek koşullu kısa if:
if a < b: print("a küçüktür b")

# Kısa if-else (Ternary):
print("A") if a > b else print("B")

# Çoklu kısa if-elif-else:
print("A") if a > b else print("Eşit") if a == b else print("B")
```

## 7. Python 3.10+ Örüntü Eşleme: `match-case`

C veya Java'daki `switch-case` yapısının Python'daki gelişmiş karşılığıdır. Belirli bir değerin farklı durumlarla eşleşmesini daha temiz bir sözdizimiyle kontrol eder:

```Python
durum_kodu = 404

match durum_kodu:
    case 200:
        print("İstek Başarılı")
    case 400:
        print("Hatalı İstek")
    case 404:
        print("Sayfa Bulunamadı")
    case 500:
        print("Sunucu Hatası")
    case _:
        print("Bilinmeyen Durum Kodu")  # Varsayılan (else yerine geçen) durum
```