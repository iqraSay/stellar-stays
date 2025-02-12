import React, { useEffect } from "react";
import $ from "jquery";

const Faq = () => {
    useEffect(() => {
        if ($(".accordion-box").length) {
          $(".accordion-box").on("click", ".acc-btn", function () {
            var outerBox = $(this).parents(".accordion-box");
            var target = $(this).parents(".accordion");
            if ($(this).next(".acc-content").is(":visible")) {
              // Hide content
              $(this).removeClass("active");
              $(this).next(".acc-content").slideUp(200);
              $(outerBox).children(".accordion").removeClass("active-block");
            } else {
              // Show content
              $(outerBox).find(".accordion .acc-btn").removeClass("active");
              $(this).addClass("active");
              $(outerBox).children(".accordion").removeClass("active-block");
              $(outerBox).find(".accordion").children(".acc-content").slideUp(200);
              target.addClass("active-block");
              $(this).next(".acc-content").slideDown(200);
            }
          });
        }
    
        // Cleanup jQuery event listener when the component unmounts
        return () => {
          $(".accordion-box").off("click", ".acc-btn");
        };
      }, []);
  return (
    <div>
        <section class="faqs section-padding">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 col-md-12 mb-30">
                    <div class="section-subtitle">Popular Questions</div>
                    <div class="section-title">Frequently Asked Questions</div>
                </div>
                <div class="col-lg-6 offset-lg-1 col-md-12">
                    <ul class="accordion-box clearfix">
                        <li class="accordion block">
                            <div class="acc-btn">Do you have any discount code?</div>
                            <div class="acc-content">
                                <div class="content">
                                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry sapien fermen drana inthe miss molestie non tempor fermen the varius vestibulum drana.</p>
                                </div>
                            </div>
                        </li> 
                        <li class="accordion block">
                            <div class="acc-btn">How can I get in touch with my hotel?</div>
                            <div class="acc-content">
                                <div class="content">
                                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry sapien fermen drana inthe miss molestie non tempor fermen the varius vestibulum drana.</p>
                                </div>
                            </div>
                        </li> 
                        <li class="accordion block">
                            <div class="acc-btn">Can I cancel my reservation?</div>
                            <div class="acc-content">
                                <div class="content">
                                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry sapien fermen drana inthe miss molestie non tempor fermen the varius vestibulum drana.</p>
                                </div>
                            </div>
                        </li>
                        <li class="accordion block">
                            <div class="acc-btn">Do you have hotels with a spa?</div>
                            <div class="acc-content">
                                <div class="content">
                                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry sapien fermen drana inthe miss molestie non tempor fermen the varius vestibulum drana.</p>
                                </div>
                            </div>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Faq