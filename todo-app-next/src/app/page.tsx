import AddTodo from "@/components/AddTodo";
import Navbar from "@/components/Navbar";
import Todos from "@/components/Todos";
import "./globals.css";
import { RiCalendarTodoLine } from "react-icons/ri";

function page() {
  return (
    <main>
      <h2>
        <RiCalendarTodoLine className="icons" />
        Todo + TypeScript
        <RiCalendarTodoLine className="icons" />
      </h2>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  );
}

export default page;
