import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"

import { dbContext } from "../db/DbContext.js"




class HomesService {
  async getAll(query) {
    const homes = await dbContext.Home.find(query).sort('-createdAt')
    return homes
  }

  async create(homeData) {
    const newHome = await dbContext.Home.create(homeData)
    return newHome
  }
  async remove(homeId) {
    const home = await dbContext.Home.findById(homeId)
    if (!home) throw new BadRequest('no home at id:' + homeId)
    await home.remove()
    return `deleted ${home.name}`
  }
  async update(homeId, homeData) {
    const original = await dbContext.Home.findById(homeId)
    if (!original) throw new BadRequest('no home at id: ' + homeId)
    original.name = homeData.name ? homeData.name : original.name
    original.description = homeData.description ? homeData.description : original.description
    original.bedrooms = homeData.bedrooms !== undefined ? homeData.bedrooms : original.bedrooms
    original.bathrooms = homeData.bathrooms !== undefined ? homeData.bathrooms : original.bathrooms
    original.price = homeData.price !== undefined ? homeData.price : original.price
    original.imgUrl = homeData.imgUrl ? homeData.imgUrl : original.imgUrl
    original.color = homeData.color ? homeData.color : original.color
    await original.save()
    return original
  }

}

export const homesService = new HomesService()