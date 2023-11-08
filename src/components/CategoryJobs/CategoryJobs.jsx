import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleCategoryCard from './SingleCategoryCard';

const CategoryJobs = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [jobs, setJobs] = useState([]);
    const [categoryJobs, setCategoryJobs] = useState([]);

    const categories = ['web development', 'digital marketing', 'graphics design'];

    useEffect(() => {
        axios('http://localhost:5000/jobs')
            .then(res => {
                setJobs(res.data);
                // Filter the jobs for the first category to display initially
                const initialCategoryJobs = res.data.filter(job => job.category === categories[tabIndex]);
                setCategoryJobs(initialCategoryJobs);
            })
            .catch(error => console.error('Failed to fetch jobs:', error));
    }, [tabIndex]); // Depend on tabIndex to refetch when it changes

    // Function to update the categoryJobs state when a new tab is selected
    const handleSelect = index => {
        setTabIndex(index);
        const selectedCategory = categories[index];
        const filteredJobs = jobs.filter(job => job?.category === selectedCategory);
        setCategoryJobs(filteredJobs);
    };

    return (
        <div className='my-20 pl-5 md:px-16'>
            <Tabs selectedIndex={tabIndex} onSelect={handleSelect}>
                <TabList>
                    {categories.map((category, idx) => (
                        <Tab key={idx}>{category}</Tab>
                    ))}
                </TabList>

                {categories.map((category, index) => (
                    <TabPanel key={index}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5'>
                            {categoryJobs.map((job, jobIndex) => (
                                <SingleCategoryCard key={jobIndex} job={job}>
                                </SingleCategoryCard>
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default CategoryJobs;


