import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import NAVBAR_EN from 'src/locales/en/navbar.json'
import NAVBAR_VI from 'src/locales/vi/navbar.json'
import CONTACT_EN from 'src/locales/en/contact.json'
import CONTACT_VI from 'src/locales/vi/contact.json'

export const locales = {
  vi: 'VI',
  en: 'EN'
}
const resources = {
  vi: { navbar: NAVBAR_VI, contact: CONTACT_VI },
  en: { navbar: NAVBAR_EN, contact: CONTACT_EN }
}
//Vi du chung ta ko truyen namespace vao thi no se lay ns default
const defaultNS = 'contact'

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  ns: ['navbar', 'contact'],
  defaultNS,
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false
  }
})
