import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const NotFoundPage = () => {
    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>404 Not Found</Card.Title>
                <Button variant="primary">
                    <Link to="/" className="not-found-btn">Home</Link>
                </Button>
            </Card.Body>
        </Card>
    );
}
export default NotFoundPage;