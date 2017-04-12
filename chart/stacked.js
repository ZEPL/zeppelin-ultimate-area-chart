
import {
  CommonParameter,
  createCommonChartGraphs,
  createCommonChartOption,
} from './common'

const p = JSON.parse(JSON.stringify(CommonParameter))
p.graphLineAlpha.defaultValue = 0.4
p.graphFillAlpha.defaultValue = 0.5
export const StackedAreaParameter = p

export function createStackedAreaGraph(parameter, selectors) {
  const graphs = createCommonChartGraphs(parameter, selectors)

  for(let i = 0; i < graphs.length; i++) {
    const g = graphs[i]
  }

  return graphs
}

export function createStackedAreaChartOption(graphs, data, parameter, keyColumnNames) {
  const { showLegend, } = parameter

  const option = createCommonChartOption(graphs, data, parameter, keyColumnNames)
  option.valueAxes[0].stackType = 'regular'

  if (showLegend) {
    option.legend.periodValueText = 'total: [[value.sum]]'
    option.legend.valueText = '[[value]] ([[percents]]%)'
  }

  return option
}