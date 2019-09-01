import React from 'react';
import unsplash from '../forms-sec/api/unsplash';
import ImgList from './img-list';


class SearchBar extends  React.Component {

    state={
         term : '',
         image : []
                };

    // onInputChange (event) {
    //     console.log(event.target.value)
    // }

    // onInputClick () {
    //     console.log("input is clicked")
    // }

    // onFormSubmit (e) {
    //     e.preventDefault();    
    // }

    // onSearchSubmit (term,e) {
    //     e.preventDefault();
    //     console.log("merna")
    //  Axios.get('https://api.unsplash.com/search/photos',{
    //     params : {query : term},
    //     headers : {
    //         Authorization : "Client-ID f4dc7847bbd7f137bf595ea40c9901bc7ae7873695de0ee50d4265ef5081da56", 
    //     }  
    //  });
    // }

    render(){
        return (
            <div className='ui segment ui container style={{marginTop : "10px"}}'>
                <form
                    className='ui form'
                    
                    // onSubmit ={ (e,term)=> {
                    //     e.preventDefault()
                    //     Axios.get('https://api.unsplash.com/search/photos',{
                    //         params : {query : this.state.term},
                    //         headers : {
                    //             Authorization : "Client-ID f4dc7847bbd7f137bf595ea40c9901bc7ae7873695de0ee50d4265ef5081da56", 
                    //         }  
                    //      }).then(
                    //       (res) => {console.log(res)}
                    //      )
                    //     }}


                    onSubmit ={ async (e,term)=> {
                        e.preventDefault()
                        //   const response = await Axios.get('https://api.unsplash.com/search/photos',{
                        //     params : {query : this.state.term},
                        //     headers : {
                        //         Authorization : "Client-ID f4dc7847bbd7f137bf595ea40c9901bc7ae7873695de0ee50d4265ef5081da56", 
                        //     }  
                        //  });

                        const response = await unsplash.get('/search/photos',{
                            params : {query : this.state.term},
                           
                         });
                          console.log(response)
                          this.setState({image :response.data.results});
                         
                        }}
                >
                    <div className='ui feild'>
                        <label>Image Search</label>
                        {/* <input type='text' onClick={this.onInputClick} onChange={this.onInputChange}/> */}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => {
                                this.setState({ term: e.target.value})
                                console.log("hi", this.state.term)
                            }}
                        />
                    </div>
                </form>

                <div>
                    Found : {this.state.image.length} photos
                </div>
                 
                <ImgList images={this.state.image} />

            </div>
        );
    }

}

export default SearchBar;