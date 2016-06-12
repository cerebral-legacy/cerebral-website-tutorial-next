function postItem({state, output, services}) {
  const items = state.get('app.items')
  const lastItem = items[items.lenght - 1]

  services.http.post('/items', lastItem)
    .then(output.success)
    .catch(output.error)

}

postItem.async = true
postItem.outputs = ['success', 'error'];

export default postItem;
