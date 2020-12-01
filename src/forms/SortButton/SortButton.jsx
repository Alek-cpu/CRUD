import React from "react";

import {Button} from "@material-ui/core";
import styled from "styled-components";

const SortRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    gap: 10px;
   
    .MuiButton-root {
        text-transform: inherit; 
    }
`;

const AnimationButton = styled(Button)`
    &:active {
        transition: .2s ease-out;   
        transform: scale(.9); 
`;

const SortButtonRew = styled(AnimationButton)`
    background: interit;
    border: 2px solid DarkCyan;
    color: PaleTurquoise;
`;

export const SortButton = () => {
    return(
        <SortRow>
            <SortButtonRew>по Алфавиту</SortButtonRew>
            <SortButtonRew>по Дате</SortButtonRew>
        </SortRow>

    );
}