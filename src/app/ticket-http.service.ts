import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ticket} from './ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketHttpService {

  constructor(private http: HttpClient) { }

  fetchAllTickets(): Observable<ticket[]>{
    // we need to work with HttpClient to consume an endpoint
    return this.http.get<ticket[]>("http://localhost:4040/api/request");
  }


  addUser(ticketModel: ticket): Observable<ticket>{
    return this.http.post<ticket>("http://localhost:4040/api/request", JSON.stringify(ticketModel));
  }

  updateUser(ticketModel: ticket): Observable<ticket>{
    return this.http.put<ticket>("http://localhost:4040/api/request", JSON.stringify(ticketModel));
  }

  fetchAUser(requestId: number): Observable<ticket>{
    return this.http.get<ticket>("http://localhost:4040/api/request/"+requestId);
  }
}
