import { NPC } from './NPC';
import { RockPaperScissors } from './RockPaperScissors';

export const Pikachu = new NPC(
  "Pikachu",
  require('../assets/images/pikachu.png'),
  "Pikachu approaches, wanting to play a game with you.",
  [
    {
      prompt: "Let's have fun!",
      MinigameComponent: RockPaperScissors,
      successResponse: "Wow, I'm impressed!",
      failureResponse: "It's all right, try again!",
      tieResponse: "A tie, haha! Let's go again!",
      successFollowUpOptions: ["Thank you!", "Mogged! XD", "Too easy."],
      failureFollowUpOptions: ["You're really good at this!", "Ah, I almost ratted out a win.", "I was going easy on you."],
      tieFollowUpOptions: ["Continue..."]
    },
    {
      prompt: "Didn't know rats could had enough motor skills for this...",
      MinigameComponent: RockPaperScissors,
      successResponse: "This was a very devastating loss.",
      failureResponse: "Looks like you couldn't handle me!",
      tieResponse: "Darn, we think alike, you and me. Let's go again!",
      successFollowUpOptions: ["Thank you!", "Mogged! XD", "Too easy."],
      failureFollowUpOptions: ["You're really good at this!", "Ah, I almost ratted out a win.", "I was going easy on you."],
      tieFollowUpOptions: ["Continue..."]
    },
    {
      prompt: "I'm going to destroy you.",
      MinigameComponent: RockPaperScissors,
      successResponse: "Didn't have to be so mean about it...",
      failureResponse: "What was that? Who won?",
      tieResponse: "I don't really wanna play anymore...",
      successFollowUpOptions: ["Thank you!", "Mogged! XD", "Too easy."],
      failureFollowUpOptions: ["You're really good at this!", "Ah, I almost ratted out a win.", "I was going easy on you."],
      tieFollowUpOptions: ["Continue..."]
    },
  ]
);
