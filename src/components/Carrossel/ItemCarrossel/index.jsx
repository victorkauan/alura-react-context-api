import Titulo from "@/components/Titulo";

const ItemCarrossel = ({ src, alt, carouselItem }) => {
  return (
    <div
      className={`image-height carousel-item ${carouselItem ? "" : "active"}`}
    >
      <img
        className={`w-100 img-fluid cover-image ${
          carouselItem ? "cover-center" : "cover-left"
        }`}
        src={src}
        alt={alt}
      />
      {carouselItem && (
        <div className="carousel-caption">
          <Titulo element="h5" className="fs-1">
            {carouselItem.title}
          </Titulo>
          <p className="fs-4">{carouselItem.subtitle}</p>
        </div>
      )}
    </div>
  );
};

export default ItemCarrossel;
