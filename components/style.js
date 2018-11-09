import styled from 'styled-components';

export const SCcontainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;

    .board {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
        height: 300px;

        &.bar
        {
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
`;
