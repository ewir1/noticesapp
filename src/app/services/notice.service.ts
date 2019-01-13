import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private apiKey = `73b747688861479f97530387c6a578d1`;

  private urlCoin = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD`;

  private urlWeather = `http://api.apixu.com/v1/forecast.json?key=182a1d8fb22b47048cb141334190501&q=Caracas`;

  private urlCountry = `https://restcountries.eu/rest/v2/lang/es`;

  private urlCities = `https://restcountries.eu/rest/v2/region/americas`;

  notice: any[] = [];

  notices: any[] = [];

  city: any[] = [];

  cities: any[] = [];

  business: any[] = [];

  sports: any[] = [];

  science: any[] = [];

  entertainment: any[] = [];

  health: any[] = [];

  technology: any[] = [];

  constructor(private http: Http, private httpClient: HttpClient) {}

  getQuery(query: string) {
    const url = `https://newsapi.org/v2/${query}`;
    return this.http.get(url);
  }

  getQueryCities(query: string) {
    const url = `http://api.apixu.com/v1/forecast.json?key=182a1d8fb22b47048cb141334190501&q=${query}`;
    return this.http.get(url);
  }

  getCoin() {
    const url = `${this.urlCoin}`;
    return this.http.get(url).pipe(map((res: any) => res.json().Data));
  }

  getWeather() {
    const url = `${this.urlWeather}`;
    return this.http.get(url).pipe(map((res: any) => res.json()));
  }

  getCountry() {
    const url = `${this.urlCountry}`;
    return this.http.get(url).pipe(map((res: any) => res.json()));
  }

  getNoticesWorld(id: string) {
    if (id === undefined) {
      return this.getQuery(`top-headlines?language=es&apiKey=${this.apiKey}`)
                 .pipe(map((res: any) => this.notice = res.json().articles));
    } else {
      return this.getQuery(`top-headlines?country=${id}&apiKey=${this.apiKey}`)
                 .pipe(map((res: any) => this.notice = res.json().articles));
    }
  }

  getNoticesBusiness(ids: string) {
    if (ids === undefined) {
      return this.getQuery(`top-headlines?country=mx&category=business&apiKey=${this.apiKey}`)
        .pipe(map((res: any) => this.business = res.json().articles));
    } else {
      return this.getQuery(`top-headlines?country=${ids}&category=business&apiKey=${this.apiKey}`)
        .pipe(map((res: any) => this.business = res.json().articles));
    }
  }

  getNoticesSports(ids: string) {
    if (ids === undefined) {
      return this.getQuery(`top-headlines?country=mx&category=sports&apiKey=${this.apiKey}`)
                 .pipe(map((res: any) => this.sports = res.json().articles));
    } else {
      return this.getQuery(`top-headlines?country=${ids}&category=sports&apiKey=${this.apiKey}`)
                 .pipe(map((res: any) => this.sports = res.json().articles));
    }
  }

  getNoticesScience(ids: string) {
    if (ids === undefined) {
      return this.getQuery(`top-headlines?country=mx&category=science&apiKey=${this.apiKey}`)
                 .pipe(map((res: any) => this.science = res.json().articles));
    } else {
      return this.getQuery(`top-headlines?country=${ids}&category=science&apiKey=${this.apiKey}`)
                 .pipe(map((res: any) => this.science = res.json().articles));
    }
  }

  getNoticesEntertainment(ids: string) {
    if (ids === undefined) {
      return this.getQuery(`top-headlines?country=mx&category=entertainment&apiKey=${this.apiKey}`)
                 .pipe(map((res: any) => this.entertainment = res.json().articles));
    } else {
      return this.getQuery(`top-headlines?country=${ids}&category=entertainment&apiKey=${this.apiKey}`)
                 .pipe(map((res: any) => this.entertainment = res.json().articles));
    }
  }

  getNoticesHealth(ids: string) {
    if (ids === undefined) {
      return this.getQuery(`top-headlines?country=mx&category=health&apiKey=${this.apiKey}`)
                 .pipe(map((res: any) => this.health = res.json().articles));
    } else {
      return this.getQuery(`top-headlines?country=${ids}&category=health&apiKey=${this.apiKey}`)
                 .pipe(map((res: any) => this.health = res.json().articles));
    }
  }

  getNoticesTechnology(ids: string) {
    if (ids === undefined) {
      return this.getQuery(`top-headlines?country=mx&category=technology&apiKey=${this.apiKey}`)
        .pipe(map((res: any) => this.technology = res.json().articles));
    } else {
      return this.getQuery(`top-headlines?country=${ids}&category=technology&apiKey=${this.apiKey}`)
        .pipe(map((res: any) => this.technology = res.json().articles));
    }
  }

  getLatam() {
    return this.getQuery(`sources?language=es&apiKey=${this.apiKey}`)
               .pipe(map((res: any) => res.json().sources));
  }

  getCities() {
    const url = `${this.urlCities}`;
    return this.http.get(url).pipe(map((res: any) => this.cities = res.json()));
  }

  getCitiesWeather(id: string) {
    if (id === undefined) {
      return this.getQueryCities(`Caracas`).pipe(map((res: any) => this.city = res.json()));
    } else {
      return this.getQueryCities(`${id}`).pipe(map((res: any) => this.city = res.json()));
    }
  }

  searchNotice(text: string) {
    return this.getQuery(`everything?q=${text}&language=es&apiKey=${this.apiKey}`)
      .pipe(map(res => {
        this.notices = res.json().articles;
        return res.json().articles;
      }));
  }
}
