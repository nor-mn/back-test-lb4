import {
  FilterExcludingWhere,
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  param,
  post,
  requestBody,
  response
} from '@loopback/rest';
import {Buyer} from '../models';
import {BuyerRepository} from '../repositories';

export class BuyerController {
  constructor(
    @repository(BuyerRepository)
    public buyerRepository : BuyerRepository,
  ) {}

  @post('/buyers')
  @response(200, {
    description: 'Buyer model instance',
    content: {'application/json': {schema: getModelSchemaRef(Buyer)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Buyer, {
            title: 'NewBuyer',
            exclude: ['id'],
          }),
        },
      },
    })
    buyer: Omit<Buyer, 'id'>,
  ): Promise<Buyer> {
    buyer.created = Date();
    buyer.modified = Date();
    return this.buyerRepository.create(buyer);
  }

  @get('/buyers')
  @response(200, {
    description: 'Array of Buyer model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Buyer, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Buyer, {exclude: 'where'}) filter?: FilterExcludingWhere<Buyer>,
  ): Promise<Buyer[]> {
    return this.buyerRepository.find(filter);
  }
}
