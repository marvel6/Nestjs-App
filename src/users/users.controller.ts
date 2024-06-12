import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    /*



    */

    @Get()
    findAll(@Query('role') role?: 'ADMIN' | 'USER' | 'SUPER_ADMIN') {
        return role.toLowerCase()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {

        return { id }
    }

    @Post()
    createUser(@Body() user: {}) {
        return user
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() updateUser: {}) {

        return { id, ...updateUser }
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return { id }
    }
}
