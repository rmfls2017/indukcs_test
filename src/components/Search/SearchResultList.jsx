import React from "react";
import resultItemList from "../../data/resultItemList";
import SearchResultListItem from "./SearchResultListItem";

class SearchResultList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: resultItemList
        };
    }

    componentDidMount() {
        
    }

    handleClickResultItem(event) {

    }

    render() {
        const items = this.state.items.map(item => (<SearchResultListItem key={item.id} item={item} />));
        return(
            <div>
                {items}
            </div>
        );
    }
}

export default SearchResultList;