// Uncomment these imports to begin using these cool features!


import {Count, Filter, repository, Where, WhereBuilder} from '@loopback/repository';
import {get, getModelSchemaRef, param, patch, post, requestBody} from '@loopback/rest';
import {Users} from '../models';
import {UsersRepository} from '../repositories';

// import {inject} from '@loopback/core';


export class UserController {
  constructor(
    @repository(UsersRepository)
    public usersRepository: UsersRepository
  ) { }

  // Lista todos os usuários cadastrados no banco de dados.
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

  // Cria um usuário.
  @post('/users', {
    responses: {
      '200': {
        description: 'sisprenatal model instance',
        content: {'application/json': {schema: getModelSchemaRef(Users)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Users, {
            exclude: ['id'],
          }),
        },
      },
    })
    users: Omit<Users, 'id'>,
  ): Promise<Users> {
    return this.usersRepository.create(users);
  }

  // Atualiza informações de um usuário.
  @patch('/users/{id}', {
    responses: {
      '200': {
        description: 'Users PATCH success',
        content: {
          'application/json': {
            schema: Users
          }
        },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Users, {partial: true}),
        },
      },
    })
    usersUpdate: Users,
    @param.path.number('id') id: number,
    @param.where(Users) where?: Where<Users>,
  ): Promise<Count> {

    where = new WhereBuilder(where)
      .impose({
        id
      })
      .build();

    return this.usersRepository.updateAll(usersUpdate, where);
  }

  // Faz o get por id do usuário.
  @get('/users/{id}', {
    responses: {
      '200': {
        description: 'users get',
        content: {'application/json': {schema: Users}},
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
  ): Promise<Users> {
    return this.usersRepository.findById(id);
  }

}




