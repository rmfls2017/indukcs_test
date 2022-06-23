import React from 'react'
import {Button, Descriptions} from 'antd';

 function ProductInfo(props) {

    
  return (
    <div>
            <Descriptions title="알약정보">
                <Descriptions.Item label="PType">{props.detail.ptypes}</Descriptions.Item>
                <Descriptions.Item label="star">{props.detail.star}</Descriptions.Item>
                <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
            </Descriptions>

    </div>
  )
}

export default ProductInfo
