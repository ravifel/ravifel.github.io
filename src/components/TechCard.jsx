import React from 'react';
import { Col } from 'react-bootstrap';

const TechCard = ({ emoji, label, testId }) => {
    return (
        <Col>
            <div
                className="tech-card p-2 border rounded text-center shadow-sm bg-light d-flex flex-column align-items-center justify-content-center"
                style={{ height: '100%', minHeight: '85px' }}
                data-testid={testId}
            >
                <span style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{emoji}</span>
                <p className="mb-0" style={{ fontSize: '0.9rem', fontWeight: '600' }}>
                    {label}
                </p>
            </div>
        </Col>
    );
};

export default TechCard;
