import React from "react";
import SearchResultListItem from "./SearchResultListItem";

class SearchResultList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClickResultItem(event) {

    }

    render() {
        const items = this.props.items.map(item => (<SearchResultListItem key={item.id} item={item} />));
        return(
            <div>
                {items}
            </div>
        );
    }
}

export default SearchResultList;