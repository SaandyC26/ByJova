import React, { Component } from 'react';

class UsersComponent extends Component {

    constructor(props){

        this.state= {
            users: []
        }
       
    }


    render() {
        return (
            <div>

               <tbody>
                   {
                       this.state.users.map(
                           users =>
                           <tr key = {users.id}>
                               <td>{ users.nombre} </td>
                           </tr>
                       )
                   }
                   </tbody> 
            </div>
        );
    }
}

export default UsersComponent;