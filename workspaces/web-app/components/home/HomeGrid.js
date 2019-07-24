import styled from '@emotion/styled'
import { Grid } from '@react-frontend-developer/css-grid-helper'

let grid = new Grid([
  'header       header   header       header',
  'filter       charts   charts       charts',
  'filter       results  results      results',
  'footer       footer   footer       footer'
], {
  gridTemplateRows: 'max-content max-content max-content max-content'
})

const gridItemLayout = {
  padding: '5px'
}

const HomeGrid = styled.div(grid.container, { height: '100vh', width: '100%', padding: '5px', boxSizing: 'border-box' })

const HeaderGridItem = styled.div(grid.header, gridItemLayout, { justifyContent: 'flex-end' })

const FilterGridItem = styled.div(grid.filter, gridItemLayout, {
  width: '100%',
  height: '100%',
  border: '1px solid black'
})

const ResultsGridItem = styled.div(grid.results, gridItemLayout, {
  width: '100%',
  height: '100%',
  border: '1px solid black'
})

const ChartsGridItem = styled.div(grid.charts, gridItemLayout, {
  width: '100%',
  height: '100%',
  border: '1px solid black'
})

const FooterGridItem = styled.div(grid.footer, gridItemLayout)

export { HomeGrid, HeaderGridItem, FilterGridItem,
  ResultsGridItem, ChartsGridItem, FooterGridItem }
