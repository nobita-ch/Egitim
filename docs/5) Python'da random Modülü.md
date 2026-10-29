Python'da rastgele değerler üretmek için dile gömülü tek bir küresel fonksiyon yerine, zengin işlevlere sahip yerleşik **`random`** modülü kullanılır. Modülü kullanmadan önce `import random` ifadesiyle dahil etmek gerekir.

## 1. Temel Rastgele Sayı Üretme Fonksiyonları

|**Fonksiyon**|**Açıklama**|**Aralık / Davranış**|**Örnek**|
|---|---|---|---|
|`random.randint(a, b)`|$a$ ile $b$ arasında rastgele bir tam sayı (**int**) üretir.|**Her iki sınır da dahildir** ($a \le x \le b$).|`random.randint(1, 10)` $\rightarrow$ 1 ile 10 dahil|
|`random.randrange(start, stop, step)`|Belirtilen adım aralığına göre tam sayı (**int**) üretir.|**Bitiş değeri hariçtir** ($start \le x < stop$).|`random.randrange(1, 10, 2)` $\rightarrow$ 1, 3, 5, 7, 9|
|`random.random()`|0.0 ile 1.0 arasında rastgele ondalıklı sayı (**float**) üretir.|$0.0 \le x < 1.0$ (1.0 hariç)|`random.random()` $\rightarrow$ 0.638...|
|`random.uniform(a, b)`|Belirlenen iki sınır arasında ondalıklı sayı (**float**) üretir.|$a \le x \le b$|`random.uniform(2.5, 7.5)` $\rightarrow$ 4.821...|

## 2. Kod Örnekleri



```Python
import random

# 1 ile 10 arasında (10 dahil) rastgele tam sayı:
sayi_tam = random.randint(1, 10)
print(f"randint(1, 10): {sayi_tam}")

# 1 ile 10 arasında (10 hariç) rastgele tam sayı:
sayi_aralik = random.randrange(1, 10)
print(f"randrange(1, 10): {sayi_aralik}")

# 0.0 ile 1.0 arasında rastgele ondalıklı sayı:
ondalik = random.random()
print(f"random(): {ondalik}")

# 5.0 ile 15.0 arasında rastgele ondalıklı sayı:
ozel_ondalik = random.uniform(5.0, 15.0)
print(f"uniform(5.0, 15.0): {ozel_ondalik}")
```

## 3. Dizilerle / Listelerle Kullanılan Temel `random` Fonksiyonları

`random` modülü yalnızca sayı üretmekle kalmaz; liste ve koleksiyonlar üzerinde seçim ve karıştırma işlemleri de yapar:



```Python
renkler = ["kırmızı", "mavi", "yeşil", "sarı"]

# 1. choice(): Listeden rastgele TEK bir eleman seçer
secilen = random.choice(renkler)
print(f"Seçilen: {secilen}")

# 2. shuffle(): Listenin elemanlarının sırasını yerinde (in-place) karıştırır
random.shuffle(renkler)
print(f"Karıştırılmış liste: {renkler}")

# 3. sample(): Listeden tekrar etmeyecek şekilde 'k' adet rastgele eleman seçer
orneklem = random.sample(renkler, k=2)
print(f"Seçilen 2 eleman: {orneklem}")
```

## 4. `random.seed()` Mantığı (Tekrarlanabilirlik)

`random` modülü aslında **sözde rastgele (pseudo-random)** algoritmalar (Mersenne Twister) kullanır. Test veya hata ayıklama yaparken aynı rastgele sayı serisini tekrar elde etmek için `seed()` kullanılır:



```Python
random.seed(42)
print(random.randint(1, 100))  # Çekirdek 42 olduğu sürece her çalıştırmada aynı sonucu verir
```