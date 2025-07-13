import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import RepositoryCard from '../components/RepositoryCard';

const groupedRepositories = [
    {
        title: '🧪 Repositórios de Teste',
        eventKey: '0',
        items: [
            {
                name: 'Landing Page Tests Automated',
                description: 'Automated tests for Agilean LandingPage.',
                url: 'https://github.com/ravifel/LandingPageTestsAutomated',
                tech: 'selenium'
            },
            {
                name: 'Selenium UI Test Csharp',
                description: 'Selenium WebDriver | C#.Net | Workshop | (RKTestingTools)',
                url: 'https://github.com/ravifel/SeleniumUITestCsharp',
                tech: 'selenium'
            },
            {
                name: 'Cypress Test Api',
                description: 'Cypress project for testing APIs',
                url: 'https://github.com/ravifel/cypress-test-api',
                tech: 'cypress'
            },
            {
                name: 'Cypress Project To Practice',
                description: 'Web Cypress Automation',
                url: 'https://github.com/ravifel/cypress-project-to-practice',
                tech: 'cypress'
            },
            {
                name: 'Cypress BDD Cucumber',
                description: 'Web Cypress Automation with Cucumber (BDD)',
                url: 'https://github.com/ravifel/cypress-bdd-cucumber',
                tech: 'cypress'
            },
            {
                name: 'Cypress Web Automation Tests',
                description: 'Web Cypress Automation',
                url: 'https://github.com/ravifel/cypress-web-automation-tests',
                tech: 'cypress'
            }
        ]
    },
    {
        title: '💻 Repositórios de Desenvolvimento',
        eventKey: '1',
        items: [
            {
                name: 'Website Ravi Portfolio React',
                description: 'Personal website Portfolio using React.',
                url: 'https://github.com/ravifel/website-ravi-portfolio-react',
                tech: 'react'
            },
            {
                name: 'Book Library Project',
                description: 'The system simulates a virtual library of books. Project for front-end study',
                url: 'https://github.com/ravifel/book-library-project',
                tech: 'react'
            },
            {
                name: 'Projeto Angular Spa',
                description: 'Project developed in the "SPA Development with Angular" course, on the Desenvolvedor.io platform',
                url: 'https://github.com/ravifel/projeto-angular-spa',
                tech: 'angular'
            },
            {
                name: 'Curso Angular9 COD3R',
                description: 'Project developed during the "Angular 9 Essential" course, by the "Cod3r" platform',
                url: 'https://github.com/ravifel/curso-angular9-cod3r',
                tech: 'angular'
            },
            {
                name: 'Email JS Angular',
                description: 'Service for sending emails using "EmailJS" implemented in the Angular framework in the "TypeScript" language.',
                url: 'https://github.com/ravifel/emailJS-angular',
                tech: 'angular'
            },
            {
                name: 'Movies Project',
                description: 'In this project, the user will be able to search for the film they want and have some information about it.',
                url: 'https://github.com/ravifel/projeto-filmes',
                tech: 'angular'
            }
        ]
    }
];

const Repositories = () => (
    <Container className="my-5">
        <h2 className="mb-4">
            <span role="img" aria-label="Folder">📁</span> Repositórios
        </h2>

        <Accordion alwaysOpen>
            {groupedRepositories.map((group) => (
                <Accordion.Item eventKey={group.eventKey} key={group.eventKey}>
                    <Accordion.Header>{group.title}</Accordion.Header>
                    <Accordion.Body>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {group.items.map((repo) => (
                                <Col key={repo.name}>
                                    <RepositoryCard {...repo} />
                                </Col>
                            ))}
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    </Container>
);

export default Repositories;
