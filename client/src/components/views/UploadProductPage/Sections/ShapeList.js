import React, { useState } from 'react';
import {Select} from "antd";
import Shapes from '../../../../data/shape';

function ShapeList(props) {
    return(
        <>
            <Select
                name="color"
                placeholder="Select a option and change input text above"
                onChange={props.onChange}
                allowClear
            >
                {Shapes.map(item => (
                    <Select.Option key={item.key} value={item.key}> {item.value} </Select.Option>
                ))}
            </Select>
        </>
    );
}

export default ShapeList;