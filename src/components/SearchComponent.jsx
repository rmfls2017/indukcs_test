import React from 'react';
import SearchBarComponent from './Search/SearchBarComponent';
import SearchResultList from './Search/SearchResultList';

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
            <div>
                <SearchBarComponent />
                <SearchResultList />
            </div>
        );
    }
}

export default SearchComponent;