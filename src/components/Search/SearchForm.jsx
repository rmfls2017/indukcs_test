import React, { Fragment } from "react";
import SearchSelect from "./SearchSelect";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItems: props.selectedItems,
        }

        this.searchRef = React.createRef();

        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleSubmitForm(event) {
        event.preventDefault();

        let value = this.searchRef.current.value;

        // 빈 값일 때
        if (value === "") {
            return false;
        }

        let selectedItems = this.state.selectedItems;

        // 이미 값이 존재할 때
        if (selectedItems.indexOf(value) !== -1) {
            return false;
        }

        if (selectedItems.length >= 10) {
            selectedItems.shift();
            selectedItems.push(this.searchRef.current.value);
        } else {
            selectedItems.push(this.searchRef.current.value);
        }
    }

    render() {
        return(
            <Fragment>
                <form onSubmit={ this.handleSubmitForm } >
                    <SearchSelect />
                    <label>Search: <input placeholder="타이레놀" type="text" ref={this.searchRef} /></label>
                    <input type="submit" value="Search" />
                </form>
            </Fragment>
        );
    }
}

export default SearchForm;