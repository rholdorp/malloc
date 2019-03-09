import React, { useState, useEffect } from 'react'
import { FadingValueBox } from '../animations'
import { Table, Input, Menu, Segment } from 'semantic-ui-react'

import { HomeGrid, HeaderGridItem, ActionsGridItem,
  ResultsGridItem, FooterGridItem } from './HomeGrid'
import { AddAssignment } from '../assignments'
import { AddAllocation } from '../allocations'
import { AddTeamMember } from '../team-members'

const FilterTableRow = (props) => (
  <Table.Row>
    <Table.Cell>{props.name}</Table.Cell>
    <Table.Cell>{props.contract}</Table.Cell>
  </Table.Row>
)

const FilterTable = (props) => (
  <Table selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Team Member</Table.HeaderCell>
        <Table.HeaderCell>Contract</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {props.children}
    </Table.Body>
  </Table>
)
const Home = () => {
  const [ activeItem, setActiveItem ] = useState('Team Members')
  const [ initialized, setInitialized ] = useState(false)

  const team = [
    { name: 'name00', contract: 'contract00' },
    { name: 'name01', contract: 'contract01' },
    { name: 'name02', contract: 'contract02' },
    { name: 'name03', contract: 'contract03' }
  ]
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
          <div>
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
              <div>
                <FilterTable>
                  {team.map((member, index) => (
                    <FilterTableRow key={index} {...member} />
                  ))}
                </FilterTable>
              </div>
            </Segment>
          </div>
        </ResultsGridItem>
        <FooterGridItem css={{ color: '#ff00cc' }}>
        © 2019 by Malloc
        </FooterGridItem>
      </HomeGrid>
    </FadingValueBox>
  )
}

export { Home }
