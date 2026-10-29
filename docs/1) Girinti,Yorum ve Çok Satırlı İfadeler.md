

## 1. Girinti (Indentation)

Girinti, bir kod satırının başındaki boşluk miktarını ifade eder. C, C++ veya Java gibi diller blokları sınırlandırmak için **süslü parantez `{}`** kullanırken, Python **kod bloklarını (scope) belirlemek için doğrudan girintiyi kullanır**.

Python, okunabilirliği ön planda tutan temiz bir sözdizimine (syntax) sahiptir.

### Temel Kural

Bir bloğun başladığını belirten iki nokta (`:`) işaretinden sonra gelen satırlar mutlaka girintili olmalıdır. Girinti yapılmazsa Python `IndentationError` hatası verir.



```Python
# Doğru:
if 5 > 2:
    print("5, 2'den büyüktür!")

# Hatalı (IndentationError verir):
if 5 > 2:
print("5, 2'den büyüktür!")
```

### Girinti Standartları ve Kuralları

- **Boşluk Miktarı:** En az 1 boşluk bırakılması zorunludur. Ancak Python'ın resmi stil kılavuzuna (**PEP 8**) göre endüstri standardı **4 adet boşluktur**.
    
- **Blok İçi Tutarlılık:** Aynı blok seviyesindeki tüm satırlar tam olarak aynı sayıda boşluğa sahip olmalıdır:
    



```Python
# Hatalı (Aynı blokta farklı boşluk sayısı):
if 5 > 2:
    print("İlk satır")
        print("İkinci satır")  # IndentationError verir

# Doğru:
if 5 > 2:
    print("İlk satır")
    print("İkinci satır")
```

- **Tab ve Boşluk Uyarısı:** Python 3'te aynı dosya içinde Tab tuşu ile Boşluk (Space) tuşunun karıştırılarak kullanılması `TabError` hatasına yol açar. Editörünüzü Tab tuşuna basıldığında 4 boşluk bırakacak şekilde ayarlamak standarttır.
    

## 2. Yorum Satırları (Comments)

Yorumlar; kodun amacını açıklamak, okunabilirliği artırmak veya test sırasında belirli kodların çalışmasını geçici olarak engellemek için kullanılır. Python yorumları çalıştırmaz, görmezden gelir.

### Tek Satırlı Yorumlar

`#` karakteri ile başlar. `#` işaretinden satırın sonuna kadar olan kısım yorum olarak işlenir.



```Python
# Bu tam satırlık bir açıklamadır
print("Merhaba, Dünya!")
```

### Satır İçi Yorumlar (Inline Comments)

Kod satırının hemen sağına yazılarak o satırdaki işlemi açıklamak için kullanılır:



```Python
x = 10  # Başlangıç değeri atanıyor
```

### Çok Satırlı Yorumlar ve Docstring Kavramı

Python'da C tarzı (`/* ... */`) özel bir çok satırlı yorum sözdizimi yoktur.

**1. Yöntem (Standart ve Önerilen):** Her satırın başına `#` koymak:



```Python
# Bu yorum
# birden fazla
# satıra yayılmıştır.
```

**2. Yöntem (Üçlü Tırnak Metin Sabiti):** Üçlü tırnak (`"""..."""` veya `'''...'''`) içine alınan ve herhangi bir değişkene atanmayan metinler Python tarafından belleğe alınır ancak çalıştırılmadan geçilir:



```
"""Python
Bu metin bir değişkene atanmadığı için
Python tarafından yürütülmez ve 
çok satırlı yorum gibi davranır.
"""
print("Python çalışıyor.")
```

> **Önemli Not (Docstring):** Üçlü tırnaklar bir fonksiyonun, sınıfın veya modülün **ilk satırında** yer alırsa, Python bunu yorum değil **belgelendirme metni (Docstring)** olarak algılar ve `help()` fonksiyonuyla erişilebilir kılar.

## 3. Çok Satırlı İfadeler (Line Continuation)

Python'da normal şartlarda her satır yeni bir ifade (statement) olarak kabul edilir ve satır sonu (`Enter`) ile biter.

### Açık Satır Devamı (Ters Bölü: `\`)

Uzun bir matematiksel işlemi veya ifadeyi alt satıra taşımak için satırın sonuna **ters bölü (`\`)** işareti konur:



```Python
toplam = 10 + \
         20 + \
         30
```

### Örtük Satır Devamı (Parantez İçi - Önerilen Yöntem)

Parantez `()`, köşeli parantez `[]` veya süslü parantez `{}` içindeki ifadelerde ters bölü (`\`) kullanmaya gerek yoktur. Python parantez kapanana kadar ifadenin devam ettiğini otomatik olarak anlar:



```Python
# Liste tanımlama
gunler = [
    'Pazartesi', 'Salı', 'Çarşamba',
    'Perşembe', 'Cuma'
]

# Parantez içi matematiksel işlem
sonuc = (
    100 + 200 +
    300 + 400
)
```

## 4. Tek Satırda Birden Fazla İfade (Noktalı Virgül: `;`)

Python'da zorunlu olmasa da, birden fazla bağımsız ifadeyi aynı satıra yazmak için aralarına noktalı virgül (`;`) konabilir (okunabilirlik açısından sık kullanılması önerilmez):

Python

```
x = 5; y = 10; print(x + y)
```
