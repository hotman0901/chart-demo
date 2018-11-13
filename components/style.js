import styled from 'styled-components';

export const SCcontainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    .board {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
        height: 300px;

        &.bar {
            .barChild {
                display: inline-block;
                background: #4285f4;
                width: 100%;
                margin-right: 3px;
                color: #fff;
                background-color: darkseagreen;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

    &.echartsWrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 300px;

        @media screen and (max-width: 500px) {
            grid-template-columns: 1fr;
            grid-auto-rows: 1fr;
        }

        .echarts {
            height: 100%;
        }
    }
`;


export const SCEchair = styled.div`
    &.echartsWrapper {
        ${'' /* display: flex;
        justify-content: space-between;
        align-items: center;
        justify-content: center; */}

        @media screen and (max-width: 900px) {
            flex-wrap: wrap;
        }

        .echarts {
            margin-bottom: 20px;
            min-height: 450px;
            width: 100%;
        }
    }
`;
