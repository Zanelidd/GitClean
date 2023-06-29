export default function BottomSelectState() {
  const states = [
    "Reconditionné",
    "Reconditionnable",
    "Bloqué",
    "Réparable",
    "DEEE",
  ];
  return (
    <div className="state-container">
      <p className="title">Quel est l'état du téléphone ? </p>
      <div className="state-button-container">
        {states.map((state) => {
          return (
            <button type="button" className="button-state">
              {state.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
