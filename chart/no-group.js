import {
  CommonParameter,
  createCommonChartGraphs,
  createCommonChartOption,
} from './common'

const p = JSON.parse(JSON.stringify(CommonParameter))
p.areaType = { valueType: 'string', defaultValue: 'area', description: 'type of area chart', widget: 'option', optionValues: [ 'area', 'stacked', 'perecnt', ], }
export const NoGroupParameter = p

export function createNoGroupChartData(rows, keyColumn, otherColumns) {
  const refinedRows = []

  for(let i = 0; i < rows.length; i++) {
    const row = rows[i]

    const refined = { [keyColumn.name]: row[keyColumn.index], }

    for(let j = 0; j < otherColumns.length; j++) {
      const col = otherColumns[j]
      refined[col.name] = row[col.index]
    }

    refinedRows.push(refined)
  }

  return refinedRows
}

export function createNoGroupChartOption(graphs, data, parameter, keyColumnNames) {
  const option = createCommonChartOption(graphs, data, parameter, keyColumnNames)

  let { areaType, } = parameter

  if (areaType === 'stacked') {
    option.valueAxes[0].stackType = "regular"
  } else if (areaType === 'percent') {
    option.valueAxes[0].stackType = "100%"
  }

  return option
}
