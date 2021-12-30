import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "src/prisma.service";
import { users, Prisma } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
}
