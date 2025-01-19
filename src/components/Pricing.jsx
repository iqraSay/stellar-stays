import React from 'react'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'

const Pricing = () => {
  return (
    <div> <section class="pricing1 section-padding">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center mb-20">
                <div class="section-subtitle">Pricing Plan</div>
                <div class="section-title">Extra Prices</div>
            </div>
        </div>
        <div class="row justify-content-center g-0">
            <div class="col-12 pricing">
                <div class="item">
                    <div class="img"> <img src={p1} class="img-fluid" alt="" />
                        <div class="title">Beverage</div>
                        <div class="overlay"></div>
                    </div>
                    <div class="flex-column cont">
                        <div class="cont-hover">
                            <div class="icon"> <i class="fa-solid fa-martini-glass"></i> </div>
                            <p>In-room beverage lorem ipsum simply drana print typesettin induren.</p>
                            <div class="price">$490 <span>per night</span></div>
                        </div>
                    </div>
                </div>
                <div class="item active">
                    <div class="img"> <img src={p2} class="img-fluid" alt="" />
                        <div class="title">Cleaning</div>
                        <div class="overlay"></div>
                    </div>
                    <div class="flex-column cont">
                        <div class="cont-hover">
                            <div class="icon"> <i class="fa-solid fa-broom"></i> </div>
                            <p>Cleaning lorem in ipsum simply the drana print typesettin induren.</p>
                            <div class="price">$290 <span>daily</span></div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="img"> <img src={p3} class="img-fluid" alt="" />
                        <div class="title">Breakfast</div>
                        <div class="overlay"></div>
                    </div>
                    <div class="flex-column cont">
                        <div class="cont-hover">
                            <div class="icon"> <i class="fa-solid fa-mug-saucer"></i> </div>
                            <p>Room breakfast lorem ipsum simply drana print typesettin induren.</p>
                            <div class="price">$690 <span>daily</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center mt-30">
                <div class="section-info">
                    <div class="tag">Questions</div>
                    <div class="desc">You can send your questions to the mail address: <a href="mailto:hi@stellarstays.com" class="text-decoration-line-bottom">hi@stellarstays.com</a></div>
                </div>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default Pricing