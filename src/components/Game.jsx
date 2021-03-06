import React from 'react';
import Number from './Number';


class Game extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:1,
            isSmile:false,
            smileNumber:-1,
            isFinished :false
        }
    }
    
    
    componentDidUpdate(){
        if(this.state.count >=41){
            this.setState({
                count:0,
                smileNumber:-1
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
                isSmile:true,
                smileNumber:this.state.smileNumber + 1
            })
        }else if((this.state.count-9) === 3 && this.state.count >10 ){
            this.setState({
                isSmile:true,
                smileNumber:this.state.smileNumber + 1
            })
        }else if((this.state.count-19) === 3 && this.state.count >20 ){
            this.setState({
                isSmile:true,
                smileNumber:this.state.smileNumber + 1
            })
        }else if(this.state.count >=30 && this.state.count <39){
            this.setState({
                isSmile:true,
                smileNumber:this.state.smileNumber + 1
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
                <h3 className = "gameTitle">世界のタクト</h3>
                <p className = "gameText">〜 今は無き世界のオモローver.タクト 〜</p>
                <p className="gameText2"> ＊画像の切り替わりに1秒程お時間がかかる可能性がありますので、ご了承ください。</p>
                <Number
                    count = {this.state.count}
                    add ={()=>{this.addCount()}}
                    toggleSmile = {()=>{this.toggleSmile()}}
                    isSmile = {this.state.isSmile}
                    isFinished = {this.state.isFinished}
                    toggleFinished = {()=>{this.toggleFinished()}}
                    number = {this.state.smileNumber}
                />
            </>
        )
    }
}


export default Game;