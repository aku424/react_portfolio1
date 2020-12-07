import React from 'react';

const Image = (props) => {
    console.log(props.isSmile);
    return(
        <>
            <div>
                {(() => {
                    if (props.count === 41) {
                        return <p className = "imageText">オモロー</p>
                    } else if(props.isSmile === true) {
                        return <p className = "imageText">アホ</p>
                    }else{
                        return <p className = "imageText">普通</p>
                    }
                })()}
            </div> 
        </>
    )
};
export default Image;