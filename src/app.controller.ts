import { Controller, Get, Param } from '@nestjs/common';
import { MessageEmbed } from 'discord.js';
import { AppService } from './app.service';
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {
    //temp
    const isDevelopmentEnv = process.env.DISCORD_ENV !== 'production';

    //Say Viernes
    client.on('message', msg => {
      if (msg.content.toLowerCase() === 'hola viernes') {
        let name = msg.member.user.tag.split('#')[0];
        let id = msg.member.user.tag.split('#')[1];
        if (id === '6404') {
          msg.channel.send(appService.getHello() + 'Sr. Stark');
        } else {
          msg.channel.send(appService.getHello() + name);
        }
      }
      if (msg.content.toLowerCase() === 'adios viernes') {
        let name = msg.member.user.tag.split('#')[0];
        let id = msg.member.user.tag.split('#')[1];
        if (id === '6404') {
          msg.channel.send('no me quiero ir ' + 'Sr. Stark');
        } else {
          msg.channel.send('Adiós ' + name + ':)');
        }
      }
    });



    //EXAMPLE
    client.on('message', msg => {
      if (msg.content.toLowerCase() === 'viernes despierta a seba') {
        let name = msg.member.user.tag.split('#')[0];
        let id = msg.member.user.tag.split('#')[1];
        console.log(id);
        if (id === '6404') {
          msg.channel.send('Ok señor, despertando a @Dartel');
        }else{
          msg.channel.send('Disculpe señor, hable con mi mano!');
        }
      }
    });

    client.on('message', msg => {
      if (msg.content.toLowerCase() === 'viernes ayudame a programar') {
        msg.channel.send('Estudie wn flojo');
      }
    });

    client.on('message', message => {
      // If the message is "how to embed"
      if (message.content.toLowerCase() === 'viernes info') {
        // We can create embeds using the MessageEmbed constructor
        // Read more about all that you can do with the constructor
        // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
        const embed = new MessageEmbed()
          // Set the title of the field
          .setTitle('Viernes bot')
          // Set the color of the embed
          .setColor(0xff0000)
          // Set the main content of the embed
          .setDescription('Version-0.0.1')
          .setFooter('by Dams', 'https://minotar.net/helm/f64614df796a435f90f6159a761e59ea');
        // Send the embed to the same channel as the message
        message.channel.send(embed);
      }
    });


    if (!isDevelopmentEnv) {
      client.login(process.env.DISCORD_TOKEN);
    } 

  }

  @Get(':message')
  findOne(@Param('message') message: string) {
    const hook = new Discord.WebhookClient(process.env.DISCORD_ID_WEB_HOCK,process.env.DISCORD_WEB_HOCK);
    hook.send(message);
  }

}
