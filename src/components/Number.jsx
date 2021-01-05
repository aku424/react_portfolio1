import React from 'react';
import Image from './Image';


const Number = (props) => {
    console.log(props.count);
    console.log(props.isFinished);
    return(
        <>
        <div className="gameInner">
            <Image
                count = {props.count}
                isSmile = {props.isSmile}
                number = {props.number}
            />
            {(() => {
                    if ( props.count === 0){
                        return <p className="count smileCount">オモロー</p>
                    }else if (props.isFinished === true && props.count >40) {
                        return <p></p>
                    }else if(props.isSmile === true){
                        return <p className = "count smileCount">{props.count}</p>
                    }else if(props.isSmile === false){
                        return  <p className = "count noSmileCount">{props.count}</p>
                    }
                })()}
            {(() => {
                    if (props.isFinished === true) {
                        return <p className = "count smileCount">ありがとうございました！！！</p>
                    }
                })()}
            <div className="boxInner">
                {(() => {
                    if (props.isFinished === false) {
                        return<div className="btn" onClick = {()=>{props.add();props.toggleSmile();props.toggleFinished()}}>ここをタップ！！</div>
                    } else if((props.isFinished === true)){
                        return<div className="btn" onClick = {()=>{props.add();props.toggleSmile();props.toggleFinished()}}>もう一回だけやる！！</div>
                    }
                })()}
                
            </div>
        </div>
        </>
    )
};
export default Number;