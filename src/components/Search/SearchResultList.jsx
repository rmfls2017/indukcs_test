import React from "react";
import SearchResultListItem from "./SearchResultListItem";

class SearchResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClickResultItem(event) {

    }

    render() {
        return(
            <SearchResultListItem onClick={this.handleClickResultItem} />
        );
    }
}

export default SearchResultList;