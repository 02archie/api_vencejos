import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { UsersService } from "./users.service";

import { CreateUserDto } from "./dto/create-user.dto";
// import { UpdateUserDto } from "./dto/update-user.dto";

import { Response } from "express";

import { PrismaService } from "src/prisma.service";
import { Prisma } from "@prisma/client";

@Controller("users")
export class UsersController extends AppController {
  constructor(
    private readonly usersService: UsersService,
    private readonly prismaService: PrismaService
  ) {
    super();
  }

  /**
   * Create Users
   * @param request
   * @param res
   * @returns
   */
  @Post()
  async createUsers(@Body() request: CreateUserDto, @Res() res: Response) {
    try {
      const user = await this.usersService.createUsers(request);
      return this.responseOK(user, res);
    } catch (error) {
      return this.responseWithErrors(error, res);
    }
  }

  /**
   * Find User By Email
   * @param email
   * @param res
   * @returns
   */
  @Get(":email")
  async findUserByEmail(@Param("email") email: string) {
    return await this.usersService.findUserByEmail(email);
  }
}
