import React from 'react';

const Projects = () => {
  const projectList = [
    { name: 'Client Onboarding App', status: 'In Progress', members: 5 },
    { name: 'Marketing Website Revamp', status: 'Completed', members: 3 },
    { name: 'Bug Tracker System', status: 'Pending', members: 4 },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Projects</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Project Name</th>
            <th>Status</th>
            <th>Team Members</th>
          </tr>
        </thead>
        <tbody>
          {projectList.map((proj, idx) => (
            <tr key={idx}>
              <td>{proj.name}</td>
              <td>
                <span className={`badge bg-${proj.status === 'Completed' ? 'success' : proj.status === 'Pending' ? 'warning' : 'info'}`}>
                  {proj.status}
                </span>
              </td>
              <td>{proj.members}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
