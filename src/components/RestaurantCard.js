const RestaurantCard = (props) => {
  const { propsObj } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    propsObj;
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-400">
      <img
        className="rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const withPrometedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Prometed</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};
export default RestaurantCard;
