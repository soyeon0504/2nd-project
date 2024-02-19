import styled from "@emotion/styled";

export const BoardWrap = styled.div `
    text-align: center;

    .move, .delete {
        width: 60px;
        height: 30px;
        font-weight: bold;
        color: #79747E;
        background: #fff;
        border: 2px solid #79747E;
        border-radius: 5px;
        cursor: pointer;
    }
    .board-data {
        >td {
            padding: 15px 0;
        }
    }
`

