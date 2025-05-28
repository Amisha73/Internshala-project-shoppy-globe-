import React from "react";
import { Card, Row } from "react-bootstrap";

const AboutPage = () => {
  // Sample employee data array
  const employees = [
    {
      id: 1,
      name: "Employee 1",
      role: "Manager",
      image:
        "https://plus.unsplash.com/premium_photo-1661297414288-8ed17eb1b3f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Employee 2",
      role: "Sales Associate",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Employee 3",
      role: "Customer Support",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Employee 4",
      role: "Customer Support",
      image:
        "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex flex-md-row-reverse flex-column justify-content-around align-items-center gap-5 mb-5 ">
        <div className="">
          <img
            src="https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
            alt="ShoppyGloe"
            className="img-fluid mb-4 rounded shadow"
          />
        </div>
        <div className="w-75 ">
          <h1 className="md-text-center">About ShoppyGloe</h1>
          <p className="md-text-center">
            At ShoppyGloe, we believe in providing the best shopping experience
            for our customers. Our mission is to offer a wide range of products
            at competitive prices while ensuring exceptional customer service.
            <br/>
            <br/>
            At ShoppyGloe, we believe in providing the best shopping experience
            for our customers. Our mission is to offer a wide range of products
            at competitive prices while ensuring exceptional customer service.
          </p>
        </div>
      </div>
      {/* map to access the employees data array */}
      <p className="text-center fs-1 fw-bold">Meet Our Team</p>
      <Row lg={5} md={4} sm={3} className="gap-5 mb-5 d-flex justify-content-center">
        {employees.map((employee) => (
          <Card key={employee.id} className="shadow mb-5">
            <img
              src={employee.image}
              alt={employee.name}
            />
            <div className="text-center">
              <h3>{employee.name}</h3>
              <p>Role: {employee.role}</p>
            </div>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default AboutPage;
