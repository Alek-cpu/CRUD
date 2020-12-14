import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

const CategoryGrid = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
`;

const SettingSector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: green;
`;

const DemoSector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: blue;
`;

const SettingSectorItem = styled.div`
  
`;

function SettingCategory() {
    return (
        <>
            <CategoryGrid>
                <SettingSector>
                    <SettingSectorItem>NAME</SettingSectorItem>
                    <SettingSectorItem>ICON</SettingSectorItem>
                    <diSettingSectorItemv>COLOR</diSettingSectorItemv>
                </SettingSector>
                <DemoSector>
                    DEMO
                </DemoSector>
            </CategoryGrid>
        </>
    );
}

export default SettingCategory;