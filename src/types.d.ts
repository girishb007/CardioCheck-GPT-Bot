// Enter key either sends message or adds newline
type EnterBehaviour = "send" | "newline";

// Information about tokens in a chat
type TokenInfo = {
  count: number;
  cost?: number;
};

type User = {
  name: string;
  username: string;
  avatarUrl: string;
};

type JwtTokenPayload = {
  aud: string;
  sub: string;
  user: User;
};
