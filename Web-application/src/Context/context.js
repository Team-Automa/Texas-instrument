import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext({
  controls: [],
  mappers: []
});

function ControlReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function ControlApp(props) {
  const [state, dispatch] = React.useReducer(ControlReducer, { data: null });
  return (
    <Context.Provider
      value={{
        data: state.data
      }}
      {...props}
    />
  );
}

export { ControlApp, Context };
