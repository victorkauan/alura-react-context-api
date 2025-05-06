import ItemCarrossel from "./ItemCarrossel";
import sliders from "@/mocks/carrossel.json";
import IndicadoresCarrossel from "./IndicadoresCarrossel";
import CarrosselControl from "./CarrosselControl";

const Carrossel = () => {
  return (
    <section role="Carrossel" aria-label="Carrossel">
      <div id="carrossel" className="carousel slide" data-bs-ride="carousel">
        <IndicadoresCarrossel />
        <div className="carousel-inner">
          {sliders.map((slide) => (
            <ItemCarrossel
              key={slide.id}
              src={slide.src}
              alt={slide.alt}
              carouselItem={slide.itemCarrossel}
            />
          ))}
        </div>
        <CarrosselControl variant="prev" />
        <CarrosselControl variant="next" />
      </div>
    </section>
  );
};

export default Carrossel;
