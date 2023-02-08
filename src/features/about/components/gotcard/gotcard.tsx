import { useState } from "react";
import { gotCardStructure } from "../../models/gotcard";

export function gotCard() {
  const initialCardData: gotCardStructure = {
    name: "",
    family: "",
    age: 0,
    state: true,
  } as gotCardStructure;
}

const [cardData, setCardData] = useState(gotCard);
