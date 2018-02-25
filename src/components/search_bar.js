import React, {Component} from 'react'; //{Component} is similar to const Component = React.Component
import ReactDOM from 'react-dom';

// const SearchBar = () => {
//     return <input />;
// };

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {terms: ''};
    }

    render(){
        //return <input onChange={this.onInputChange} />;
        //return <input onChange={(event) => console.log(event.target.value) } />;
        //<!--<input Value={this.state.terms} onChange={ (event) => this.setState({terms: event.target.value}) } />-->
        return (
            <div className="search-bar">
                <input Value={this.state.terms} onChange={(event) => {this.onInputChange(event.target.value)}} />
                <br/>
            </div>
        );
    }

    onInputChange(searchTerms){
        console.log('Input change event handler', searchTerms);
        this.setState({terms: searchTerms});
        this.props.onSearchTermChange(searchTerms);
    }
}

export default SearchBar;
