import React, { Component } from 'react'
import { FadingValueBox } from '../animations'
import { Centered, Row } from '@react-frontend-developer/react-layout-helpers'
import { Input } from 'semantic-ui-react'

import { HomeGrid, HeaderGridItem, ActionsGridItem, SearchGridItem, 
  ResultsGridItem, FooterGridItem } from './HomeGrid'
  
import { AddAssignment } from '../assignments'
import { AddTeamMember } from '../team-members'

class Home extends Component {
  render () {
    return (
      <FadingValueBox>
        <HomeGrid>
          <HeaderGridItem>
            <h1 css={{ color: '#ff00cc' }}>/&lt;malloc&gt;</h1>
          </HeaderGridItem>
          <ActionsGridItem>
            <AddAssignment />
            <AddTeamMember />
          </ActionsGridItem>
          <SearchGridItem>
            <Input 
              action={{ color: 'black', icon: 'search' }}
              actionPosition='left'
              placeholder='Search...'
              css={{ width:'80%' }}
            />
          </SearchGridItem>
          <ResultsGridItem>
            Here come search results...
          </ResultsGridItem>
          <FooterGridItem css={{ color: '#ff00cc'}}>
            © 2018 by Malloc
          </FooterGridItem>
        </HomeGrid>
      </FadingValueBox>
    )
  }
}

export { Home }
