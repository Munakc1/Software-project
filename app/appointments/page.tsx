"use client";
import { useState } from "react";
import { CalendarToday, AccessTime, Person, Phone, Email, Add, FilterList, Search, Edit, Close } from "@mui/icons-material";
import { Button, Input, Card, CardHeader, CardContent, Badge, Select, MenuItem, IconButton, Typography, Box, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { toast } from "sonner";

interface Appointment {
  id: number;
  time: string;
  patient: string;
  patientId: string;
  doctor: string;
  type: string;
  status: "confirmed" | "pending" | "urgent" | "cancelled";
  phone: string;
  email: string;
}

const Appointments = () => {
  const [selectedView, setSelectedView] = useState("list");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterTimeframe, setFilterTimeframe] = useState("today");
  
  const appointments: Appointment[] = [
    {
      id: 1,
      time: "10:00 AM",
      patient: "John Doe",
      patientId: "#123",
      doctor: "Dr. Smith",
      type: "Follow-Up",
      status: "confirmed",
      phone: "+91-9876543210",
      email: "john@example.com"
    },
    {
      id: 2,
      time: "11:30 AM", 
      patient: "Jane Roe",
      patientId: "#456",
      doctor: "Dr. Patel",
      type: "New Patient",
      status: "pending",
      phone: "+91-9876543211",
      email: "jane@example.com"
    },
    {
      id: 3,
      time: "2:00 PM",
      patient: "Mike Johnson",
      patientId: "#789",
      doctor: "Dr. Lee",
      type: "Consultation",
      status: "confirmed",
      phone: "+91-9876543212",
      email: "mike@example.com"
    },
    {
      id: 4,
      time: "3:30 PM",
      patient: "Sarah Wilson",
      patientId: "#101",
      doctor: "Dr. Kumar",
      type: "Emergency",
      status: "urgent",
      phone: "+91-9876543213",
      email: "sarah@example.com"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return { bg: "#388E3C", text: "#FFFFFF" }; // Clinic Green
      case "pending":
        return { bg: "#FFC107", text: "#000000" }; // Yellow-500
      case "urgent":
        return { bg: "#D32F2F", text: "#FFFFFF" }; // Alert Red
      case "cancelled":
        return { bg: "#E2E8F0", text: "#2D3748" }; // Cloud Gray
      default:
        return { bg: "#E2E8F0", text: "#2D3748" }; // Cloud Gray
    }
  };

  const handleAction = (action: string, appointmentId: number) => {
    toast.success(`${action} appointment #${appointmentId}`);
  };

  const todayStats = {
    total: appointments.length,
    confirmed: appointments.filter(a => a.status === "confirmed").length,
    pending: appointments.filter(a => a.status === "pending").length,
    urgent: appointments.filter(a => a.status === "urgent").length
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
      {/* Header */}
      <Box sx={{ backgroundColor: "#3A5E6D", borderBottom: "1px solid #E2E8F0" }}>
        <Box sx={{ maxWidth: "1200px", margin: "0 auto", px: { xs: 2, sm: 3, md: 4 }, py: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CalendarToday sx={{ color: "#2A7F62", fontSize: 32 }} />
              <Typography variant="h4" sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Appointments
              </Typography>
            </Box>
            <Button 
              variant="contained" 
              sx={{ 
                backgroundColor: "#2A7F62",
                "&:hover": { backgroundColor: "#2A7F62E0" },
                color: "#FFFFFF"
              }}
            >
              <Add sx={{ mr: 1 }} />
              New Appointment
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ maxWidth: "1200px", margin: "0 auto", px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 3 }}>
          {/* Main Content */}
          <Box sx={{ flex: 3 }}>
            {/* Filters */}
            <Card sx={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", mb: 3 }}>
              <CardContent>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <FilterList sx={{ color: "#2D3748", fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: "#2D3748", fontWeight: "medium" }}>
                      Filters:
                    </Typography>
                  </Box>
                  
                  <Select
                    value={filterTimeframe}
                    onChange={(e) => setFilterTimeframe(e.target.value)}
                    sx={{ width: 160 }}
                  >
                    <MenuItem value="today">Today</MenuItem>
                    <MenuItem value="tomorrow">Tomorrow</MenuItem>
                    <MenuItem value="week">This Week</MenuItem>
                    <MenuItem value="custom">Custom Range</MenuItem>
                  </Select>

                  <Select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    sx={{ width: 160 }}
                  >
                    <MenuItem value="all">All Status</MenuItem>
                    <MenuItem value="confirmed">Confirmed</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="urgent">Urgent</MenuItem>
                  </Select>

                  <Box sx={{ flex: 1, maxWidth: 400 }}>
                    <Box sx={{ position: "relative" }}>
                      <Search sx={{ 
                        position: "absolute", 
                        left: 10, 
                        top: "50%", 
                        transform: "translateY(-50%)", 
                        color: "#2D3748" 
                      }} />
                      <Input 
                        placeholder="Search patients..." 
                        sx={{ pl: 5, width: "100%" }} 
                      />
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Appointments Table */}
            <Card sx={{ backgroundColor: "#FFFFFF" }}>
              <CardHeader 
                title={
                  <Typography variant="h6" sx={{ color: "#2D3748" }}>
                    Today's Appointments
                  </Typography>
                } 
              />
              <CardContent>
                <Box sx={{ overflowX: "auto" }}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ borderBottom: "1px solid #E2E8F0" }}>
                        <TableCell sx={{ color: "#2D3748", fontWeight: "medium" }}>Time</TableCell>
                        <TableCell sx={{ color: "#2D3748", fontWeight: "medium" }}>Patient</TableCell>
                        <TableCell sx={{ color: "#2D3748", fontWeight: "medium" }}>Doctor</TableCell>
                        <TableCell sx={{ color: "#2D3748", fontWeight: "medium" }}>Type</TableCell>
                        <TableCell sx={{ color: "#2D3748", fontWeight: "medium" }}>Status</TableCell>
                        <TableCell sx={{ color: "#2D3748", fontWeight: "medium" }}>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {appointments.map((appointment) => (
                        <TableRow 
                          key={appointment.id} 
                          sx={{ 
                            borderBottom: "1px solid #E2E8F0",
                            "&:hover": { backgroundColor: "#F5F9F8" }
                          }}
                        >
                          <TableCell>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                              <AccessTime sx={{ color: "#2A7F62", fontSize: 20 }} />
                              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                                {appointment.time}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Box>
                              <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                                {appointment.patient}
                              </Typography>
                              <Typography variant="caption" sx={{ color: "#2D3748" }}>
                                ID: {appointment.patientId}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2">
                              {appointment.doctor}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2">
                              {appointment.type}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Badge 
                              sx={{ 
                                backgroundColor: getStatusColor(appointment.status).bg,
                                color: getStatusColor(appointment.status).text,
                                px: 2,
                                py: 0.5,
                                borderRadius: 1,
                                textTransform: "capitalize"
                              }}
                            >
                              {appointment.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Box sx={{ display: "flex", gap: 1 }}>
                              <IconButton
                                size="small"
                                onClick={() => handleAction("Edit", appointment.id)}
                              >
                                <Edit sx={{ color: "#2D3748" }} />
                              </IconButton>
                              {appointment.status === "pending" && (
                                <>
                                  <IconButton
                                    size="small"
                                    onClick={() => handleAction("Call", appointment.id)}
                                  >
                                    <Phone sx={{ color: "#2D3748" }} />
                                  </IconButton>
                                  <IconButton
                                    size="small"
                                    onClick={() => handleAction("Remind", appointment.id)}
                                  >
                                    <Email sx={{ color: "#2D3748" }} />
                                  </IconButton>
                                </>
                              )}
                              <IconButton
                                size="small"
                                onClick={() => handleAction("Cancel", appointment.id)}
                              >
                                <Close sx={{ color: "#2D3748" }} />
                              </IconButton>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Sidebar */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Today's Stats */}
            <Card sx={{ backgroundColor: "#FFFFFF" }}>
              <CardHeader 
                title={
                  <Typography variant="h6" sx={{ color: "#2D3748" }}>
                    Today's Stats
                  </Typography>
                } 
              />
              <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h4" sx={{ fontWeight: "bold", color: "#2D3748" }}>
                    {todayStats.total}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#2D3748" }}>
                    Total Appointments
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box sx={{ flex: 1, textAlign: "center" }}>
                    <Typography variant="h6" sx={{ color: "#388E3C", fontWeight: "semibold" }}>
                      {todayStats.confirmed}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#2D3748" }}>
                      Confirmed
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1, textAlign: "center" }}>
                    <Typography variant="h6" sx={{ color: "#FFC107", fontWeight: "semibold" }}>
                      {todayStats.pending}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#2D3748" }}>
                      Pending
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Urgent Alerts */}
            <Card sx={{ backgroundColor: "#FFFFFF" }}>
              <CardHeader 
                title={
                  <Typography variant="h6" sx={{ color: "#D32F2F" }}>
                    Urgent Alerts
                  </Typography>
                } 
              />
              <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ 
                  p: 2, 
                  backgroundColor: "#D32F2F10", 
                  borderRadius: 1, 
                  border: "1px solid #D32F2F20"
                }}>
                  <Typography variant="body2" sx={{ color: "#D32F2F", fontWeight: "medium" }}>
                    ❗ {todayStats.urgent} Emergency Appointments
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#2D3748", display: "block", mt: 0.5 }}>
                    Require immediate attention
                  </Typography>
                </Box>
                <Box sx={{ 
                  p: 2, 
                  backgroundColor: "#FFC10710", 
                  borderRadius: 1, 
                  border: "1px solid #FFC10720"
                }}>
                  <Typography variant="body2" sx={{ color: "#FFC107", fontWeight: "medium" }}>
                    🕒 1 Emergency Slot Available
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#2D3748", display: "block", mt: 0.5 }}>
                    3:00 PM - Dr. Emergency
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Quick Patient Lookup */}
            <Card sx={{ backgroundColor: "#FFFFFF" }}>
              <CardHeader 
                title={
                  <Typography variant="h6" sx={{ color: "#2D3748" }}>
                    Quick Patient Lookup
                  </Typography>
                } 
              />
              <CardContent>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Input placeholder="Search by name or ID..." />
                  <Button 
                    variant="outlined" 
                    fullWidth
                    sx={{ color: "#2D3748", borderColor: "#E2E8F0" }}
                  >
                    <Person sx={{ mr: 1 }} />
                    Search Records
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Appointments;