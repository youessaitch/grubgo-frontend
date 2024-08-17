import resss from "../assets/resss.jpg";
import charcoal from "../assets/charcoal1.jpeg";
import biryani from "../assets/biryaniKilo.jpg";
import fp from "../assets/gif1.gif";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Ensure to import these components

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  const restaurants = [
    {
      name: "Biryani by Kilo",
      image: biryani,
      description: "Delhi, India",
    },
    {
      name: "Kafferine",
      image: resss,
      description: "Kharagpur, India",
    },
    {
      name: "The Charcoal",
      image: charcoal,
      description: "Bokaro, India",
    },

    // Add more restaurant objects as needed
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-red-700">
          Savor India's flavors, delivered to you!
        </h1>
        <span className="text-xl">Deliciousness at your doorstep!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {/* <img src={landingImage} /> */}
        <div className="mt-8">
          <span className="font-bold text-3xl tracking-tighter text-center block mb-6">
            Our Most Popular Restaurants
          </span>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {restaurants.map((restaurant, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-4">
                        <img
                          src={restaurant.image}
                          alt={restaurant.name}
                          className="w-full h-[300px] object-cover"
                        />
                        <div className="mt-2 text-center">
                          <h2 className="font-bold text-xl">
                            {restaurant.name}
                          </h2>
                          <p>{restaurant.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Trusted by Food Lovers Across India
          </span>
          <span>Your Cravings, Our Priority. Hygiene First, Always.</span>
          <img
            src={fp}
            style={{ width: "400px", height: "300px" }}
            alt="Description"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
