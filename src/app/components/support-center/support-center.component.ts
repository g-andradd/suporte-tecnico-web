import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SolutionResultModule } from '../solution-result/solution-result.module';  // Importe diretamente o módulo de SolutionResult
import { Solution } from '../../models/Solution';
import { SupportService } from '../../services/SuporteService';
import { Problem } from '../../models/Problem';

@Component({
  selector: 'app-support-center',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SolutionResultModule
  ],
  templateUrl: './support-center.component.html',
  styleUrls: ['./support-center.component.css']
})
export class SupportCenterComponent {
  problemDescription: string = '';
  solutionResponse?: Solution;
  isLoading: boolean = false;
  errorMessage?: string;

  constructor(private supportService: SupportService) {}

  onSubmit() {
    this.errorMessage = undefined;
    this.solutionResponse = undefined;
    this.isLoading = true;
  
    const request: Problem = { problem: this.problemDescription };
  
    this.supportService.fetchSolution(request).subscribe({
      next: (response) => {
        if (response.problema && response.problema.length > 0) {
          // Garantindo que estamos atribuindo o primeiro item da lista de problemas
          this.solutionResponse = response.problema[0]; // Isso é um objeto com o tipo Solution
        } else {
          this.errorMessage = 'Nenhum problema encontrado.';
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Ocorreu um erro ao buscar a solução. Tente novamente.';
        console.error(error);
        this.isLoading = false;
      }
    });
  }
  
}
