import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #f2f2f2;
        justify-content: center;
        display: flex;
        width: 100vw;
        height: 100vh;
    }
`;
export default Global