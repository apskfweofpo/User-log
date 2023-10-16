import {Controller, Get, Post, Put, Body, Param, Logger} from '@nestjs/common';
import { UserService } from './user.service';
import {UserDto} from "./dto/user.dto";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getUsers() {
        return this.userService.findAll();
    }

    @Post()
    async createUser(@Body() userDto: UserDto) {
        return this.userService.create(userDto);
    }

    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() userDto: UserDto) {
        return this.userService.update(id, userDto);
    }
}