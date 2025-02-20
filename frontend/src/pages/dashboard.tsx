import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const { session, status } = useAuth();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Please log in to access your dashboard.</p>;

  return (
    <div>
      <Navbar />
      <h1 className="text-xl">Welcome, {session.user?.name}</h1>
    </div>
  );
};

export default Dashboard;
