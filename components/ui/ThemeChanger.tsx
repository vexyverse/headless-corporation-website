import { useTheme } from 'next-themes'
import {useTranslation} from 'next-i18next';
import {useEffect, useState} from 'react';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const {t} = useTranslation(['common'])

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div>
      <div>The current theme is: {theme}</div>
      <button onClick={() => setTheme('light')}>{t('words.light')}</button>
      <button onClick={() => setTheme('dark')}>{t('words.dark')}</button>
      <button onClick={() => setTheme('system')}>{t('words.system')}</button>
    </div>
  )
}

export default ThemeChanger