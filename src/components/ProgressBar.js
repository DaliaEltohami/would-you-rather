const ProgressBar = (props) => {
    const { completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '75%',
      backgroundColor: "#e0e0de" ,
      borderRadius: 50,
      alignSelf : 'center'
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: "#0f5c26",
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;