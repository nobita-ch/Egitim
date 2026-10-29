---
title: Giriş
hide:
  - navigation
  - toc
  - footer
---

# Giriş

Ders materyallerini görmek için sana verilen kullanıcı adı ve şifreyle giriş yap.

<form id="giris-formu" class="giris-formu" autocomplete="on">
  <label for="giris-ad">Kullanıcı adı</label>
  <input id="giris-ad" name="giris-ad" autocomplete="username" autocapitalize="none" spellcheck="false" required>
  <label for="giris-sifre">Şifre</label>
  <input id="giris-sifre" name="giris-sifre" type="password" autocomplete="current-password" required>
  <button type="submit" class="md-button md-button--primary">Giriş yap</button>
  <p id="giris-mesaj" class="giris-mesaj" role="alert" aria-live="polite"></p>
</form>
