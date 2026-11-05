export const TOTAL_STEPS = 7;

export function createInitialState() {
  return {
    step: 1,
    proposalResponse: null,
    selectedDate: null,
    viewYear: null,
    viewMonth: null,
    selectedTime: null,
    selectedPlace: null,
    pickup: null
  };
}

let state = createInitialState();

export function getState() {
  return state;
}

export function updateState(key, value) {
  state = { ...state, [key]: value };
  return state;
}

export function setCurrentStep(step) {
  state = { ...state, step: Math.max(1, Math.min(TOTAL_STEPS, step)) };
  return state;
}

export function resetState() {
  state = createInitialState();
  return state;
}

export function canContinue() {
  switch (state.step) {
    case 3: return Boolean(state.selectedDate);
    case 4: return Boolean(state.selectedTime);
    case 5: return Boolean(state.selectedPlace);
    case 6: return state.pickup !== null;
    default: return true;
  }
}