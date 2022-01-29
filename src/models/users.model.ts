import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      database: 'fidc',
      table: 'users'
    },
    strict: true,
  },
})
export class Users extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    name: 'razao_social'
  })
  razaoSocial: string;

  @property({
    type: 'string',
    required: true,
    name: 'cnpj',
  })
  cnpj: string;

  @property({
    type: 'date',
    required: true,
    name: 'data_abertura',
  })
  dataAbertura: Date;

  @property({
    type: 'string',
    required: true,
    name: 'telefone',
  })
  telefone: string;

  @property({
    type: 'string',
    required: true,
    name: 'faturamento',
  })
  faturamento: string;

  @property({
    type: 'boolean',
    required: true,
    name: 'deactivate',
  })
  deactivate: boolean;

  @property({
    type: 'string',
    required: true,
    name: 'username',
  })
  username: string;

  @property({
    type: 'string',
    required: true,
    name: 'senha',
  })
  senha: string;


  [prop: string]: any;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
