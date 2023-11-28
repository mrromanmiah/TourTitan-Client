import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Packages from '../../../../components/packages/Packages';

const TravelGuide = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div className='lg:mx-40 md:mx-10 mx-5'>
            <div className="text-center my-10">
                <p className="font-medium">Thrills, Spills, and Unforgettable Moments</p>
                <h1 className="text-[#ffb229] font-bold text-3xl">Tourism and Travel Guide</h1>
            </div>

            <div className='text-center'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='text-[#29b3ff] text-sm mb-8 border-b border-[#ffb229]'>
                        <Tab>Overview</Tab>
                        <Tab>Our Packages</Tab>
                        <Tab>Meet Our Tour Guides</Tab>
                    </TabList>

                    <div className='mb-14'>
                        <TabPanel>
                            <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6'>

                            <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/O9FbbfY5k8A?si=BkYr93yEhVcu92yH"></iframe>

                            <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/WoM3wuI4sJQ?si=hq-KrgfR-BMuujR4"></iframe>

                            <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/UaQ8sl-Ljzk?si=We9OJqlkEW86LqKb"></iframe>

                            <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/rkpzYNB6xks?si=XN3d1FWzQ40XcQ_U"></iframe>

                            <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/oYRw02g706M?si=W5ijVu-ybyWQSN4G"></iframe>

                            <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/TXHq199wEbg?si=ZZXxMx01hmBlhq0r"></iframe>

                            <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/yVYQeDhAQWk?si=dRiClLqjMiBXmGj1"></iframe>

                            <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/Z1eA0kS8poE?si=dpExRxF9oT1-aaL3"></iframe>

                            <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/_e_hEWZP8mU?si=hCzHzk1CDqkU0Ceh"></iframe>

                            <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/KPfV-uQGBaI?si=3s_7x24B6pgFwTh-"></iframe>  
                            </div>
                        </TabPanel>


                        <TabPanel>
                            <Packages></Packages>
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