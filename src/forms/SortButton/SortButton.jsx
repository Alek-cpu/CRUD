import React from "react";
import styled from "styled-components";

import {Button} from "@material-ui/core";
import {SortButtonRew} from "../../styled/SortButtonRew";
import {SortRow} from "../../styled/SortRow";

const nameTabs = [
    {
        name: 'по Алфавиту'
    },
    {
        name: 'по Дате'
    }
]

export const SortButton = () =>
    <SortRow>
        {
            nameTabs.map(({name}) => {
                return(
                    <SortButtonRew>{name}</SortButtonRew>
                );
            })
        }
    </SortRow>