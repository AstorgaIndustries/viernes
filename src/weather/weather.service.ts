import { HttpService, Injectable } from '@nestjs/common';
import { Ciudad, Ciudades } from 'src/shared/chile';
import { find, map } from 'rxjs/operators';
const Discord = require('discord.js');

@Injectable()
export class WeatherService {
  constructor(private http: HttpService) {}

  private ciudades = new Ciudades();

  ciudad: Ciudad[] = [];
  async getWeather(value: string) {
    this.ciudad = this.ciudades.getCiudades();
    let contents: {
      location: { name: any; country: any; localtime: string };
      current: { temp_c: any; condition: { text: any; icon: any } };
    };
    let cit: string;
    let exist: boolean = true;

    Promise.all(
      this.ciudad.map(async city => {
        if (value.indexOf(city.name.toLowerCase()) > 1) {
          cit = `${city.lat},${city.lng}`;
          exist = false;
        }
      }),
    );

    if (exist) {
      let newValue = value
        .toLowerCase()
        .split(' ')
        .pop();
      console.log(newValue);
      contents = await (await this.getData(newValue)).toPromise();
    } else {
      console.log(cit);
      contents = await (await this.getData(cit)).toPromise();
    }

    // console.log(contents);
    let result = `${contents.location.name}, ${contents.location.country} temperatura actual: ${contents.current.temp_c}°C `;

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(contents.location.name)
      .setAuthor(contents.location.country)
      .setDescription(contents.current.condition.text)
      .setThumbnail(`https:${contents.current.condition.icon}`)
      .addFields(
        {
          name: `${contents.current.temp_c}°C`,
          value: `${contents.location.localtime.split(' ').pop()}`,
          inline: true,
        },
      )
      .setFooter(
        'by Dams',
        'https://minotar.net/helm/f64614df796a435f90f6159a761e59ea',
      );

    return exampleEmbed;
  }

  async getData(value: string) {
    return this.http
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_KEY}=${value}&lang=es`,
      )
      .pipe(map(response => response.data));
  }
}
