function postItem({state, output, services}) {
  const items = state.get('app.items')

  services.http.post('/items', items[items.length - 1])
    .then(output.success)
    .catch(output.error)

}

postItem.async = true
postItem.outputs = ['success', 'error'];

export default postItem;
