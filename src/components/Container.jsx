import React from "react";
import Card from "./Card";
import data from "../data/mockData";

export default function Container() {
  const users = data.map((user) => <Card {...user} />);
  // console.log(cards);
  return <div className="container">{users}</div>;
}
