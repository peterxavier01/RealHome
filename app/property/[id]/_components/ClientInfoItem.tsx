const ClientInfoItem = ({ title, value }: { title: string; value: string }) => {
  const titleStyles =
    "text-base leading-paragraph text-gray-3000 font-normal font-playfair-display";
  const valueStyles =
    "text-base leading-paragraph text-primary font-normal font-playfair-display";

  return (
    <p className={titleStyles}>
      {title}: <span className={valueStyles}>{value}</span>
    </p>
  );
};

export default ClientInfoItem;
