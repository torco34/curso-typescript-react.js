import { Task } from "./interface/Tack";
import { Card } from "./Card";
interface Props {
  tasks: Task[];
}

export const Product = ({ tasks }: Props) => {
  return (
    <>
      <div className="bg-info">
        {tasks.map((task) => (
          <div key={task.id}>
            <Card task={task} />
          </div>
        ))}
      </div>
    </>
  );
};
