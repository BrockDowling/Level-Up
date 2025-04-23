import { NPC } from './NPC';
import { TicTacToe } from './TicTacToe';

export const Oddish = new NPC(
  "Oddish",
  require('../assets/images/oddish.png'),
  "Oddish approaches, wanting to play a game with you.",
  [
    {
      prompt: "Let's have fun!",
      MinigameComponent: TicTacToe,
      successResponse: "Wow, I'm impressed!",
      failureResponse: "It's all right, try again!",
      tieResponse: "A tie, haha! Let's go again!",
      successFollowUpOptions: ["Thank you!", "One could say...blue! XD", "Too easy."],
      failureFollowUpOptions: ["You're really good at this!", "Ah, I berry even tried.", "I was going easy on you."],
      tieFollowUpOptions: ["Continue..."]
    },
    {
      prompt: "Didn't know berries could play games...",
      MinigameComponent: TicTacToe,
      successResponse: "This was a berry embarrassing loss...",
      failureResponse: "Looks like you couldn't handle me!",
      tieResponse: "Darn, you blocked me. Let's go again!",
      successFollowUpOptions: ["Thank you!", "One could say...blue! XD", "Too easy."],
      failureFollowUpOptions: ["You're really good at this!", "Ah, I berry even tried.", "I was going easy on you."],
      tieFollowUpOptions: ["Continue..."]
    },
    {
      prompt: "I'm going to destroy you.",
      MinigameComponent: TicTacToe,
      successResponse: "Didn't have to be so mean about it...",
      failureResponse: "What was that? Who won?",
      tieResponse: "I don't really wanna play anymore...",
      successFollowUpOptions: ["Thank you!", "One could say...blue! XD", "Too easy."],
      failureFollowUpOptions: ["You're really good at this!", "Ah, I berry even tried.", "I was going easy on you."],
      tieFollowUpOptions: ["Continue..."]
    },
  ]
);
