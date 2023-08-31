import "./CardsContainer.css"
import Card from "../Card/Card"
[
    {
        "id": 1,
        "name": "Affenpinscher",
        "image": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
        "height": "23 - 29",
        "weight": "3 - 6",
        "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
        "life_span": "10 - 12 years",
        "created": false
    },
    {
        "id": 2,
        "name": "Afghan Hound",
        "image": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
        "height": "64 - 69",
        "weight": "23 - 27",
        "temperament": "Aloof, Clownish, Dignified, Independent, Happy",
        "life_span": "10 - 13 years",
        "created": false
    },
    {
        "id": 3,
        "name": "African Hunting Dog",
        "image": "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
        "height": "76",
        "weight": "20 - 30",
        "temperament": "Wild, Hardworking, Dutiful",
        "life_span": "11 years",
        "created": false
    }
]

const CardsContainer = () => {
    return (
      <div>
        {dogs.map(({ id, name, image, height, weight, temperament, life_span }) => (
          <div key={id}>
            <Card
              id={id}
              name={name}
              image={image}
              height={height}
              weight={weight}
              temperament={temperament}
              life_span={life_span}
            />
          </div>
        ))}
      </div>
    );
  };

export default CardsContainer