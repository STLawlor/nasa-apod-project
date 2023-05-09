import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';


import { Pod } from 'src/app/models/pod';
import { PodService } from 'src/app/services/pod.service';

@Component({
  selector: 'app-pic-of-day',
  templateUrl: './pic-of-day.component.html',
  styleUrls: ['./pic-of-day.component.scss']
})
export class PicOfDayComponent implements OnInit, OnDestroy {
  public pod!: Pod;
  public loading = false;
  private subscriptions: Subscription[] = [];

  constructor(private podService: PodService, private http: HttpClient) {}

  public ngOnInit(): void {
    this.getPod();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  private getPod() {
    this.loading = true;
    const podSubscription = this.podService.getPod().subscribe((pod) => {
      this.pod = pod;
      this.loading = false;
      console.log(this.pod)
    })

    this.subscriptions.push(podSubscription);
  }
}