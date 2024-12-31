import React from "react";
import "./autoplaycarousel.scss";
import CardDetails from "./CardDetails";
import CarouselItem from "./CarouselItem"; 


export default function AutoplayCarousel() {

    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {Object.keys(CardDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            imgUrl={CardDetails[detailKey].imgUrl}
                            imgTitle={CardDetails[detailKey].title}
                        ></CarouselItem>
                    );
                })}
                {Object.keys(CardDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            imgUrl={CardDetails[detailKey].imgUrl}
                            imgTitle={CardDetails [detailKey].title}
                        ></CarouselItem>
                    );
                })}
            </div>
        </div>
    );
}