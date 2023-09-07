import React from "react";
import { Carousel, Button, ButtonGroup } from "react-bootstrap";
import "./Carousel.css";
export default function CarouselLayer() {
  return (
    <div>
      <div className="carousel_btns">
        <ButtonGroup size="large">
          <Button className="carousel_btn">Local business</Button>
          <Button className="carousel_btn">Your business</Button>
        </ButtonGroup>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://luxofood.sgp1.digitaloceanspaces.com/2020/05/chinese-5233490_1280.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://luxofood.sgp1.digitaloceanspaces.com/2020/05/chinese-5233490_1280.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://luxofood.sgp1.digitaloceanspaces.com/2020/05/chinese-5233490_1280.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
