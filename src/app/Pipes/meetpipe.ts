import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MeetsPipe'
})
export class MeetsPipe implements PipeTransform {

  transform(value: any, filtertext:string): any {
  if(filtertext==null)
  return value;
  return value.filter((p:any)=>{
    const name=p.name.toLowerCase().includes(filtertext.toLocaleLowerCase());
    const description=p.description.toLowerCase().includes(filtertext.toLocaleLowerCase());
    return name+description;
  });
    }
}