import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }

    @Get()
    findAll(@Query('role') role?: "ADMIN" | "ENGINEER" | "INTERN") {
        return this.userService.findAll(role)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {

        return this.userService.findOne(+id)
    }

    @Post()
    createUser(@Body() user: {}) {
        return this.userService.createUser(user)
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() updateUser: {}) {

        return { id, ...updateUser }
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.Delete(+id)
    }
}
