import React from "react";
import { FaStar, FaCheckCircle, FaWifi, FaParking, FaSmokingBan, FaSnowflake, FaThumbsUp} from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const PostCard = ({ image, imageTag }) => {
  const CardIcon = ({ children }) => {
    return (
      <div className="card-icon">
        <div className="card-icon-wrap">
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="list-card">
      <div className="list-card-wrap">
        <div className="list-card-wrap-image">
          {<span className="list-card-wrap-image-comment"> <FaThumbsUp/>highly rated </span>}
          <img
            src={image || "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"}
            alt="commerce-core"
          />
        </div>
        <div className="list-card-wrap-content">
          <div className="list-card-wrap-content-wrap">
            <section className="list-card-seperator">
              <div className="list-card-wrap-content-wrap-rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h3 className="list-card-wrap-content-wrap-title">Raddison blue new york </h3>
              <p className="list-card-wrap-content-wrap-subtitle">
                <GoLocation /> New York Avenue 2313, New York.US
              </p>
            </section>
            <section className="list-card-seperator">
              <div className="list-card-wrap-content-wrap-item">
                <div className="list-card-wrap-content-wrap-item-reviews">
                  <div className="list-card-wrap-content-wrap-item-reviews-score"> 8.8</div>
                  <div className="list-card-wrap-content-wrap-item-reviews-score-items">
                    <h3 className="list-card-wrap-content-wrap-title" style={{ fontSize: "16px" }}>
                      Exceptional
                    </h3>
                    <span className="list-card-wrap-content-wrap-subtitle"> 322 reviews</span>
                  </div>
                </div>
                <div className="list-card-wrap-content-wrap-item-policies">
                  <p>
                    <FaCheckCircle />
                    No Prepayment
                  </p>
                  <p>
                    <FaCheckCircle />
                    Free cancellation
                  </p>
                </div>
              </div>
            </section>
            <section className="list-card-seperator">
              <div className="list-card-wrap-content-wrap-item" style={{ flexWrap: "wrap" }}>
                <CardIcon><FaWifi size='1.5rem'/></CardIcon>
                <CardIcon><FaParking size='1.5rem'/></CardIcon>
                <CardIcon><FaSmokingBan size='1.5rem'/></CardIcon>
                <CardIcon><FaSnowflake size='1.5rem'/></CardIcon>
              </div>
            </section>
            <section>
              <div className="list-card-wrap-content-wrap-item">
                <div className="list-card-wrap-content-price">
                  <span className="list-card-wrap-content-wrap-subtitle"> Starts from </span>
                  <div style={{ fontWeight: 600, color: "darkblue" }}>
                    <div style={{ fontWeight: 400, fontSize: "10px", color: "#697B82" }}>
                      <span style={{ fontWeight: 700, fontSize: "20px", color: "#2F80ED" }}>$92</span>
                      <sup style={{ marginLeft: "2px" }}> / per night</sup>
                    </div>
                  </div>
                </div>
                <a className="list-card-wrap-content-checkout"> Check rates </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
