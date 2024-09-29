import Sidebar from "../components/Sidebar.jsx";
import Searchbar from "../components/Searchbar.jsx";
import { Card, Table } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

export default function Equipment() {
  //useEffect on equipmentList once backend is running

  const equipmentList = [
    {itemNo: 1, propertyNo: "0046-23", category: "XITRIX", 
      specification: 
        {processor: "NTEL CORE I7-12700 2.10 GHz (12Cores)",motherboard:"XITRIX XPN-H610M2", hdd:"1TB + 250GB SSD",
          memory: "16GB DDR4", videoCard:"NVIDIA GeForce GTX 1660 SUPER", display:"G24 24in 165Hz Curved XITRIX Monitor",
          opticalDrive: "N/A", casing: "XITRIX Mid Tower RGB Chassis w/ Tempered", mouse: "Xitrix® Ergonomic Design USB Keyboard", keyboard:"Xitrix® Ergonomic Design USB Mouse"
      }, 
      dateOfAcquisition: "09/02/2023", status:"FUNCTIONAL",location:"CISCO LABORATORY, 3RD FLR. ICS BUILDING", 
      campus: "MAIN 2", inCharge: "Jaycee C. Aurelio"},
      {itemNo: 2, propertyNo: "0046-23", category: "XITRIX", 
        specification: 
          {processor: "NTEL CORE I7-12700 2.10 GHz (12Cores)",motherboard:"XITRIX XPN-H610M2", hdd:"1TB + 250GB SSD",
            memory: "16GB DDR4", videoCard:"NVIDIA GeForce GTX 1660 SUPER", display:"G24 24in 165Hz Curved XITRIX Monitor",
            opticalDrive: "N/A", casing: "XITRIX Mid Tower RGB Chassis w/ Tempered", mouse: "Xitrix® Ergonomic Design USB Keyboard", keyboard:"Xitrix® Ergonomic Design USB Mouse"
        }, 
        dateOfAcquisition: "09/02/2023", status:"FUNCTIONAL",location:"CISCO LABORATORY, 3RD FLR. ICS BUILDING", 
        campus: "MAIN 2", inCharge: "Jaycee C. Aurelio"},
        {itemNo: 3, propertyNo: "0046-23", category: "XITRIX", 
          specification: 
            {processor: "NTEL CORE I7-12700 2.10 GHz (12Cores)",motherboard:"XITRIX XPN-H610M2", hdd:"1TB + 250GB SSD",
              memory: "16GB DDR4", videoCard:"NVIDIA GeForce GTX 1660 SUPER", display:"G24 24in 165Hz Curved XITRIX Monitor",
              opticalDrive: "N/A", casing: "XITRIX Mid Tower RGB Chassis w/ Tempered", mouse: "Xitrix® Ergonomic Design USB Keyboard", keyboard:"Xitrix® Ergonomic Design USB Mouse"
          }, 
          dateOfAcquisition: "09/02/2023", status:"FUNCTIONAL",location:"CISCO LABORATORY, 3RD FLR. ICS BUILDING", 
          campus: "MAIN 2", inCharge: "Jaycee C. Aurelio"}
  ]
  return(
    <>
      <div style={{ display: 'flex', minHeight: '100vh'}}>
        <Sidebar/>
        <div style={{ flexGrow: 1, padding: '1rem' }}>
          <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', margin: '1rem', minHeight: '100vh'}}>
            <Card.Header>
              <h5>Equipment List</h5>
            </Card.Header>

            <Card.Body style={{ height: "600px", overflowY: 'auto' }}>
              <Searchbar/>
                <Table striped bordered hover responsive style={{ marginTop: '1rem', border: "rgba(0, 0, 0, 0.3)"}}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Property No.</th>
                      <th>Category</th>
                      <th>Specification</th>
                        {/*Divided into:
                          Processor
                          Motherboard
                          HDD
                          Memory
                          Video Card
                          Display
                          Optical Drive
                          Casing
                          Mouse
                          Keyboard  */}
                      <th>Date of Acquisition</th>
                      <th>Status/Remarks</th>
                      <th>Location</th>
                      <th>Campus</th>
                      <th>In-Charge</th>
                    </tr>
                  </thead>
                  {/* implement lazy listing */}
                  <tbody>
                    {equipmentList.map((item, index) => (
                      <tr key={index} style={{ fontSize: '0.90rem' }}>
                        <td className="text-center align-middle">{item.itemNo}</td>
                        <td className="text-center align-middle">{item.propertyNo}</td>
                        <td className="text-center align-middle"> {item.category}</td>
                        <td>
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
                        </td>
                        <td className="text-center align-middle">{item.dateOfAcquisition}</td>
                        <td className="text-center align-middle">{item.status}</td>
                        <td className="text-center align-middle">{item.location}</td>
                        <td className="text-center align-middle">{item.campus}</td>
                        <td className="text-center align-middle">{item.inCharge}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}