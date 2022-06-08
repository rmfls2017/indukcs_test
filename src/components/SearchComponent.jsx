import React from 'react';
import SearchBarComponent from './Search/SearchBarComponent';
import SearchResultList from './Search/SearchResultList';
import resultItemList from "../data/resultItemList";
import SearchDetail from "./Search/SearchDetail";
import SearchHistoryList from "./Search/SearchHistoryList";
import { Container, Col, Row } from 'react-bootstrap';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: null,
            filter: "",
            searchText: "",
            selectedItemList: [],
            resultList: resultItemList,
        };

        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleChangeSelectBox = this.handleChangeSelectBox.bind(this);
        this.handleClickItem = this.handleClickItem.bind(this);
        // this.handleClickSelectedListItem = this.handleClickSelectedListItem.bind(this);
        // this.handleInputSearch = this.handleInputSearch.bind(this);
    }

    componentDidMount() {
        localStorage.getItem("selectedItemList") && this.setState({ selectedItemList: JSON.parse(localStorage.getItem("selectedItemList")) });
    }

    handleSubmitForm (e) {
        e.preventDefault();

        this.setState({
            searchText: e.target.elements.searchText.value
        });
    }

    handleChangeSelectBox(value) {
        this.setState({
            filter: value
        });
    }

    handleClickItem(id) {
        let item = this.state.resultList.find(item => item.id === id);

        let items = [];
        // 로컬스토리지 이용해서 선택된 아이템 저장
        if (localStorage.getItem('selectedItemList')) {
            items = JSON.parse(localStorage.getItem('selectedItemList'));

            // 이미 있는 엘리먼트일경우
            if (items.find(item => item.id === id)) {
                this.setState({
                    item: item
                });

                return false;
            }
        }

        if (items.length >= 5) {
            items.pop();
        }

        // 아이템 추가
        items.unshift(item);
        localStorage.setItem('selectedItemList', JSON.stringify(items));

        this.setState({
            item: item,
            selectedItemList: items,
        });
    }

    render() {
        const filteredList = this.state.resultList.filter(item => {
            const { name, effect, company } = item;

            return name.toLowerCase().includes(this.state.searchText.toLowerCase())
                || effect.toLowerCase().includes(this.state.searchText.toLowerCase())
                || company.toLowerCase().includes(this.state.searchText.toLowerCase());
        });

        return (
            <Container fluid>
                <Row>
                    <Col>
                    <SearchBarComponent
                        items={this.state.selectedItemList}
                        handleChangeSelectBox={this.handleChangeSelectBox}
                        handleSubmitForm={this.handleSubmitForm}
                        handleClick={this.handleClickItem}
                    />
                    <SearchResultList
                        items={filteredList}
                        handleClick={this.handleClickItem}
                    />
                    </Col>
                    <Col>
                    <SearchDetail정
                        item={this.state.item}
                    />
                    </Col>
                    <Col>
                        <SearchHistoryList />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SearchComponent;