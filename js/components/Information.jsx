import React from 'react'


class Information extends React.Component{
      constructor(props){
        super(props);
        this.state={
            dataAPI: null,
            name:'',
            capital:'',
            flag:'',
            id:null,
            
          
        }
        
    }
    componentDidUpdate(){
        this.updateComponent()
    }
     
    componentDidMount(){
        this.updateComponent();
    }

    updateComponent = () => {
        console.log('Info');
        if(this.state.id!=this.props.id){
            
            console.log('fetch')
            fetch('https://restcountries.eu/rest/v2/alpha/' + this.props.id.toLowerCase())
            .then(r=>r.json())
            .then(data=>{
                this.setState({
                    dataAPI: data,
                    name: data.name,
                    flag:data.flag,
                    capital: data.capital,
                    id: this.props.id,
                }, ()=>{console.log(this.state.dataAPI)
                });
            });
        }else{
            console.log('not fetch')
        }
    }
   

      


    render(){
        return <div className='informationData additionalData'>
                 <p className='infoData infoCountry'>Kraj:  {this.state.name}</p>   
                 <p className='infoData infoFlag'> Flaga: <img className='flagData'  src={this.state.flag}/> </p>
                 <p className='infoData infoCapital'>Stolica: {this.state.capital}</p>
                  </div>
    }
}

module.exports=Information;







