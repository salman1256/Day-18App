import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wcup'
})
export class WcupPipe implements PipeTransform {

  transform(value: number): string 
  {
    if(value>=2){
      return 'All time great performer '+value;
    }
    else{
      return 'Average Performer '+value;
    }
  }
}
