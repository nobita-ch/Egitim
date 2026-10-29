Python'da bir kod çalışırken ortaya çıkan ve programın akışını kesintiye uğratan durumlara **İstisna (Exception)** denir. Hata yönetimi, programın beklenmedik durumlarda çökmesini engelleyerek kontrollü çalışmasını sağlar.

## 1. Temel Bloklar ve Görevleri

```python
try:
    # Hata çıkarma potansiyeli olan kodlar
except HataTuru as e:
    # Belirtilen hata oluşursa çalışacak kodlar
else:
    # Hiçbir hata oluşmadığında çalışacak kodlar
finally:
    # Hata olsun veya olmasın HER DURUMDA çalışacak kodlar (Temizlik/Kapatma)
```

|**Blok**|**Zorunluluk**|**Tetiklenme Durumu**|
|---|---|---|
|`try`|Zorunlu|Hata kontrolü yapılacak kodları barındırır.|
|`except`|En az 1 adet zorunlu|`try` içinde hata oluştuğunda devreye girer.|
|`else`|İsteğe bağlı|`try` bloğu **hatasız** tamamlandığında çalışır.|
|`finally`|İsteğe bağlı|Hata çıksın ya da çıkmasın **daima** çalışır (Dosya/bağlantı kapatma için idealdir).|

## 2. Belirli Hata Türlerini Yakalama ve Çoklu `except`

Hataları türüne göre ayrı ayrı yakalamak, hatanın kaynağını doğru yönetmeyi sağlar:

```python
try:
    sayi = int("metin_verisi")  # ValueError üretir
    sonuc = 10 / 0             # ZeroDivisionError üretir
except ValueError as e:
    print(f"Dönüşüm Hatası Yakalandı: {e}")
except ZeroDivisionError as e:
    print(f"Sıfıra Bölme Hatası: {e}")
except Exception as e:
    print(f"Beklenmeyen bir genel hata oluştu: {e}")
```

### Hataları Gruplayarak Yakalama:

```python
try:
    deger = 10 / 0
except (ValueError, ZeroDivisionError, TypeError) as e:
    print(f"Yakalanan aritmetik/tip hatası: {e}")
```

## 3. `try-except-else-finally` Birlikte Kullanımı

```python
def dosya_isle():
    dosya = None
    try:
        print("İşlem başlatılıyor...")
        sayi = int("50")
        sonuc = 100 / sayi
    except (ValueError, ZeroDivisionError) as err:
        print(f"Hesaplama hatası: {err}")
    else:
        print(f"İşlem başarıyla tamamlandı. Sonuç: {sonuc}")
    finally:
        print("Temizlik işlemleri yapıldı (finally bloğu çalıştı).")

dosya_isle()
```

## 4. İstisna Fırlatma: `raise`

Belirli bir iş mantığı kuralı ihlal edildiğinde geliştirici tarafından bilinçli olarak hata üretmek için kullanılır:

```python
def yas_dogrula(yas):
    if not isinstance(yas, int):
        raise TypeError("Yaş değeri tam sayı (int) olmak zorundadır.")
    if yas < 0 or yas > 120:
        raise ValueError("Geçersiz yaş aralığı girildi.")
    return True

try:
    yas_dogrula("yirmi")
except TypeError as err:
    print(f"Doğrulama Başarısız: {err}")
```

## 5. Kullanıcı Tanımlı Özel Hata Sınıfları (Custom Exceptions)

Python'ın yerleşik `Exception` sınıfından miras alınarak projeye özel hata türleri tanımlanabilir:

```python
class YetersizBakiyeHatasi(Exception):
    """Hesap bakiyesi yetersiz olduğunda fırlatılan özel istisna."""
    def __init__(self, mevcut, cekilmek_istenen):
        super().__init__(f"Bakiye yetersiz! Mevcut: {mevcut}, Çekilmek İstenen: {cekilmek_istenen}")

def para_cek(mevcut_bakiye, miktar):
    if miktar > mevcut_bakiye:
        raise YetersizBakiyeHatasi(mevcut_bakiye, miktar)
    return mevcut_bakiye - miktar

try:
    para_cek(100, 250)
except YetersizBakiyeHatasi as err:
    print(f"Özel Hata: {err}")
```