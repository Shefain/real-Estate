const details = [
  {
    name: "Modern Design Villa",
    beds: 4,
    baths: 3,
    price: "$4,500.00",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Oceanview Penthouse",
    beds: 3,
    baths: 2,
    price: "$5,200.00",
    image:
      "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
  },
  {
    name: "Mountain Cabin",
    beds: 2,
    baths: 2,
    price: "$2,700.00",
    image:
      "https://i.pinimg.com/originals/a9/72/78/a97278eb1c5cd4d5eb0581836f3bf7a1.webp",
  },
  {
    name: "Elegant City Apartment",
    beds: 3,
    baths: 2,
    price: "$3,800.00",
    image:
      "https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/3d-team-di-1658214249-E1mkx/ond-2022-1665481999-aPmIg/lr-1665482073-Oqbhc/2022-09-05-br78-op1-v1-sz-01-min-1668589818-g30cZ.jpg",
  },
  {
    name: "Beachfront Bungalow",
    beds: 3,
    baths: 3,
    price: "$4,200.00",
    image:
      "https://th.bing.com/th/id/R.3f8a38d338e86c6a2d5e5928264cf753?rik=aOTjfD6sGz5xKA&pid=ImgRaw&r=0",
  },
  {
    name: "Luxury Desert Villa",
    beds: 5,
    baths: 4,
    price: "$6,500.00",
    image:
      "https://cdn.home-designing.com/wp-content/uploads/2016/11/using-art-in-minimalist-bedrooms.jpg",
  },
];

const Card = () => {
  return (
    <>
      {details.map(({ name, beds, baths, price, image }) => (
        <div
          className="p-4 bg-white rounded-lg border border-gray-600/10"
          key={name}
        >
          <img src={image} alt={name} />

          <div className="p-6">
            <h4 className="text-2xl font-bold cursor-pointer">{name}</h4>
            <div>
              {beds} beds &bull; {baths} baths
            </div>
            <div className="mt-2">
              <span className="text-xl font-extrabold text-blue-600">
                {price}
              </span>{" "}
              /M
            </div>
          </div>
          <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-gray-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
              </svg>
              <p>
                <span className="font-bold text-gray-900">{beds}</span> Bedrooms
              </p>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-3 text-gray-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
                ></path>
              </svg>
              <p>
                <span className="font-bold text-gray-900">{baths}</span>{" "}
                Bathrooms
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
