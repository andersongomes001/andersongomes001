import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  currentYear = new Date().getFullYear();
  yearsOfExperience = 1
  constructor() {
    this.yearsOfExperience = this.calculateExperience(2017, 7);
  }

  private calculateExperience(year: number, month: number): number {
    const curentDate = new Date();
    const curentDay = curentDate.getDate();
    const curentMonth = curentDate.getMonth();
    const curentYear = curentDate.getFullYear();  
    let experience = curentYear - year;
    if(curentMonth < month || (curentMonth === month && curentDay < 1)){
      experience--;
    }
    return experience;
  }
}
