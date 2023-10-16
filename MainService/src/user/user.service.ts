import {Injectable, Logger} from '@nestjs/common';
import {User} from "./user.model";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {UserDto} from "./dto/user.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async create(user: UserDto): Promise<User> {

        const newUser = await this.userRepository.save(user);

        const response = await fetch('http://localhost:4000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: `Create user: ${JSON.stringify(newUser)}`,
                userId: newUser.id,
                timestamp: new Date()
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.body}`);
        }
        return newUser
    }

    async update(id: number, user: UserDto): Promise<void> {
        await this.userRepository.update(id, user);
        const updatedUser = await this.userRepository.findOne({where: {email: user.email}})

        const response = await fetch('http://localhost:4000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: `Update user: ${JSON.stringify(updatedUser)}`,
                userId: updatedUser.id,
                timestamp: new Date()
            })
        });
    }

}