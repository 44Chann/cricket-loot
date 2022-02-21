import HeroCard from "./Herocard";

const HeroCards = () => {
  return (
    <div className="hero-cards">
      <HeroCard img="/images/supply.svg" name="SUPPLY" value="2022 ITEMS" />
      <HeroCard img="/images/cost.svg" name="COST" value="20 MATIC" />
      <HeroCard img="/images/wen.svg" name="WHEN" value="28TH FEB" />
    </div>
  );
};

export default HeroCards;
