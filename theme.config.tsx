import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Footer from './components/layout/footer'
import Logo from './components/layout/logo'

const config: DocsThemeConfig = {
  logo: <Logo />,
  search: {
    placeholder: '🔍  Search snippets...'
  },
  project: {
    link: 'https://github.com/Tittoh/snippets',
  },
  docsRepositoryBase: 'https://github.com/Tittoh/snippets',
  editLink: {
    component: null
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    text: <Footer />,
  },
}

export default config
