import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NewsItem {
  category: 'exam' | 'scholarship' | 'result' | 'admit';
  badge: string;
  badgeClass: string;
  time: string;
  title: string;
  desc: string;
  tag: string;
  link: string;
}

export interface SliderAd {
  image: string;
  link: string;
  label: string;
  badge: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  sliderPaused = false;
  activeNewsFilter: 'all' | 'exam' | 'scholarship' | 'result' | 'admit' = 'all';

  sliderAds: SliderAd[] = [
    { image: '/images/a.png', link: '#', label: 'JEE 2025',    badge: 'NEW'  },
    { image: 'images/b.png',  link: '#', label: 'NEET Ready',  badge: 'HOT'  },
    { image: 'images/c.png',  link: '#', label: 'UPSC IAS',    badge: ''     },
    { image: 'images/d.png',  link: '#', label: 'MHT-CET',     badge: 'FREE' },
    { image: 'images/e.png',  link: '#', label: 'Scholarship',  badge: 'WIN'  },
  ];

  tickerItems: string[] = [
    'JEE Advanced 2025 registration closes June 12 — apply now',
    'NEET UG answer key released — challenge window open till June 8',
    'UPSC CSE Prelims 2025 admit cards available for download',
    'MHT-CET results expected June 18 — check mhtcet2025.mahacet.org',
    'TOPIQ Scholarship Program: 1,200 students awarded ₹1 Cr+ this year',
  ];

  newsFilters: { label: string; value: 'all' | 'exam' | 'scholarship' | 'result' | 'admit' }[] = [
    { label: 'All Updates',   value: 'all'         },
    { label: 'Exams',         value: 'exam'        },
    { label: 'Scholarships',  value: 'scholarship' },
    { label: 'Results',       value: 'result'      },
    { label: 'Admit Cards',   value: 'admit'       },
  ];
socialLinks = [
  { platform: 'instagram', icon: '📷', label: 'Instagram', url: 'https://instagram.com/topiq', color: '#E1306C' },
  { platform: 'telegram',  icon: '✈️', label: 'Telegram',  url: 'https://t.me/topiq',          color: '#0088cc' },
  { platform: 'whatsapp',  icon: '💬', label: 'WhatsApp',  url: 'https://wa.me/919876543210',   color: '#25D366' },
  { platform: 'youtube',   icon: '▶️', label: 'YouTube',   url: 'https://youtube.com/@topiq',   color: '#FF0000' },
];
  allNews: NewsItem[] = [
    {
      category:   'exam',
      badge:      'Exam Alert',
      badgeClass: 'badge-exam',
      time:       '2h ago',
      title:      'JEE Advanced 2025 Registration Deadline Approaching',
      desc:       'IIT Kanpur has set June 12 as the final date for JEE Advanced applications. Eligible JEE Mains top 2.5L candidates must apply immediately.',
      tag:        'JEE Advanced',
      link:       'pages/exams.html',
    },
    {
      category:   'result',
      badge:      'Result Out',
      badgeClass: 'badge-result',
      time:       '5h ago',
      title:      'NEET UG 2025 Answer Key Released by NTA',
      desc:       'The National Testing Agency has published the provisional answer key. Students can raise objections till June 8 via the official portal.',
      tag:        'NEET UG',
      link:       'pages/exams.html',
    },
    {
      category:   'admit',
      badge:      'Admit Card',
      badgeClass: 'badge-admit',
      time:       '1d ago',
      title:      'UPSC CSE Prelims 2025 Admit Cards Now Available',
      desc:       'UPSC has released hall tickets for the Civil Services Preliminary Exam scheduled for June 22. Download via upsc.gov.in before the exam date.',
      tag:        'UPSC CSE',
      link:       'pages/exams.html',
    },
    {
      category:   'scholarship',
      badge:      'Scholarship',
      badgeClass: 'badge-scholarship',
      time:       '1d ago',
      title:      'PM Scholarship Scheme 2025: Applications Open Till June 30',
      desc:       'Central Sector Scholarship applications are open for Class 12 passed students. ₹12,000/year for girls and ₹10,000/year for boys.',
      tag:        'PM Scholarship',
      link:       'pages/exams.html',
    },
    {
      category:   'result',
      badge:      'Result Out',
      badgeClass: 'badge-result',
      time:       '2d ago',
      title:      'MHT-CET 2025 Results Announced — Cutoffs Released',
      desc:       'Maharashtra State\'s MHT-CET results are live at mhtcet2025.mahacet.org. Category-wise cutoffs also published for PCM and PCB streams.',
      tag:        'MHT-CET',
      link:       'pages/exams.html',
    },
    {
      category:   'exam',
      badge:      'Exam Alert',
      badgeClass: 'badge-exam',
      time:       '2d ago',
      title:      'IBPS PO 2025 Notification Released — 4,455 Vacancies',
      desc:       'IBPS has officially notified the Probationary Officer recruitment 2025. Online applications open June 10 at ibps.in. Last date: July 1.',
      tag:        'Banking',
      link:       'pages/exams.html',
    },
  ];

  get filteredNews(): NewsItem[] {
    if (this.activeNewsFilter === 'all') return this.allNews;
    return this.allNews.filter(n => n.category === this.activeNewsFilter);
  }

  setNewsFilter(filter: 'all' | 'exam' | 'scholarship' | 'result' | 'admit'): void {
    this.activeNewsFilter = filter;
  }

  trackByImage(_index: number, ad: SliderAd): string {
    return ad.image;
  }

  trackByTitle(_index: number, item: NewsItem): string {
    return item.title;
  }
}