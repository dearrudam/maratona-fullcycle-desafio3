import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomNameService {

    public static readonly avaliableNames: string[] = ['Ana', 'Maria', 'Joaquina', 'João', 'Wesley', 'Max'];

    public getRandomName(): string {
        return RandomNameService.avaliableNames[Math.floor(Math.random() * RandomNameService.avaliableNames.length)];
    }

}
