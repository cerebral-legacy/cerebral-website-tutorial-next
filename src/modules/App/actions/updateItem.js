function updateItem({input, state}) {
  state.merge('app.items.0', input.result)
}

export default updateItem;
