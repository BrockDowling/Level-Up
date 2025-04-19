import { NPC } from './NPC';
import { FakeMinigame } from './TestMinigame';

export const testNPC = new NPC(
  "Testing NPC",
  require('../assets/images/oddish.png'),
  "What will you do?",
  [
    {
      prompt: "Try to impress me!",
      MinigameComponent: FakeMinigame,
      successResponse: "Wow, I'm impressed!",
      failureResponse: "That's all you got?",
      successFollowUpOptions: ["Thank you!", "I'm the best.", "Told you I'd win!"],
      failureFollowUpOptions: ["I'll be back stronger.", "You just wait!", "Let me try again!"]
    },
    {
      prompt: "Tell a joke.",
      MinigameComponent: FakeMinigame,
      successResponse: "Ha! Good one!",
      failureResponse: "I've heard better...",
      successFollowUpOptions: ["Glad you liked it!", "I'm hilarious!", "More where that came from!"],
      failureFollowUpOptions: ["Tough crowd...", "Maybe next time.", "It was a bad joke."]
    },
    {
      prompt: "Show a cool move.",
      MinigameComponent: FakeMinigame,
      successResponse: "Sick move!",
      failureResponse: "That was...awkward.",
      successFollowUpOptions: ["Thanks!", "I've been practicing!", "Glad you liked it!"],
      failureFollowUpOptions: ["I'll practice more.", "That was just a warm-up.", "Let me try again!"]
    },
  ]
);
