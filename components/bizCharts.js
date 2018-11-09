import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import isNode from 'is-node';

// import { Chart, Axis, Geom, Tooltip, Legend } from 'bizcharts';
// import { DataSet } from '@antv/data-set';

//  bizcharts ssr有問題 會取不到document
let biz;
if (!isNode) {
    biz = require('bizcharts');
}

const styles = {
    title: {
        margin: '0 0 40px',
        fontSize: '18px',
        paddingBottom: '15px',
        fontWeight: 'bold',
        borderBottom: '1px solid #eee'
    }
};

export default class BizCharts extends Component {
    static displayName = 'ChartBar';

    static propTypes = {};

    static defaultProps = {};

    // static async getInitialProps({ query, store })
    // {
    //     return { query };
    // }

    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            data: [
                { genre: 'Sports', sold: 275, income: 2300 },
                { genre: 'Strategy', sold: 115, income: 667 },
                { genre: 'Action', sold: 120, income: 982 },
                { genre: 'Shooter', sold: 350, income: 5271 },
                { genre: 'Other', sold: 150, income: 3710 }
            ]
        };
    }

    componentDidMount() {
        this.setState({ toggle: true });

        // setTimeout(() => {
        //     this.setState({
        //         data: [
        //             { genre: 'Sports', sold: 275, income: 2300 },
        //             { genre: 'Strategy', sold: 115, income: 667 },
        //             { genre: 'Action', sold: 120, income: 982 },
        //             { genre: 'Shooter', sold: 350, income: 5271 },
        //             { genre: 'Other', sold: 150, income: 3710 },
        //             { genre: 'Benny', sold: 250, income: 370 }
        //         ]
        //     });
        // }, 5000);
    }

    renderChart() {
        // 資料
        const { data } = this.state;

        // 圖表x-y 標籤title
        const cols = {
            sold: { alias: '銷售量' },
            genre: { alias: '遊戲種類' }
        };

        const {
            Chart, Axis, Geom, Tooltip, Legend
        } = biz;

        return (
            <IceContainer>
                <h4 style={styles.title}>柱状图</h4>
                <Chart width={600} height={400} data={data} scale={cols}>
                    {/* title要設定true才會開啟 label */}
                    <Axis name="genre" title={true} />
                    <Axis name="sold" title={true} />
                    {/* 顯示各個資料小圖示 */}
                    <Legend position="top" dy={-20} />
                    {/* 滑鼠移過去的tip */}
                    <Tooltip />
                    <Geom type="interval" position="genre*sold" color="genre" />
                </Chart>
            </IceContainer>
        );
    }

    render() {
        const { toggle } = this.state;
        return (
            <div className="chart-bar">
                {toggle && this.renderChart()}
            </div>
        );
    }
}
