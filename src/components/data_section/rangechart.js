import React, { useEffect, useState } from 'react'
import * as d3 from "d3";

const RangeChart = ({ data }) => {

  let [svgWidth, setSvgWidth] = useState(300)
  let [svgHeight, setSvgHeight] = useState(200)

  // TODO calculate min/max from data
  let min = 0
  let max = parseNum(data.percent75) + 50;
  let margin = 25
  let initialXScale = d3.scaleLinear().domain([min, max]).range([0, 300]);
  let [xScale, setXScale] = useState(() => d => initialXScale(d))

  // TODO add resize window event on module_range
  useEffect(() => {
    let chart = document.getElementById("range_chart")
    setSvgWidth(chart.getBoundingClientRect().width)
    setSvgHeight(chart.getBoundingClientRect().height)

    let tempXScale = d3.scaleLinear()
      .domain([min, max])
      .range([0, chart.getBoundingClientRect().width]);

    setXScale(() => d => tempXScale(d))
  }, [])

  function parseNum(str) {
    return Math.round(parseFloat(str))
  }

  return (
    <div>
      <svg className='rangechart_chart' id="range_chart">
        {data && <>
          <rect className='rangechart_fullrange'
            x={xScale(min)}
            y={svgHeight / 2}
            width={xScale(max)}
            height={"8px"} />
          <rect className='rangechart_colorrange'
            x={xScale(parseNum(data.percent25))}
            y={svgHeight / 2}
            width={xScale(parseNum(data.percent75) - parseNum(data.percent25))}
            height={"8px"} />
          <circle className='rangechart_circle' cx={xScale(parseNum(data.percent25))} cy={svgHeight / 2 + 4} r={"8px"}></circle>
          <circle className='rangechart_circle' cx={xScale(parseNum(data.percent50))} cy={svgHeight / 2 + 4} r={"8px"}></circle>
          <circle className='rangechart_circle' cx={xScale(parseNum(data.percent75))} cy={svgHeight / 2 + 4} r={"8px"}></circle>

          {/* Text for low value, 25 percentile */}
          <text className='rangechart_price'
            x={xScale(parseNum(data.percent25))}
            y={svgHeight / 2 + margin}>
            {`$${parseNum(data.percent25)}`}
          </text>
          <text className='rangechart_label'
            x={xScale(parseNum(data.percent25))}
            y={svgHeight / 2 + margin + 15}>Low</text>

          {/* Text for average value, 50 percentile */}

          <text className='rangechart_price'
            x={xScale(parseNum(data.percent50))}
            y={svgHeight / 2 - margin - 15}>
            {`$${parseNum(data.percent50)}`}</text>
          <text className='rangechart_label'
            x={xScale(parseNum(data.percent50))}
            y={svgHeight / 2 - margin}>Average</text>

          {/* Text for high value, 75 percentile */}
          <text className='rangechart_price'
            x={xScale(parseNum(data.percent75))}
            y={svgHeight / 2 + margin}>
            {`$${parseNum(data.percent75)}`}</text>
          <text className='rangechart_label'
            x={xScale(parseNum(data.percent75))}
            y={svgHeight / 2 + margin + 15}>High</text>
        </>}
      </svg>
    </div >
  )
}

export default RangeChart