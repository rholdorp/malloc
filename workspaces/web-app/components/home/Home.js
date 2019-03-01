import React from 'react'
import { FadingValueBox } from '../animations'
import { Input } from 'semantic-ui-react'

import { HomeGrid, HeaderGridItem, ActionsGridItem, SearchGridItem,
  ResultsGridItem, FooterGridItem } from './HomeGrid'
import { AddAssignment } from '../assignments'
import { AddAllocation } from '../allocations'
import { AddTeamMember } from '../team-members'

const Home = () => (
  <FadingValueBox>
    <HomeGrid>
      <HeaderGridItem>
        <h1 css={{ color: '#ff00cc' }}>/&lt;malloc&gt;</h1>
      </HeaderGridItem>
      <ActionsGridItem>
        <AddAssignment />
        <AddTeamMember />
        <AddAllocation />
      </ActionsGridItem>
      <SearchGridItem>
        <Input
          action={{ color: 'black', icon: 'search' }}
          actionPosition='left'
          placeholder='Search...'
          css={{ width: '80%' }}
        />
      </SearchGridItem>
      <ResultsGridItem>
        Here come search results...
      </ResultsGridItem>
      <FooterGridItem css={{ color: '#ff00cc' }}>
        © 2019 by Malloc
      </FooterGridItem>
    </HomeGrid>
  </FadingValueBox>
)

export { Home }
