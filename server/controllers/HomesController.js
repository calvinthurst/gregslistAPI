import { homesService } from "../services/HomesService.js";
import BaseController from "../utils/BaseController.js";



export class HomesController extends BaseController {
  constructor() {
    super('api/homes')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .delete('/:homeId', this.remove)
      .put('/:homeId', this.update)
  }

  async getAll(req, res, next) {
    try {
      const query = req.query
      const homes = await homesService.getAll(query)
      return res.send(homes)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const homes = await homesService.create(req.body)
      return res.send(homes)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const message = await homesService.remove(req.params.homeId)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const updated = await homesService.update(req.params.homeId, req.body)
      return res.send(updated)
    } catch (error) {
      next(error)
    }
  }
}