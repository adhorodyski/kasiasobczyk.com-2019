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
    src:require("../assets/solo-assets/zdj1.jpg")
  },
  {
    src:require("../assets/solo-assets/zdj2.jpg")
  },
  {
    src:require("../assets/solo-assets/zdj3.jpg")
  },
  {
    src:require("../assets/solo-assets/zdj4.jpg")
  },
  {
    src:require("../assets/solo-assets/zdj5.jpg")
  },
  {
    src:require("../assets/solo-assets/zdj6.jpg")
  },
  {
    src:require("../assets/solo-assets/zdj7.jpg")
  },
  {
    src:require("../assets/solo-assets/zdj8.jpg")
  },
  {
    src:require("../assets/solo-assets/zdj9.jpg")
  },
  {
    src:require("../assets/solo-assets/zdj10.jpg")
  },

];

//styled-components
const GallerySlides = styled.div`
  @media (max-width: 1500px) {
    margin: 50px auto;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
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
