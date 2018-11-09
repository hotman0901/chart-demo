import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { SCcontainer } from './style';

const Bar = () => {
    const barRef = useRef(null);

    // didmount dudupdate
    useEffect(() => {
        // 也可以使用attr、html

        const data = [4, 8, 15, 16, 23, 42];
        // 取得畫布
        d3.select(barRef.current)
            .selectAll('div') // 針對每一個資料來源建立一個div
            .data([4, 8, 15, 16, 23, 42]) // 資料來源
            .enter() // return datae
            .append('div') // 這邊加入的div已經有包含data
            .text((d) => d) // 將文字顯示
            .attr('class', 'barChild') // 套用class
            .style('height', (d) => `${d}%`);

        console.log('min: ' + d3.min(data)); //最小值
        console.log('max: ' + d3.max(data)); //最大值
        console.log('sum: ' + d3.sum(data)); //總和
        console.log('extent: ' + d3.extent(data)); //最小值與最大值
        console.log('mean: ' + d3.mean(data)); //平均數
        console.log('shuffle: ' + d3.shuffle(data)); //亂數排列
    });

    return (
        <SCcontainer>
            <div className="board bar" ref={barRef} />
        </SCcontainer>
    );
};

export default Bar;
