export interface IUser {
  email: string;
  password: string;
  measurement: string;
  age: number;
  sex: string;
  height: number;
  weight: number;
  allergies: Array<string>;
  dietType: string;
  weeklyGoal: number;
  numberOfMeals?: number;
  bodyType: string;
  activityLevel: string;
  weightPrecision: string;
  eatingHabit?: string;
  cuisinePreference?: Array<string>;
}

export class User implements IUser {
  activityLevel: string;
  age: number;
  allergies: Array<string>;
  bodyType: string;
  cuisinePreference: Array<string>;
  dietType: string;
  eatingHabit: string;
  email: string;
  height: number;
  measurement: string;
  numberOfMeals: number;
  password: string;
  sex: string;
  weeklyGoal: number;
  weight: number;
  weightPrecision: string;

  constructor(
    activityLevel?: string, age?: number, allergies?: Array<string>, bodyType?: string,
    cuisinePreference?: Array<string>, dietType?: string, eatingHabit?: string, email?: string,
    height?: number, measurement?: string, numberOfMeals?: number, password?: string, sex?: string,
    weeklyGoal?: number, weight?: number, weightPrecision?: string
  ) {
    this.activityLevel = activityLevel;
    this.allergies = allergies;
    this.cuisinePreference = cuisinePreference;
    this.bodyType = bodyType;
    this.dietType = dietType;
    this.eatingHabit = eatingHabit;
    this.height = height;
    this.measurement = measurement;
    this.weightPrecision = weightPrecision;
    this.numberOfMeals = numberOfMeals;
    this.password = password;
    this.email = email;
    this.sex = sex;
    this.weeklyGoal = weeklyGoal;
    this.weight = weight;
    this.age = age;
  }
}
