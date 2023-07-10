import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const locales = {
  vi: 'VI',
  en: 'EN'
}
const resources = {
  vi: {
    translation: {
      home: 'Trang chủ',
      aboutus: 'Chúng tôi',
      concept: 'Ý tưởng',
      gallery: 'Hình ảnh',
      testimonials: 'Lời khen',
      blog: 'Blog',
      contact: 'Liên hệ'
    }
  },
  en: {
    translation: {
      home: 'Home',
      aboutus: 'About Us',
      concept: 'Concept',
      gallery: 'Gallery',
      testimonials: 'Testimonials',
      blog: 'Blog',
      contact: 'Contact'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false
  }
})
