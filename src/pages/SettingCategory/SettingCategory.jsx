import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {FormControl, InputLabel, makeStyles, Select, TextField} from "@material-ui/core";

import StudyImg from '../../img/category-icons/full-version/StudyImg';
import SportImg from "../../img/category-icons/full-version/SportImg";
import JobImg from "../../img/category-icons/full-version/JobImg";
import RelaxImg from "../../img/category-icons/full-version/RelaxImg";
import ShopImg from "../../img/category-icons/full-version/ShopImg";
import Button from "@material-ui/core/Button";
import {AnimationButton} from "../../styled/AnimationButton";
import {useStyles} from "../../hooks/categoryStyles"
import {
    CategoryGrid, DemoSector, SettingSector, SettingSectorItem, SpanRotate
} from "../../styled/settingCategory"

function SettingCategory() {

    const classes = useStyles();

    const [category, setCategory] = useState({
        icoName: '',
        color: '',
    });
    const [color, setColor] = useState({
        name: '',
    });
    const [count, setCount] = useState(9)
    const [isDisable, setIsDisable] = useState(false)

    const handleChange = (e) => {
        const name = e.target.name;
        setCategory({
            ...category,
            [name]: e.target.value,
        });
    };

    const handleChangeColor = (e) => {
        const name = e.target.name;
        setColor({
            ...name,
            [name]: e.target.value,
        });
    };

    const handleSaveCategory = () => {
        setCount(count-1)
        console.log(isDisable, 'isDisable')
        if (count > 1) {
            setIsDisable(false);
        } else {
            setIsDisable(true);
        }
    }
    
    return (
        <>
            <CategoryGrid>
                <SettingSector>
                    <SettingSectorItem>
                        <TextField
                            required
                            id="filled-required"
                            label="NAME"
                            defaultValue="Category Name"
                            variant="filled"
                        />
                    </SettingSectorItem>
                    <SettingSectorItem>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Icon</InputLabel>
                            <Select
                                native
                                value={category.icoName}
                                onChange={handleChange}
                                label="color"
                                inputProps={{
                                    name: 'name',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value=""/>
                                <option value={'Job'}>Job</option>
                                <option value={'Study'}>Study</option>
                                <option value={'Sport'}>Sport</option>
                                <option value={'Shopping'}>Shopping</option>
                                <option value={'Relax'}>Relax</option>
                            </Select>
                        </FormControl>
                    </SettingSectorItem>
                    <SettingSectorItem>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Color</InputLabel>
                            <Select
                                native
                                value={color.name}
                                onChange={handleChangeColor}
                                label="color"
                                inputProps={{
                                    name: 'name',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value=""/>
                                <option value={"coral"}>Coral</option>
                                <option value={"fuchsia"}>Fuchsia</option>
                                <option value={"springgreen"}>SpringGreen</option>
                            </Select>
                        </FormControl>
                    </SettingSectorItem>
                </SettingSector>
                <DemoSector>
                    {
                        category.name === 'Study' ? <StudyImg color={color}/>
                        : category.name === 'Job' ? <JobImg color={color}/>
                        : category.name === 'Relax' ? <RelaxImg color={color}/>
                        : category.name === 'Sport' ? <SportImg color={color}/>
                        : <ShopImg color={color}/>
                    }
                </DemoSector>
                <AnimationButton
                    onClick={() => handleSaveCategory()}
                    variant="contained"
                    color="primary"
                    disableElevation
                    disabled={isDisable}
                >
                    <SpanRotate>
                        {
                            count
                            ? `СОХРАНИТЬ(${count})`
                            : `Превышен лимит`
                        }
                    </SpanRotate>
                </AnimationButton>
            </CategoryGrid>
        </>
    );
}

export default SettingCategory;