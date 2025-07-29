import netflixDatabase from "../Api/netflixDatabase.json";

const DetailsCard = () => {
  return (
    <div className="detailsCardContainer">
      {netflixDatabase.map((item, index) => (
        <div className="detailsCard" key={index}>
          <img
            src={item.img_url}
            alt={item.name}
            className="cardImg" // Fixed height for consistency
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/300x450/000000/FFFFFF?text=Image+Not+Found";
            }}
          />
          <div className="cardDetails">
            <h3 className="cardTitle">{item.name}</h3>
            <p className="rating">
              Rating:{" "}
              <span
                className={`ratingFigure ${
                  item.rating >= 4.5 ? "highRating" : "lowRating"
                }`}
              >
                {item.rating}{" "}
              </span>{" "}
            </p>
            <p className="description">{item.description}</p>
            <p className="cast">
              <span className="fontBold">Cast:</span> {item.cast.join(", ")}
            </p>
            <p className="genre">
              <span className="fontBold">Genre:</span> {item.genre.join(", ")}
            </p>
            <button
              href={item.watch_url}
              target="_blank"
              rel="noopener noreferrer"
              className="watchButton"
            >
              Watch Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsCard;
