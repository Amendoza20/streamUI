import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video-service';

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.css']
})
export class VideoFormComponent implements OnInit{
  video: Video;
  file: File;

  constructor(private videoService: VideoService, private router: Router) {
    this.video = new Video();
  }

  ngOnInit(): void {

  }

  onFileChange(event){
     this.file = event.target.files.item(0);
  }

   onSubmit(){
    this.videoService.upload(this.video, this.file).subscribe(data => {
      console.log('Video uploaded');
      alert("Video uploaded successfully.");
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Upload failed'); 
    });
  }

}
