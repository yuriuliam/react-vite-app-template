import React from 'react'
import { Outlet } from 'react-router-dom'

import { Section } from '@radix-ui/themes'

import { COMPONENTS } from '../utils/constants'

import { Header } from '@/components/Header'

const MainLayout: React.FC = () => {
  return (
    <>
      <Section>
        <Header />
      </Section>

      <Outlet />
    </>
  )
}
MainLayout.displayName = COMPONENTS.NAMES.MAIN_LAYOUT

export { MainLayout }
