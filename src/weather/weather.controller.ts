import { Controller } from '@nestjs/common';
import { WeatherService } from './weather.service';
const Discord = require('discord.js');
const client = new Discord.Client();
const VIERNES = ['viernes', 'friday'];

@Controller('weather')
export class WeatherController {
  constructor(private readonly appService: WeatherService) {

    //temp
    const isDevelopmentEnv = process.env.DISCORD_ENV !== 'production';

    //Weather
    client.on('message', msg => {

      VIERNES.map(async bot => {
        if (msg.content.toLowerCase().indexOf(bot) === 0) {
          let saludoPalabras = msg.content.toLowerCase().split(' ');
          saludoPalabras.map(async character => {
            if (character === 'tiempo') {
              let value = msg.content
                .toLowerCase()
                .split(' ')
                .pop();
              if (value === 'tiempo') {
                value = 'Santiago';
                msg.channel.send(await appService.getWeather(value));
              } else {
                msg.channel.send(await appService.getWeather(msg.content));
              }
            }
          });
        }
      });
    });

    if (!isDevelopmentEnv) {
      client.login(process.env.DISCORD_TOKEN);
    } 

  }
}
