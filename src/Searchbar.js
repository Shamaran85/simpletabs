import React from 'react';

export class Searchbar extends React.Component {
    render() {
        return (
            <div className="search-wrapper">
                <label for="newtab-search-text" className="search-label"></label>
                <input id="newtab-search-text" maxlength="256" placeholder="Search the Web" autocomplete="off" type="search" />
                <button id="searchSubmit" className="search-button" title="Search"></button>
            </div>
        );
    }
}
