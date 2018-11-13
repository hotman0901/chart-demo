import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import equal from 'deep-equal';
import isNode from 'is-node';
import { withCookies } from 'react-cookie';

// import { fetchTicker } from '../../redux/actions/tick';

import { SCEchair } from '../style';

@withNamespaces([], { wait: isNode ? false : true })
@withCookies
class PieCmp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.pieRef = React.createRef();
        // 繪圖物件
        this.pieSvg = {};
    }

    componentDidMount() {
        setTimeout(() => {
            window.addEventListener('resize', this.handleResize);
        }, 200);
        this.pieSvg = echarts.init(this.pieRef.current);
        const { data } = this.props;
        // 有值得時候才去init
        if (data) {
            this.initData();
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (equal(this.props, nextProps) && equal(this.state, nextState)) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    componentDidUpdate(prevProps, prevState) {
        const { data } = this.props;
        if (prevProps.data !== data) {
            this.initData();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize');
    }

    handleResize = () => {
        this.pieSvg.resize();
    };

    initData() {
        this.pieSvg.showLoading();
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: [
                    '直接访问',
                    '邮件营销',
                    '联盟广告',
                    '视频广告',
                    '搜索引擎'
                ]
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 2, name: '直接访问' },
                        { value: 2, name: '邮件营销' },
                        { value: 2, name: '联盟广告' },
                        { value: 2, name: '视频广告' },
                        { value: 2, name: '搜索引擎' }
                    ]
                }
            ]
        };

        this.pieSvg.setOption(option);
        this.pieSvg.hideLoading();
        // }
    }

    render() {
        return (
            <SCEchair className="pie">
                <div className="echarts pie" ref={this.pieRef} />
            </SCEchair>
        );
    }
}

PieCmp.defaultProps = {
    // pie: {}
};

PieCmp.propTypes = {
    // pie: PropTypes.object
};

export default PieCmp;
