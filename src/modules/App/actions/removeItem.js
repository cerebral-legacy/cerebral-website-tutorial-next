function removeItem({ state }) {
  state.shift('items')
}

export default removeItem;
