import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const locales = {
  vi: 'VI',
  en: 'EN'
}
const resources = {
  vi: {
    translation: {
      home: 'Trang chủ'
    }
  },
  en: {
    translation: {
      home: 'Home'
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
