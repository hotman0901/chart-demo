import React, { useRef, useEffect } from 'react';

// echarts模塊 引入參考
// https://github.com/apache/incubator-echarts/blob/master/index.js

//  細項設定
// https://blog.csdn.net/luanpeng825485697/article/details/76739958

// 引入 ECharts 主模块
// import echarts from 'echarts/lib/echarts';

// // 引入柱状图
// import 'echarts/lib/chart/bar';

// // 引入線狀圖
// import 'echarts/lib/chart/line';

// // 圓餅圖
// import 'echarts/lib/chart/pie';

// // 引入提示框和标题组件
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';

import { SCEchair } from './style';

const Echarts = () => {
    const barRef = useRef(null);
    const lineRef = useRef(null);
    const pieRef = useRef(null);
    const bar2Ref = useRef(null);
    const line2Ref = useRef(null);

    // didmount dudupdate
    useEffect(() => {
        // init
        const line = echarts.init(lineRef.current);
        const bar = echarts.init(barRef.current);
        const pie = echarts.init(pieRef.current);
        const bar2 = echarts.init(bar2Ref.current);
        const line2 = echarts.init(line2Ref.current);

        // data
        const data = [
            {
                title: {
                    text: '折線圖',
                    x: 'center'
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    name: '星期'
                },
                yAxis: {
                    type: 'value',
                    name: '交易量(顆)'
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }
                ],
                tooltip: {}
            },
            {
                title: {
                    text: '長條圖',
                    x: 'center'
                },
                tooltip: {},
                xAxis: {
                    type: 'category',
                    name: '種類',
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {
                    type: 'value',
                    name: '件數'
                },
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                        // color: ['pink'] // 可以自定義bar顏色
                    }
                ]
            },
            {
                title: {
                    text: '圓餅圖',
                    x: 'center'
                },
                series: {
                    name: '擁有數量',
                    type: 'pie',
                    radius: '55%',
                    data: [
                        { name: 'xpa', value: 1212 },
                        { name: 'eth', value: 2323 },
                        { name: 'btc', value: 1919 }
                    ]
                    // roseType: 'angle' // 把圓餅圖依照大小劃分

                    // itemStyle: {
                    //     // 阴影的大小
                    //     shadowBlur: 200,
                    //     // 阴影水平方向上的偏移
                    //     shadowOffsetX: 0,
                    //     // 阴影垂直方向上的偏移
                    //     shadowOffsetY: 0,
                    //     // 阴影颜色
                    //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                    // }
                },
                tooltip: {}
            },
            {
                title: {
                    text: '多重圓餅圖',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: [
                        '直达',
                        '营销广告',
                        '搜索引擎',
                        '邮件营销',
                        '联盟广告',
                        '视频广告',
                        '百度',
                        '谷歌',
                        '必应',
                        '其他'
                    ]
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],

                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            { value: 335, name: '直达', selected: true },
                            { value: 679, name: '营销广告' },
                            { value: 1548, name: '搜索引擎' }
                        ]
                    },
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '55%'],
                        data: [
                            { value: 335, name: '直达' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1048, name: '百度' },
                            { value: 251, name: '谷歌' },
                            { value: 147, name: '必应' },
                            { value: 102, name: '其他' }
                        ]
                    }
                ]
            },
            {
                baseOption: {
                    title: {
                        text: '折線堆疊圖',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: [
                            '邮件营销',
                            '联盟广告',
                            '视频广告',
                            '直接访问',
                            '搜索引擎'
                        ]
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [
                            '周一',
                            '周二',
                            '周三',
                            '周四',
                            '周五',
                            '周六',
                            '周日'
                        ],
                        name: '星期'
                    },
                    yAxis: {
                        type: 'value',
                        name: '數量'
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '直接访问',
                            type: 'line',
                            stack: '总量',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                },
                media: [
                    {
                        option: {
                            legend: {
                                orient: 'horizontal',
                                left: 'right',
                                itemGap: 10
                            },
                            grid: {
                                left: '10%',
                                top: 80,
                                right: 90,
                                bottom: 100
                            },
                            xAxis: {
                                nameLocation: 'end',
                                nameGap: 10,
                                splitNumber: 5,
                                splitLine: {
                                    show: true
                                }
                            },
                            timeline: {
                                orient: 'horizontal',
                                inverse: false,
                                left: '20%',
                                right: '20%',
                                bottom: 10,
                                height: 40
                            },
                            series: [
                                {
                                    name: 'GDP占比',
                                    center: ['75%', '30%'],
                                    radius: '28%'
                                }
                            ]
                        }
                    },
                    {
                        query: { maxWidth: 670, minWidth: 550 },
                        option: {
                            legend: {
                                orient: 'horizontal',
                                left: 200,
                                itemGap: 5
                            },
                            grid: {
                                left: '10%',
                                top: 80,
                                right: 90,
                                bottom: 100
                            },
                            xAxis: {
                                nameLocation: 'end',
                                nameGap: 10,
                                splitNumber: 5,
                                splitLine: {
                                    show: true
                                }
                            },
                            timeline: {
                                orient: 'horizontal',
                                inverse: false,
                                left: '20%',
                                right: '20%',
                                bottom: 10,
                                height: 40
                            }
                        }
                    },
                    {
                        query: { maxWidth: 550 },
                        option: {
                            legend: {
                                orient: 'vertical',
                                left: 'right',
                                itemGap: 5
                            },
                            grid: {
                                left: 20,
                                top: '32%',
                                right: 50,
                                bottom: 50
                            },
                            xAxis: {
                                nameLocation: 'middle',
                                nameGap: 25,
                                splitNumber: 3
                            }
                        }
                    }
                ]
            }
        ];

        // set
        line.setOption(data[0]);
        bar.setOption(data[1]);
        pie.setOption(data[2]);
        bar2.setOption(data[3]);
        line2.setOption(data[4]);

        // resize
        const handleResize = () => {
            line.resize();
            bar.resize();
            pie.resize();
            bar2.resize();
            line2.resize();
        };

        // resize
        setTimeout(() => {
            window.addEventListener('resize', handleResize);
        }, 200);

        // unmount
        return () => {
            window.removeEventListener('resize');
        };
    });

    return (
        <SCEchair className="echartsWrapper">
            <div className="echarts bar2" ref={bar2Ref} />
            <div className="echarts line" ref={line2Ref} />
            <div className="echarts line" ref={lineRef} />
            <div className="echarts bar" ref={barRef} />
            <div className="echarts line" ref={pieRef} />
        </SCEchair>
    );
};

export default Echarts;
