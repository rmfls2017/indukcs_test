import React from "react";
import styled from 'styled-components';
import SearchHistoryListItem from "./SearchHistoryListItem";

const SearchHistoryHeader = styled.div`
`;

class SearchHistoryList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <SearchHistoryHeader />
                <SearchHistoryListItem />
            </>
        );
    }
}

export default SearchHistoryList;