import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentService, HeroSlide } from '../../../services/content.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  heroSlides: HeroSlide[] = [];
  currentSlide = 0;
  slideInterval: any;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.heroSlides = this.contentService.getHeroSlides();
    this.startSlideShow();
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
  }

  private startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }
}
