import { Controller } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { AuthenticationService } from "./authentication.service";

@Controller("authentication")
export class AuthenticationController extends AppController {
  constructor(private readonly authenticationService: AuthenticationService) {
    super();
  }
}
