import { Component, Input } from '@angular/core';
import { Solution } from '../../models/Solution';

@Component({
  selector: 'app-solution-result',
  templateUrl: './solution-result.component.html',
  styleUrls: ['./solution-result.component.css']
})
export class SolutionResultComponent {
  @Input() solution?: Solution;
}
