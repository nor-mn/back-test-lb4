import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Buyer, BuyerRelations} from '../models';

export class BuyerRepository extends DefaultCrudRepository<
  Buyer,
  typeof Buyer.prototype.id,
  BuyerRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Buyer, dataSource);
  }
}
