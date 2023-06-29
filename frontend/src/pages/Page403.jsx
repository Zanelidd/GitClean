import { Link } from "react-router-dom";

import image403X4 from "../assets/403@4x.jpg";
import image403X3 from "../assets/403@3x.jpg";
import image403X2 from "../assets/403@2x.jpg";
import image403X1 from "../assets/403.jpg";

export default function Page403() {
  return (
    <section className="error-page">
      <h1>403</h1>
      <figure>
        <img
          src={image403X1}
          srcSet={`
            ${image403X4} 4x,
            ${image403X3} 3x,
            ${image403X2} 2x
          `}
          alt="Jailbreaking d’un iPhone"
          width="800"
          height="600"
        />
        <figcaption>Photo Miki Yoshihito, sous licence CC-BY 2.0</figcaption>
      </figure>
      <p>
        Que vous cherchiez ou non à déverrouiller un smartphone par des moyens
        pas très catholiques, vous n’avez pas l’autorisation d’accéder à cette
        ressource.
        <Link to="/">Retour</Link>
      </p>
    </section>
  );
}
