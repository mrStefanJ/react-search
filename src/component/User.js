import React from 'react'
import axios from 'axios'

export default class User extends React.Component {
    constructor() {
        super();
        this.state = {
            persons: [],
            search: '',
        };
    }

    updateSearch = event => {
        this.setState({search: event.target.value.substr(0,20)})
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            console.log(res);
            this.setState({ persons: res.data});
        });
    }

    render() {
        const filteredUsers = this.props.persons.filter(person => {
            return person.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        })
        return (
            <div>
                <input type="text" 
                    name="name" 
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}/>
                <ul>
                    {filteredUsers.map((person) => {return <li key={person.id}>{person.name}</li>})}
                </ul>
            </div>
        )
    }
}
