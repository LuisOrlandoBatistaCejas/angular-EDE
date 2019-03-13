import { NgModule } from '@angular/core';
import {NoSanitizePipe} from './no-sanitize.pipe';
import {RoundPipe} from './round.pipe';


@NgModule({
     exports: [
    NoSanitizePipe,
       RoundPipe
  ], declarations: [
    NoSanitizePipe,
    RoundPipe
  ]
})
export class CustomPipesModule {


}
