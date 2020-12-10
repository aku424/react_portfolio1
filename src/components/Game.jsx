import React from 'react';
import Number from './Number';


class Game extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            isSmile:false,
            isFinished :false
        }
    }
    
    
    componentDidUpdate(){
        if(this.state.count >41){
            this.setState({
                count:0
            })
        }
    }
    addCount = ()=>{
        this.setState({
            count : this.state.count+1
        });
    }
    toggleSmile=()=>{
        if((this.state.count+1) % 3 === 0){
            this.setState({
                isSmile:true
            })
        }else if((this.state.count-9) === 3 && this.state.count >10 ){
            this.setState({
                isSmile:true
            })
        }else if((this.state.count-19) === 3 && this.state.count >20 ){
            this.setState({
                isSmile:true
            })
        }else if(this.state.count >=30 && this.state.count <39){
            this.setState({
                isSmile:true
            })
        }
        else{
            this.setState({
                isSmile:false
            })
        }
    }
    toggleFinished=()=>{
        if(this.state.count === 40){
            this.setState({
                isFinished:true
            })
        }else{
            this.setState({
                isFinished:false
            })
        }
    }
    render(){
        return(
            
            <>
                <h3 className = "gameTitle">世界のナベアツ</h3>
                <p className = "gameText">〜 今は無き世界のナベアスのオモロー 〜</p>
                <Number
                    count = {this.state.count}
                    add ={()=>{this.addCount()}}
                    toggleSmile = {()=>{this.toggleSmile()}}
                    isSmile = {this.state.isSmile}
                    isFinished = {this.state.isFinished}
                    toggleFinished = {()=>{this.toggleFinished()}}
                />
            </>
        )
    }
}

export default Game;