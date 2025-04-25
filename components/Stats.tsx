import React from 'react';
import { mfont, sfont } from './fonts';

const GrowthStats = () => {
  const stats = [
    { label: 'Growing bigger\nand faster!', value: null },
    { label: 'Happy Clients', value: '12+' },
    { label: 'In Monthly Adspend', value: '10+' },
    { label: 'Team Size', value: '15+' },
    { label: 'Data Automations using AI', value: '30+' },
  ];

  return (
    <div className="bg-white grid grid-cols-1 gap-6 lg:grid-cols-5  text-black shadow-inner drop-shadow-lg justify-between items-center p-8 my-8 rounded-lg">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className={`flex flex-col items-center ${index === 0 ? 'text-left' : 'text-center'}`}
        >
          {index === 0 ? (
            <h2 className={`${sfont.variable} font-sans text-4xl font-bold whitespace-pre-line`}>{stat.label}</h2>
          ) : (
            <>
              <div className="text-3xl font-bold">
                {stat.value}
                {index === 2 && <span className="text-black text-lg ml-1 ">Crores</span>}
              </div>
              <p className="text-sm text-black mt-1">{stat.label}</p>
            </>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default GrowthStats;