import React from "react";
import CardItem from "../Components/CardItem";
import styles from "./Projects.module.css";
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

function Projects() {
  const { loading, error, data } = useQuery(GET_CARD_ITEMS);

  // console.log("PROJECTS Data:", data);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("GraphQL-PROJECTS Error:", error);
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
    <div
      className={`section__container ${styles.section__container}`}
      id="projects"
    >
      <h2>Projects</h2>
      <div className={styles["cards__container"]}>
        <div className={styles["cards__wrapper"]}>
          <ul className={styles["cards__items"]}>
            {sortedCardItems.map((item) => (
              <CardItem
                key={item.id}
                title={item.title}
                src={item.source?.url || "/JP-placeholder-v2.png"}
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

export default Projects;
