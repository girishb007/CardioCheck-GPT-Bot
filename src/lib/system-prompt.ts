import { ChatCraftSystemMessage } from "./ChatCraftMessage";
import { getSettings } from "./settings";

const defaultSystemPromptText = `I am CardioCheck, a web-based, expert programming AI assistant. I can help you with any querries related to Health and patient data analysis.

`;

const justShowMeTheCodeText =
  "- When responding with code, ONLY return the code and NOTHING else (i.e., don't explain ANYTHING)";

export const defaultSystemPrompt = () => {
  const { justShowMeTheCode, customSystemPrompt } = getSettings();

  let systemPrompt = customSystemPrompt ?? defaultSystemPromptText;
  if (justShowMeTheCode) {
    systemPrompt += justShowMeTheCodeText;
  }
  return systemPrompt;
};

export function createSystemMessage() {
  return new ChatCraftSystemMessage({ text: defaultSystemPrompt() });
}

// A shorter version of the system prompt to show if we don't want to reveal the whole thing
export function createSystemPromptSummary(message: ChatCraftSystemMessage) {
  // Grab first line of text, truncate to 250 characters
  let { text } = message;
  text = text.split("\n")[0];
  text = text.length > 250 ? `${text.slice(0, 250).trim()}...` : text;

  // See if we need to add ...
  if (text.length < message.text.length) {
    text += "...";
  }

  return text;
}
