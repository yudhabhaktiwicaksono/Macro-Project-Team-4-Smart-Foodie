import { useState } from "react";

const ImageSlider = ({slides}) =>{
    const [currentIndex,setCurrentIndex] = useState(0);
   
    const sliderStyle = {
        height:'100%',
        position:'relative',
    };
    const slideStyle={
        width :'100%',
        height:'100%',
        borderRadius:'10px',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    }
    const leftArroStyle ={
        position:'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex:1,
        cursor: 'pointer',
        backgroundColor: '#63A600',
        width:'50px',
        textAlign:'center',
    };

    const rightArroStyle ={
        position:'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex:1,
        cursor: 'pointer',
        backgroundColor: '#63A600',
        width:'50px',
        textAlign:'center',
    };

    const dotsContainerStyles = {
        display:'flex',
        justifyContent: 'center',
        position:'relative',
        bottom:'50px',
    };

    const dotStyle ={
        margin : '0 3px',
        cursor: 'pointer',
        fontSize : '20px',
    };

    const btnStyle ={
        color:'#FFFBFB',
        fontFamily:'Poppins',
        backgroundColor:'#63A600',
        position:'relative',
        bottom:'25%',
        left:'7.5%',
        cursor:'pointer',
        fontSize:'20px',
        fontHeight:'bold',
        
    };

    const goToPrevious = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slideStyle.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext= () =>{
        const isLastSlide = currentIndex === slideStyle.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    }
    return (
        <div style={sliderStyle}>
            <div style={leftArroStyle} onClick={goToPrevious}>❰</div>
            <div style={rightArroStyle} onClick={goToNext}>❱</div>
            <div style={slideStyle}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slides,slideIndex)=>(
                    <div key={slideIndex} style={dotStyle} onClick={()=>goToSlide(slideIndex)}>●</div>
                )) }
            </div>
            <button style={btnStyle}>Shop Now</button>
        </div>
    )
}
 export default ImageSlider;