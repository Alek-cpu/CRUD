import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

import Job from '../../img/category-icons/full-version/job.svg';
import Relax from '../../img/category-icons/full-version/relax.svg';
import Shopping from '../../img/category-icons/full-version/shopping.svg';
import Sport from '../../img/category-icons/full-version/sport.svg';
import Study from '../../img/category-icons/full-version/study.svg';

const CategoryGrid = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
`;

const SettingSector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  padding: 20px 15px;
  cursor: pointer;
`;

function SettingCategory() {
    return (
        <>
            <CategoryGrid>
                <SettingSector>
                    <SettingSectorItem>NAME</SettingSectorItem>
                    <SettingSectorItem>ICON</SettingSectorItem>
                    <SettingSectorItem>COLOR</SettingSectorItem>
                </SettingSector>
                <DemoSector>
                    <img src={Study}/>
                </DemoSector>
            </CategoryGrid>
        </>
    );
}

export default SettingCategory;