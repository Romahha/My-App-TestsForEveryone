class RotateIMG extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rotation: 0
    }
  }
	let newRotation = this.state.rotation + 90;
	this.setState({
	  rotation: newRotation,
	})
  
  
  render(){
    const { rotation } =  this.state;
    return 
    <div>
      <img style={{transform: `rotate(${rotation}deg)`}} />
    </div>
  }
};
