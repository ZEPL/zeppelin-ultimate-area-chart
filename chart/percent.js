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
p.chartMarginLeft.defaultValue = 55
p.legendValueWidth.defaultValue = 100
export const PercentAreaParameter = p

export function createPercentAreaGraph(parameter, selectors) {
  const { showLegend, yAxisUnit, } = parameter

  const graphs = createCommonChartGraphs(parameter, selectors)

  for(let i = 0; i < graphs.length; i++) {
    const g = graphs[i]

    if (showLegend) {
      g.legendValueText = (yAxisUnit) ?  `[[value]] ${yAxisUnit} ([[percents]]%)` :
        '[[value]] ([[percents]]%)'
    }
  }

  return graphs
}

export function createPercentAreaChartOption(graphs, data, parameter, keyColumnNames) {
  const { showLegend, } = parameter

  const option = createCommonChartOption(graphs, data, parameter, keyColumnNames)

  option.valueAxes[0].stackType = "100%"
  option.valueAxes[0].labelFunction = (value, valueText) => {
    return `${valueText} %`
  }

  if (showLegend) {
    option.legend.periodValueText = 'total: [[value.sum]]'
    option.legend.valueAlign = 'left'
  }

  return option
}
