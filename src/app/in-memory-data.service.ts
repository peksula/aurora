import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Orienteerer } from './orienteerer';
import { Sex, SkillLevel, Specialty } from './constants';

const orienteerers = [
  {
      id: 1,
      firstName: 'Runner',
      lastName: 'Number1',
      nickName: 'Titanic',
      sex: Sex.Male,
      nationality: 'Finnish',
      endurance: SkillLevel.titanic,
      strength: SkillLevel.titanic,
      speed: SkillLevel.titanic,
      mapReading: SkillLevel.titanic,
      consistency: SkillLevel.titanic,
      concentration: SkillLevel.titanic,
      routeChoosing: SkillLevel.titanic,
      finishing: SkillLevel.titanic,
      nightSkills: SkillLevel.titanic,
      specialty: Specialty.None
  },
  {
      id: 2,
      firstName: 'Runner',
      lastName: 'Number2',
      nickName: 'Outstanding',
      nationality: 'Finnish',
      sex: Sex.Male,
      endurance: SkillLevel.outstanding,
      strength: SkillLevel.outstanding,
      speed: SkillLevel.outstanding,
      mapReading: SkillLevel.outstanding,
      consistency: SkillLevel.outstanding,
      concentration: SkillLevel.outstanding,
      routeChoosing: SkillLevel.outstanding,
      finishing: SkillLevel.outstanding,
      nightSkills: SkillLevel.outstanding,
      specialty: Specialty.None
  }
];

const tracks = [
  {
    id: 1,
    name: 'Usmi 1',
    description: 'Usmin haaste',
    courseSetter: 'peksula',
    start: {
      latitude: 1,
      longitude: 1,
      height: undefined
    }
  }

];
/*
id: number;

    start: Control;
    controls: Control[];
    finish: Control;

    name: string;
    description: string;
    courseSetter: string;
*/

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {orienteerers, tracks};
  }
}
