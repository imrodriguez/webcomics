import styled from 'styled-components';

export const Page = styled.img`
    width: 100%;
`

export const Options = styled.div`
    position: fixed;
    bottom: 0;
    background: #eee;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

    button {
        border: none;

        &:focus {
            outline: none;
        }

        i {
            font-size: 2em;
        }
    }

    p {
        margin: 0;
        display: inline-block;
        vertical-align: super;
    }
`