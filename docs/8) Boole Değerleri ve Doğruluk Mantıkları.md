Boole veri tipi (`bool`), mantıksal doğruluk durumlarını temsil eden yalnızca iki yerleşik değere sahiptir: **`True`** ve **`False`**.

- Python'da `bool`, `int` sınıfının bir alt sınıfıdır (_subclass_).
    
- Sayısal karşılık olarak `True == 1` ve `False == 0` değerini taşır; aritmetik işlemlerde sayı gibi davranabilir (`True + True == 2`).
    

## 1. Karşılaştırma İfadeleri ve Koşullu Bloklar

Herhangi bir karşılaştırma işlemi yürütüldüğünde Python sonucu otomatik olarak bir `bool` değeri olarak döndürür:



```Python
print(10 > 9)   # True
print(10 == 9)  # False
print(10 < 9)   # False

# Koşullu kontrol (if/else) yapısında kullanımı:
esik_degeri = 100
mevcut_deger = 45

if mevcut_deger >= esik_degeri:
    print("Eşik aşıldı.")
else:
    print("Değer sınırın altında.")
```

## 2. `bool()` Fonksiyonu: Truthy ve Falsy Kavramı

Python'da her nesne mantıksal bir bağlamda (`if` bloklarında veya `bool()` fonksiyonu içinde) değerlendirildiğinde **doğru (truthy)** ya da **yanlış (falsy)** olarak ele alınır.

### Falsy (Mantıksal Olarak `False` Olan) Değerler

Aşağıdaki değerler `bool()` içine alındığında her zaman `False` döner:



```Python
# 1. Sabitler
print(bool(False))  # False
print(bool(None))   # False

# 2. Sayısal Sıfır Değerleri
print(bool(0))      # False
print(bool(0.0))    # False
print(bool(0j))     # False

# 3. Boş Koleksiyonlar ve Boş Diziler
print(bool(""))     # False (Boş string)
print(bool([]))     # False (Boş liste)
print(bool(()))     # False (Boş demet/tuple)
print(bool({}))     # False (Boş sözlük)
print(bool(set()))  # False (Boş küme)
print(bool(range(0))) # False
```

### Truthy (Mantıksal Olarak `True` Olan) Değerler

Falsy listesinde yer almayan geriye kalan **tüm dolu veriler ve sıfır dışındaki tüm sayılar** `True` kabul edilir:



```Python
print(bool("Metin"))      # True
print(bool(42))           # True
print(bool(-15))          # True (Negatif sayılar da True'dur)
print(bool([0]))          # True (İçinde eleman olan liste, elemanı 0 olsa dahi doludur)
```

## 3. Boole Dönen Fonksiyonlar ve `isinstance()`

Fonksiyonlar mantıksal kontroller sonucunda `True` veya `False` dönecek şekilde tasarlanabilir:



```Python
def baglanti_var_mi():
    return True

if baglanti_var_mi():
    print("Bağlantı kuruldu.")
```

Python'ın yerleşik `isinstance()` fonksiyonu, bir değişkenin belirli bir veri türüne ait olup olmadığını kontrol eder ve geriye Boole değeri döner:



```Python
deger = 250

# Tip kontrolü (type() yerine önerilen yöntem):
print(isinstance(deger, int))            # True
print(isinstance(deger, (int, float)))   # True (int veya float'tan biri mi?)
print(isinstance(deger, str))            # False
```

## 4. Mantıksal Operatörler ve Geriye Dönen Değerler

`and` ve `or` operatörleri işlem yaparken yalnızca `True`/`False` üretmekle kalmaz; sonuca karar veren **değerin kendisini** döndürür:

- **`or` Operatörü:** İlk bulduğu _truthy_ değeri döner. Tümü _falsy_ ise en son operandı döner.
    
- **`and` Operatörü:** İlk bulduğu _falsy_ değeri döner. Tümü _truthy_ ise en son operandı döner.
    



```Python
# or: İlk truthy değeri seçer
print("Python" or "Veri")  # "Python"
print("" or "Yedek Değer")  # "Yedek Değer"

# and: İlk falsy değeri seçer, yoksa sonuncuyu verir
print("A" and "B")         # "B"
print(0 and "Python")      # 0
```

## 5. Kısa Devre Değerlendirme (Short-Circuit Evaluation)

Mantıksal ifadeler soldan sağa çözülürken, nihai sonuç sol taraftaki ifade ile kesinleştiğinde **sağ taraftaki kodlar hiç çalıştırılmaz**:



```Python
def islem_yap():
    print("İşlem fonksiyonu tetiklendi!")
    return True

# 1. or Durumu: Sol taraf 'True' olduğu için sağ tarafı çalıştırmadan geçer
sonuc1 = True or islem_yap()
# Çıktı: Ekrana yazı basılmaz, sonuc1 = True olur

# 2. and Durumu: Sol taraf 'False' olduğu için sağ tarafı çalıştırmadan geçer
sonuc2 = False and islem_yap()
# Çıktı: Ekrana yazı basılmaz, sonuc2 = False olur
```

```Python
liste = []
# Eğer kısa devre olmasaydı liste[0] kısmı IndexError verirdi:
 if len(liste) > 0 and liste[0] == "veri":
     print("İlk eleman eşleşti.")
 ```