import { useNavigate } from "react-router-dom";
import slime from "../assets/slime.png"
import { useState } from "react";

export default function Taskbar() {

  const [menu, setMenu] = useState(false)

  const navigate = useNavigate();

  return (
    <nav>
      <img src={slime}/>
    </nav>
  );
}