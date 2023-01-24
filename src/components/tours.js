import Title from "./title";
import { tours } from "../data";
const tourss = () => {
  return (
    <section className="section" id="tours">
      <Title Title="Featured" subtitle="Tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <article key={tour.id} className="tour-card">
              <div className="tour-img-container">
                <img src={tour.image} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {tour.location}
                  </p>
                  <p>{tour.duration} days</p>
                  <p>From ${tour.cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default tourss;
