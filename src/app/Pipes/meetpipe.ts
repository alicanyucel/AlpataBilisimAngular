import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsletterPipe'
})
export class MeetPipe implements PipeTransform {

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