import styled from "styled-components";

export const Word = styled.div`
    &:hover span{
        color: ${({colors}) => (colors)};
        transition: 0.2s ease-out;
        transform: scale(1.2);
        margin-top: -3px;   
    }
`;