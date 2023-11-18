import React from 'react'
import { Outlet } from 'react-router-dom'

import { Section } from '@radix-ui/themes'

import { Header } from '../components/Header'

const MAIN_LAYOUT_NAME = 'App.Layouts.Main'

const AuthenticatedAppLayout: React.FC = () => (
  <>
    <Section>
      <Header />
    </Section>

    <Outlet />
  </>
)
AuthenticatedAppLayout.displayName = MAIN_LAYOUT_NAME

export { AuthenticatedAppLayout }
