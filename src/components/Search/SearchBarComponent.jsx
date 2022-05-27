import React from "react";
import SearchForm from "./SearchForm";
import SearchSelectedList from "./SearchSelectedList";

class SearchBarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <SearchForm 
                    handleSubmitForm={this.props.handleSubmitForm} 
                    handleInputSearch={this.props.handleInputSearch} 
                />
                <SearchSelectedList />
            </div>
        );
    }
}

export default SearchBarComponent;