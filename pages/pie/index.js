import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { bindActionCreators } from 'redux';
import isNode from 'is-node';
import { withCookies } from 'react-cookie';
import { of, interval } from 'rxjs';
import { toArray, map } from 'rxjs/operators';
import rootEpic from '../../redux/epics';
import { fetchPie } from '../../redux/actions/pie';

// import { fetchTicker } from '../../redux/actions/tick';

// import { SCEchair } from './style';
import PieCmp from '../../components/pie/pieCmp';

function mapStateToProps(state) {
    return {
        pie: state.pie
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPie: bindActionCreators(fetchPie, dispatch)
    };
}

@withNamespaces([], { wait: isNode ? false : true })
@withCookies
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.pieRef = React.createRef();
        // 繪圖物件
        this.pieSvg = {};
    }

    static async getInitialProps({ query, store })
    {
        const resultAction = await rootEpic(
            of(fetchPie({ query }), fetchPie({ query })),
            store
        ).pipe(toArray()).toPromise(); // we need to convert Observable to Promise

        resultAction.map((data) => {
            return store.dispatch(data);
        });

        return { query };
    }

    componentDidMount()
    {
        // this.pieSvg = echarts.init(this.pieRef.current);

        // setTimeout(() => {
        //     window.addEventListener('resize', this.handleResize);
        // }, 200);
        // 第一次初始化
        // this.initData();


        // 更新資料
        // let source = interval(5000).pipe(
        //     map(() => {
        //         return fetchTicker({
        //             query: {
        //                 limit: query.limit || 10
        //             }
        //         });
        //     })
        // );
        // source.subscribe();
    }

    // componentWillUnmount() {
    //     window.removeEventListener('resize');
    // }

    // handleResize = () => {
    //     this.pieSvg.resize();
    // }

    // initData()
    // {
    //     this.pieSvg.showLoading();
    //     const { pie: piedata } = this.props;

    //     // 有資料render
    //     if (piedata)
    //     {
    //         const option = {
    //             tooltip: {
    //                 trigger: 'item',
    //                 formatter: '{a} <br/>{b}: {c} ({d}%)'
    //             },
    //             legend: {
    //                 orient: 'vertical',
    //                 x: 'left',
    //                 data: [
    //                     '直接访问',
    //                     '邮件营销',
    //                     '联盟广告',
    //                     '视频广告',
    //                     '搜索引擎'
    //                 ]
    //             },
    //             series: [
    //                 {
    //                     name: '访问来源',
    //                     type: 'pie',
    //                     radius: ['50%', '70%'],
    //                     avoidLabelOverlap: false,
    //                     label: {
    //                         normal: {
    //                             show: false,
    //                             position: 'center'
    //                         },
    //                         emphasis: {
    //                             show: true,
    //                             textStyle: {
    //                                 fontSize: '30',
    //                                 fontWeight: 'bold'
    //                             }
    //                         }
    //                     },
    //                     labelLine: {
    //                         normal: {
    //                             show: false
    //                         }
    //                     },
    //                     data: [
    //                         { value: 2, name: '直接访问' },
    //                         { value: 2, name: '邮件营销' },
    //                         { value: 2, name: '联盟广告' },
    //                         { value: 2, name: '视频广告' },
    //                         { value: 2, name: '搜索引擎' }
    //                     ]
    //                 }
    //             ]
    //         };

    //         this.pieSvg.setOption(option);
    //         this.pieSvg.hideLoading();
    //     }
    // }

    // render() {
    //     return (
    //         <SCEchair className="class-name">
    //             <div className="echarts pie" ref={this.pieRef} />
    //         </SCEchair>
    //     );
    // }

    render() {
        const { pie } = this.props;
        return (
            <PieCmp data={pie} />
        );
    }
}

Index.defaultProps = {
    pie: {}
};

Index.propTypes = {
    pie: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
