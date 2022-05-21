import React from 'react';
import SearchBarComponent from './Search/SearchBarComponent';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }

    componentDidUpdate()
    {

    }

    shouldComponentUpdate()
    {

    }

    render() {
        return (
            <SearchBarComponent />
        );
    }
}

export default SearchComponent;