import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);
  console.info(user);
  return (
    <div className="">
      <h1>{user.firstname}</h1>
      <p>Home</p>
    </div>
  );
}
