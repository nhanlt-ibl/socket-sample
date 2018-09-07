import * as React from 'react';
// import * as XLSX from 'xlsx';
interface IAppProps {
  data:any
}

interface IAppState{
  input_file:any
}
export default class App extends React.Component<IAppProps,IAppState>{
  constructor(props){
    super(props)
    this.state={
      input_file:null
    }
  }
  onInputChange=(e)=>{

    console.log("e",e.target.files[0])
    const reader = new FileReader()
    reader.onload=(e:any)=>{
      console.log("onload",e.target.result)
    }
    reader.readAsText(e.target.files[0])
    this.setState({
      input_file:e
    })
  }
  render(){
    console.log("this.state.file",this.state.input_file)
    return(
      <input type="file"onChange={this.onInputChange}/>
    )
  }
}