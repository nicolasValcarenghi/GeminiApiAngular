import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gemini',
  templateUrl: './gemini.component.html',
  styleUrls: ['./gemini.component.css'],
  standalone: true,
  imports: [HttpClientModule, FormsModule],   
})
export class GeminiComponent {
  prompt: string = '';
  response: string = '';
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  sendPrompt() {
    if (!this.prompt.trim()) {
      alert('Por favor, insira um prompt.');
      return;
    }

    this.isLoading = true;
    const apiUrl = 'https://api.gemini.example.com/endpoint'; 
    const apiKey = 'AIzaSyB1gmDyzzWjBfd3-TGrVD_21-APB4oiMdA';
    this.http
      .post(apiUrl, { prompt: this.prompt }, { headers: { Authorization: `Bearer ${apiKey}` } })
      .subscribe({
        next: (data: any) => {
          this.response = data.response || 'Sem resposta recebida.';
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Erro ao chamar API:', err);
          this.response = 'Erro ao obter a resposta. Tente novamente.';
          this.isLoading = false;
        },
      });
  }
}
