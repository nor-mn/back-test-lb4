import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {table: 'buyer'},
  },
})
export class Buyer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  names?: string;

  @property({
    type: 'string',
  })
  ci?: string;

  @property({
    type: 'string',
  })
  table_id?: string;

  @property({
    type: 'string',
  })
  seller?: string;

  @property({
    type: 'number',
  })
  total?: number;

  @property({
    type: 'date',
  })
  created?: string;

  @property({
    type: 'date',
  })
  modified?: string;


  constructor(data?: Partial<Buyer>) {
    super(data);
  }
}

export interface BuyerRelations {
  // describe navigational properties here
}

export type BuyerWithRelations = Buyer & BuyerRelations;
