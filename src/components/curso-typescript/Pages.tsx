import { useState } from "react";
import { Task } from "./interface/Tack";
import { Product } from "./Product";
import { FormuTaks } from "./FormuTaks";

export const Pages = ({ title }: Props) => {
  const [tasks, setTask] = useState<Task[]>([
    {
      id: 1,
      title: "Leonardo",
      description: "Leer a react",
      completed: false,
    },
  ]);
  return (
    <div className="bg-info">
      <br></br>
      <h1 className="text-light bg-info"> TepyScript{title}</h1>

      <main className="container p-4 text-light">
        <Product tasks={tasks} />

        <FormuTaks />
      </main>
    </div>
  );
};
