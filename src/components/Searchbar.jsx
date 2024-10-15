// import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';


export default function Searchbar(){
    const handleSearch = (e) => {
        e.preventDefault();
        // insert code
    };

    return (
        <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                />
            <Button variant="outline-success" type="submit">Search</Button>
        </Form>
    );
}
