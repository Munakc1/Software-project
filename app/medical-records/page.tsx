"use client";
import { useState } from "react";
import { 
  Description as FileText,
  Search,
  CalendarToday,
  Person as User,
  Favorite as Heart,
  ShowChart as Activity,
  Image as FileImage,
  Medication as Pill,
  MedicalServices as Shield,
  Warning as AlertTriangle,
  Edit,
  Print,
  Share,
  Archive,
  Folder as DocumentsIcon
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { toast } from "sonner";

// Color constants
const COLORS = {
  background: "#FFFFFF",
  sidebarHeader: "#3A5E6D",
  primaryButton: "#2A7F62",
  cards: "#F5F9F8",
  critical: "#D32F2F",
  positive: "#388E3C",
  text: "#2D3748",
  borders: "#E2E8F0"
};

// Styled components
const StyledCard = styled(Card)({
  backgroundColor: COLORS.cards,
  borderColor: COLORS.borders,
  marginBottom: "16px"
});

const PrimaryButton = styled(Button)({
  backgroundColor: COLORS.primaryButton,
  color: "white",
  "&:hover": {
    backgroundColor: "#1E6B4D"
  }
});

const CriticalBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    backgroundColor: COLORS.critical,
    color: "white"
  }
});

const PositiveBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    backgroundColor: COLORS.positive,
    color: "white"
  }
});

