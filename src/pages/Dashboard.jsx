import React from 'react';

const Dashboard = () => {
  const stats = [
    { title: 'Active Projects', value: 8 },
    { title: 'Total Teams', value: 3 },
    { title: 'Pending Tasks', value: 24 },
    { title: 'Notifications', value: 5 },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Dashboard Overview</h2>
      <div className="row">
        {stats.map((item, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="display-6 fw-bold text-primary">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
