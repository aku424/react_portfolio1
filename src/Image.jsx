import React from 'react';


const Image = (props) => {
    console.log(props.isSmile);
    return(
        <>
            <div className="img">
                {(() => {
                    if (props.count === 41) {
                        return <span>オモロー</span>
                    } else if(props.isSmile === true) {
                        return <span>3で割れる</span>
                    }else{
                        return <span>3で割れない</span>
                    }
                })()}
            </div> 
        </>
    )
};
export default Image;