import { Component, signal, HostListener, OnInit, AfterViewInit, inject } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  readonly themeService = inject(ThemeService);
  isScrolled = false;
  menuOpen = signal(false);

  skillCategories = [
    { icon: '💻', title: 'Languages', items: [
      { name: 'Java', logo: 'devicon-java-plain colored' },
      { name: 'C', logo: 'devicon-c-plain colored' },
      { name: 'SQL', logo: 'devicon-azuresqldatabase-plain colored' },
      { name: 'JavaScript', logo: 'devicon-javascript-plain colored' }
    ]},
    { icon: '🚀', title: 'Frameworks & Libraries', items: [
      { name: 'Spring Boot', logo: 'devicon-spring-original colored' },
      { name: 'Node.js', logo: 'devicon-nodejs-plain colored' },
      { name: 'Angular', logo: 'devicon-angular-plain colored' }
    ]},
    { icon: '☁️', title: 'Cloud & Tools', items: [
      { name: 'AWS Cognito', logo: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'S3', logo: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'Lambda', logo: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'RDS', logo: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'SNS', logo: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'SES', logo: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'SQS', logo: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'Kafka', logo: 'devicon-apachekafka-original colored' }
    ]},
    { icon: '🧠', title: 'Core Competencies', items: [
      { name: 'Data Structures', logo: 'devicon-thealgorithms-plain colored' },
      { name: 'Competitive Programming', logo: 'devicon-leetcode-plain colored' }
    ]}
  ];

  achievements = [
    {
      icon: '🏆',
      title: 'Attitude & Commitment Award',
      description: 'Received at Expeditors for reliability and positivity.',
      link: 'https://drive.google.com/file/d/1CzJSOgDKRngFgJszEgHUrqW_1gQUnC8o/view?usp=drivesdk'
    },
    {
      icon: '💡',
      title: 'Dynamic Query Engine',
      description: 'Developed and showcased at the Expeditors internal Hackathon.',
      link: 'https://github.com/naveengalatta/Hackerthon-Expd'
    },
    {
      icon: '🥈',
      title: 'Skillrack Medals',
      description: 'Earned Silver and Bronze medals for coding excellence.',
      link: 'https://www.skillrack.com/faces/resume.xhtml?id=226062&key=5eedb6a127cee4fff53b7ac39655fd113a8c16f7'
    },
    {
      icon: '⚡',
      title: 'Competitive Programming',
      description: 'Proficient in DP, Recursion, Backtracking, and Sliding Window.',
      link: 'https://leetcode.com/u/naveen_galatta/'
    }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit(): void {
    this.setupScrollAnimations();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('hidden');
        setTimeout(() => preloader.remove(), 600);
      }
    }, 800);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  private setupScrollAnimations(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));
    }, 100);
  }
}
