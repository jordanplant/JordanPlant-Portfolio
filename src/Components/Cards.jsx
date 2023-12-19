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
      githubLink
      ranking
    }
  }
`;

function Cards() {
  const { loading, error, data } = useQuery(GET_CARD_ITEMS);

  console.log("GraphQL Data:", data);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("GraphQL Error:", error);
    if (error.networkError) console.log("Network error:", error.networkError);
    if (error.graphQLErrors) {
      error.graphQLErrors.forEach((err) => console.log("GraphQL error:", err));
    }
    return <p>Error: {error.message}</p>;
  }

  const sortedCardItems =
    data && data.cardItems
      ? [...data.cardItems].sort((a, b) => a.ranking - b.ranking)
      : [];

  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {sortedCardItems.map((item) => (
              <CardItem
                key={item.id}
                title={item.title}
                src={item.source?.url || "/images/JP-placeholder-v2.png"} // Use placeholder if url is null
                text={item.text}
                label={item.label}
                path={item.path}
                githubLink={item.githubLink}
                ranking={item.ranking}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
