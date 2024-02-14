import React from 'react'
import { Outlet } from 'react-router-dom'

import { Section } from '@radix-ui/themes'

import { Header } from '../components/Header'

const MAIN_LAYOUT_NAME = 'Containers.App.Layouts.Main'

const MainLayout: React.FC = () => (
  <>
    <Section>
      <Header />
    </Section>

    <Outlet />
  </>
)
MainLayout.displayName = MAIN_LAYOUT_NAME

export { MainLayout }
