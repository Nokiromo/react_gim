import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import ClientList from '../clients-list/client-list';
import ClientAddForm from '../client-add-form/client-add-form';
import './app.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
        data : [
    {name: 'Alex Morykon', currentMembership: 'Full Gym', increase: false, like: true, id: 1},
    {name: 'Alex Morykon', currentMembership: 'Full Gym', increase: false, like: false, id: 2},
    {name: 'Illya Kyakevych', currentMembership: 'Day Gym', increase: false, like: false, id: 3},
    {name: 'Danylo Litvinchyk', currentMembership: 'Full Gym', increase: true, like: false, id: 4}]
    }
    this.maxId = 4;
    
  }

  deleteItem = (id) =>{
    this.setState(({data}) =>{
      return {
        data: data.filter(item => item.id !== id)
      }
   })
  }
  addClient = (name, currentMembership) => {
    const newClient ={
      name,
      currentMembership,
      increase: false,
      like: false,
      id: ++this.maxId
    }
    this.setState(({data}) =>({  
      data: [...data, newClient]
    }))
  }
  onToggleProp = (id,prop) =>{
    // this.setState(({data}) =>{
    //   const index = data.findIndex(elem => elem.id === id)
      // const old = data[index]
      // const newItem = {...old, increase: !old.increase}
      // const newArr = [...data.slice(0, index), newItem,  ...data.slice(index +1)]

      // return{
      //   data: newArr
      // }
    // })
    this.setState(({data}) =>({
      data: data.map(item =>{
        if(item.id ===id){
          return {...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }
  // onToggleRease = (id) =>{
  //    this.setState(({data}) =>({
  //     data: data.map(item =>{
  //       if(item.id ===id){
  //         return {...item, like: !item.like}
  //       }
  //       return item
  //     })
  //   }))
  // }
  render(){
    return (
    <div className="app">
      <AppInfo memberCounter = {this.state.data.length}
      increaced = {this.state.data.filter(item => item.increase).length}/>

      <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
      </div>
      <ClientList 
        data={this.state.data}
        onDelete = {this.deleteItem}
        onToggleProp = {this.onToggleProp}
        />
      <ClientAddForm addClient = {this.addClient}/>
    </div>

  );
  }
}

export default App;
