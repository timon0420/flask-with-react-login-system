import styled from 'styled-components'
export const Table = styled.table`
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
` 
export const TableBody = styled.tbody`
    display: grid;
    grid-row-gap: 10px;
`
export const TableRow = styled.tr`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
`
export const TableData = styled.td`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #000;
    border-radius: 10px;
    &:nth-child(3) {
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
            letter-spacing: 1px;
        }
    }
`