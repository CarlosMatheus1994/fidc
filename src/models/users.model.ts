import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      schema: 'fidc',
      table: 'users'
    },
    strict: false,
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
    type: 'number',
    required: true,
    name: 'cnpj',
  })
  cnpj: number;

  @property({
    type: 'date',
    required: true,
    name: 'data_abertura',
  })
  dataAbertura: Date;

  @property({
    type: 'number',
    required: true,
    name: 'telefone',
  })
  telefone: number;

  @property({
    type: 'number',
    required: true,
    name: 'faturamento',
  })
  faturamento: number;


  [prop: string]: any;

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
