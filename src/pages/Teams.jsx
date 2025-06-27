import React from 'react';

const Teams = () => {
  const teams = [
    { name: 'Development Team', members: ['Arul', 'Billu', 'Aruna'], lead: 'Abi' },
    { name: 'Design Team', members: ['Heera', 'Libi'], lead: 'Harsha' },
    { name: 'QA Team', members: ['Ranjith', 'Harsha', 'Isha'], lead: 'Arul' },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Teams</h2>
      {teams.map((team, index) => (
        <div className="card mb-3 shadow-sm" key={index}>
          <div className="card-body">
            <h5 className="card-title">{team.name}</h5>
            <p><strong>Team Lead:</strong> {team.lead}</p>
            <p><strong>Members:</strong> {team.members.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Teams;
