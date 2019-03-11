import React from 'react'
class  AddTodo extends React.Component {
  //to check title changes every time onchange is fired in chrome, opening devtool and react tab...
  state={
      title:''
  }
  
  //state of this AddTodo will change everytime I type
  onChange = (e) =>{
    //e.target = the object (html element) that sends this event here....
    this.setState({[e.target.name]:e.target.value});
  }

  onSubmit = (e) =>{
      e.preventDefault();
      //pass this.state.title to addTodo func which is a props of AddTodo
      this.props.addTodo(this.state.title);
      //set State back to empty;
      this.setState({title:''});
  }

  render()
  {
      return(
        <form onSubmit={this.onSubmit} style={{margin:'1%',display:'flex'}}>
            <input 
                type="text"
                name="title"
                //text that we input won't show on screen coz after submit, "title" in state becomes empty.
                value={this.state.title}
                style={{flex:'10', padding:'5px'}}
                placeholder="  Add new Todo..."
                onChange={this.onChange} 
                className='form-control'
            />
            <input
                type="submit"
                value="Submit"
                style={{flex:'1'}}
                className='btn btn-success'
            />
        </form>
      )
      
    }
}
export default AddTodo;