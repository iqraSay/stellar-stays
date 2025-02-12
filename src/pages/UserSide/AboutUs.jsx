import React from "react";
import About from "../../components/About";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import bg from '../../assets/AboutBg.jpeg'
import i1 from '../../assets/aboutDharma.jpg'
import i2 from '../../assets/aboutDharma2.jpg'
import '../../Js/custom'

const AboutUs = () => {
  return (
    <div>
      <Header />
      {/* Hero */}
      <section
        class="banner-header bg-img bg-fixed"
        data-overlay-dark="6"
        style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="subtitle">Stellar Stays Luxury Hotel</div>
              <div class="title">About Hotel</div>
            </div>
          </div>
        </div>
      </section>
      {/* About us */}
      <About />

      {/* Dharma */}
      <div className="tab-content" id="dharma">
        <div className="tab-section-content-wrap">
          <div
            className="tab-section-content-box"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            {/* Image Container */}
            <div
              style={{
                flex: "0 0 30%",
                paddingRight: "20px",
                marginBottom: "20px",
              }}
            >
              <div class="mb-20 ">
              {" "}
              <img
                class="rounded-2"
                src={i1}
                alt=""
              />{" "}
            </div>
            <div class=" mb-20 mt-60">
              {" "}
              <img
                class="rounded-2"
                src={i2}
                alt=""
              />{" "}
            </div>
            </div>
            {/* Text Content */}
            <div
              className="text-content"
              style={{ flex: "1", paddingLeft: "20px" }}
            >
              <div class="section-title">
                <em>The Stellar Stays</em> - Dharma
              </div>
              <p>
                We, as members of Stellar Stays, are committed to display
                through our behaviour and actions the following conduct, which
                applies to all aspects of our business:
              </p>
              <ul className="tab-bullet-list">
                <li>
                  Conduct which is of the highest ethical standards -
                  intellectual, financial and moral and reflects the highest
                  levels of courtesy and consideration for others.
                </li>
                <li>
                  Conduct which builds and maintains teamwork, with mutual trust
                  as the basis of all working relationships.
                </li>
                <li>
                  Conduct which puts the customer first, the Company second and
                  the self last.
                </li>
                <li>
                  Conduct, which exemplifies care for the customer through
                  anticipation of need, attention to detail, excellence,
                  aesthetics and style and respect for privacy, along with
                  warmth and concern.
                </li>
                <li>
                  Conduct which demonstrates a two-way communication, accepting
                  constructive debate and dissent whilst acting fearlessly with
                  conviction.
                </li>
                <li>
                  Conduct which demonstrates that people are our key asset,
                  through respect for every employee, and leading from the front
                  regarding performance achievement as well as individual
                  development.
                </li>
                <li>
                  Conduct which at all times safeguards the safety, security,
                  health and environment of guests, employees and the assets of
                  the Company.
                </li>
                <li>
                  Conduct which eschews the short-term quick fix for the
                  long-term establishment of a healthy precedent.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & vision */}
      <div class="tab-content" id="missionVision">
      <div class="tab-section-content-wrap mb-60">
  <div class="section-title">
    <em>Stellar Stays</em> - Mission
  </div>
  <div class="tab-section-content-box">
    <div class="mission-card">
      <h4>Our Guests</h4>
      <p>
        We are committed to meeting and exceeding the expectations of
        our guests through our unremitting dedication to every aspect of
        service.
      </p>
    </div>
    <div class="mission-card">
      <h4>Our People</h4>
      <p>
        We are committed to the growth, development and welfare of our
        people upon whom we rely to make this happen.
      </p>
    </div>
    <div class="mission-card">
      <h4>Our Distinctiveness</h4>
      <p>
        Together, we shall continue the Oberoi tradition of pioneering
        in the hospitality industry, striving for unsurpassed excellence
        in high-potential locations all the way from the Middle East to
        the Asia-Pacific.
      </p>
    </div>
    <div class="mission-card">
      <h4>Our Shareholders</h4>
      <p>
        As a result, we will create extraordinary value for our
        shareholders.
      </p>
    </div>
  </div>
</div>


        <div class="tab-section-content-wrap">
          <div class="section-title">
            <em>Stellar Stays -</em> Vision
          </div>
          <div class="tab-section-content-box">
            <ul class="tab-bullet-list">
              <li>
                We see an organisation which aims at leadership in the
                hospitality industry by understanding its guests; and designing
                and delivering products and services which enable it to exceed
                their expectations. We will always demonstrate care for our
                customers through anticipation of their needs, attention to
                detail, distinctive excellence, warmth and concern.
              </li>
              <li>
                We see a lean and responsive organisation where decision making
                is encouraged at each level and which accepts change. An
                organisation that is committed and responsive to its guests and
                other stakeholders.
              </li>
              <li>
                We see a multi-skilled workforce; which consists of team players
                who have pride of ownership in translating the organisation's
                vision into reality.
              </li>
              <li>
                We see an organisation where people are nurtured through
                continuous learning and skill improvement; and are respected,
                heard and encouraged to do their best. The Oberoi Group is
                recognised as best practice for training and developing its
                people.
              </li>
              <li>
                We see a diverse workforce which has been exposed to different
                cultures, problems and situations and can use its experiences to
                enrich the local employees whether in India or overseas.
              </li>
              <li>
                We see the world dotted with hotels of The Oberoi Group, in
                strategic commercial and resort locations.
              </li>
              <li>
                We see user-friendly technology enhancing value for our
                customers and helping our personnel by making information more
                accessible.
              </li>
              <li>
                We see an organisation which is conscious of its role in the
                community, supporting social needs and ensuring employment from
                within the local community.
              </li>
              <li>
                We see an organisation which is committed to the environment,
                using natural products and recycling items, thus ensuring proper
                use of the diminishing natural resources.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
