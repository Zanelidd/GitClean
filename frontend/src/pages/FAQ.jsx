export default function FAQ() {
  return (
    <div className="global-FAQ-container">
      <div className="header-FAQ-container">
        <div className="header-FAQ">
          <h1>Foire aux questions</h1>
        </div>
      </div>
      <details className="accordeon">
        <summary className="question">
          <h2>Comment estimer un appareil ?</h2>
        </summary>
        <p>
          Dans le menu principal, cliquez sur "estimez un appareil". Vous
          pourrez ensuite remplir les informations de l'appareil et suivre les
          étapes pour le trouver. Suite à cela, vous serez amené à juger de
          l'état de l'appareil. Une fois terminé vous pourrez voir apparaître un
          récapitulatif ainsi que la catégorie du téléphone et le prix de vente
          conseillé !
        </p>
      </details>
      <details className="accordeon">
        <summary className="question">
          <h2>A quoi correspondent les catégories ?</h2>
        </summary>
        <p>
          Il existe différents types de catégories : <br />- HC : Hors
          Catégorie, l'appareil est obsolète et ne pourra être revendu <br /> -
          C : l'appareil est très endommagé mais peut encore être utile pour une
          dernière vie <br /> - B : l'appareil n'est pas de première jeunesse
          mais il est encore parfaitement utilisable <br /> - A : l'appareil est
          presque neuf <br /> - Premium : l'appareil est très récent et n'a
          presque pas servi
        </p>
      </details>
      <details className="accordeon">
        <summary className="question">
          <h2>Comment estimer l'état d'un appareil ?</h2>
        </summary>
        <p>
          Dans le menu principal, cliquez sur "estimez un appareil". Vous
          pourrez ensuite remplir les informations de l'appareil et suivre les
          étapes pour trouver l'appareil. Suite à cela, vous serez amené à juger
          de l'état de l'appareil. Une fois terminé vous pourrez voir apparaître
          un récapitulatif ainsi que la catégorie du téléphone et le prix de
          vente conseillé !
        </p>
      </details>
      <details className="accordeon">
        <summary className="question">
          <h2>Comment me déconnecter ?</h2>
        </summary>
        <p>
          Dans le menu principal, cliquez sur "déconnexion", au plaisir de vous
          retrouver la prochaine fois !
        </p>
      </details>
    </div>
  );
}
