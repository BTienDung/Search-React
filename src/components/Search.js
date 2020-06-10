import React, { Component } from 'react';
import axios from 'axios';
import Loader from "../loader.gif"
import Form from './Form';
class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            results: {},
            loading: false,
            message: '',
        }
        this.cancel = ""
    }
    fetchSearchResult=(updatedPageNo, query)=>{
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}`: '';
        const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}${pageNumber}`;

        if(this.cancel){
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();
        axios.get(searchUrl, {
            cancelToken: this.cancel.token
        })
            .then(res =>{
                console.log(res.data);
                
                const resultNotFoundMsg = ! res.data.hits.length
                        ? 'There are no mor search result. Please try a new search'
                        : '';
                        this.setState({
                            results: res.data.hits,
                            message: resultNotFoundMsg,
                            loading: false
                        })
                
            })
            .catch(error=>{
                if(axios.isCancel(error) || error){
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch the data. Please check network'
                    })
                }
                
            });
        

    }

    // fetchSearchResult=( query)=>{
    //     const searchUrl = `http://localhost:8000/customers/${query}`;

    //     if(this.cancel){
    //         this.cancel.cancel();
    //     }
    //     this.cancel = axios.CancelToken.source();
    //     axios.get(searchUrl, {
    //         cancelToken: this.cancel.token
    //     })
    //         .then(res =>{
    //             console.log(res.data);
                
    //             const resultNotFoundMsg = ! res.data.length
    //                     ? 'There are no mor search result. Please try a new search'
    //                     : '';
    //                     this.setState({
    //                         results: res.data,
    //                         message: resultNotFoundMsg,
    //                         loading: false
    //                     })
                
    //         })
    //         .catch(error=>{
    //             if(axios.isCancel(error) || error){
    //                 this.setState({
    //                     loading: false,
    //                     message: 'Failed to fetch the data. Please check network'
    //                 })
    //             }
                
    //         });
        

    // }

    //ungdung vao bai lam
    // handleOnInputChange=(event)=>{
    //     const query = event.target.value;
    //     if(!query){
    //         this.setState({query, results: {}, message:""})
    //     }else{
    //         this.setState({query, loading: true, message:''}, ()=>{
    //             this.fetchSearchResult( query);
    //         });
    //     }
    // }

    handleOnInputChange=(event)=>{

        

        const query = event.target.value;
        if(!query){
            this.setState({query, results: {}, message:""})
        }else{

            

            this.setState({query, loading: true, message:''}, ()=>{
                setTimeout(() => {
                    this.fetchSearchResult(1, query);
                    console.log('Hello, World!')
                }, 100);
                
            });
        }
    }

    renderSearchResults = ()=>{
        const {results} = this.state;
        if(Object.keys(results).length && results.length){
            return(
                <div className="result-container">
                    {results.map(result=>{
                        
                        return(
                            <a key={result.id} href={result.previewURL} className="result-item">
                                <h6 className="image-username">{result.username}</h6>
                                <div className="image-wrapper">
                                    <img className="image" src={result.previewURL} alt={`${result.username}`}/>
                                </div>
                            </a>
                        )
                    })}
                </div>
            )
        }
    }
    Alert = ()=>{
        alert("Click me!!!");
    }

    

    render(){
        const {query, loading, message} = this.state;
        return (
            <div className= "container">
                {/* {} */}
                <h2 className="heading">Live Search: React Application</h2>
                {/* Search input */}
                <label className="search-label" htmlFor="search-input">
                    <input type="text" 
                        value={query}
                        name = "query"
                        id="search-input"
                        placeholder="Search..."
                        onChange={this.handleOnInputChange}
                    />
                    <i className="fa fa-search" aria-hidden="true"/>
                    
                </label>
                {/* Error */}
        {message && <p className="message" >{message}{<Form></Form>}</p> }
                {/* Loader */}
                <img src={Loader} className={`search-loading ${loading ?"show":"hide"}`} alt="loader"/>
                {/* Result */}
                {this.renderSearchResults()}
                
            </div>
        );
    }
}
export default Search