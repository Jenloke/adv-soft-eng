import Sidebar from "../components/Sidebar.jsx";
import Searchbar from "../components/Searchbar.jsx";
import React, { useState, useEffect, useRef } from 'react';
// import { Card, Table } from 'react-bootstrap';
import {
  Card,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
  Paper,
} from '@mui/material';

export default function Equipment() {
  const initialEquipmentList = [
    {
      itemNo: 1, 
      propertyNo: "0046-23", 
      category: "XITRIX", 
      specification: 
        {
          processor: "NTEL CORE I7-12700 2.10 GHz (12Cores)",
          motherboard:"XITRIX XPN-H610M2", 
          hdd:"1TB + 250GB SSD",
          memory: "16GB DDR4", 
          videoCard:"NVIDIA GeForce GTX 1660 SUPER", 
          display:"G24 24in 165Hz Curved XITRIX Monitor",
          opticalDrive: "N/A", 
          casing: "XITRIX Mid Tower RGB Chassis w/ Tempered", 
          mouse: "Xitrix® Ergonomic Design USB Keyboard", 
          keyboard:"Xitrix® Ergonomic Design USB Mouse"
        }, 
      dateOfAcquisition: "09/02/2023", 
      status:"FUNCTIONAL",
      location:"CISCO LABORATORY, 3RD FLR. ICS BUILDING", 
      campus: "MAIN 2", 
      inCharge: "Jaycee C. Aurelio"
    },
    {
      itemNo: 2, 
      propertyNo: "0046-23", 
      category: "XITRIX", 
      specification: 
        {
          processor: "NTEL CORE I7-12700 2.10 GHz (12Cores)",
          motherboard:"XITRIX XPN-H610M2", 
          hdd:"1TB + 250GB SSD",
          memory: "16GB DDR4", 
          videoCard:"NVIDIA GeForce GTX 1660 SUPER", 
          display:"G24 24in 165Hz Curved XITRIX Monitor",
          opticalDrive: "N/A", 
          casing: "XITRIX Mid Tower RGB Chassis w/ Tempered", 
          mouse: "Xitrix® Ergonomic Design USB Keyboard", 
          keyboard:"Xitrix® Ergonomic Design USB Mouse"
        }, 
      dateOfAcquisition: "09/02/2023", 
      status:"FUNCTIONAL",
      location:"CISCO LABORATORY, 3RD FLR. ICS BUILDING", 
      campus: "MAIN 2", 
      inCharge: "Jaycee C. Aurelio"
    },
    {
      itemNo: 3, 
      propertyNo: "0046-23", 
      category: "XITRIX", 
      specification: 
        {
          processor: "NTEL CORE I7-12700 2.10 GHz (12Cores)",
          motherboard:"XITRIX XPN-H610M2", 
          hdd:"1TB + 250GB SSD",
          memory: "16GB DDR4", 
          videoCard:"NVIDIA GeForce GTX 1660 SUPER", 
          display:"G24 24in 165Hz Curved XITRIX Monitor",
          opticalDrive: "N/A", 
          casing: "XITRIX Mid Tower RGB Chassis w/ Tempered", 
          mouse: "Xitrix® Ergonomic Design USB Keyboard", 
          keyboard:"Xitrix® Ergonomic Design USB Mouse"
        }, 
      dateOfAcquisition: "09/02/2023", 
      status:"FUNCTIONAL",
      location:"CISCO LABORATORY, 3RD FLR. ICS BUILDING", 
      campus: "MAIN 2", 
      inCharge: "Jaycee C. Aurelio"
    }
  ]

  const [equipmentList, setEquipmentList] = useState(initialEquipmentList);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const cardContentRef = useRef(null);

   // Mock API call to fetch more data
   const loadMoreData = () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = [
        {
          itemNo: 4,
          propertyNo: '0046-24',
          category: 'XITRIX',
          specification: {
            processor: 'Intel Core i7-11700K',
            motherboard: 'XITRIX XPN-H610M2',
            hdd: '2TB + 512GB SSD',
            memory: '32GB DDR4',
            videoCard: 'NVIDIA GeForce RTX 3080',
            display: 'Xitrix Monitor',
            opticalDrive: 'N/A',
            casing: 'RGB Chassis',
            mouse: 'Xitrix Mouse',
            keyboard: 'Xitrix Keyboard',
          },
          dateOfAcquisition: '09/02/2023',
          status: 'FUNCTIONAL',
          location: 'CISCO LAB',
          campus: 'MAIN 2',
          inCharge: 'Jaycee C. Aurelio',
        },
      ];
      setEquipmentList((prevList) => [...prevList, ...newItems]);
      setLoading(false);
      // Stop loading more after a certain number of items for demo purposes
      if (equipmentList.length >= 50) setHasMore(false);
    }, 1500);
  };

  const handleScroll = () => {
    if (cardContentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = cardContentRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10 && hasMore && !loading) {
        loadMoreData();
      }
    }
  };

  useEffect(() => {
    const cardElement = cardContentRef.current;
    if (cardElement) {
      cardElement.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (cardElement) {
        cardElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [loading, hasMore]);

  return(
    <>
      <div style={{ display: 'flex', minHeight: '100vh',backgroundColor: "#e6e6e6"}}>
        <Sidebar/>
        <div style={{ flexGrow: 1, padding: '1rem' }}>
          <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)', margin: '1rem', minHeight: '90vh'}}>
            <CardHeader title="Equipment List" />
            <CardContent
              ref={cardContentRef}
              sx={{ height: '83vh', overflowY: 'auto', padding: 0}} // Scrollable container
            >
              <Searchbar/>
              <TableContainer component={Paper}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Item No</TableCell>
                      <TableCell align="center">Property No</TableCell>
                      <TableCell align="center">Category</TableCell>
                      <TableCell>Specification</TableCell>
                      <TableCell align="center">Date of Acquisition</TableCell>
                      <TableCell align="center">Status</TableCell>
                      <TableCell align="center">Location</TableCell>
                      <TableCell align="center">Campus</TableCell>
                      <TableCell align="center">In-Charge</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {equipmentList.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell align="center">{item.itemNo}</TableCell>
                        <TableCell align="center">{item.propertyNo}</TableCell>
                        <TableCell align="center">{item.category}</TableCell>
                        <TableCell>
                          <Typography>
                            <strong>Processor:</strong> {item.specification.processor} <br />
                            <strong>Motherboard:</strong> {item.specification.motherboard} <br />
                            <strong>HDD:</strong> {item.specification.hdd} <br />
                            <strong>Memory:</strong> {item.specification.memory} <br />
                            <strong>Video Card:</strong> {item.specification.videoCard} <br />
                            <strong>Display:</strong> {item.specification.display} <br />
                            <strong>Optical Drive:</strong> {item.specification.opticalDrive} <br />
                            <strong>Casing:</strong> {item.specification.casing} <br />
                            <strong>Mouse:</strong> {item.specification.mouse} <br />
                            <strong>Keyboard:</strong> {item.specification.keyboard}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">{item.dateOfAcquisition}</TableCell>
                        <TableCell align="center">{item.status}</TableCell>
                        <TableCell align="center">{item.location}</TableCell>
                        <TableCell align="center">{item.campus}</TableCell>
                        <TableCell align="center">{item.inCharge}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {loading && (
                <div style={{ textAlign: 'center', padding: '10px' }}>
                  <CircularProgress />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}