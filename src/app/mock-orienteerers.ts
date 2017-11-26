import { Orienteerer } from './orienteerer';
import { Sex, SkillLevel, Specialty } from './constants';

export const ORIENTEERERS: Orienteerer[] = [
    {
        id: 1,
        firstName: 'Janne',
        lastName: 'Palvi',
        nickName: '',
        sex: Sex.Male,
        nationality: 'Finnish',
        endurance: SkillLevel.titanic,
        strength: SkillLevel.titanic,
        speed: SkillLevel.titanic,
        mapReading: SkillLevel.titanic,
        consistency: SkillLevel.titanic,
        concentration: SkillLevel.titanic,
        courseSetting: SkillLevel.titanic,
        controlFinding: SkillLevel.titanic,
        nightSkills: SkillLevel.titanic,
        specialty: Specialty.None
    },
    {
        id: 2,
        firstName: 'Kari',
        lastName: 'Nallinen',
        nickName: '',
        nationality: 'Finnish',
        sex: Sex.Male,
        endurance: SkillLevel.titanic,
        strength: SkillLevel.titanic,
        speed: SkillLevel.titanic,
        mapReading: SkillLevel.titanic,
        consistency: SkillLevel.titanic,
        concentration: SkillLevel.titanic,
        courseSetting: SkillLevel.titanic,
        controlFinding: SkillLevel.titanic,
        nightSkills: SkillLevel.titanic,
        specialty: Specialty.None
    }
];
