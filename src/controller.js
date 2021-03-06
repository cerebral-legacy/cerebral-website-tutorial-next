import Controller from 'cerebral'
import Model from 'cerebral-model-immutable'
import Devtools from 'cerebral-module-devtools'
import Http from 'cerebral-module-http'
import App from './modules/App'

const controller = Controller(Model({}))

controller.addModules({
  app: App,

  http: Http(),
  devtools: Devtools()
})

export default controller
