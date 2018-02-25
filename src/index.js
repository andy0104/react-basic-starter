import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = 'AIzaSyCdgeodT0OW4vk2oAONoFIPFvX2vyLvrc8';

//JSX treats this as class
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     ); //JSX
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: [], selectedVideo: null};

        this.videoSearch('bhutan roadtrip');
    }

    videoSearch(terms){
        YTSearch({key: API_KEY, term: terms}, (videos) => {
            console.log('Youtube data', videos);
            this.setState({videos: videos, selectedVideo: videos[0]}); //This will resolve as this.setState({videos: videos}) ES6 will resolve this in case attribute name and parameter name are same
        });
    }

    render(){
        const videoSearch = _.debounce((terms) => {this.videoSearch(terms)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={(video) => {this.setState({selectedVideo: video})}}
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container')); //Need to pass JSX class instances and a target DOM to render the output into
