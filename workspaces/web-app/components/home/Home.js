import React, { useState, useEffect } from 'react'
import { FadingValueBox } from '../animations'
import { Icon, Grid, Dropdown, Table, Menu, Segment, List } from 'semantic-ui-react'

import { HomeGrid, HeaderGridItem, FilterGridItem,
  ResultsGridItem, ChartsGridItem, FooterGridItem } from './HomeGrid'

const yearOptions = [
  { key: '2018', value: '2018', text: '2018' },
  { key: '2019', value: '2019', text: '2019' }

]

const organisationOptions = [
  { key: 'Department1', value: 'Department1', text: 'Department1' },
  { key: 'Department2', value: 'Department2', text: 'Department2' }

]

const AllocationTableRow = (props) => (
  <Table.Row>
    <Table.Cell>{props.memberName}</Table.Cell>
    <Table.Cell>{props.assignment}</Table.Cell>
    <Table.Cell>{props.commitment}</Table.Cell>
    <Table.Cell>{props.startDate}</Table.Cell>
    <Table.Cell>{props.endDate}</Table.Cell>
    <Table.Cell>{props.hours}</Table.Cell>
  </Table.Row>
)

const AllocationTable = (props) => (
  <Table selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Team Member</Table.HeaderCell>
        <Table.HeaderCell>Assignment</Table.HeaderCell>
        <Table.HeaderCell>Commitment</Table.HeaderCell>
        <Table.HeaderCell>Start Date</Table.HeaderCell>
        <Table.HeaderCell>End Date</Table.HeaderCell>
        <Table.HeaderCell>Hours</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {props.children}
    </Table.Body>
  </Table>
)

const Home = () => {
  const [ activeItem, setActiveItem ] = useState('All')
  const [ initialized, setInitialized ] = useState(false)

  const allocations = [
    { memberName: 'name00',
      assignment: 'assignment00',
      commitment: 'committed',
      startDate: '01-01',
      endDate: '31-12',
      hours: 40
    },
    { memberName: 'name01',
      assignment: 'assignment01',
      commitment: 'committed',
      startDate: '01-01',
      endDate: '31-12',
      hours: 20
    },
    { memberName: 'name01',
      assignment: 'assignment02',
      commitment: 'expexted',
      startDate: '01-01',
      endDate: '31-12',
      hours: 20
    }
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

        <FilterGridItem>
          <Menu>
            <Dropdown placeholder='Set Organisation' search selection options={organisationOptions} />
            <Dropdown placeholder='Set Year' search selection options={yearOptions} />
            <Menu.Menu position='right'>
              <Menu.Item
                name='new-team-member'
                active={activeItem === 'new-team-member'}
              >
                <Icon name='add' />
              New Team Member
              </Menu.Item>
            </Menu.Menu>

          </Menu>
          <Grid>
            <Grid.Column width={4}>
              <Menu fluid vertical tabular>
                <Menu.Item
                  name='All'
                  active={activeItem === 'All'}
                  content='All'
                  onClick={e => setActiveItem('All')}
                />
                <Menu.Item
                  name='Leads'
                  active={activeItem === 'Leads'}
                  content='Leads'
                  onClick={e => setActiveItem('Leads')}
                />
                <Menu.Item
                  name='Free'
                  active={activeItem === 'Free'}
                  content='Free'
                  onClick={e => setActiveItem('Free')}
                />
              </Menu>
            </Grid.Column>
            <Grid.Column stretched width={12}>
              <Segment>
                <List divided relaxed>
                  <List.Item>
                    <List.Content>
                      <List.Header as='a'>Team Member 000</List.Header>
                      <List.Description as='a'>Available for 40 hrs per week for 01-Jan till 31-Dec</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header as='a'>Team Member 001</List.Header>
                      <List.Description as='a'>Available for 40 hrs per week for 01-Jan till 31-Dec</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header as='a'>Team Member 003</List.Header>
                      <List.Description as='a'>Available for 40 hrs per week for 01-Jan till 31-Dec</List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
            </Grid.Column>
          </Grid>
        </FilterGridItem>

        <ResultsGridItem>
          <Menu>
            <Menu.Menu position='right'>
              <Menu.Item
                name='add-assignment'
                active={activeItem === 'add-assignment'}
              >
                <Icon name='add' />
              Add Assignement
              </Menu.Item>
              <Menu.Item
                name='add-allocation'
                active={activeItem === 'add-allocation'}
              >
                <Icon name='add' />
              Add Allocation
              </Menu.Item>
            </Menu.Menu>

          </Menu>

          <AllocationTable>
            {allocations.map((allocation, index) => (
              <AllocationTableRow key={index} {...allocation} />
            ))}
          </AllocationTable>

        </ResultsGridItem>

        <ChartsGridItem>
          Some chart...
        </ChartsGridItem>

        <FooterGridItem css={{ color: '#ff00cc' }}>
        © 2019 by Malloc
        </FooterGridItem>
      </HomeGrid>
    </FadingValueBox>
  )
}

export { Home }
