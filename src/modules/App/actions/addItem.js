function addItem({ state }) {
  state.push('app.items', {
    title: state.get('app.newItemTitle')
  })
}

export default addItem
