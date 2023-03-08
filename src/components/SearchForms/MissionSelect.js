import React from 'react';
// import {nanoid} from 'nanoid';

const missionList = ['Legion', 'White', 'Black Mous', 'Crown'];
const tierList = [1,2,3,4,5];

export const MissionSelect = () => {
  return (
    <>
    <label htmlFor='mission-selector'>
      Select Mission Desired:
      <select id='mission-selector' >
        {missionList.map((mission) => (
          <option key={Math.random()} value={mission}>
            {mission}
          </option>
        ))}
      </select>
    </label>
    <label htmlFor='tier-selector'>
    Select Tier Desired:
    <select id='tier-selector' >
      {tierList.map((tier) => (
        <option key={Math.random()} value={tier}>
          {tier}
        </option>
      ))}
    </select>
  </label>
</>

  );
};

export default MissionSelect;