const MedicalRecords = () => {
  const [selectedPatient, setSelectedPatient] = useState("john-doe");
  const [activeTab, setActiveTab] = useState("overview");

  const patientInfo = {
    name: "John Doe",
    id: "#12345",
    age: 45,
    gender: "Male",
    bloodType: "A+",
    photo: "JD",
    allergies: ["Penicillin (Severe)", "Shellfish (Mild)"],
    currentMeds: ["Metformin 500mg", "Lisinopril 10mg", "Atorvastatin 20mg"],
    lastVisit: "15 Oct 2023",
    lastDoctor: "Dr. Smith"
  };

  const visitHistory = [
    {
      date: "12 Oct 2023",
      type: "Follow Up",
      doctor: "Dr. Patel",
      complaint: "Chest discomfort",
      assessment: "Stable angina",
      plan: ["Increase statin dosage", "Stress test ordered", "Follow up in 2 weeks"]
    },
    {
      date: "05 Sep 2023", 
      type: "Routine Checkup",
      doctor: "Dr. Smith",
      complaint: "Regular health screening",
      assessment: "Overall good health",
      plan: ["Continue current medications", "Blood work in 3 months"]
    },
    {
      date: "20 Aug 2023",
      type: "Emergency",
      doctor: "Dr. Emergency",
      complaint: "Severe chest pain",
      assessment: "Ruled out MI, anxiety-related",
      plan: ["ECG normal", "Discharge with follow-up"]
    }
  ];

  const labResults = [
    {
      test: "HbA1c",
      values: ["6.2", "6.5", "6.1"],
      dates: ["Oct 2023", "Jul 2023", "Apr 2023"],
      normal: "< 7.0",
      status: "normal"
    },
    {
      test: "LDL Cholesterol", 
      values: ["95", "105", "120"],
      dates: ["Oct 2023", "Jul 2023", "Apr 2023"],
      normal: "< 100",
      status: "normal"
    },
    {
      test: "Blood Pressure",
      values: ["125/80", "130/85", "135/90"],
      dates: ["Oct 2023", "Jul 2023", "Apr 2023"],
      normal: "< 130/80",
      status: "borderline"
    }
  ];

  const handleAction = (action: string) => {
    toast.success(`${action} action completed`);
  };

  return (
    <Box sx={{ 
      minHeight: "100vh", 
      backgroundColor: COLORS.background,
      color: COLORS.text
    }}>
      {/* Header */}
      <Box sx={{ 
        backgroundColor: COLORS.sidebarHeader,
        borderBottom: `1px solid ${COLORS.borders}`,
        padding: "24px"
      }}>
        <Box sx={{ 
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <FileText sx={{ color: "white", fontSize: "32px" }} />
            <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
              Medical Records
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Box sx={{ position: "relative", maxWidth: "400px" }}>
              <Search sx={{ 
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "rgba(255,255,255,0.7)"
              }} />
              <Input 
                placeholder="Search patients (name, ID, or barcode)" 
                sx={{ 
                  pl: "40px",
                  color: "white",
                  "&::before": { borderBottomColor: "rgba(255,255,255,0.7)" },
                  "&::after": { borderBottomColor: "white" }
                }}
              />
            </Box>
            <PrimaryButton variant="contained">
              <User sx={{ mr: 1 }} />
              New Patient
            </PrimaryButton>
          </Box>
        </Box>
      </Box>

      <Box sx={{ 
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "32px",
        display: "flex",
        gap: "32px"
      }}>
        {/* Patient Summary Card - Sticky */}
        <Box sx={{ width: "300px", position: "sticky", top: "32px", alignSelf: "flex-start" }}>
          <StyledCard>
            <CardHeader 
              sx={{ textAlign: "center" }}
              title={
                <Box>
                  <Box sx={{ 
                    width: "80px", 
                    height: "80px", 
                    backgroundColor: COLORS.sidebarHeader,
                    borderRadius: "50%", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    margin: "0 auto 16px"
                  }}>
                    <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "24px" }}>
                      {patientInfo.photo}
                    </Typography>
                  </Box>
                  <Typography variant="h6">{patientInfo.name}</Typography>
                  <Typography sx={{ color: COLORS.text, opacity: 0.7 }}>
                    {patientInfo.gender}, {patientInfo.age}yo | ID: {patientInfo.id}
                  </Typography>
                </Box>
              }
            />
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                    Blood Type
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", color: COLORS.critical }}>
                    {patientInfo.bloodType}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                    Last Visit
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {patientInfo.lastVisit}
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Typography variant="body2" sx={{ fontWeight: "medium", mb: 1 }}>
                  Allergies
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {patientInfo.allergies.map((allergy, index) => (
                    <Chip 
                      key={index}
                      label={allergy}
                      size="small"
                      icon={<AlertTriangle fontSize="small" />}
                      sx={{ 
                        backgroundColor: `${COLORS.critical}20`,
                        color: COLORS.critical
                      }}
                    />
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography variant="body2" sx={{ fontWeight: "medium", mb: 1 }}>
                  Current Medications
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {patientInfo.currentMeds.map((med, index) => (
                    <Box 
                      key={index} 
                      sx={{ 
                        backgroundColor: `${COLORS.borders}50`,
                        padding: "8px",
                        borderRadius: "4px"
                      }}
                    >
                      <Typography variant="body2">{med}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ 
                pt: 2, 
                borderTop: `1px solid ${COLORS.borders}`,
                fontSize: "0.875rem",
                color: COLORS.text,
                opacity: 0.7
              }}>
                Last seen by {patientInfo.lastDoctor} on {patientInfo.lastVisit}
              </Box>
            </CardContent>
          </StyledCard>
        </Box>

        {/* Main Content */}
        <Box sx={{ flex: 1 }}>
          <Tabs 
            value={activeTab} 
            onChange={(e, newValue) => setActiveTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ mb: 3 }}
          >
            <Tab label="Overview" value="overview" />
            <Tab label="Visits" value="visits" />
            <Tab label="Labs" value="labs" />
            <Tab label="Imaging" value="imaging" />
            <Tab label="Rx" value="prescriptions" />
            <Tab label="Vaccines" value="immunizations" />
            <Tab label="Surgery" value="surgical" />
            <Tab label="Documents" value="documents" />
          </Tabs>

          {activeTab === "overview" && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <Box sx={{ display: "flex", gap: "24px" }}>
                <StyledCard sx={{ flex: 1 }}>
                  <CardHeader 
                    title="Blood Pressure"
                    avatar={<Heart sx={{ color: COLORS.text, opacity: 0.7 }} />}
                    sx={{ paddingBottom: 0 }}
                  />
                  <CardContent>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>125/80</Typography>
                    <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                      Normal range
                    </Typography>
                  </CardContent>
                </StyledCard>

                <StyledCard sx={{ flex: 1 }}>
                  <CardHeader 
                    title="HbA1c"
                    avatar={<Activity sx={{ color: COLORS.text, opacity: 0.7 }} />}
                    sx={{ paddingBottom: 0 }}
                  />
                  <CardContent>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>6.1%</Typography>
                    <Typography variant="body2" sx={{ color: COLORS.positive }}>
                      Improved
                    </Typography>
                  </CardContent>
                </StyledCard>

                <StyledCard sx={{ flex: 1 }}>
                  <CardHeader 
                    title="BMI"
                    avatar={<User sx={{ color: COLORS.text, opacity: 0.7 }} />}
                    sx={{ paddingBottom: 0 }}
                  />
                  <CardContent>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>24.5</Typography>
                    <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                      Normal weight
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Box>

              <StyledCard>
                <CardHeader title="Recent Activity" />
                <CardContent>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <Box sx={{ 
                        width: "8px", 
                        height: "8px", 
                        backgroundColor: COLORS.positive,
                        borderRadius: "50%"
                      }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography fontWeight="medium">Lab results received</Typography>
                        <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                          HbA1c: 6.1% (Normal) - 2 hours ago
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <Box sx={{ 
                        width: "8px", 
                        height: "8px", 
                        backgroundColor: COLORS.sidebarHeader,
                        borderRadius: "50%"
                      }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography fontWeight="medium">Appointment completed</Typography>
                        <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                          Follow-up with Dr. Patel - Yesterday
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <Box sx={{ 
                        width: "8px", 
                        height: "8px", 
                        backgroundColor: "#FFB74D", // Orange for warning
                        borderRadius: "50%"
                      }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography fontWeight="medium">Prescription refilled</Typography>
                        <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                          Metformin 500mg - 3 days ago
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </StyledCard>
            </Box>
          )}

          {activeTab === "visits" && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {visitHistory.map((visit, index) => (
                <StyledCard key={index}>
                  <CardHeader
                    title={`${visit.date} - ${visit.type}`}
                    subheader={`Dr. ${visit.doctor}`}
                    action={
                      <Box sx={{ display: "flex", gap: "8px" }}>
                        <Button size="small" onClick={() => handleAction("Edit")}>
                          <Edit fontSize="small" />
                        </Button>
                        <Button size="small" onClick={() => handleAction("Print")}>
                          <Print fontSize="small" />
                        </Button>
                        <Button size="small" onClick={() => handleAction("Share")}>
                          <Share fontSize="small" />
                        </Button>
                      </Box>
                    }
                  />
                  <CardContent>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      <Box>
                        <Typography fontWeight="medium">Chief Complaint:</Typography>
                        <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                          {visit.complaint}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography fontWeight="medium">Assessment:</Typography>
                        <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                          {visit.assessment}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography fontWeight="medium">Plan:</Typography>
                        <Box component="ul" sx={{ 
                          pl: 2, 
                          color: COLORS.text,
                          opacity: 0.7,
                          display: "flex",
                          flexDirection: "column",
                          gap: "4px"
                        }}>
                          {visit.plan.map((item, i) => (
                            <Box component="li" key={i}>
                              <Typography variant="body2">{item}</Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </StyledCard>
              ))}
            </Box>
          )}

          {activeTab === "labs" && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {labResults.map((lab, index) => (
                <StyledCard key={index}>
                  <CardHeader
                    title={lab.test}
                    action={
                      <Chip 
                        label={lab.status}
                        size="small"
                        sx={{ 
                          backgroundColor: lab.status === "normal" ? COLORS.positive : "#FFB74D",
                          color: "white"
                        }}
                      />
                    }
                  />
                  <CardContent>
                    <Box sx={{ display: "flex", gap: "16px", mb: 2 }}>
                      {lab.values.map((value, i) => (
                        <Box 
                          key={i} 
                          sx={{ 
                            flex: 1,
                            textAlign: "center",
                            padding: "16px",
                            backgroundColor: `${COLORS.borders}30`,
                            borderRadius: "8px"
                          }}
                        >
                          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            {value}
                          </Typography>
                          <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                            {lab.dates[i]}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                      Normal range: {lab.normal}
                    </Typography>
                  </CardContent>
                </StyledCard>
              ))}
            </Box>
          )}

          {activeTab === "imaging" && (
            <StyledCard>
              <CardHeader title="Imaging Studies" />
              <CardContent>
                <Box sx={{ display: "flex", gap: "16px" }}>
                  <Box sx={{ 
                    flex: 1,
                    padding: "16px",
                    border: `1px solid ${COLORS.borders}`,
                    borderRadius: "8px"
                  }}>
                    <FileImage sx={{ 
                      fontSize: "48px", 
                      color: COLORS.text,
                      opacity: 0.7,
                      mb: 1
                    }} />
                    <Typography fontWeight="medium">Chest X-Ray</Typography>
                    <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                      10 Oct 2023
                    </Typography>
                    <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                      Normal
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    flex: 1,
                    padding: "16px",
                    border: `1px solid ${COLORS.borders}`,
                    borderRadius: "8px"
                  }}>
                    <FileImage sx={{ 
                      fontSize: "48px", 
                      color: COLORS.text,
                      opacity: 0.7,
                      mb: 1
                    }} />
                    <Typography fontWeight="medium">ECG</Typography>
                    <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                      12 Oct 2023
                    </Typography>
                    <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                      Normal sinus rhythm
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </StyledCard>
          )}

          {activeTab === "prescriptions" && (
            <StyledCard>
              <CardHeader title="Prescription History" />
              <CardContent>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {patientInfo.currentMeds.map((med, index) => (
                    <Box 
                      key={index} 
                      sx={{ 
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "16px",
                        backgroundColor: `${COLORS.borders}30`,
                        borderRadius: "8px"
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <Pill sx={{ color: COLORS.sidebarHeader, fontSize: "24px" }} />
                        <Box>
                          <Typography fontWeight="medium">{med}</Typography>
                          <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                            Active prescription
                          </Typography>
                        </Box>
                      </Box>
                      <Chip 
                        label="Active"
                        size="small"
                        sx={{ backgroundColor: COLORS.positive, color: "white" }}
                      />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </StyledCard>
          )}

          {activeTab === "immunizations" && (
            <StyledCard>
              <CardHeader title="Vaccination History" />
              <CardContent>
                <Box sx={{ display: "flex", gap: "16px" }}>
                  <Box sx={{ 
                    flex: 1,
                    padding: "16px",
                    backgroundColor: `${COLORS.borders}30`,
                    borderRadius: "8px"
                  }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mb: 1 }}>
                      <Shield sx={{ color: COLORS.positive, fontSize: "24px" }} />
                      <Typography fontWeight="medium">COVID-19 Vaccine</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                      Booster - 15 Oct 2023
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    flex: 1,
                    padding: "16px",
                    backgroundColor: `${COLORS.borders}30`,
                    borderRadius: "8px"
                  }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px", mb: 1 }}>
                      <Shield sx={{ color: COLORS.positive, fontSize: "24px" }} />
                      <Typography fontWeight="medium">Flu Vaccine</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                      Annual - 01 Oct 2023
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </StyledCard>
          )}

          {activeTab === "surgical" && (
            <StyledCard>
              <CardHeader title="Surgical History" />
              <CardContent sx={{ textAlign: "center", py: 4 }}>
                <Typography sx={{ color: COLORS.text, opacity: 0.7 }}>
                  No surgical procedures on record
                </Typography>
              </CardContent>
            </StyledCard>
          )}

          {activeTab === "documents" && (
            <StyledCard>
              <CardHeader title="Documents" />
              <CardContent>
                <Box sx={{ display: "flex", gap: "16px" }}>
                  <Box sx={{ 
                    flex: 1,
                    padding: "16px",
                    border: `1px solid ${COLORS.borders}`,
                    borderRadius: "8px"
                  }}>
                    <DocumentsIcon sx={{ 
                      fontSize: "32px", 
                      color: COLORS.text,
                      opacity: 0.7,
                      mb: 1
                    }} />
                    <Typography fontWeight="medium">Insurance Card</Typography>
                    <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                      Uploaded 01 Jan 2023
                    </Typography>
                  </Box>
                  <Box sx={{ 
                    flex: 1,
                    padding: "16px",
                    border: `1px solid ${COLORS.borders}`,
                    borderRadius: "8px"
                  }}>
                    <DocumentsIcon sx={{ 
                      fontSize: "32px", 
                      color: COLORS.text,
                      opacity: 0.7,
                      mb: 1
                    }} />
                    <Typography fontWeight="medium">ID Copy</Typography>
                    <Typography variant="body2" sx={{ color: COLORS.text, opacity: 0.7 }}>
                      Uploaded 01 Jan 2023
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </StyledCard>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MedicalRecords;