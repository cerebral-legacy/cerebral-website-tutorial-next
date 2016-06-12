import Controller from 'cerebral'
import Model from 'cerebral-model-immutable'
import Devtools from 'cerebral-module-devtools'
import App from './modules/App'

const controller = Controller(Model({}))

controller.addModules({
  app: App,

  devtools: Devtools()
})

export default controller
