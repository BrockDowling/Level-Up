import { NPC } from "./NPC";
import { Hangman } from "./Hangman";

export const Weedle = new NPC(
  "Weedle",
  require("../assets/images/weedle.png"),
  "Wha? Weedle shows up?!",
  [
    {
      prompt: "A caterpillar? Well, let's play little guy!",
      MinigameComponent: Hangman,
      successResponse: "It seems let down, but content.",
      failureResponse: "It seems happy.",
      tieResponse: "I think it wants to, try again?",
      successFollowUpOptions: [
        "Well thanks for playing with me!",
        "Again, I have no puns for this but alright.",
        "How could anyone lose to you haha.",
      ],
      failureFollowUpOptions: [
        "Did I just, lose to a bug?",
        "Wow, guess I was crushed like a bug on the ground....",
        "...prepare yourself.",
      ],
      tieFollowUpOptions: ["Continue...?"],
    },
    {
      prompt: "I can't think of a caterpillar pun, let's play.",
      MinigameComponent: Hangman,
      successResponse: "I think it's, making a human based pun?",
      failureResponse: "Is it laughing? I can't tell.",
      tieResponse: "It most definetly wants to try again.",
      successFollowUpOptions: [
        "Um, good one? Thanks for playing!",
        "Looks like I had the leg up here...oh wait.",
        "Awful joke.",
      ],
      failureFollowUpOptions: [
        "Wow, you're quite good at this!",
        "Well duh, with all those legs you surely had the leg up!",
        "I let you win, you looked like you need a win.",
      ],
      tieFollowUpOptions: ["Continue...?"],
    },
    {
      prompt: "Go before I squash you like the bug you are.",
      MinigameComponent: Hangman,
      successResponse: "Weedle left before you could say anything to it.",
      failureResponse: "Weedle left before you could say anything to it.",
      tieResponse: "Weedle left.",
      successFollowUpOptions: [
        "Continue...",
      ],
      failureFollowUpOptions: [
        "Continue...",
      ],
      tieFollowUpOptions: ["Continue..."],
    },
  ]
);
