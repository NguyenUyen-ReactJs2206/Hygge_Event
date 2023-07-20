import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import CONTACT_EN from 'src/locales/en/contact.json'
import CONTACT_VI from 'src/locales/vi/contact.json'

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
    },
    contact: CONTACT_VI
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
    },
    contact: CONTACT_EN
  }
}
//Vi du chung ta ko truyen namespace vao thi no se lay ns default
const defaultNS = 'contact'

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  ns: ['contact'],
  defaultNS,
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false
  }
})
