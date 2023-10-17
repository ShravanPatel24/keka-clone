import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    pass=await bcrypt.compare(pass, user.password);
    if (user && pass) {
      const { password, ...result } = user.toObject();
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = {
      email: user.email,
      sub: user.id,
      role: user.role,
      phone: user.phone,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
