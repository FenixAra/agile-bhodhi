import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './css/App.css';

export default class MainCarousel extends Component {
  render() {
    return (
      <div className="Corousel-div">
	      <Carousel>
		    <Carousel.Item>
		      <img alt="900x500" src="/images/budh1.jpg"/>
		      <Carousel.Caption>
		      </Carousel.Caption>
		    </Carousel.Item>
		    <Carousel.Item>
		      <img alt="900x500" src="/images/budh2.jpg"/>
		      <Carousel.Caption>
		      </Carousel.Caption>
		    </Carousel.Item>
		    <Carousel.Item>
		      <img alt="900x500" src="/images/books.jpg"/>
		      <Carousel.Caption>
		      </Carousel.Caption>
		    </Carousel.Item>
		  </Carousel>
	  </div>
    );
  }
}
