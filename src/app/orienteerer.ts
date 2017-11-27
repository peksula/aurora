import { Sex, SkillLevel, Specialty } from './constants';

export class Orienteerer {
    id: number;
    firstName: string;
    lastName: string;
    nickName: string;
    sex: Sex;
    nationality: string;

    endurance: SkillLevel;
    strength: SkillLevel;
    speed: SkillLevel;
    mapReading: SkillLevel;
    consistency: SkillLevel;
    concentration: SkillLevel;
    routeChoosing: SkillLevel;
    finishing: SkillLevel;
    nightSkills: SkillLevel;

    specialty: Specialty;
}
