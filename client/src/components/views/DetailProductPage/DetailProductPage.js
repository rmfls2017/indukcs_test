import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import ProductImage from './Sections/ProductImage'
import ProductInfo from './Sections/ProductInfo'
import {Row, Col} from 'antd';
import {getPill} from "../../../_actions/pill_actions";

function DetailProductPage(props) {
    const dispatch = useDispatch();

    const [Item, setItem] = useState({})

    useEffect(() => {
        dispatch(getPill(props.match.params.id)).then(response => {
           if (response.payload.success) {
               setItem(response.payload.item[0]);
           } else {
               alert("알약을 가져오는데 실패 했습니다.");
           }
        });
    }, []);

  return (
    <div style={{width: '100%', padding: '3rem 4rem'}}>
        <div style={{display: 'flex', justifyContent: 'Center'}}>
            <h1>{Item.title}</h1>
        </div>
    <br />
    <Row gutter={[16, 16]}>
        <Col lg={12} sm={24}>
        <ProductImage detail={Item}/>
        </Col>
        <Col lg={12} sm={24}>
            <ProductInfo detail={Item}/>
        </Col>
    </Row>
    </div>
  )
}

export default DetailProductPage