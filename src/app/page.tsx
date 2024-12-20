
import Hero from "./components/hero";
import Bank from "./components/bank";
import Featuresproduct from "./components/featuresproduct";
import Topcategory from "./components/topcategory";
import Explore from "./components/explore";
import Oproducts from "./components/oproducts";



export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Bank />
      <Featuresproduct />
      <Topcategory />
      <Explore />
      <Oproducts />
    </div>
  );
}
