interface DataGridProps {
  //Do not use any
  items: any[];
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