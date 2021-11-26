import Card from "react-bootstrap/Card";
import React from "react";

const CardC = ({ link, text }) => {
  return (
    // <div onClick={() => alert("You clicked")}>
    <div>
      <Card
        style={{
          padding: "7px",
          width: "150px",
          height: "115px",
          textAlign: "center",
          borderRadius: "8px",
          border: "groove",
          borderWidth: "0px",
          borderColor: "snow",
          //marginLeft: "auto",
          //marginRight: "auto",
          boxShadow: "0px 3px 8px 1px rgba(210, 210, 210, 0.6)",
          color: "#1F468B",
        }}
      >
        <Card.Img
          variant="top"
          src={link}
          height="72px"
          style={{ marginBottom: "7px" }}
        />
        <Card.Body>
          <Card.Title>{text}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardC;
