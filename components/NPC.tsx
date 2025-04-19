import { ReactNode } from "react";

type DialogueOption = {
  prompt: string;
  MinigameComponent: (props: {
    onComplete: (result: boolean) => void;
  }) => ReactNode;
  successResponse: string;
  failureResponse: string;
  successFollowUpOptions: string[];
  failureFollowUpOptions: string[];
};

export class NPC {
  private name: string;
  private asset: any;
  private openingQuestion: string;
  private dialogue: DialogueOption[];

  constructor(
    name: string,
    asset: any,
    openingQuestion: string,
    dialogue: DialogueOption[]
  ) {
    this.name = name;
    this.asset = asset;
    this.openingQuestion = openingQuestion;
    this.dialogue = dialogue;
  }

  public getName(): string {
    return this.name;
  }

  public getAsset(): any {
    return this.asset;
  }

  public getOpeningQuestion(): string {
    return this.openingQuestion;
  }

  public getDialoguePrompts(): string[] {
    return this.dialogue.map((option) => option.prompt);
  }

  public getMinigameComponent(index: number) {
    return this.dialogue[index]?.MinigameComponent;
  }

  public getResponseAfterGame(
    index: number,
    result: "success" | "failure"
  ): string {
    if (index < 0 || index >= this.dialogue.length)
      return "I don't understand.";
    return result === "success"
      ? this.dialogue[index].successResponse
      : this.dialogue[index].failureResponse;
  }

  public getFollowUpOptions(
    index: number,
    result: "success" | "failure"
  ): string[] {
    if (index < 0 || index >= this.dialogue.length) return [];
    return result === "success"
      ? this.dialogue[index].successFollowUpOptions
      : this.dialogue[index].failureFollowUpOptions;
  }
}
