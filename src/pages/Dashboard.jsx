import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';

const Dashboard = () => {
  return (
    <div className="bg-[#FFF7ED] min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <Header />
        <main className="p-8 mt-16">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
