import React from 'react'
import { Outlet } from 'react-router-dom'

import { Section } from '@radix-ui/themes'

import { Header } from '@/components/Header'

import { COMPONENTS } from '@/utils/constants'

const MainLayout: React.FC = () => (
  <>
    <Section>
      <Header />
    </Section>

    <Outlet />
  </>
)
MainLayout.displayName = COMPONENTS.NAMES.MAIN_LAYOUT

export { MainLayout }
