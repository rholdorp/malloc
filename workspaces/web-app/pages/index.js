import React from 'react'
import { PageCentered } from '@react-frontend-developer/react-layout-helpers'
import { Home } from '../components/home'

const Index = () => (
  <PageCentered css={{ color: 'white' }}>
    <div css={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', minHeight: '150px', maxWidth: '550px', width: '85%' }}>
      <Home />
    </div>
  </PageCentered>
)

export default Index
