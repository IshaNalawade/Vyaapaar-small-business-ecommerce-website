import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import {v4 as uuidv4} from "uuid";
import { config } from "react-spring";

import "./CarouselCard.css"
export default class CarouselCard extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src='https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg' alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src='https://img.delicious.com.au/8I3yNIM6/w759-h506-cfill/del/2017/04/caramel-cake-44940-2.jpg' alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src='https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/cla5atxgxbp0w2e07vlr' alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F34761.jpg&q=85' alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src='https://images-gmi-pmc.edge-generalmills.com/3c94e24f-7ed2-4406-9eda-224b9b869ddb.jpg' alt="6" />
    },
    {
      key: uuidv4(),
      content: <img src='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/01/22/0/FNM_030121-Banana-Pudding-Tart_s4x3.jpg.rend.hgtvcom.616.462.suffix/1611331678502.jpeg' alt="7" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (<>
    <div style={{marginBottom:'5rem'}}>

      <div style={{ width: "100%", height: "20rem", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        /> 
        
      </div>
      </div>
    </>);
  }
}
