import DogCardDetail from "../DogCardDetail/DogCardDetail";
import { useSelector } from "react-redux";

const DogDetailContein = () => {
  const dog = useSelector((state) => state.dogDetail);
  return (
    <div>
      {dog?.map(({id, name, minWeight, maxWeight, maxHeight, minHeight, temperament, life_span, image}) => {

        return (
          <DogCardDetail
            key={id}
            id={id}
            name={name}
            minWeight={minWeight}
            maxWeight={maxWeight}
            minHeight={minHeight}
            maxHeight={maxHeight}
            image={image}
            temperament={temperament}
            life_span={life_span}
          />
        );
      })}
    </div>
  );
};

export default DogDetailContein;