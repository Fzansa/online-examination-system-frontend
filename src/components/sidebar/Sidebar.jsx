import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/admin/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/admin/manage-quizzes">Manage Quizzes</a>
        </li>
        <li>
          <a href="/admin/manage-questions">Manage Questions</a>
        </li>
        <li>
          <a href="/admin/view-results">View Results</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
