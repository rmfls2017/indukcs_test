import React from "react";
import styled from 'styled-components';
import SearchResultListItem from "./SearchResultListItem";
import {Table} from "react-bootstrap";

class SearchResultList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = this.props.items.map(item => (
            <SearchResultListItem 
                key={item.id} 
                item={item} 
                handleClick={this.props.handleClick}
            />
        ));

        return(
            <>
                <Table>
                    <thead>
                        <tr>
                            <td>이름</td>
                            <td>제조사</td>
                            <td>효능/효과</td>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </Table>
            </>
        );
    }
}

export default SearchResultList;