import { LinkPreset, type NavBarLink } from '@/types/config'
import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  [LinkPreset.Bio]: {
    name: i18n(I18nKey.bio),
    url: '/',
  },
  [LinkPreset.Projects]: {
    name: i18n(I18nKey.projects),
    url: '/projects',
  },
  [LinkPreset.Contact]: {
    name: i18n(I18nKey.contact),
    url: '/archive',
  },
}
