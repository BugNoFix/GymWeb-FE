import {NgbDate} from "@ng-bootstrap/ng-bootstrap";

export interface RequestDTO {
  name: string;
  surname: string;
  email: string;
  password: string;
  subscriptionStart: Date;
  subscriptionEnd: Date;
  role: string;
  isActive: boolean;
}

export interface RegisterResponseDTO {
  name: string;
  surname: string;
  email: string;
  role: string;
  uuid: string;
  isActive: boolean;
}

export interface LoginResponseDTO {
  JWTToken: string;
}
