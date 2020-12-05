import React from 'react';
import Article from './article';

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isPublished: false,
            number :1,
            count:0
        }
    }
    componentDidMount(){
        document.getElementById('counter').addEventListener('click',this.countUp)
    }


    componentDidUpdate(){
        if(this.state.count >=10){
            this.setState({
                count:0
            })
        }
    }

    togglePublished = ()=>{
        this.setState({
            isPublished :!this.state.isPublished
        }) ;
    }
    addNumber = ()=>{
        this.setState({
            number : this.state.number+1
        });
    }
    delNumber = ()=>{
        this.setState({
            number : this.state.number-1
        });
    }
    countUp = ()=>{
        this.setState({
            count:this.state.count +1
        })
    }
    

    render(){
        return(
            <>
                <Article
                    title = {"react"}
                    isPublished ={this.state.isPublished}
                    toggle = {()=>{this.togglePublished()}}
                    number = {this.state.number}
                    add ={()=>{this.addNumber()}}
                    del ={()=>{this.delNumber()}}
                    count = {this.state.count}

                />
            </>
        )
    }
}

export default Blog;