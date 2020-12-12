import React from 'react';
import smile from '../img/smile_normal.png'; 
import end from '../img/smile_end.png'; 
import pic1 from '../img/smile1.png';
import pic2 from '../img/smile2.png';
import pic3 from '../img/smile3.png';
import pic4 from '../img/smile4.png';
import pic5 from '../img/smile5.png';
import pic6 from '../img/smile6.png';
import pic7 from '../img/smile7.png';
import pic8 from '../img/smile8.png';
import pic9 from '../img/smile9.png';
import pic10 from '../img/smile10.png';
import pic11 from '../img/smile11.png';
import pic12 from '../img/smile12.png';
import pic13 from '../img/smile13.png';
import pic14 from '../img/smile14.png';
import pic15 from '../img/smile15.png';
import pic16 from '../img/smile16.png';
import pic17 from '../img/smile17.png';
import pic18 from '../img/smile18.png';
import pic19 from '../img/smile19.png';
import pic20 from '../img/smile20.png';
import pic21 from '../img/smile21.png';

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