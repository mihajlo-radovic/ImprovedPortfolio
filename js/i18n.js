const i18n = {
  currentLocale: localStorage.getItem('locale') || 'en',
  translations: {},

  async load(locale) {
    const res = await fetch(`../localization/${locale}.json`);
    this.translations = await res.json();
    this.currentLocale = locale;
    localStorage.setItem('locale', locale);
    this.apply();
  },

  get(key) {
    return key.split('.').reduce((obj, k) => obj?.[k], this.translations) ?? key;
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = this.get(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.get(el.dataset.i18nPlaceholder);
    });
    document.documentElement.lang = this.currentLocale;
  },

  toggle() {
    const next = this.currentLocale === 'en' ? 'sr' : 'en';
    this.load(next);
  }
};

document.addEventListener('DOMContentLoaded', () => i18n.load(i18n.currentLocale));