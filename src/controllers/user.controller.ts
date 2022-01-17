// Uncomment these imports to begin using these cool features!


import {Filter, repository} from '@loopback/repository';
import {get, param} from '@loopback/rest';
import {Users} from '../models';
import {UsersRepository} from '../repositories';



// import {inject} from '@loopback/core';


export class UserController {
  constructor(
    @repository(UsersRepository)
    public usersRepository: UsersRepository
  ) { }


  @get('/users', {
    responses: {
      '200': {
        description: 'users get',
        content: {'application/json': {schema: Users}},
      },
    },
  })
  async find(
    @param.filter(Users) filter?: Filter<Users>,
  ): Promise<Users[]> {
    return this.usersRepository.find(filter)
  }


}




