import styled from 'styled-components'

export const Wrapper = styled.div`
    text-align: center;
    height: 100vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    padding: 0px 40px;
    color: ${props => props.theme.colors.alternative};
    font-weight: 700;
    font-family: '${props => props.theme.font}';
    font-size: ${props => props.theme.fontSizes.medium};

    i {
        font-size: ${props => props.theme.fontSizes.large};
    }

    p {
        margin-bottom: 0;
    }

    .description {
        margin: 0;
        font-size: 0.7em;
    }
`

export const Author = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 50px;

    a {
        color: ${props => props.theme.colors.alternative};
        font-weight: 700;
        font-family: '${props => props.theme.font}';
        text-decoration: none;
    }
`