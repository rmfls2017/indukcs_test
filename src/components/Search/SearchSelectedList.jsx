import React from "react";
import SearchSelectedListItem from "./SearchSelectedListItem";

class SearchSelectedList extends React.Component {
    constructor(props) {
        super(props);

        this.handleClickItem = this.handleClickItem.bind(this);

        this.state = {
            maximumItemCount: props.maximumItemCount,
        }
    }

    handleClickItem(event) {

    }

    render() {
        return (
            <SearchSelectedListItem onClick={this.handleClickItem} />
        );
    }
}

export default SearchSelectedList;