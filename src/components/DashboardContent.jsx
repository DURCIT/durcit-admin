import DashboardGraph from './DashboardGraph';

const DashboardContent = () => {
  return (
    <div className="p-8 bg-[#FDF7F2] h-full">
      {/* Overview 타이틀 */}
      <h2 className="text-3xl font-bold text-[#FFB085] mb-6">Overview</h2>

      {/* 통계 카드 */}
      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-gradient-to-r from-[#FFB085] to-[#FFD3B6] text-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">총 사용자</h3>
          <p className="text-4xl font-bold mt-2">150</p>
          <p className="text-sm mt-2">10% 증가</p>
        </div>
        <div className="p-6 bg-gradient-to-r from-[#FF9A8B] to-[#FECACA] text-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">총 게시물</h3>
          <p className="text-4xl font-bold mt-2">1200</p>
          <p className="text-sm mt-2">20% 증가</p>
        </div>
        <div className="p-6 bg-gradient-to-r from-[#FFC3A0] to-[#FFAFBD] text-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">보고서</h3>
          <p className="text-4xl font-bold mt-2">25</p>
          <p className="text-sm mt-2">5% 감소</p>
        </div>
      </div>

      {/* 그래프 섹션 */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-[#FF9A8B] mb-4">활동 그래프</h3>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <DashboardGraph />
        </div>
      </div>

      {/* 최근 활동 로그 */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-[#FF9A8B] mb-4">최근 기록</h3>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <ul className="space-y-2 text-gray-700">
            <li>📌 User <span className="font-semibold">John</span> added a post</li>
            <li>📌 User <span className="font-semibold">Mary</span> reported a post</li>
            <li>📌 Admin updated <span className="font-semibold">user role</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
