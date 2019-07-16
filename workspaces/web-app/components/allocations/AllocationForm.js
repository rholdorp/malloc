import React from 'react'

import {
    Table
  } from 'semantic-ui-react'
  

const AllocationForm = (props) => {

    const allocations = props.allocations

    const AllocationTableRow = props => (
        <Table.Row>
          <Table.Cell>{props.name}</Table.Cell>
          <Table.Cell>{props.assignmentName}</Table.Cell>
          <Table.Cell>{props.commitment}</Table.Cell>
          <Table.Cell>{props.from}</Table.Cell>
          <Table.Cell>{props.till}</Table.Cell>
          <Table.Cell>{props.hours}</Table.Cell>
        </Table.Row>
      )
      
      const AllocationTable = props => (
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
          <Table.Body>{props.children}</Table.Body>
        </Table>
      )
      
    return (
    <AllocationTable>
        {allocations.map((allocation, index) => (
            <AllocationTableRow key={index} {...allocation} />
        ))}
    </AllocationTable>
    )
}

export { AllocationForm }