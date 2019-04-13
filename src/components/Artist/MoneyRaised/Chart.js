import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

let data = [
  {
    country: 'AD',
    'money': 112,
    'moneyColor': '#ed255e'
  },
  {
    country: 'KES',
    'money': 25,
    'moneyColor': '#ed255e'
  },
  {
    country: 'BR',
    'money': 12,
    'moneyColor': '#ed255e'
  }, {
    country: 'U',
    'money': 101,
    'moneyColor': '#ed255e'
  }
]

const Chart = () => {
  return (
    <div className="chart-container">
      <ResponsiveBar
        data={data}
        keys={[
          'money'
        ]}
        indexBy="country"
        margin={{
          'top': 16,
          'right': 16,
          'bottom': 16,
          'left': 16
        }}
        padding={0.5}
        colors="#ed255e"
        colorBy="id"
        defs={[
          {
            'id': 'dots',
            'type': 'patternDots',
            'background': 'inherit',
            'color': '#ed255e',
            'size': 4,
            'padding': 1,
            'stagger': true
          },
          {
            'id': 'lines',
            'type': 'patternLines',
            'background': 'inherit',
            'color': '#ed255e',
            'rotation': -45,
            'lineWidth': 6,
            'spacing': 10
          }
        ]}
        fill={[
          {
            'match': {
              'id': 'fries'
            },
            'id': 'dots'
          },
          {
            'match': {
              'id': 'sandwich'
            },
            'id': 'lines'
          }
        ]}
        borderColor="#fff"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          'tickSize': 5,
          'tickPadding': 5,
          'tickRotation': 0,
          'legend': 'country',
          'legendPosition': 'middle',
          'legendOffset': 32
        }}
        axisLeft={{
          'tickSize': 8,
          'tickPadding': 5,
          'tickRotation': 0,
          'legend': 'food',
          'legendPosition': 'middle',
          'legendOffset': -40
        }}
        labelSkipWidth={20}
        labelSkipHeight={20}
        labelTextColor="#fff"
        animate
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            'dataFrom': 'keys',
            'anchor': 'bottom-right',
            'direction': 'column',
            'justify': false,
            'translateX': 120,
            'translateY': 0,
            'itemsSpacing': 2,
            'itemWidth': 100,
            'itemHeight': 20,
            'itemDirection': 'left-to-right',
            'itemOpacity': 1,
            'symbolSize': 20,
            'effects': [
              {
                'on': 'hover',
                'style': {
                  'itemOpacity': 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  )
}

export default Chart
