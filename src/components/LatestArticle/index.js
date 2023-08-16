import React, { useState } from "react";
import "./index.css";
import article1 from "../../assets/article1.png";
import article2 from "../../assets/article2.png";
import article3 from "../../assets/article3.png";
import article4 from "../../assets/article4.png";
import article5 from "../../assets/article5.png";
import article6 from "../../assets/article6.png";

const LatestArticle = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 2) {
      newIndex = 2 - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="latest-article-container">
      <h1 className="latest-article-heading">Latest Articles</h1>

      <div className="carousel-container">
        <div
          className="carousel-item"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          <div className="article-container">
            <img className="article-image" src={article1} />
            <h1 className="article-heading">Grilled Tomatoes at Home</h1>
            <p className="article-para">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>
            <button className="article-button">Read More</button>
          </div>
          <div className="article-container">
            <img className="article-image" src={article2} />
            <h1 className="article-heading">Snacks for Travel</h1>
            <p className="article-para">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>
            <button className="article-button">Read More</button>
          </div>
          <div className="article-container">
            <img className="article-image" src={article3} />
            <h1 className="article-heading">Post-workout Recipes</h1>
            <p className="article-para">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>
            <button className="article-button">Read More</button>
          </div>
        </div>
        <div
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
          className="carousel-item"
        >
          <div className="article-container">
            <img className="article-image" src={article4} />
            <h1 className="article-heading">How To Grill Corn</h1>
            <p className="article-para">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>
            <button className="article-button">Read More</button>
          </div>
          <div className="article-container">
            <img className="article-image" src={article5} />
            <h1 className="article-heading">Crunchwrap Supreme</h1>
            <p className="article-para">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>
            <button className="article-button">Read More</button>
          </div>
          <div className="article-container">
            <img className="article-image" src={article6} />
            <h1 className="article-heading">Broccoli Cheese Soup</h1>
            <p className="article-para">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>
            <button className="article-button">Read More</button>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="index-button"
        >
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.4419 22.8523C18.9949 22.5393 19.1753 21.7427 18.8083 21.234C18.706 21.0921 17.1257 19.6312 15.2964 17.9875L11.9704 14.999L15.2973 12.0101C17.127 10.3662 18.7074 8.90503 18.8093 8.76312C18.9289 8.59653 18.9947 8.35683 18.9951 8.08643C18.9956 7.71445 18.9549 7.6306 18.6296 7.33388C18.2955 7.02916 18.2193 7 17.7585 7H17.2535L13.1268 10.7639L9 14.5277V14.959C9 15.2142 9.06299 15.4772 9.15418 15.6029C9.37757 15.9112 16.5225 22.452 16.9588 22.7478C17.3877 23.0386 18.0326 23.084 18.4419 22.8523Z"
              fill={activeIndex == 0 ? "#AFAFAF" : "#424961"}
            />
            <rect
              x="0.5"
              y="0.5"
              width="27"
              height="28"
              rx="4.5"
              stroke={activeIndex == 0 ? "#AFAFAF" : "#424961"}
            />
          </svg>
        </button>
        <h1 className="index-text">{activeIndex + 1}/2</h1>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="index-button"
        >
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z"
              fill={activeIndex != 0 ? "#AFAFAF" : "#424961"}
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z"
              fill={activeIndex != 0 ? "#AFAFAF" : "#424961"}
            />
            <rect
              x="0.5"
              y="0.5"
              width="27"
              height="28"
              rx="4.5"
              stroke={activeIndex != 0 ? "#AFAFAF" : "#424961"}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LatestArticle;
