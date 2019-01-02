import React, { Component } from 'react'
import axios from 'axios'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Button } from 'reactstrap';

class Category extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            categories: [],
            apiUrl:'http://test.technovaa.ir/offernew/user/get/categories',
          dropdownOpen: false
        };
      }
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    componentDidMount(){
        axios.post(`${this.state.apiUrl}`,JSON.stringify({cat_id:"catroot",
        with_ob:"false"}))
        .then(res => {
            // console.log(res.data)
            this.setState({categories: res.data.output.categories}) 
        })
        .catch(err => console.log(err))
     }  

  render() {
    const categ_list = this.state.categories.map((item, index) => {
    return (
        
        <DropdownItem key={index.toString()}><a href="#">{item.name}</a></DropdownItem>
    )
         }) 
    return(
        <Dropdown className="dropdown_menu" isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
            <DropdownToggle caret>CATEGORY</DropdownToggle>
                <DropdownMenu right>
                     {categ_list}
                </DropdownMenu>
        </Dropdown>
     )              
    }
    
}
export default Category