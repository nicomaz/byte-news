import { getDate } from "../utils/getDate";

const Date = () => {
  return (
    <section className="grid">
      <div className="bar">
        <span>{getDate()}</span>
      </div>
    </section>
  );
};

export default Date;
