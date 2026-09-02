import React from 'react';
import { Tabs } from 'antd';
import { tabItems } from '@/constants/data/events/ICETS';


const ConferenceDetailsComponent4 = () => {


  return (

<div className='w-full bg-white py-10 px-[20px] md:px-[70px] max-w-7xl mx-auto flex flex-col justify-center items-center gap-5'>
<div className="w-full">
            <Tabs
              tabPosition="top"
              items={tabItems}
              className="conference-tabs"
              size="large"
            />
          </div>
</div>
  );
};

export default ConferenceDetailsComponent4;