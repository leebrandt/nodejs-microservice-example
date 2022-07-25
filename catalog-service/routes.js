const controller = require('./controller')

module.exports = (app) => {
  app.route('/').get(controller.getAll)
  app.route('/:id').get(controller.getById)
}