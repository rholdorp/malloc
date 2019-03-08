import React, { useState, useEffect } from 'react'
import { FadingValueBox } from '../animations'
import { Input, Menu, Segment } from 'semantic-ui-react'

import { HomeGrid, HeaderGridItem, ActionsGridItem,
  ResultsGridItem, FooterGridItem } from './HomeGrid'
import { AddAssignment } from '../assignments'
import { AddAllocation } from '../allocations'
import { AddTeamMember } from '../team-members'

const Home = () => {
  const [ activeItem, setActiveItem ] = useState('Team Members')
  const [ initialized, setInitialized ] = useState(false)

  useEffect(() => {
    if (!initialized) {
      console.log('Home component mounted')
      setInitialized(true)
    }
  })

  return (

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

        <ResultsGridItem>
          <form>
            <Menu pointing >
              <Menu.Item
                name='Team Members'
                active={activeItem === 'Team Members'}
                onClick={e => setActiveItem('Team Members')}
              />
              <Menu.Item
                name='Free Capacity'
                active={activeItem === 'Free Capacity'}
                onClick={e => setActiveItem('Free Capacity')}
              />
              <Menu.Item
                name='Expected'
                active={activeItem === 'Expected'}
                onClick={e => setActiveItem('Expected')}
              />
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Input icon='search' placeholder='Search...' />
                </Menu.Item>
              </Menu.Menu>
            </Menu>

            <Segment>
              Filtered list...
            </Segment>
          </form>
        </ResultsGridItem>
        <FooterGridItem css={{ color: '#ff00cc' }}>
        © 2019 by Malloc
        </FooterGridItem>
      </HomeGrid>
    </FadingValueBox>
  )
}

export { Home }
