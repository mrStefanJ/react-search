import React from 'react'
// import axios from 'axios'

class UserInput extends React.Component {
    state = {
        search: 'Search Users',
    };

    updateSearch = event => {
        this.setState({search: event.target.value.substr(0,20)})
    }

    // handleSubmit = event => {
    //     event.preventDefault();

    //     const user = {
    //         person: this.state.person
    //     }

    //     axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     });
    // };

    render() {
        return (
            <div>
                <input type="text" 
                    name="name" 
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}/>
            </div>           
        )
    }
}

export default UserInput