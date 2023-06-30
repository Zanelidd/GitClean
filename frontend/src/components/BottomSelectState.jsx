import PropTypes from "prop-types";

export default function BottomSelectState({ state, setSelectedState }) {
  return (
    <div className="state-container">
      <p className="title">Quel est l'état du téléphone ? </p>
      <div className="state-button-container">
        {state.map((stat) => {
          return (
            <button
              type="button"
              key={stat.id}
              className="button-state"
              onClick={() => {
                setSelectedState(stat);
              }}
            >
              {stat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

BottomSelectState.propTypes = {
  state: PropTypes.arrayOf.isRequired,
  setSelectedState: PropTypes.arrayOf.isRequired,
};
