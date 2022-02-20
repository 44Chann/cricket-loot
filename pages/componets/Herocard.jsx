const HeroCard = ({ img, name, value }) => {
  return (
    <div className="hero-card">
      <img src={img} alt="" />
      <div className="info">
        <p className="text-shadow">{name}</p>
        <p className="text-shadow">{value}</p>
      </div>
    </div>
  );
};

export default HeroCard;
