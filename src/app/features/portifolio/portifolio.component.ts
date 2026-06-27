import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Projects } from '../../core/interfaces/projects.interface';
import { CommonModule } from '@angular/common';
import { ButtonTooltipComponent } from '../../shared/components/button-tooltip/button-tooltip.component';


@Component({
  selector: 'app-portifolio',
  standalone: true,
  imports: [CommonModule, ButtonTooltipComponent],
  templateUrl: './portifolio.component.html',
  styleUrl: './portifolio.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortifolioComponent {
  projects: Projects[] = [
    {
      title: 'SaaS de Gestão de Energia (Zaruc Cloud)',
      imageUrl: 'images/72ee2581-aada-4a93-8cfd-3a7d4371d889.png.webp',
      description:
        'Sistema SaaS de gestão de energia elétrica para distribuidoras. Atende Energisa (grupo inteiro), Cemig, Celesc, Neoenergia e ELFSM. Construído com Spring Boot + Angular + PostgreSQL. Arquitetura evoluída de monólito PHP para microsserviços com clean architecture, segurança JWT/API Key, criptografia de dados sensíveis e observabilidade com SigNoz e Zabbix.',
      experiences: [
        { name: 'java', icon_src: 'https://skillicons.dev/icons?i=java' },
        { name: 'spring', icon_src: 'https://skillicons.dev/icons?i=spring' },
        { name: 'angular', icon_src: 'https://skillicons.dev/icons?i=angular' },
        { name: 'postgresql', icon_src: 'https://skillicons.dev/icons?i=postgresql' },
        { name: 'docker', icon_src: 'https://skillicons.dev/icons?i=docker' },
        { name: 'linux', icon_src: 'https://skillicons.dev/icons?i=linux' },
      ],
    },
    {
      title: 'Infraestrutura e Segurança',
      imageUrl: 'images/Facebook-Linkedin-image-template-3.jpg.webp',
      description:
        'Administração de 20+ servidores Linux com Docker, MQTT, ChirpStack e LoRa. Implantação de Wazuh SIEM para detecção de ameaças, Cloudflare para proteção de origem, monitoramento com Zabbix e Grafana, e pipelines CI/CD com Jenkins e SonarQube.',
      experiences: [
        { name: 'docker', icon_src: 'https://skillicons.dev/icons?i=docker' },
        { name: 'linux', icon_src: 'https://skillicons.dev/icons?i=linux' },
        { name: 'jenkins', icon_src: 'https://skillicons.dev/icons?i=jenkins' },
        { name: 'aws', icon_src: 'https://skillicons.dev/icons?i=aws' },
      ],
    },
    {
      title: 'Rinha de Backend 2025 (Rust)',
      imageUrl: 'images/rinha2025.png.webp',
      description:
        'Participei da Rinha de Backend 2025 com uma API em Rust. Criei o ranking em tempo real com frontend gerado por IA. Foi meu primeiro projeto em Rust, saindo da zona de conforto do Java.',
      experiences: [
        { name: 'rust', icon_src: 'https://skillicons.dev/icons?i=rust' },
        { name: 'angular', icon_src: 'https://skillicons.dev/icons?i=angular' },
      ],
    },
  ];
}
