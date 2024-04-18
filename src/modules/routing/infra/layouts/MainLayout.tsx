import { Section } from '@radix-ui/themes'

import { createRouteLayout } from '../../data/subjects/createLayout'
import { Header } from '../components/Header'

const MAIN_LAYOUT_NAME = 'Infra.App.Layouts.Main'

const MainLayout = createRouteLayout(({ children }) => (
  <>
    <Section>
      <Header />
    </Section>

    {children}
  </>
))
MainLayout.displayName = MAIN_LAYOUT_NAME

export { MainLayout }
