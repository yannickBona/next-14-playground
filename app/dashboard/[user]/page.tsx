import { useParams } from "next/navigation";

type DashboardProps = {
  params: { user: string };
};
export default function Dashboard({ params }: DashboardProps) {
  const { user } = params;
  return (
    <p>
      User is: <b>{user}</b>
    </p>
  );
}

// export async function generateStaticParams() {
//   return [1, 2, 3, 4, 5, 6, 7, 8];
// }
