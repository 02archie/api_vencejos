import { Controller, HttpStatus } from "@nestjs/common";

@Controller()
export class AppController {
  constructor() {}

  responseOK(data, res) {
    return res.status(HttpStatus.OK).json({
      errors: false,
      status_code: 200,
      results: data,
    });
  }

  responseWithErrors(error: [], res) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      errors: true,
      status_code: 400,
      results: error,
    });
  }

  responseErrorWithMessage(message, res) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      errors: true,
      status_code: 400,
      message: message,
    });
  }
}
