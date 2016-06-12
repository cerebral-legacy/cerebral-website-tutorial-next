function updateItem({input, state}) {
  state.merge('items.0', input.result)
}

export default updateItem;
