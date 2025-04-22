import { useMemo } from 'react';
import { AreaClosed, LinePath, Line } from '@visx/shape';
import { curveMonotoneX } from '@visx/curve';
import { scaleTime, scaleLinear } from '@visx/scale';
import { LinearGradient } from '@visx/gradient';
import { Group } from '@visx/group';

interface DataPoint {
  date: string;
  value: number;
}

interface StrategyChartProps {
  data: DataPoint[];
  width?: number;
  height?: number;
}

const StrategyChart = ({ data, width = 800, height = 300 }: StrategyChartProps) => {
  const margin = { top: 20, right: 20, bottom: 20, left: 50 };

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = useMemo(
    () =>
      scaleTime({
        range: [0, innerWidth],
        domain: [new Date(data[0].date), new Date(data[data.length - 1].date)],
      }),
    [data, innerWidth]
  );

  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight, 0],
        domain: [
          Math.min(...data.map(d => d.value)) * 0.95,
          Math.max(...data.map(d => d.value)) * 1.05,
        ],
      }),
    [data, innerHeight]
  );

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
      <LinearGradient
        id="area-gradient"
        from="#00F5C4"
        to="#00F5C4"
        fromOpacity={0.2}
        toOpacity={0.0}
      />
      <Group left={margin.left} top={margin.top}>
        <AreaClosed
          data={data}
          x={d => xScale(new Date(d.date))}
          y={d => yScale(d.value)}
          yScale={yScale}
          curve={curveMonotoneX}
          fill="url(#area-gradient)"
        />
        <LinePath
          data={data}
          x={d => xScale(new Date(d.date))}
          y={d => yScale(d.value)}
          stroke="#00F5C4"
          strokeWidth={2}
          curve={curveMonotoneX}
        />
      </Group>
    </svg>
  );
};

export default StrategyChart;