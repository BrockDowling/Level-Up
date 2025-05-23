import { ReactNode } from "react";

type DialogueOption = {
  prompt: string;
  MinigameComponent: (props: {
    onComplete: (result: boolean | string) => void;
  }) => ReactNode;
  successResponse: string;
  failureResponse: string;
  tieResponse: string;
  successFollowUpOptions: string[];
  failureFollowUpOptions: string[];
  tieFollowUpOptions: string[];
};

export class NPC {
  private name: string;
  private asset: any;
  private openingQuestion: string;
  private dialogue: DialogueOption[];
  private completed: boolean;
  private selectedIndices: number[] = [];

  constructor(
    name: string,
    asset: any,
    openingQuestion: string,
    dialogue: DialogueOption[],
  ) {
    this.name = name;
    this.asset = asset;
    this.openingQuestion = openingQuestion;
    this.dialogue = dialogue;
    this.completed = false;
  }

  public getName(): string {
    return this.name;
  }

  public getAsset(): any {
    return this.asset;
  }

  public getCompleted(): any {
    return this.completed;
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
    result: "success" | "failure" | "tie"
  ): string {
    if (index < 0 || index >= this.dialogue.length)
      return "I don't understand.";

    if (result === "success") return this.dialogue[index].successResponse;

    if (result === "failure") return this.dialogue[index].failureResponse;

    return this.dialogue[index].tieResponse;
  }

  public getFollowUpOptions(
    index: number,
    result: "success" | "failure" | "tie"
  ): string[] {
    if (index < 0 || index >= this.dialogue.length) return [];

    if (result === "success")
      return this.dialogue[index].successFollowUpOptions;

    if (result === "failure")
      return this.dialogue[index].failureFollowUpOptions;

    return this.dialogue[index].tieFollowUpOptions;
  }

  public getSelectedIndices(): number[] {
    return this.selectedIndices;
  }

  public toggleCompleted() {
    if (this.completed) this.completed=false;
    else if (!this.completed) this.completed=true;
  }

  public recordSelectedIndex(index: number): void {
    if (!this.selectedIndices.includes(index)) {
      this.selectedIndices.push(index);
    }
  }  
}
