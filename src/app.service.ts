import { Ciudad, Ciudades } from './shared/chile';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common';
import { find, map } from 'rxjs/operators';
const Discord = require('discord.js');

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hola ';
  }



}
