"use client";
import { useState } from "react";
import { 
  Medication as Pill,
  Add as Plus,
  Search as SearchIcon,
  FilterAlt as Filter,
  Warning as AlertTriangle,
  Check as CheckIcon,
  AccessTime as Clock,
  Edit as EditIcon,
  Print as Printer,
  Share as ShareIcon,
  Refresh as RotateCcw,
  Close as XIcon,
  Mic as MicIcon,
  AttachMoney as DollarSign
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Badge from "@mui/material/Badge";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { toast } from "sonner";

const Prescriptions = () => {
  const [selectedPatient, setSelectedPatient] = useState("john-doe");
  const [filterStatus, setFilterStatus] = useState("active");
  const [isVoiceMode, setIsVoiceMode] = useState(false);

  const currentPatient = {
    name: "John Doe",
    id: "#12345",
    compliance: 92,
    lastRefill: "2 days ago",
    pharmacy: "CVS Main St"
  };

  const activePrescriptions = [
    {
      id: 1,
      medication: "Metformin",
      dosage: "500mg",
      form: "tablet",
      frequency: "BID (twice daily)",
      startDate: "05/01/24",
      status: "active",
      pharmacy: "CVS Main St",
      refillsLeft: 3,
      nextRefill: "Nov 15, 2024",
      interactions: [],
      cost: "$15"
    },
    {
      id: 2,
      medication: "Lisinopril", 
      dosage: "10mg",
      form: "capsule",
      frequency: "QD (once daily)",
      startDate: "03/15/24",
      status: "active",
      pharmacy: "Walgreens #4251", 
      refillsLeft: 5,
      nextRefill: "Dec 01, 2024",
      interactions: [],
      cost: "$8"
    },
    {
      id: 3,
      medication: "Amoxicillin",
      dosage: "500mg",
      form: "capsule", 
      frequency: "TID (three times daily)",
      startDate: "10/15/24",
      status: "pending",
      pharmacy: "Not selected",
      refillsLeft: 0,
      nextRefill: "N/A",
      interactions: ["Penicillin allergy warning"],
      cost: "Pending"
    }
  ];

  const prescriptionHistory = [
    {
      medication: "Atorvastatin",
      dosage: "20mg",
      period: "Jan 2024 - Sep 2024",
      reason: "Completed course",
      status: "discontinued"
    },
    {
      medication: "Ibuprofen", 
      dosage: "400mg",
      period: "Aug 2024 - Aug 2024",
      reason: "Short-term use",
      status: "completed"
    }
  ];

  const drugInteractions = [
    {
      drug1: "Warfarin",
      drug2: "Aspirin", 
      severity: "High",
      description: "Increased bleeding risk"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-[#388E3C] text-white";
      case "pending":
        return "bg-[#FFC107] text-[#2D3748]";
      case "expired":
        return "bg-[#D32F2F] text-white";
      case "discontinued":
        return "bg-[#E2E8F0] text-[#2D3748]";
      default:
        return "bg-[#E2E8F0] text-[#2D3748]";
    }
  };

  const handleAction = (action: string, prescriptionId?: number) => {
    toast.success(`${action} ${prescriptionId ? `prescription #${prescriptionId}` : "completed"}`);
  };

  const handleVoicePrescribing = () => {
    setIsVoiceMode(!isVoiceMode);
    if (!isVoiceMode) {
      toast.info("Voice prescribing activated. Say your prescription...");
    } else {
      toast.success("Voice prescription saved: Amoxicillin 500mg TID for 7 days");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#3A5E6D] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Pill className="h-8 w-8 text-white" />
              <h1 className="text-3xl font-bold text-white">Prescriptions</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant={isVoiceMode ? "contained" : "outlined"}
                onClick={handleVoicePrescribing}
                className={isVoiceMode ? "bg-[#D32F2F] hover:bg-[#B71C1C]" : "text-white border-white"}
                startIcon={<MicIcon className={isVoiceMode ? "animate-pulse" : ""} />}
              >
                {isVoiceMode ? "Stop Recording" : "Voice Prescribe"}
              </Button>
              <Button 
                variant="contained" 
                className="bg-[#2A7F62] hover:bg-[#1B5E20]"
                startIcon={<Plus />}
              >
                New Prescription
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Patient Selector & Filters */}
            <div className="bg-[#F5F9F8] rounded-lg border border-[#E2E8F0] p-4 mb-6">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-[#2D3748]">Patient:</span>
                  <Select 
                    value={selectedPatient} 
                    onChange={(e) => setSelectedPatient(e.target.value)}
                    className="w-48 bg-white"
                  >
                    <MenuItem value="john-doe">John Doe (#12345)</MenuItem>
                    <MenuItem value="jane-roe">Jane Roe (#67890)</MenuItem>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Filter className="h-4 w-4 text-[#2D3748]" />
                  <Select 
                    value={filterStatus} 
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-32 bg-white"
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="all">All Status</MenuItem>
                  </Select>
                </div>

                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#2D3748]" />
                    <Input 
                      placeholder="Search medications..." 
                      className="pl-10 w-full bg-white"
                      disableUnderline
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Current Medications Summary */}
            <Card className="mb-6" sx={{ backgroundColor: '#F5F9F8' }}>
              <CardHeader
                title={
                  <div className="flex items-center justify-between">
                    <span className="text-[#2D3748]">Current Medications ({activePrescriptions.filter(p => p.status === "active").length})</span>
                    <div className="text-sm text-[#2D3748]">
                      Patient compliance: <span className="text-[#388E3C] font-semibold">{currentPatient.compliance}%</span>
                    </div>
                  </div>
                }
              />
              <CardContent>
                <div className="text-sm text-[#2D3748]">
                  Last refill: {currentPatient.lastRefill} at {currentPatient.pharmacy}
                </div>
              </CardContent>
            </Card>

            {/* Prescriptions Table */}
            <Card sx={{ backgroundColor: '#F5F9F8' }}>
              <CardHeader title="Prescription Management" />
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#E2E8F0]">
                        <th className="text-left py-3 px-2 font-medium text-[#2D3748]">Medication</th>
                        <th className="text-left py-3 px-2 font-medium text-[#2D3748]">Dosage</th>
                        <th className="text-left py-3 px-2 font-medium text-[#2D3748]">Frequency</th>
                        <th className="text-left py-3 px-2 font-medium text-[#2D3748]">Status</th>
                        <th className="text-left py-3 px-2 font-medium text-[#2D3748]">Pharmacy</th>
                        <th className="text-left py-3 px-2 font-medium text-[#2D3748]">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activePrescriptions.map((prescription) => (
                        <tr key={prescription.id} className="border-b border-[#E2E8F0] hover:bg-[#E2E8F0]/50">
                          <td className="py-4 px-2">
                            <div>
                              <div className="font-medium text-[#2D3748]">{prescription.medication}</div>
                              <div className="text-sm text-[#2D3748]">
                                Started: {prescription.startDate}
                              </div>
                              {prescription.interactions.length > 0 && (
                                <div className="flex items-center space-x-1 mt-1">
                                  <AlertTriangle className="h-3 w-3 text-[#D32F2F]" />
                                  <span className="text-xs text-[#D32F2F]">Allergy Warning</span>
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-2">
                            <span className="font-medium text-[#2D3748]">{prescription.dosage}</span>
                            <div className="text-sm text-[#2D3748]">{prescription.form}</div>
                          </td>
                          <td className="py-4 px-2">
                            <span className="text-[#2D3748]">{prescription.frequency}</span>
                          </td>
                          <td className="py-4 px-2">
                            <Badge 
                              className={`${getStatusColor(prescription.status)} px-2 py-1 rounded-full text-xs`}
                            >
                              {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
                            </Badge>
                            {prescription.status === "active" && (
                              <div className="text-xs text-[#2D3748] mt-1">
                                Refills: {prescription.refillsLeft}
                              </div>
                            )}
                          </td>
                          <td className="py-4 px-2">
                            <div className="text-[#2D3748]">{prescription.pharmacy}</div>
                            {prescription.cost !== "Pending" && (
                              <div className="text-sm text-[#2D3748] flex items-center">
                                <DollarSign className="h-3 w-3 mr-1" />
                                {prescription.cost} copay
                              </div>
                            )}
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex items-center space-x-1">
                              <Button
                                size="small"
                                variant="text"
                                onClick={() => handleAction("Edit", prescription.id)}
                                startIcon={<EditIcon />}
                              />
                              <Button
                                size="small"
                                variant="text"
                                onClick={() => handleAction("Print", prescription.id)}
                                startIcon={<Printer />}
                              />
                              {prescription.status === "active" && (
                                <Button
                                  size="small"
                                  variant="text"
                                  onClick={() => handleAction("Renew", prescription.id)}
                                  startIcon={<RotateCcw />}
                                />
                              )}
                              <Button
                                size="small"
                                variant="text"
                                onClick={() => handleAction("Send to Pharmacy", prescription.id)}
                                startIcon={<ShareIcon />}
                              />
                              <Button
                                size="small"
                                variant="text"
                                onClick={() => handleAction("Discontinue", prescription.id)}
                                startIcon={<XIcon />}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Prescription History */}
            <Card className="mt-6" sx={{ backgroundColor: '#F5F9F8' }}>
              <CardHeader title="Prescription History" />
              <CardContent>
                <div className="space-y-3">
                  {prescriptionHistory.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#E2E8F0] rounded-lg">
                      <div>
                        <div className="font-medium text-[#2D3748]">
                          {item.medication} {item.dosage}
                        </div>
                        <div className="text-sm text-[#2D3748]">
                          {item.period} • {item.reason}
                        </div>
                      </div>
                      <Badge 
  variant="standard"
  sx={{
    border: '1px solid #2D3748',
    color: '#2D3748',
    backgroundColor: 'transparent',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px'
  }}
>
  {item.status}
</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            {/* AI Dose Optimizer */}
            <Card sx={{ backgroundColor: '#F5F9F8' }}>
              <CardHeader title="AI Insights" />
              <CardContent className="space-y-3">
                <div className="p-3 bg-[#388E3C]/10 rounded-lg border border-[#388E3C]/20">
                  <div className="text-sm font-medium text-[#388E3C]">💡 Dose Suggestion</div>
                  <div className="text-xs text-[#2D3748] mt-1">
                    Based on renal function, consider reducing Metformin to 250mg
                  </div>
                </div>
                <div className="p-3 bg-[#FFC107]/20 rounded-lg border border-[#FFC107]/30">
                  <div className="text-sm font-medium text-[#FF8F00]">
                    🔄 Medication Timeline
                  </div>
                  <div className="text-xs text-[#2D3748] mt-1">
                    Patient usually books follow-ups every 3 months
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Insurance Coverage */}
            <Card sx={{ backgroundColor: '#F5F9F8' }}>
              <CardHeader title="Insurance Coverage" />
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-sm text-[#2D3748]">Current Plan</div>
                  <div className="font-semibold text-[#2D3748]">Blue Cross Premium</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#2D3748]">Metformin</span>
                    <span className="text-[#388E3C]">Tier 1 - $15</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#2D3748]">Lisinopril</span>
                    <span className="text-[#388E3C]">Tier 1 - $8</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#2D3748]">Amoxicillin</span>
                    <span className="text-[#FF8F00]">Tier 2 - Auth Req.</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Drug Interactions */}
            <Card sx={{ backgroundColor: '#F5F9F8' }}>
              <CardHeader 
                title={
                  <span className="text-[#D32F2F]">Safety Alerts</span>
                } 
              />
              <CardContent className="space-y-3">
                <div className="p-3 bg-[#D32F2F]/10 rounded-lg border border-[#D32F2F]/20">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-[#D32F2F] mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[#D32F2F]">Allergy Alert</div>
                      <div className="text-xs text-[#2D3748]">
                        Patient allergic to Penicillin - Amoxicillin contraindicated
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-[#388E3C]/10 rounded-lg border border-[#388E3C]/20">
                  <div className="flex items-start space-x-2">
                    <CheckIcon className="h-4 w-4 text-[#388E3C] mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[#388E3C]">No Interactions</div>
                      <div className="text-xs text-[#2D3748]">
                        Current medications are safe together
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card sx={{ backgroundColor: '#F5F9F8' }}>
              <CardHeader title="Quick Actions" />
              <CardContent className="space-y-3">
                <Button 
                  variant="outlined" 
                  fullWidth 
                  onClick={() => handleAction("Generate Report")}
                  className="text-[#2D3748] border-[#2D3748]"
                >
                  📊 Medication Report
                </Button>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  onClick={() => handleAction("Send to Patient")}
                  className="text-[#2D3748] border-[#2D3748]"
                >
                  📱 Send to Patient App
                </Button>
                <Button 
                  variant="outlined" 
                  fullWidth 
                  onClick={() => handleAction("Schedule Follow-up")}
                  className="text-[#2D3748] border-[#2D3748]"
                >
                  📅 Schedule Follow-up
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;