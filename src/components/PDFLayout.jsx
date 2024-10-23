import { Binoculars, Goal, TicketCheck } from 'lucide-react';

const PDFLayout = () => {
    return (
        <div className="p-10 font-sans min-h-screen max-w-[90rem] mx-auto">
            {/* Header */}
            <header className="mb-12 space-y-12">
                <div className='grid grid-cols-2 gap-2'>
                    <h1 className="text-5xl font-bold text-blue-950">Human Resource Annual Report</h1>
                    <p className='text-gray-600'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam reiciendis nulla laboriosam sed atque accusamus vitae beatae optio unde? Minima quasi quae ea delectus repellendus id quidem nisi ipsam dolores?
                    </p>
                </div>
                <div className='grid grid-cols-10 gap-2'>
                    <h1 className="text-xl font-bold text-blue-950 col-span-2">About us</h1>
                    <p className='text-gray-600 col-span-8'>
                        Creating a story with your data in a compelling way is key, and don’t forget about the importance of interaction either.
                    </p>
                </div>
            </header>

            <section className='grid grid-cols-2 gap-4'>
                {/* Mission and Values */}
                <section className="mb-12 bg-blue-50 p-4 shadow">
                    <h2 className="text-2xl font-semibold mb-6 text-blue-950">Mission and Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 bg-orange-400 rounded shadow-md text-center">
                            <Goal color='white' className='mx-auto' />
                            <h3 className="font-semibold text-lg text-white">Mission</h3>
                            <p className="text-white">Creating a story with your data.</p>
                        </div>
                        <div className="p-4 bg-blue-500 rounded shadow-md text-center">
                            <Binoculars color='white' className='mx-auto' />
                            <h3 className="font-semibold text-lg text-white">Vision</h3>
                            <p className="text-white">Creating a story with your data.</p>
                        </div>
                        <div className="p-4 bg-teal-600 rounded shadow-md text-center">
                            <TicketCheck color='white' className='mx-auto' />
                            <h3 className="font-semibold text-lg text-white">Values</h3>
                            <p className="text-white">Creating a story with your data.</p>
                        </div>
                    </div>
                </section>

                {/* Global Presence (Image) */}
                <section className="mb-12 bg-blue-50 p-4 shadow">
                    <h2 className="text-2xl font-semibold mb-6 text-blue-950">Global Presence</h2>
                    <div className="p-6 rounded-lg text-center">
                        <img src="src/assets/img1.png" alt="Global Presence" className="w-[300px] mx-auto" />
                    </div>
                </section>
            </section>

            {/* Performance Snapshot (Image) */}
            <section className="mb-12 bg-blue-50 shadow p-4">
                <h2 className="text-2xl font-semibold mb-6">Performance Snapshot</h2>
                <div className="grid grid-cols-2 gap-6">
                    <ul className="text-gray-700 space-y-2">
                        <li><strong className='text-blue-950'>$33,544</strong> - Creating a story with your data in a compelling way is key.</li>
                        <li><strong className='text-green-600'>2,543,247</strong> - Present complex data in an easy-to-understand way.</li>
                        <li><strong className='text-yellow-500'>8.4%</strong> - Creating a story with your data in a compelling way.</li>
                        <li><strong className='text-red-500'>$9,872</strong> - Present complex data in an easy-to-understand way.</li>
                    </ul>
                    <div>
                        <img src="src/assets/img2.png" alt="Performance Snapshot" className="w-[250px] mx-auto" />
                    </div>
                </div>
            </section>


            {/* Three-Year Company Achievements */}
            <section className="mb-12 bg-blue-50 p-4">
                <h2 className="text-xl font-bold text-blue-950 mb-6">Three Year Company Achievements</h2>
                <div className="grid grid-cols-10 gap-2">
                    <div className='grid col-span-3 text-center'>
                        <h2 className='text-orange-500 text-lg font-bold'>2022 Your Title</h2>
                        <h2 className='text-blue-500 text-lg font-bold'>2022 Your Title</h2>
                        <h2 className='text-teal-500 text-lg font-bold'>2022 Your Title</h2>
                    </div>
                    <div className='grid col-span-7 text-end'>
                        <img src="src/assets/img3.png" alt="img" className='h-[100px] mx-auto' />
                    </div>
                </div>
            </section>


            {/* Financial Progress and Client Testimonials */}
            <section className="grid grid-cols-2 gap-6 mb-12  p-4">
                <div className='bg-blue-50 shadow p-4'>
                    <h2 className="text-2xl font-semibold mb-4 text-blue-950">Financial Progress 2022</h2>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <h3 className='text-blue-950 text-lg font-semibold'>Title One</h3>
                            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, inventore.</p>
                        </div>
                        <div>
                            <h3 className='text-blue-950 text-lg font-semibold'>Title One</h3>
                            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, inventore.</p>
                        </div>
                    </div>
                </div>
                <div className='bg-blue-50 shadow p-4'>
                    <h2 className="text-2xl font-semibold mb-4 text-blue-950">Client Testimonials</h2>
                    <div className="">
                        <p className='text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere facilis deleniti laborum quasi quidem consequatur neque, ex explicabo ea pariatur, vitae harum iusto at reiciendis mollitia deserunt alias cumque placeat.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center border-t border-gray-300 pt-4 text-gray-500">
                <p>&copy; 2024 My Company. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default PDFLayout;
