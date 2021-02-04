import React from 'react';

class SearchForm extends React.Component {

   

             

    render(){
    return (
        <form onSubmit={this.handlesubmit}>
            <label>
            Get Weather by City
            <input type="text" name="city" />
            
        </label>
        <input type="submit" value="Submit" />

        </form>
    )
    }

    
}

export default SearchForm;