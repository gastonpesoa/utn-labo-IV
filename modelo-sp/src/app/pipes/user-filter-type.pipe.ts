import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilterType'
})
export class UserFilterTypePipe implements PipeTransform {

  transform(users: any[], tipo: string): any {
    if (!users || !tipo) {
      return users;
    }
    return users.filter(user => user.tipo === "tipo");
  }

}
