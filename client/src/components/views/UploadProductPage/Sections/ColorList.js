import React, { useState } from 'react';
import {Select} from "antd";

const Colors = [
    {key:1, value : "하양"},
    {key:2, value : "노랑"},
    {key:3, value : "주황"},
    {key:4, value : "분홍"},
    {key:5, value : "빨강"},
    {key:6, value : "갈색"},
    {key:7, value : "연두"},
    {key:8, value : "초록"},
    {key:9, value : "청록"},
    {key:10, value : "파랑"},
    {key:11, value : "남색"},
    {key:12, value : "자주"},
    {key:13, value : "보라"},
    {key:14, value : "회색"},
    {key:15, value : "검정"},
    {key:16, value : "투명"}
];

function ColorList(props) {
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