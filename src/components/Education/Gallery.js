import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import styled from 'styled-components';

const items = [
  {
    src:require("../assets/edu-assets/edu1.jpg")
  },
  {
    src:require("../assets/edu-assets/edu2.jpg")
  },
  {
    src:require("../assets/edu-assets/edu3.jpg")
  },
  {
    src:require("../assets/edu-assets/edu4.jpg")
  },
  {
    src:require("../assets/edu-assets/edu5.jpg")
  },
  {
    src:require("../assets/edu-assets/edu6.jpg")
  },
  {
    src:require("../assets/edu-assets/edu7.jpg")
  },
  {
    src:require("../assets/edu-assets/edu8.jpg")
  },
  {
    src:require("../assets/edu-assets/edu9.jpg")
  },
  {
    src:require("../assets/edu-assets/edu10.jpg")
  },
  {
    src:require("../assets/edu-assets/edu11.jpg")
  },
  {
    src:require("../assets/edu-assets/edu12.jpg")
  },
  {
    src:require("../assets/edu-assets/edu13.jpg")
  },
  {
    src:require("../assets/edu-assets/edu14.jpg")
  },
  {
    src:require("../assets/edu-assets/edu15.jpg")
  },
  {
    src:require("../assets/edu-assets/edu16.jpg")
  },
  {
    src:require("../assets/edu-assets/edu17.jpg")
  },
  {
    src:require("../assets/edu-assets/edu18.jpg")
  }
];

//styled-components
const GallerySlides = styled.div`
  margin: 100px auto;

  @media (max-width: 1400px) {
    margin: 100px auto;
    transition: all 0.3s;
  }
`;

// exported component
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            src={item.src}
            className="d-block w-100"
            alt=""
          />
        </CarouselItem>
      );
    });

    return (
      <GallerySlides className="gallery">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </GallerySlides>
    );
  }
}

export default Gallery;
