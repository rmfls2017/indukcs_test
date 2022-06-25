import React, { useState } from 'react';
import {Select} from "antd";
import Colors from '../../../../data/color';

function ColorList(props) {
    console.log(props);
    
    return(
        <>
            <Select
                name="color"
                placeholder="Select a option and change input text above"
                onChange={props.onChange}
                allowClear
            >
                {Colors.map(item => (
                    <Select.Option key={item.key} value={item.key}> {item.value} </Select.Option>
                ))}
            </Select>
        </>
    );
}

export default ColorList;