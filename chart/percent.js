import {
  CommonParameter,
  createCommonChartGraphs,
  createCommonChartOption,
} from './common'

const p = JSON.parse(JSON.stringify(CommonParameter))
p.graphLineAlpha.defaultValue = 0.4
p.graphFillAlpha.defaultValue = 0.5
p.yAxisValueInside.defaultValue = false
p.showYAxisScroll.defaultValue = false
export const PercentAreaParameter = p

export function createPercentAreaGraph(parameter, selectors) {
  const graphs = createCommonChartGraphs(parameter, selectors)

  for(let i = 0; i < graphs.length; i++) {
    const g = graphs[i]
  }

  return graphs
}

export function createPercentAreaChartOption(graphs, data, parameter, keyColumnNames) {
  const option = createCommonChartOption(graphs, data, parameter, keyColumnNames)

  option.valueAxes[0].stackType = "100%"

  option.valueAxes[0].labelFunction = (value) => {
    return `${value} %`
  }

  option.marginLeft = 55

  return option
}
