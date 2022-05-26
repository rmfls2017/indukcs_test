import React from "react";
import items from "../../data/resultItemList";
import SearchSelectedListItem from "./SearchSelectedListItem";

class SearchSelectedList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.handleClickItem = this.handleClickItem.bind(this);

        this.state = {
            maximumItemCount: props.maximumItemCount,
        }
    }

    handleClickItem(event) {
        
    }

    render() {
        return (
            <SearchSelectedListItem items={this.items} onClick={this.handleClickItem} />
        );
    }
}

export default SearchSelectedList;