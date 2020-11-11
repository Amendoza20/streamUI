import { Observable } from 'rxjs';
import { Video } from '../models/video';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
//What is an Injectable? 
@Injectable({
    providedIn: 'root'
})
export class VideoService {
    private videoURL: string;
    constructor(private http: HttpClient){
        this.videoURL = environment.url + '/videos';
    }

    upload(video: Video, file: File){
        const formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('videoName', video.videoName);
        formData.append('videoDescription', video.videoDescription);
        return this.http.post<FormData>(this.videoURL, formData);
    }

    getVideo(videoName: string): Observable<Video>{
        return this.http.get<Video>(this.videoURL + '/' +videoName)
    }

    getAllVideos() {
        return this.http.get<Video[]>(this.videoURL + '/all')
    }
    
}
