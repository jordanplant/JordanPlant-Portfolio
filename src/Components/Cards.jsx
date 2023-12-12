import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { useQuery, gql } from "@apollo/client";

const GET_CARD_ITEMS = gql`
  query GetCardItems {
    cardItems {
      id
      title
      path
      label
      text
      source {
        url
      }
    }
  }
`;

function Cards() {
  const { loading, error, data } = useQuery(GET_CARD_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("GraphQL Error:", error);
    if (error.networkError) console.log("Network error:", error.networkError);
    if (error.graphQLErrors) {
      error.graphQLErrors.forEach((err) => console.log("GraphQL error:", err));
    }
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {data &&
              data.cardItems.map((item) => (
                <CardItem
                  key={item.id}
                  title={item.title}
                  src={item.source.url} // Adjust this based on your data
                  text={item.text}
                  label={item.label}
                  path={item.path}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
