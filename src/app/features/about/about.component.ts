import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {
  skillCategories = [
    {
      name: 'Backend',
      skills: ['Java', 'Spring Boot', 'Node.js', 'NestJS', 'Rust', 'PHP', 'Python'],
    },
    {
      name: 'Frontend',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Bootstrap'],
    },
    {
      name: 'Infra & DevOps',
      skills: ['Docker', 'Linux (Ubuntu/Debian)', 'Jenkins CI/CD', 'AWS', 'MQTT', 'Nginx'],
    },
    {
      name: 'Banco de Dados',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'H2'],
    },
    {
      name: 'Segurança & Observabilidade',
      skills: ['Wazuh SIEM', 'Cloudflare', 'Zabbix', 'SigNoz', 'Grafana', 'SonarQube'],
    },
    {
      name: 'Ferramentas',
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Flyway', 'Swagger'],
    },
  ];
}
