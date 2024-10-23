import React from 'react';

const PDFTemplate = () => {
    return (
        <div className="p-10 font-sans bg-white min-h-screen max-w-7xl mx-auto">
            {/* Header */}
            <header className="bg-gray-900 text-white p-4 mb-8">
                <h1 className="text-3xl font-bold text-center">Data Group Resi Report</h1>
            </header>

            {/* Main Section */}
            <div className="grid grid-cols-2 gap-8 mb-12">
                {/* Left Column - Home Profile */}
                <section className="bg-gray-50 p-6 shadow-lg">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Home Profile</h2>
                    <ul className="text-gray-700 space-y-2">
                        <li><strong>Location:</strong> 1352 NW Constellation Dr, Bend, OR 97703</li>
                        <li><strong>Year Built:</strong> 1950</li>
                        <li><strong>Heated Floor Area:</strong> 1,000 sq.ft.</li>
                        <li><strong>Number of Bedrooms:</strong> 2</li>
                        <li><strong>Assessment Date:</strong> 06/03/2019</li>
                        <li><strong>Assessor:</strong> U.R. TestingGBR6</li>
                        <li><strong>Phone:</strong> 555-555-5506</li>
                        <li><strong>Email:</strong> tst-gbr6@greenbuildingregistry.com</li>
                        <li><strong>License #:</strong> 15864</li>
                    </ul>
                </section>

                {/* Right Column - Cover Photo and Introduction Statement */}
                <section className="space-y-8">
                    {/* Cover Photo */}
                    <div className="bg-gray-200 p-6 shadow-lg text-center">
                        <img src="path-to-cover-photo.jpg" alt="Cover Photo" className="w-full h-auto" />
                    </div>

                    {/* Introduction Statement */}
                    <div className="bg-gray-50 p-6 shadow-lg">
                        <h2 className="text-xl font-bold text-blue-900 mb-4">Introduction Statement</h2>
                        <p className="text-gray-700">
                            This report provides an overview of the energy efficiency of the home located at 1352 NW Constellation Dr. It includes detailed assessments and recommendations for system upgrades that could improve the energy performance of the home.
                        </p>
                    </div>
                </section>
            </div>

            {/* Data Sections (Example: Energy Generation, Carbon Footprint) */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Energy Generation (Existing/Upgraded)</h2>
                <div className="grid grid-cols-2 gap-8">
                    {/* Existing System */}
                    <div className="bg-blue-50 p-6 shadow-lg">
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">Existing System</h3>
                        <p className="text-gray-700">Electric: 4,935 kWh/yr</p>
                        <p className="text-gray-700">Natural Gas: 542 therms/yr</p>
                        <p className="text-gray-700">Total Energy Costs: $976/year</p>
                    </div>

                    {/* Upgraded System */}
                    <div className="bg-blue-50 p-6 shadow-lg">
                        <h3 className="text-lg font-semibold text-blue-900 mb-4">Upgraded System</h3>
                        <p className="text-gray-700">Energy Savings: $15/year</p>
                        <p className="text-gray-700">Carbon Reduction: 2%/year</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white p-4 text-center">
                <p>&copy; 2024 Data Group. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default PDFTemplate;
