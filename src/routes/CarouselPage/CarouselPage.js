import React from 'react'
import Carousel from '../../components/Carousel/Carousel'


const images = [
	'https://picsum.photos/400/300/?image=926',
	'https://picsum.photos/400/300/?image=925',
	'https://picsum.photos/400/300/?image=924',
	'https://picsum.photos/400/300/?image=923',
	'https://picsum.photos/400/300/?image=922',
	'https://picsum.photos/400/300/?image=921',
];
export default function CarouselPage(){
    return(
        <div>
            CarouselPage
            <Carousel images = {images}/>
        </div>
    )
}