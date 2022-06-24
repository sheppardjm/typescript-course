import { User } from "../App";

interface DataGridProps {
  //Do not use any
  items: User[];
}

export default function DataGrid({ items }: DataGridProps) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </>
  );
}
