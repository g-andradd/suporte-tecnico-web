import { Routes } from '@angular/router';
import { SupportCenterComponent } from './components/support-center/support-center.component';
import { SolutionResultComponent } from './components/solution-result/solution-result.component';

export const routes: Routes = [
  { path: '', redirectTo: 'support', pathMatch: 'full' }, // Redireciona para a central de suporte
  { path: 'support', component: SupportCenterComponent },  // Central de Suporte Técnico
  { path: 'solution', component: SolutionResultComponent }, // Resultado da Solução
  { path: '**', redirectTo: 'support' } // Redireciona qualquer rota não encontrada para a central de suporte
];
