import styled from '@emotion/styled'
import { Grid } from '@react-frontend-developer/css-grid-helper'

let grid = new Grid([
  'header',
  'actions',
  'results',
  'footer'
], {
  gridTemplateRows: 'max-content max-content 1fr max-content'
})

const gridItemLayout = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px'
}

const HomeGrid = styled.div(grid.container, { height: '100vh', width: '100%', padding: '5px', boxSizing: 'border-box' })

const HeaderGridItem = styled.div(grid.header, gridItemLayout, { justifyContent: 'flex-end' })

const ActionsGridItem = styled.div(grid.actions, gridItemLayout, { justifyContent: 'flex-start' })

const ResultsGridItem = styled.div(grid.results, gridItemLayout, { justifyContent: 'flex-start' })

const FooterGridItem = styled.div(grid.footer, gridItemLayout)

export { HomeGrid, HeaderGridItem, ActionsGridItem,
  ResultsGridItem, FooterGridItem }
