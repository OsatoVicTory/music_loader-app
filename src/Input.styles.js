import styled from 'styled-components';

export const Wrapper = styled.div`
    background: grey;
    border-radius: 19px;
    margin: 5px auto;
    z-index: 55;
    width: 100%;
    height: 41px;

`;
export const Content = styled.div`
    display: flex;
    justify-content: center;

    input {
        margin-top: 3px;
        padding-left: 3px;
        width: 89%;
        height: 28px;
        color: white;
        border: none;
        font-size: 18px;
        background: transparent;

        :focus {
            outline: none;
        }
    }

`;

export const Img = styled.img`
    height: 29px;
    width: 17px;
    padding-top: 5px;
    padding-left: 1px;
    animation: ${props => (props.ani ? 'animat  0.5s linear infinite' : 'an 1s linear 1s')};
    @keyframes animat {
        from{
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes an {
        from{
            transform: rotate(0deg);
        }
        to {
            transform: rotate(0deg);
        }
    }
   


`;

