import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { Pod } from 'src/app/models/pod';
import { PodService } from 'src/app/services/pod.service';

@Component({
  selector: 'app-pic-of-day',
  templateUrl: './pic-of-day.component.html',
  styleUrls: ['./pic-of-day.component.scss'],
})
export class PicOfDayComponent implements OnInit, OnChanges, OnDestroy {
  @Input() date?: string;
  public loading = false;
  public pod?: Pod;
  public error?: HttpErrorResponse;
  public safePodUrl!: SafeUrl;
  private subscriptions: Subscription[] = [];

  constructor(
    private readonly podService: PodService,
    private readonly sanitizer: DomSanitizer
  ) {}

  public ngOnInit(): void {
    this.getPod();
  }

  public ngOnChanges(): void {
    this.getPod();
  }

  private getPod() {
    this.loading = true;
    let subscription = this.podService.getPod(this.date).subscribe(
      (pod) => {
        this.pod = pod;
        this.getSanitizedUrl();
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.error = error;
      }
    );

    this.subscriptions.push(subscription);
  }

  private getSanitizedUrl(): void {
    this.safePodUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.pod!.url
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
