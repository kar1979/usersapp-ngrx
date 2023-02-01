import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/user.model';
import { filterTypes } from '../filter/filter.actions';

@Pipe({
  name: 'defFilter'
})
export class DefFilterPipe implements PipeTransform {

  transform(users: User[], filter: filterTypes): User[] {
    console.log('Pipe value ->', users);
    switch (filter) {
      case 'active':
        return users.filter(user => user.status);
      
      case 'unactive':
        return users.filter(user => !user.status);
    
      default:
        return users;
    }

    return users;
  }

}
