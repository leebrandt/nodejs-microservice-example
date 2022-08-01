const controller = require('./controllers/catalog-controller')

module.exports = (app) => {
  app.route('/catalog').get(controller.getAllItems)
  app.route('/catalog/:id').get(controller.getItemDetails)
}