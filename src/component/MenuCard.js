import React from "react";

const MenuCard = (props) => {
  let carditems = props.items;
  return (
    <>
      <div className="card-container">
        {carditems.map((carddata) => (
          <div className="card" key={carddata.id}>
            <div className="card-body">
              <span className="card-number num-circle">{carddata.id}</span>
              <span className="card-author">{carddata.category}</span>
              <span className="card-title">{carddata.name}</span>
              <span className="card-description">{carddata.description}</span>
              <div className="card-read flex-row">
                <div className="card-read-line"></div>
                <div className="card-read-text">Read</div>
              </div>
            </div>
            <img
              src={carddata.imgSrc}
              alt={`${carddata.name} pic`}
              height="340vh"
              width="100%"
            />
            <span className="card-order-now">Order Now</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuCard;
