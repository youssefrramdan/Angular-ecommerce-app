import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star',
})
export class StarPipe implements PipeTransform {
  transform(value: number, maxRating:number=5) {
    if(value <0)value=0

    if (maxRating>5) maxRating=5
    let fullStar ="⭐"
    let emptyStar = "☆"
    let full =  fullStar.repeat(Math.round(value))
    let empty = emptyStar.repeat(maxRating - Math.round(value))
    return full+empty;
  }
}
