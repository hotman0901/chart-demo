import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { SCcontainer } from './style';

const Bar = () => {
    const barRef = useRef(null);

    // didmount dudupdate
    useEffect(() => {
        // 也可以使用attr、html

        // 取得畫布
        d3.select(barRef.current)
            .selectAll('div') // 針對每一個資料來源建立一個div
            .data([4, 8, 15, 16, 23, 42]) // 資料來源
            .enter() // return data
            .append('div') // 這邊加入的div已經有包含data
            .text(d => d) // 將文字顯示
            .attr('class', 'barChild') // 套用class
            .style('height', d => `${d}%`);
    });

    return (
        <SCcontainer>
            <div className="board bar" ref={barRef} />
        </SCcontainer>
    );
};

export default Bar;
