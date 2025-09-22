import React, { useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { areaChartData, GLOBEX_COLOR, OCEANIC_COLOR, yTicks } from './AreaChartData';
import { yTickFormatter } from './AreaChartTooltip';
import AreaChartHeader from './AreaChartHeader';
import AreaChartLegend from './AreaChartLegend';

interface Props {
    onRemove: () => void;
 }

const AreaChartComponent: React.FC<Props> = ({ onRemove, handleCopy, isCopied }) => {
    const [showLineOnly, setShowLineOnly] = useState(false);



    return (
        <div className="mx-auto p-6 bg-white     w-full relative  ">
            <AreaChartHeader
                showLineOnly={showLineOnly}
                setShowLineOnly={setShowLineOnly}
                handleCopy={handleCopy}
                isCopied={isCopied}
                onRemove={onRemove}
            />

            <AreaChartLegend globexColor={GLOBEX_COLOR} oceanicColor={OCEANIC_COLOR} />

            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={areaChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis domain={[0, 1850]} ticks={yTicks} tickFormatter={yTickFormatter} axisLine={false} tickLine={false} width={40} />
                    <Tooltip />
                    <Area type="monotone" dataKey="Oceanic" stroke={OCEANIC_COLOR} fill={showLineOnly ? 'none' : OCEANIC_COLOR} fillOpacity={showLineOnly ? 0 : 0.3} strokeWidth={2} name="Oceanic Airlines" />
                    <Area type="monotone" dataKey="Globex" stroke={GLOBEX_COLOR} fill={showLineOnly ? 'none' : GLOBEX_COLOR} fillOpacity={showLineOnly ? 0 : 0.4} strokeWidth={2} name="Globex Inc" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AreaChartComponent;
