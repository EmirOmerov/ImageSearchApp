import React from 'react';
import SearchBar from '../Components/searchbar.js';
import unsplash from '../api/unsplash.js';
import ImageList from './imageList.js';



class App extends React.Component{
  state={images:[]}
   onSearchSubmit= async (term)=>{
    const response = await unsplash.get('/search/photos',{
       params:{query:term}
     });
     //console.log(response.data.results);
     this.setState({images:response.data.results});
  } 

  render(){
    return (
    <div className="ui container" style ={{marginTop:'10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      <ImageList images ={this.state.images}/>
      </div>
      );
    }
  }

export default App;
