import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMe } from "./about-me/about-me";
import { Achievements } from "./achievements/achievements";
import { WorkExperience } from "./work-experience/work-experience";
import { PastProjects } from "./past-projects/past-projects";
import { CurrentProjects } from "./current-projects/current-projects";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutMe, Achievements, WorkExperience, PastProjects, CurrentProjects],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('professional-website');
}
