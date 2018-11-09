import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { SCcontainer } from './style';

const Line = () => {
    const lineRef = useRef(null);

    useEffect(() => {
        const data = [
            { x: 10, y: 10 },
            { x: 50, y: 100 },
            { x: 60, y: 50 },
            { x: 100, y: 30 }
        ];
        let svgObj = d3
            .select(lineRef.current)
            .append('svg')
            .attr({
                width: 800,
                height: 800
            });

        let line = d3.svg
            .line()
            .x((d) => {
                return d.x;
            })
            .y((d) => {
                return d.y;
            });

        svgObj.append('path').attr({
            d: line(data),
            y: 0,
            stroke: '#000',
            'stroke-width': '5px',
            fill: 'none'
        });
    });

    return (
        <SCcontainer>
            <div className="board bar" ref={lineRef} />
        </SCcontainer>
    );
};

export default Line;
