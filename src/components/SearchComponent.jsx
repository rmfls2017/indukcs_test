import React from 'react';
import SearchBarComponent from './Search/SearchBarComponent';
import SearchResultList from './Search/SearchResultList';
import resultItemList from "../data/resultItemList";

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            resultList: [],
            selectedList: [],
        };
        
        this.state.resultList = resultItemList;

        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleInputSearch = this.handleInputSearch.bind(this);
    }

    handleSubmitForm (e) {

    }

    handleInputSearch(e) {
        // 검색 단어
        this.setState({
            search: e.target.value
        });
    }

    render() {
        const filteredList = this.state.resultList.filter(item => {
            return item.name.toLowerCase().includes(this.state.search.toLowerCase()) 
                || item.effect.toLowerCase().includes(this.state.search.toLowerCase());
        });

        return (
            <div>
                <SearchBarComponent 
                    handleSubmitForm={this.handleSubmitForm} 
                    handleInputSearch={this.handleInputSearch}
                />

                <SearchResultList items={filteredList}/>
            </div>
        );
    }
}

export default SearchComponent;