import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


import { Pod } from 'src/app/models/pod';
import { PodService } from 'src/app/services/pod.service';

@Component({
  selector: 'app-pic-of-day',
  templateUrl: './pic-of-day.component.html',
  styleUrls: ['./pic-of-day.component.scss']
})
export class PicOfDayComponent implements OnInit, OnChanges, OnDestroy {
  @Input() date: string | undefined;
  public pod!: Pod;
  public loading = false;
  private subscriptions: Subscription[] = [];

  constructor(private podService: PodService) {}

  public ngOnInit(): void {
    this.getPod();
  }

  public ngOnChanges(): void {
    this.getPod();
  }

  private getPod() {
    this.loading = true;
    let podSubscription;
    if (!this.date) {
      podSubscription = this.podService.getPod().subscribe((pod) => {
        this.pod = pod;
        this.loading = false;
      })
      this.subscriptions.push(podSubscription);
    } else {
      podSubscription = this.podService.getPodDate(this.date).subscribe((pod) => {
        this.pod = pod;
        this.loading = false;
      })
    }

    this.subscriptions.push(podSubscription);
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}