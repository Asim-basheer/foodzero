function FashionCard({ namePlaceHolder = "fashion", imgUrl, rest }) {
  return (
    <div className="fashion-card" data-name={namePlaceHolder} {...rest}>
      <img src={imgUrl} alt="fashion img" className="img-fluid" />
    </div>
  );
}

export default FashionCard;
