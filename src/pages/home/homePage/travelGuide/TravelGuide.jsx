import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TravelGuide = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div className='lg:mx-20'>
            <div className="text-center my-10">
                <p className="font-medium">Thrills, Spills, and Unforgettable Moments</p>
                <h1 className="text-[#ffb229] font-bold text-3xl">Tourism and Travel Guide</h1>
            </div>

            <div className='text-center'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='text-[#29b3ff] font-medium mb-8 border-b border-[#ffb229]'>
                        <Tab>Overview</Tab>
                        <Tab>Our Packages</Tab>
                        <Tab>Meet Our Tour Guides</Tab>
                    </TabList>

                    <div className='mb-14'>
                        <TabPanel>
                            <div>
                                <h1>Videos</h1>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 3</h2>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>


        </div>
    );
};

export default TravelGuide;