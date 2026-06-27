import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // articles = [
  //   {
  //     title: 'Migração de PHP para Spring Boot: o que aprendi',
  //     description: 'Como liderei a reescrita de um sistema legado que travava diariamente para uma arquitetura moderna que hoje atende 5 distribuidoras de energia.',
  //     tags: ['Arquitetura', 'Spring Boot', 'Migração'],
  //   },
  //   {
  //     title: 'Segurança em SaaS: 3 falhas que encontro em toda auditoria',
  //     description: 'IP real exposto, SSL entre Cloudflare e origem, banco aberto para internet — e como corrigir cada uma.',
  //     tags: ['Segurança', 'Cloudflare', 'Infraestrutura'],
  //   },
  //   {
  //     title: 'Como passei de 0 testes para 160+ em um sistema crítico',
  //     description: 'Estratégia para introduzir testes em uma codebase existente sem parar o desenvolvimento.',
  //     tags: ['Testes', 'Qualidade', 'JUnit'],
  //   },
  // ];
}
