import { NPC } from "./NPC";
import { TicTacToe } from "./TicTacToe";

export const Pidgey = new NPC(
  "Pidgey",
  require("../assets/images/pidgey.png"),
  "Pidgey swoops in, ready for competition!",
  [
    {
      prompt: "I'm a pro at this game!",
      MinigameComponent: TicTacToe,
      successResponse: "You really are!",
      failureResponse: "Rematch?",
      tieResponse: "We have to try again...",
      successFollowUpOptions: [
        "Thank you!",
        "My skill soared high...",
        "Actually try next time.",
      ],
      failureFollowUpOptions: [
        "You're really good at this!",
        "Shoot, guess I gotta swallow my pride.",
        "Die.",
      ],
      tieFollowUpOptions: ["Continue..."],
    },
    {
      prompt: "Fly high, just like my score!",
      MinigameComponent: TicTacToe,
      successResponse: "I couldn't nest the win...",
      failureResponse: "Your score flew a little too low...",
      tieResponse: "Shoot, we gotta try again.",
      successFollowUpOptions: [
        "It's alright!",
        "Nice pun XD",
        "Awful joke just like you.",
      ],
      failureFollowUpOptions: [
        "Better luck next time for me!",
        "Hey that's good!",
        "Say that again and I'll kill you.",
      ],
      tieFollowUpOptions: ["Continue..."],
    },
    {
      prompt: "Where I'm from, birds are food.",
      MinigameComponent: TicTacToe,
      successResponse: "Pidgey flies out of your reach, muttering under their breath.",
      failureResponse: "I-I think I'm gonna leave.",
      tieResponse: "I don't really wanna play anymore...",
      successFollowUpOptions: [
        "Good riddance.",
        "Woulda made a good snack.",
        "Aw man, I was just having fun haha.",
      ],
      failureFollowUpOptions: [
        "Gonna cry?",
        "Man I'm so hungry...",
        "No you aren't",
      ],
      tieFollowUpOptions: ["Pidgey flies away. Continue..."],
    },
  ]
);
