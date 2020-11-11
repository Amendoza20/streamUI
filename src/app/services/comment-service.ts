import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CommentService {
    private commentURL: string;
    constructor(private http: HttpClient){
        this.commentURL = environment.url + '/comment';
    }

    getComment(videoId: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.commentURL + "/" + videoId);
    }

    addComment(comment: Comment) {
        return this.http.post<Comment>(this.commentURL, comment);
    }
}
