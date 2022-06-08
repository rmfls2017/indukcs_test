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
                    searchText={this.props.searchText}
                    handleChangeSelectBox={this.props.handleChangeSelectBox}
                    handleSubmitForm={this.props.handleSubmitForm} 
                />

                <SearchSelectedList items={this.props.items} handleClick={this.props.handleClick} />
            </div>
        );
    }
}

export default SearchBarComponent;