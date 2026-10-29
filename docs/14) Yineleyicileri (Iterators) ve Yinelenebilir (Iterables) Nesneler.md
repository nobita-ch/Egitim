Python'da yineleme (iteration), veri yapıları üzerindeki elemanları sırayla tek tek gezme işlemidir. Bu yapı **Yineleyici Protokolü (Iterator Protocol)** üzerine kuruludur.

## 1. Yinelenebilir Nesne (Iterable) vs. Yineleyici (Iterator)

Bu iki kavram sıklıkla karıştırılır ancak farklı görevlere sahiptir:

|**Özellik**|**Yinelenebilir Nesne (Iterable)**|**Yineleyici (Iterator)**|
|---|---|---|
|**Tanım**|Üzerinde gezinilebilen veri koleksiyonudur.|Gezinme durumunu (konumu) tutan ve bir sonraki elemanı üreten araçtır.|
|**Gereken Metotlar**|`__iter__()`|`__iter__()` ve `__next__()`|
|**Örnekler**|`list`, `tuple`, `str`, `dict`, `set`|`iter(liste)`, jeneratör nesneleri|
|**Doğrudan `next()` Çağrısı**|Yapılamaz (`TypeError` verir).|Yapılabilir (Her çağrıda sonraki elemanı döner).|

```Python
meyveler = ["elma", "muz", "kiraz"]  # Iterable

# print(next(meyveler))  # HATA: TypeError: 'list' object is not an iterator

yineleyici = iter(meyveler)           # Iterator oluşturuldu
print(next(yineleyici))  # "elma"
print(next(yineleyici))  # "muz"
print(next(yineleyici))  # "kiraz"
```

## 2. `for` Döngüsünün Arka Plandaki Çalışma Mekanizması

Python'da bir `for` döngüsü çalıştığında arka planda şu adımlar gerçekleşir:

1. `iter()` fonksiyonunu çağırarak nesneden bir yineleyici (`iterator`) alır.
    
2. Her adımda `next()` fonksiyonunu çalıştırır.
    
3. Veri tükendiğinde fırlatılan **`StopIteration`** istisnasını yakalar ve döngüyü hatasız sonlandırır.
    

```Python
# Standart for döngüsü:
for x in ["A", "B", "C"]:
    print(x)

# Yukarıdaki döngünün birebir arka plan karşılığı:
yineleyici = iter(["A", "B", "C"])
while True:
    try:
        eleman = next(yineleyici)
        print(eleman)
    except StopIteration:
        break  # Veri bittiğinde döngüden çık
```

## 3. `next()` Fonksiyonunda Varsayılan Değer Kullanımı

`next()` fonksiyonuna ikinci bir parametre verilirse, veri bittiğinde `StopIteration` hatası fırlatmak yerine belirtilen varsayılan değeri döndürür:

```Python
sayilar = iter([10, 20])

print(next(sayilar, "Bitti"))  # 10
print(next(sayilar, "Bitti"))  # 20
print(next(sayilar, "Bitti"))  # "Bitti" (Hata fırlatılmaz)
```

## 4. Özel Yineleyici Sınıfı Oluşturma

Bir sınıfı yineleyiciye dönüştürmek için iki temel metot uygulanır:

- **`__iter__()`:** Yineleyicinin kendisini (`self`) döndürür.
    
- **`__next__()`:** Bir sonraki elemanı hesaplar ve döner. Sona ulaşıldığında **`raise StopIteration`** ile işlemi durdurur.
    

```Python
class Sayac:
    def __init__(self, baslangic, bitis):
        self.mevcut = baslangic
        self.bitis = bitis

    def __iter__(self):
        return self

    def __next__(self):
        if self.mevcut <= self.bitis:
            deger = self.mevcut
            self.mevcut += 1
            return deger
        else:
            raise StopIteration

# Kullanım:
sayac_nesnesi = Sayac(1, 5)

for sayi in sayac_nesnesi:
    print(sayi)

# Çıktı:
# 1
# 2
# 3
# 4
# 5
```

## 5. İteratörlerin Tek Seferlik Tüketim Özelliği

Bir yineleyici üzerindeki tüm elemanlar tüketildiğinde (sonuna gelindiğinde) içi boşalır. Tekrar baştan başlamaz; yeniden kullanmak için yeni bir `iter()` oluşturulmalıdır:

```Python
veri = iter([1, 2, 3])

list(veri)  # [1, 2, 3] (Veri tüketildi)
list(veri)  # [] (Yineleyici artık boştur)
```