import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
 async fetchGitHubUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
   
  const data = await response.json();

  return data;
}
 constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
}
