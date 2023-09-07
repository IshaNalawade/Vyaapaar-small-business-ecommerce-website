import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Roadmap() {
    return (
        <div>
            <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(131,0,0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(131,0,0)' }}
    
    iconStyle={{ background: 'rgb(131,0,0)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">Login as Seller or Buyer</h3>
   
    <p>
      ------------------------------------
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(131,0,0)', color: '#fff' }}
    iconStyle={{ background: 'rgb(131,0,0)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">If you are a Buyer, browse and add products to your cart</h3>

    <p>
    -----------------------------------------
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(131,0,0)', color: '#fff' }}
    iconStyle={{ background: 'rgb(131,0,0)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">Proceed to pay</h3>

    <p>
    -----------------------------------------
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(131,0,0)', color: '#fff' }}
    iconStyle={{ background: 'rgb(131,0,0)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">If you are a Seller, add products to your shop</h3>

    <p>
-----------------------------
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(131,0,0)', color: '#fff' }}
    iconStyle={{ background: 'rgb(131,0,0)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">Predict your rating or get average rating of shops around you</h3>

    <p>
-----------------------------
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
   
  />
</VerticalTimeline>
        </div>
    )
}

export default Roadmap
