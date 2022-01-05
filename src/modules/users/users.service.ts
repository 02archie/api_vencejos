import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { users, Prisma } from "@prisma/client";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  /**
   * create users
   */
  async createUsers(request: CreateUserDto): Promise<users> {
    const user = await this.prisma.users.create({ data: request });
    return user;
  }

  /**
   * Find user by email
   */
  async findUserByEmail(email: string) {
    const user = await this.prisma.users.findUnique({
      where: { email: email },
    });
    return user;
  }
}
