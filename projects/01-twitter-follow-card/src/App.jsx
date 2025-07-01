import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const midudev = { initialIsFollowing: true, userName: "midudev" };

  const users = [
    {
      userName: "midudev",
      name: "Miguel Ángel Durán",
      initialIsFollowing: true,
    },
    {
      userName: "manuelfn009",
      name: "Manuel Fernández",
      initialIsFollowing: false,
    },
    { userName: "k.mbappe", name: "Kylian Mbappé", initialIsFollowing: false },
    { userName: "billgates", name: "Bill Gates", initialIsFollowing: false },
    {
      userName: "sundarpichai",
      name: "Sundar Pichai",
      initialIsFollowing: true,
    },
    { userName: "tim_cook", name: "Tim Cook", initialIsFollowing: false },
  ];
  return (
    <section className="App">
      {users.map(({ userName, name, initialIsFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={initialIsFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
