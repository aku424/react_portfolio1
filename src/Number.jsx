import React from 'react';
import Image from './Image';

const Number = (props) => {
    console.log(props.count);
    console.log(props.isFinished);
    
    return(
        <>
            <Image
                count = {props.count}
                isSmile = {props.isSmile}
            />
            {(() => {
                    if (props.isFinished === false) {
                        return <h2>{props.count}</h2>
                    } else if((props.isFinished === true)){
                        return <h2>ありがとうございました！！！</h2>
                    }
                })()}
            <br/>
            <div className="boxInner">
                {(() => {
                    if (props.isFinished === false) {
                        return<div className="btn" onClick = {()=>{props.add();props.toggleSmile();props.toggleFinished()}}>ここをタップ！！</div>
                    } else if((props.isFinished === true)){
                        return<div className="btn" onClick = {()=>{props.add();props.toggleSmile();props.toggleFinished()}}>もう一回だけやる！！</div>
                    }
                })()}
                
            </div>
        </>
    )
};
export default Number;