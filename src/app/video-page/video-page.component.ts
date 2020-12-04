import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../models/video';
import { VideoService } from '../services/video-service';
import { CommentService } from '../services/comment-service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {
 //Why this Input
  @Input()
  video: Video;
  videoName: string;
  comment: Comment;
  constructor(private videoService: VideoService, private route: ActivatedRoute) {}

  ngOnInit(){
    this.videoName = this.route.snapshot.paramMap.get('videoName')
    this.getVideo();
  }

  getVideo(){
    this.videoService.getVideo(this.videoName).subscribe(video => this.video = video);
  }
  
  

}
