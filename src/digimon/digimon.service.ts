import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
const Discord = require('discord.js');
@Injectable()
export class DigimonService {
    constructor(private http: HttpService){

    }

    async getWeather(name: string) {
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`Digimon: ${name}`)
    .setAuthor(``)
    .setDescription(``)
    .setThumbnail(`https:`)
    .addFields(
        {
        name: ``,
        value: ``,
        inline: true,
        },
    )
    .setFooter(
    'by DarteL',
    'https:i.postimg.cc/PNGRtTBj/Screenshot-20201223-002856.jpg',
    );

    return exampleEmbed;
};

async getData(name: string) {
    return this.http
    .get(
        `https:digimon-api.vercel.app/api/digimon/name/${name}`
    )
    .pipe(map(response => console.log(response.data)));
}
}
