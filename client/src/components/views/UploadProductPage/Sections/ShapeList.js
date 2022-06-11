import React, { useState } from 'react';
import {Select} from "antd";

const Shapes = [
    {key:1, value : "원형"},
    {key:2, value : "타원형"},
    {key:3, value : "장방형"},
    {key:4, value : "반원형"},
    {key:5, value : "마름모"},
    {key:6, value : "삼각형"},
    {key:7, value : "사각형"},
    {key:8, value : "오각형"},
    {key:9, value : "육각형"},
    {key:10, value : "팔각형"},
    {key:11, value : "기타"}
];

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