import React from 'react';

const Article = (props) => {
    

    return(
        <>
            <h2>{props.title}のコンポーネント練習</h2>
            <label htmlFor="check">公開状態</label>
            <input type ="checkbox" checked={props.isPublished} id="check" onClick = {()=>props.toggle()}/>

            <br/>
            <button id={"counter"}>いいね数:{props.count}</button>
            <h1>{props.number}</h1>
            <h1 onClick = {()=>props.add()}>+</h1>
            <h1 onClick = {()=>props.del()}>-</h1>
        </>
    )
};

export default Article