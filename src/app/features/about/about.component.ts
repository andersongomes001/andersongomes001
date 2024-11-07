import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Experience } from '../../core/interfaces/experience.interface';
import { ButtonTooltipComponent } from "../../shared/components/button-tooltip/button-tooltip.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ButtonTooltipComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {
    experiences : Experience[] = [
      {
        name: 'Java',
        icon_src: 'https://skillicons.dev/icons?i=java'
      },
      {
        name: 'python',
        icon_src: 'https://skillicons.dev/icons?i=python'
      },
      {
        name: 'typescript',
        icon_src: 'https://skillicons.dev/icons?i=typescript'
      },
      {
        name: 'javascript',
        icon_src: 'https://skillicons.dev/icons?i=javascript'
      },
      {
        name: 'php',
        icon_src: 'https://skillicons.dev/icons?i=php'
      },
      {
        name: 'html',
        icon_src: 'https://skillicons.dev/icons?i=html'
      },
      {
        name: 'css',
        icon_src: 'https://skillicons.dev/icons?i=css'
      },
      {
        name: 'angular',
        icon_src: 'https://skillicons.dev/icons?i=angular'
      },
      {
        name: 'tailwind',
        icon_src: 'https://skillicons.dev/icons?i=tailwind'
      },
      {
        name: 'bootstrap',
        icon_src: 'https://skillicons.dev/icons?i=bootstrap'
      },
      {
        name: 'mongodb',
        icon_src: 'https://skillicons.dev/icons?i=mongodb'
      },
      {
        name: 'postgresql',
        icon_src: 'https://skillicons.dev/icons?i=postgresql'
      },
      {
        name: 'mysql',
        icon_src: 'https://skillicons.dev/icons?i=mysql'
      },
      {
        name: 'git',
        icon_src: 'https://skillicons.dev/icons?i=git'
      },
      {
        name: 'github',
        icon_src: 'https://skillicons.dev/icons?i=github'
      },
      {
        name: 'gitlab',
        icon_src: 'https://skillicons.dev/icons?i=gitlab'
      },
      {
        name: 'bitbucket',
        icon_src: 'https://skillicons.dev/icons?i=bitbucket'
      },
      {
        name: 'spring',
        icon_src: 'https://skillicons.dev/icons?i=spring'
      },
      {
        name: 'nodejs',
        icon_src: 'https://skillicons.dev/icons?i=nodejs'
      },
      {
        name: 'docker',
        icon_src: 'https://skillicons.dev/icons?i=docker'
      },
      {
        name: 'linux',
        icon_src: 'https://skillicons.dev/icons?i=linux'
      },
      {
        name: 'ubuntu',
        icon_src: 'https://skillicons.dev/icons?i=ubuntu'
      },
      {
        name: 'debian',
        icon_src: 'https://skillicons.dev/icons?i=debian'
      },
      {
        name: 'aws',
        icon_src: 'https://skillicons.dev/icons?i=aws'
      },
      {
        name: 'nestjs',
        icon_src: 'https://skillicons.dev/icons?i=nestjs'
      }
      /*"HTML",
      "CSS",
      "JavaScript",
      "Angular",
      "Nodejs",
      "npm",
      "Linux",
      "Java",
      "Spring Boot",*/
    ];
}
