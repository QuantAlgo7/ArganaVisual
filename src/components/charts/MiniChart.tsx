import { useMemo } from 'react';
import { AreaClosed, LinePath } from '@visx/shape';
import { curveMonotoneX } from '@visx/curve';
import { scaleTime, scaleLinear } from '@visx/scale';
import { LinearGradient } from '@visx/gradient';
import { Group } from '@visx/group';
import { motion } from 'framer-motion';

interface DataPoint {
  date: string;
  value: number;
}

interface MiniChartProps {
  data: DataPoint[];
  color: string;
  isActive: boolean;
  width?: number;
  height?: number;
}

const MiniChart = ({ data, color, isActive, width = 300, height = 100 }: MiniChartProps) => {
  const margin = { top: 5, right: 5, bottom: 5, left: 5 };
  const gradientId = `gradient-${color.replace('#', '')}`;

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
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
      <LinearGradient
        id={gradientId}
        from={color}
        to={color}
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
          fill={`url(#${gradientId})`}
        />
        <motion.g
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0.6,
            scale: isActive ? 1 : 0.98,
          }}
        >
          <LinePath
            data={data}
            x={d => xScale(new Date(d.date))}
            y={d => yScale(d.value)}
            stroke={color}
            strokeWidth={1.5}
            curve={curveMonotoneX}
          />
        </motion.g>
        
        {isActive && (
          <motion.circle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            cx={xScale(new Date(data[data.length - 1].date))}
            cy={yScale(data[data.length - 1].value)}
            r={3}
            fill={color}
            className="animate-pulse"
          />
        )}
      </Group>
    </svg>
  );
};

export default MiniChart;