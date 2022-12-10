import Header from "../components/Header";
import Container from "../components/Container";
import CategoriesList from "../components/CategoriesList";
import Slider from "../components/Slider";
import RestaurantItem from "../components/RestaurantItem";
import Layout from "../components/Layout";
import { nearRestaurants, topRestaurants } from "../data";

const categories = [
  "Všetko",
  "Kebab",
  "Pizaa",
  "Cestoviny",
  "Šalaty",
  "Dezerty",
];

const HomePage = () => {
  return (
    <Layout>
      <div className="bg-gray">
        <Container>
          <Header />
        </Container>
        <CategoriesList />
        <Slider name="Top reštaurácie" restaurants={topRestaurants} />
        <Slider name="Vo vašom okolí" restaurants={nearRestaurants} />
        <Container>
          <h2 className="text-2xl text-gray-dark font-bold mb-2">
            Populárne dnes
          </h2>
          <RestaurantItem
            name="Grande"
            rating={4.3}
            image="/images/grande.jpg"
            className="w-full !h-[180px]"
          />
        </Container>
      </div>
    </Layout>
  );
};

export default HomePage;
