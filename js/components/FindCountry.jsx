import React from 'react'
import Information from './Information.jsx'
import ReactSVG from 'react-svg'

class FindCountry extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            name:'',
           id:null,
           render: false
        }
        
    }
     
    handleNameChange=(event)=>{
        
        this.setState({
            name: event.target.value.toLowerCase(),
            render: false
        
        })
       
    }

    handleBtnClick=(event)=>{

        event.preventDefault()
        
        const path=document.querySelector(`path[title="${this.state.name}"]`);
        const pathId=path.id;
        path.classList.add('color');
        console.log(path.id)
        this.setState({
            id: pathId,
            render: true
        })
        
       
    }
        
       handleRemoveBtn=(event)=>{ 
           event.preventDefault();
        if (this.state.id!=null){
                const pathColor=document.querySelector(`path[id=${this.state.id}]`);
                pathColor.classList.remove('color');
                const addData=document.querySelector('.additionalData')
                addData.style.display='none';
                
                }
            
    
        }
    renamePathIdTitle(){
        let paths=document.querySelectorAll('path');
        paths.forEach((path)=>{
            path.setAttribute('id', path.getAttribute('id').toLowerCase());
            path.setAttribute('title', path.getAttribute('title').toLowerCase());
        })

        if (this.state.id){
            console.log (this.state.id);
            const path=document.querySelector(`path#${this.state.id}`);
            path.classList.add('color');
        }

    }  
    handleMapMove=(event)=>{
        event.preventDefault();
        
        const countryName=event.target.getAttribute('title');

        const path=document.querySelector(`path[title="${countryName}"]`);
        console.log(path);
        
        const pathId=path.id;
        path.classList.add('color');
        console.log(path.id)
        this.setState({
            id: pathId,
            render: true

    });
    };


    render(){

        
        return <div>
                <div className='div-map' onClick={this.handleMapMove}>
                <ReactSVG
                path="images/worldHigh.svg"
                callback={svg => this.renamePathIdTitle()}
                className="mapsvg"
                style={{width:'1009px', height:'665px'}}
                />
                </div>
                <form className='findcountryData'>
                <input  className='buttons' type='text' 
                placeholder='Podaj nazwe kraju' 
                value={this.state.name} 
                onChange={this.handleNameChange}/>
                <button className='buttons' onClick={this.handleBtnClick} type='submit' value='Submit'>Znajdz na mapie</button>
                <button className='buttons' onClick={this.handleRemoveBtn}>Wyczysc mape</button>
                </form>
                 {this.state.render && <Information id={this.state.id}/>}
                </div>
    }
}

module.exports=FindCountry
