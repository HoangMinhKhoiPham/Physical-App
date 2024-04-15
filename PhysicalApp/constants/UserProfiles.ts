export interface UserInformation {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
  confirmedPassword: string;
  imageUrl: string;
  goals: string[];
  calories: number;
  time: number;
  distance: number;
  points: number;
  streak: number;
  exercises: Exercises[];
}

export interface Exercises {
  title: string;
  level: string;
  image: string;
  nbExercises: number;
  nbPoints: number;
  duration: number;
  text: string;
  progress: number;
}

export const exercisesTom: Exercises[] = [
  {
    title: "Chest & abdominal exercises",
    level: "Intermediate",
    image: require("../assets/images/chest&abdominal.png"),
    nbExercises: 10,
    nbPoints: 200,
    duration: 45,
    text: "Continue",
    progress: 10,
  },
  {
    title: "Home Workout",
    level: "Beginner",
    image: require("../assets/images/homeworkout.png"),
    nbExercises: 8,
    nbPoints: 150,
    duration: 40,
    text: "Continue",
    progress: 75,
  },
  {
    title: "Yoga",
    level: "Advanced",
    image: require("../assets/images/yoga.png"),
    nbExercises: 12,
    nbPoints: 180,
    duration: 60,
    text: "Completed",
    progress: 100,
  },
];

export const exercisesDwayne: Exercises[] = [
  {
    title: "Chest & abdominal exercises",
    level: "Intermediate",
    image: require("../assets/images/chest&abdominal.png"),
    nbExercises: 10,
    nbPoints: 200,
    duration: 45,
    text: "Continue",
    progress: 20,
  },
  {
    title: "Home Workout",
    level: "Beginner",
    image: require("../assets/images/homeworkout.png"),
    nbExercises: 8,
    nbPoints: 150,
    duration: 40,
    text: "Continue",
    progress: 75,
  },
];

export const exercisesJeff: Exercises[] = [
  {
    title: "Home Workout",
    level: "Intermediate",
    image: require("../assets/images/homeworkout.png"),
    nbExercises: 10,
    nbPoints: 250,
    duration: 80,
    text: "Continue",
    progress: 75,
  },
  {
    title: "Yoga",
    level: "Advanced",
    image: require("../assets/images/yoga.png"),
    nbExercises: 12,
    nbPoints: 180,
    duration: 60,
    text: "Completed",
    progress: 100,
  },
];

export const userProfiles: UserInformation[] = [
  {
    email: "tom@gmail.com",
    password: "123123",
    fullName: "Tom Cruise",
    phoneNumber: "4388666659",
    confirmedPassword: "123123",
    imageUrl: require("../assets/images/Avatar.png"),
    goals: ["Gain Muscles", "Increase Flexibility", "Get Stronger"],
    calories: 2000,
    time: 452,
    distance: 55,
    points: 1200,
    streak: 52,
    exercises: exercisesTom,
  },
  {
    email: "dwayne@gmail.com",
    password: "123123",
    fullName: "Dwayne",
    phoneNumber: "4388666659",
    confirmedPassword: "123123",
    imageUrl: require("../assets/images/dwayne.png"),
    goals: ["Gain Endurance", "Increase Stamina"],
    calories: 4000,
    time: 752,
    distance: 75,
    points: 17000,
    streak: 256,
    exercises: exercisesDwayne,
  },
  {
    email: "jeff@gmail.com",
    password: "123123",
    fullName: "Jeff Bezos",
    phoneNumber: "4388666659",
    confirmedPassword: "123123",
    imageUrl: require("../assets/images/jeff.png"),
    goals: ["Lose weight", "Increase deadlift", "20 pull ups"],
    calories: 2500,
    time: 45,
    distance: 25,
    points: 200,
    streak: 14,
    exercises: exercisesJeff,
  },
];
