"use client";
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { Button, IconButton, Alert, Snackbar, CircularProgress, Box, Tabs, Tab, Paper } from '@mui/material';
import { Download, PictureAsPdf, Image, Close } from '@mui/icons-material';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type Report = {
  id: string;
  name: string;
  type: 'pdf' | 'image';
  url: string;
  thumbnail?: string;
  createdAt: string;
};

type ReportViewerProps = {
  reports: Report[];
};

const ReportViewer: React.FC<ReportViewerProps> = ({ reports }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    setPageNumber(1);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Error while loading document:', error);
    setError('Failed to load the document. Please try again.');
    setLoading(false);
  };

  const handleDownload = (report: Report) => {
    // In a real app, you might want to use a proper download function
    const link = document.createElement('a');
    link.href = report.url;
    link.download = report.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setSnackbarMessage(`${report.name} download started!`);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handlePreviousPage = () => {
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
  };

  const handleNextPage = () => {
    if (numPages) {
      setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages));
    }
  };

  const currentReport = reports[activeTab];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Report Viewer</h2>
      
      {/* Tabs for report selection */}
      <Paper elevation={2} className="mb-6">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="report tabs"
        >
          {reports.map((report, index) => (
            <Tab
              key={report.id}
              label={report.name}
              icon={report.type === 'pdf' ? <PictureAsPdf /> : <Image />}
              iconPosition="start"
              className="min-h-16"
            />
          ))}
        </Tabs>
      </Paper>

      {/* Report display area */}
      <div className="border rounded-lg overflow-hidden bg-gray-50">
        <div className="p-4 bg-gray-100 border-b flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">{currentReport.name}</h3>
            <p className="text-sm text-gray-500">Uploaded: {new Date(currentReport.createdAt).toLocaleDateString()}</p>
          </div>
          <Button
            variant="contained"
            startIcon={<Download />}
            onClick={() => handleDownload(currentReport)}
            className="bg-blue-600 hover:bg-blue-700 shadow-sm"
          >
            Download
          </Button>
        </div>

        <div className="p-4 flex justify-center items-center min-h-96 relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <CircularProgress />
            </div>
          )}

          {error ? (
            <Alert severity="error" className="w-full">
              {error}
            </Alert>
          ) : (
            <>
              {currentReport.type === 'pdf' ? (
                <div className="w-full">
                  <Document
                    file={currentReport.url}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={<CircularProgress />}
                  >
                    <Page
                      pageNumber={pageNumber}
                      width={800}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  </Document>
                  {numPages && numPages > 1 && (
                    <div className="flex justify-center items-center mt-4 space-x-4">
                      <Button
                        variant="outlined"
                        onClick={handlePreviousPage}
                        disabled={pageNumber <= 1}
                      >
                        Previous
                      </Button>
                      <span className="text-gray-600">
                        Page {pageNumber} of {numPages}
                      </span>
                      <Button
                        variant="outlined"
                        onClick={handleNextPage}
                        disabled={pageNumber >= numPages}
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="max-w-full max-h-96 flex justify-center">
                  <img
                    src={currentReport.url}
                    alt={currentReport.name}
                    className="max-h-full max-w-full object-contain rounded"
                    onLoad={() => setLoading(false)}
                    onError={() => {
                      setError('Failed to load the image.');
                      setLoading(false);
                    }}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Snackbar for download notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
          icon={<Download fontSize="inherit" />}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ReportViewer;