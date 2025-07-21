"use client";
import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Divider, 
  TextField, 
  MenuItem, 
  Tabs, 
  Tab,
  Chip
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

type Vaccine = {
  id: string;
  name: string;
  type: 'COVID-19' | 'Childhood' | 'Travel' | 'Other';
  date: Date;
  provider: string;
  nextDose?: Date;
};

export default function VaccinesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'covid' | 'childhood' | 'travel'>('all');
  const [newVaccine, setNewVaccine] = useState<Partial<Vaccine>>({
    name: '',
    type: 'Other',
    date: new Date(),
    provider: '',
  });

  const vaccines: Vaccine[] = [
    {
      id: '1',
      name: 'HPV Vaccine',
      type: 'Childhood',
      date: new Date('2024-05-05'),
      provider: 'City Health Clinic'
    },
    {
      id: '2',
      name: 'COVID-19 Vaccine (Booster)',
      type: 'COVID-19',
      date: new Date('2024-01-10'),
      provider: 'Regional Hospital'
    },
    {
      id: '3',
      name: 'MMR Vaccine',
      type: 'Childhood',
      date: new Date('2023-04-03'),
      provider: 'Pediatric Center'
    },
    {
      id: '4',
      name: 'Hepatitis A Vaccine',
      type: 'Travel',
      date: new Date('2022-07-13'),
      provider: 'Travel Medicine Clinic',
      nextDose: new Date('2024-07-13')
    }
  ];

  const filteredVaccines = vaccines.filter(vaccine => {
    if (activeTab === 'all') return true;
    return vaccine.type.toLowerCase() === activeTab;
  });

  const handleInputChange = (field: keyof Vaccine, value: any) => {
    setNewVaccine(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddVaccine = () => {
    // In a real app, you would save to a database here
    console.log('Adding vaccine:', newVaccine);
    // Reset form
    setNewVaccine({
      name: '',
      type: 'Other',
      date: new Date(),
      provider: '',
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-[#3A5E6D] text-white p-4">
          <Typography variant="h4">Vaccine Tracker</Typography>
        </header>

        <main className="container mx-auto p-4">
          {/* Stats Section */}
          <section className="mb-8">
            <Card className="bg-[#F5F9F8] shadow-none">
              <CardContent>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <Typography variant="h3" className="text-[#2A7F62] font-bold">72%</Typography>
                    <Typography variant="h6" className="text-[#2D3748]">Protected</Typography>
                  </div>
                  <div className="text-center md:text-right">
                    <Typography variant="subtitle1" className="text-[#2D3748]">
                      Upcoming Vaccines &gt;
                    </Typography>
                    <Typography variant="body1" className="text-[#2D3748]">
                      Due dates: May 15, 2024
                    </Typography>
                    <Chip 
                      label="Outbreak Alert" 
                      className="mt-2 bg-[#D32F2F] text-white" 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Add New Vaccine Section */}
          <section className="mb-8">
            <Typography variant="h5" className="text-[#2D3748] mb-4">
              Add New Vaccine
            </Typography>
            <Card className="bg-[#F5F9F8] shadow-none">
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="outlined" 
                      fullWidth 
                      className="border-[#E2E8F0] text-[#2D3748]"
                    >
                      Scan QR Code
                    </Button>
                    <TextField
                      label="Name"
                      fullWidth
                      value={newVaccine.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-white"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <TextField
                      select
                      label="Type"
                      fullWidth
                      value={newVaccine.type}
                      onChange={(e) => handleInputChange('type', e.target.value)}
                      className="bg-white"
                    >
                      <MenuItem value="COVID-19">COVID-19</MenuItem>
                      <MenuItem value="Childhood">Childhood</MenuItem>
                      <MenuItem value="Travel">Travel</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </TextField>
                    <DatePicker
                      label="Date"
                      value={newVaccine.date}
                      onChange={(date) => handleInputChange('date', date)}
                      className="w-full bg-white"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <TextField
                      label="Provider"
                      fullWidth
                      value={newVaccine.provider}
                      onChange={(e) => handleInputChange('provider', e.target.value)}
                      className="bg-white"
                    />
                    <DatePicker
                      label="Next Dose (optional)"
                      value={newVaccine.nextDose || null}
                      onChange={(date) => handleInputChange('nextDose', date)}
                      className="w-full bg-white"
                    />
                  </div>
                  <Button 
                    variant="contained" 
                    className="bg-[#2A7F62] hover:bg-[#388E3C] text-white"
                    onClick={handleAddVaccine}
                  >
                    Add Vaccine
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* History Section */}
          <section className="mb-8">
            <Typography variant="h5" className="text-[#2D3748] mb-4">
              History
            </Typography>
            <Tabs 
              value={activeTab}
              onChange={(_, newValue) => setActiveTab(newValue)}
              className="border-b border-[#E2E8F0]"
            >
              <Tab label="All" value="all" className="text-[#2D3748]" />
              <Tab label="COVID-19" value="covid" className="text-[#2D3748]" />
              <Tab label="Childhood" value="childhood" className="text-[#2D3748]" />
              <Tab label="Travel" value="travel" className="text-[#2D3748]" />
            </Tabs>
            
            <Card className="bg-[#F5F9F8] shadow-none mt-2">
              <CardContent>
                {filteredVaccines.length === 0 ? (
                  <Typography className="text-[#2D3748]">No vaccines found</Typography>
                ) : (
                  <div className="space-y-4">
                    {filteredVaccines.map((vaccine) => (
                      <div key={vaccine.id} className="border-b border-[#E2E8F0] pb-4 last:border-0">
                        <div className="flex justify-between items-center">
                          <Typography variant="h6" className="text-[#2D3748]">
                            {vaccine.name}
                          </Typography>
                          <Typography variant="body2" className="text-[#2D3748]">
                            {vaccine.date.toLocaleDateString()}
                          </Typography>
                        </div>
                        <Typography variant="body2" className="text-[#2D3748]">
                          Provider: {vaccine.provider}
                        </Typography>
                        {vaccine.nextDose && (
                          <Chip 
                            label={`Next dose: ${vaccine.nextDose.toLocaleDateString()}`}
                            className="mt-2 bg-[#388E3C] text-white"
                            size="small"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          {/* AI Suggestions Section */}
          <section>
            <Typography variant="h5" className="text-[#2D3748] mb-4">
              AI-Powered Suggestions
            </Typography>
            <Card className="bg-[#F5F9F8] shadow-none">
              <CardContent>
                <Typography variant="body1" className="text-[#2D3748] mb-4">
                  Based on your age (28), we recommend:
                </Typography>
                <ul className="list-disc pl-5 space-y-2 text-[#2D3748]">
                  <li>
                    <strong>HPV</strong> (if not administered)
                  </li>
                  <li>Annual flu shot</li>
                  <li>Travel advisory</li>
                  <li>
                    <strong>Yellow Fever</strong> vaccine needed for Brazil
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </LocalizationProvider>
  );
}