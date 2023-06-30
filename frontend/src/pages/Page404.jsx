import { Link } from "react-router-dom";

import image404X4 from "../assets/404@4x.jpg";
import image404X3 from "../assets/404@3x.jpg";
import image404X2 from "../assets/404@2x.jpg";
import image404X1 from "../assets/404.jpg";

export default function Page404() {
  return (
    <section className="error-page">
      <h1>404</h1>
      <figure>
        <img
          src={image404X1}
          srcSet={`
            ${image404X4} 4x,
            ${image404X3} 3x,
            ${image404X2} 2x
          `}
          alt="Nokia 3310"
          width="800"
          height="601"
        />
        <figcaption>
          Photo Santeri Viinamäki, sous licence CC-BY-SA 4.0
        </figcaption>
      </figure>
      <p>
        Que vous cherchiez ou non à estimer ce que vaudrait un Nokia 3310 en
        2023, même reconditionné, la ressource que vous avez demandée n’a pas
        été trouvée.
        <Link to="/">Retour</Link>
      </p>
    </section>
  );
}
