import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from "axios";
import {Icon, Col, Card, Row, message} from 'antd';
import Meta from 'antd/lib/card/Meta';
import _ from 'lodash';
import CheckBox from './Sections/CheckBox';
import ColorBox from './Sections/ColorBox';
import {shape, color} from './Sections/Datas'
import SearchFeature from './Sections/SearchFeature';
import HistoryList from "./Sections/HistoryList";
import { getPills } from "../../../_actions/pill_actions";

function LandingPage() {
    const dispatch = useDispatch();

    const [Items, setItems] = useState([]);
    const [Skip, setSkip] = useState(0);
    const [Limit, setLimit] = useState(8); //8개씩 표시
    const [PostSize, setPostSize] = useState(0);
    const [Filters, setFilters] = useState({
        shape: [],
        color: []
    });
    const [SearchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getItems({
            skip: Skip,
            limit: Limit
        });
    }, []);

    const getItems = (body, cb) => {
        // axios.post('/api/product/products', body).then(response => {
        //     if(response.data.success){
        //         if (body.loadMore) {
        //             setProducts([...Products, ...response.data.productInfo]);
        //         } else {
        //             setProducts(response.data.productInfo);
        //         }
        //
        //         setPostSize(response.data.postSize);
        //
        //         cb && cb();
        //     } else {
        //         alert(" 알약을 가져오는데 실패 했습니다.");
        //     }
        // }
        dispatch(getPills(body)).then(response => {
            const data = response.payload;
            if (data.success) {
                if (body.loadMore) {
                    setItems([...Items, ...data.items]);
                } else {
                    setItems(data.items);
                }

                setPostSize(data.postSize);

                cb && cb();
            }
        }).catch(err => {
            message.error('');
        });
    }

    const loadMoreHandler = () => {
        let skip = Skip + Limit

        getItems({
            skip: skip,
            limit: Limit,
            loadMore : true
        });

        setSkip(skip);
    }
    

    const showFilteredResults = (filters) => {
        getItems({
            skip: 0,
            limit: Limit,
            filters: filters
        });

        setSkip(0);
    }


    const handleFilters = (filters, category) => {
        const newFilters = {...Filters};

        newFilters[category] = filters;

        showFilteredResults(newFilters);

        setFilters(newFilters);
    }

    // debounce
    const updateSearchTerm = _.debounce((newSearchTerm) => {
        setSearchTerm(newSearchTerm);

        getItems({
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }, () => {
            // localStorage 에 저장
            if (!localStorage.getItem("searchTerm")) {
                localStorage.setItem("searchTerm", JSON.stringify([newSearchTerm]));

                return;
            }

            // 저장되어 있지 않은 단어라면 저장
            if (localStorage.getItem("searchTerm").indexOf(newSearchTerm) === -1) {
                localStorage.setItem("searchTerm", JSON.stringify([...JSON.parse(localStorage.getItem("searchTerm")), newSearchTerm]));
            }
        });

        setSkip(0);
    }, 300);

    return (
        <div style={{width: '75%', margin: '3rem auto'}}>
            <div style={{textAlign: 'center'}}>
                <h2>PILL SEARCH <Icon type="search" /></h2>
            </div>
            {/* Filter */}
            <Row gutter={[16, 16]}>
                {/* shape checkBox */}
                <Col lg={12} xs={24}>
                    <CheckBox list={shape} handleFilters={filters => handleFilters(filters, "shape")} />
                </Col>
                {/* color checkBox */}
                <Col lg={12} xs={24}>
                    <ColorBox list={color} handleFilters={filters => handleFilters(filters, "color")} />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col><HistoryList /></Col>
            </Row>
            {/* search */}
            <div style={{display:'flex', justifyContent:'flex-end', margin:'1rem auto'}}>
                <SearchFeature
                    refreshFunction={updateSearchTerm}/>
            </div>
            <br/>
            {/* Cards */}
            <Row gutter={[16, 16]}>{Items.map((item, index) => {
                return (
                    <Col lg={6} md={8} xs={24}  key={index}>
                        <Card cover={<Link to={`/pills/${item._id}`}><img style={{width: '100%', maxHeight: '150px' }} src={`http://localhost:8080/${item.images[0]}`} /></Link>}>
                            <Meta
                                title={item.title}
                                description={item.ptypes}
                            />
                        </Card>
                    </Col>
                );
            })}</Row>
            <br/>

            {PostSize >= Limit &&
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button onClick={loadMoreHandler}>더보기</button>
            </div>
            }
        </div>
    )
}

export default LandingPage;
