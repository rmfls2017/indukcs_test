import React from "react";
import SearchForm from "./SearchForm";
import SearchSelectedList from "./SearchSelectedList";

class SearchBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItems: [],
        };
    }

    render() {
        return(
            <div>
                <SearchForm />
                <SearchSelectedList selectedItems={this.state.selectedItems} />
            </div>
        );
    }
}

export default SearchBarComponent;