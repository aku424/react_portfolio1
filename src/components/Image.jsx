import React from 'react';
import smile from '../img/smile_normal.jpg'; 
import end from '../img/smile_end.jpg'; 
import pic1 from '../img/smile1.jpg';
import pic2 from '../img/smile2.jpg';
import pic3 from '../img/smile3.jpg';
import pic4 from '../img/smile4.jpg';
import pic5 from '../img/smile5.jpg';
import pic6 from '../img/smile6.jpg';
import pic7 from '../img/smile7.jpg';
import pic8 from '../img/smile8.jpg';
import pic9 from '../img/smile9.jpg';
import pic10 from '../img/smile10.jpg';
import pic11 from '../img/smile11.jpg';
import pic12 from '../img/smile12.jpg';
import pic13 from '../img/smile13.jpg';
import pic14 from '../img/smile14.jpg';
import pic15 from '../img/smile15.jpg';
import pic16 from '../img/smile16.jpg';
import pic17 from '../img/smile17.jpg';
import pic18 from '../img/smile18.jpg';
import pic19 from '../img/smile19.jpg';
import pic20 from '../img/smile20.jpg';
import pic21 from '../img/smile21.jpg';

const Image = (props) => {
    console.log(props.isSmile);
    const images = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,
                    pic11,pic12,pic13,pic14,pic15,pic16,pic17,pic18,pic19,pic20,pic21];
    return(
        <>
            <div className = "gameImageBox">
                {(() => {
                    if (props.count === 0) {
                        return <img src = {end} alt = "オモローの顔"/>
                    } else if(props.isSmile === true) {
                        return <img src ={images[props.number]} alt = "変顔"/>
                    }
                    else{
                        return <img src = {smile} alt = "普通の顔"/>
                    }
                })()}
            </div> 
        </>
    )
};
export default Image;