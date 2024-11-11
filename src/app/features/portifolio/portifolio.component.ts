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
      title: 'Sistema de Gestão de Energia (SGE)',
      imageUrl: 'images/72ee2581-aada-4a93-8cfd-3a7d4371d889.png.webp',
      description:
        'Este é um sistema de gestão de energia elétrica, onde participei da construção do Back-end e do Front-end, o sistema é focado em atender distribuidora de energia de todo o país.',
      experiences: [
        {
          name: 'html',
          icon_src: 'https://skillicons.dev/icons?i=html',
        },
        {
          name: 'css',
          icon_src: 'https://skillicons.dev/icons?i=css',
        },
        {
          name: 'javascript',
          icon_src: 'https://skillicons.dev/icons?i=javascript',
        }, {
          name: 'git',
          icon_src: 'https://skillicons.dev/icons?i=git',
        }, {
          name: 'angular',
          icon_src: 'https://skillicons.dev/icons?i=angular',
        },
        {
          name: 'spring',
          icon_src: 'https://skillicons.dev/icons?i=spring'
        }
      ],
    },
    {
      title: "Meu portifólio",
      imageUrl: 'images/andersongomes.dev.br.png.webp',
      description: 'Este é meu portifólio, onde desenvolvi alguns projetos pessoais e profissionais.',
      experiences: [
        {
          name: 'angular',
          icon_src: 'https://skillicons.dev/icons?i=angular',
        },
        {
          name: 'html',
          icon_src: 'https://skillicons.dev/icons?i=html',
        },
        {
          name: 'css',
          icon_src: 'https://skillicons.dev/icons?i=css',
        },
        {
          name: 'javascript',
          icon_src: 'https://skillicons.dev/icons?i=javascript',
        }
      ]
    },
  ];
}
