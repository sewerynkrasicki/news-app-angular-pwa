import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from '../services/web-request.service';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: object;
  loading = true;

  constructor(private webRequest: WebRequestService) { }

  ngOnInit(): void {
    this.webRequest.getPlArticles().subscribe(response => {
      this.articles = response;
      this.loading = false;
    });
  }

  navigate(url: string): void{
    window.open(url, '_blank');
  }

  searchInfo(q: string): void{
    this.loading = true;
    this.webRequest.searchArticle(q).subscribe(response => {
      this.articles = response;
      this.loading = false;
    });
  }

}
