import React from 'react';
import TechCard from '../components/TechCard';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import CustomButton from '../components/CustomButton';


function Home() {

    const tecnologias = [
        { emoji: "🎭", label: "Playwright", testId: "tech-playwright" },
        { emoji: "🧬", label: "Selenium WebDriver", testId: "tech-selenium" },
        { emoji: "⚙️", label: "C#", testId: "tech-csharp" },
        { emoji: "🧪", label: "Cypress", testId: "tech-cypress" },
        { emoji: "🟨", label: "JavaScript", testId: "tech-javascript" },
        { emoji: "🟦", label: "TypeScript", testId: "tech-typescript" },
        { emoji: "📮", label: "Postman", testId: "tech-postman" },
        { emoji: "🗄️", label: "SQL", testId: "tech-sql" },
        { emoji: "🐘", label: "PostgreSQL", testId: "tech-postgresql" },
        { emoji: "📦", label: "SQLite", testId: "tech-sqlite" },
        { emoji: "🌿", label: "Git", testId: "tech-git" },
        { emoji: "🐙", label: "GitHub", testId: "tech-github" },
        { emoji: "🧵", label: "BitBucket", testId: "tech-bitbucket" },
        { emoji: "⚛️", label: "React JS", testId: "tech-react" },
        { emoji: "🅰️", label: "Angular", testId: "tech-angular" },
        { emoji: "🧾", label: "HTML", testId: "tech-html" },
        { emoji: "🎨", label: "CSS", testId: "tech-css" },
        { emoji: "📘", label: "Bootstrap", testId: "tech-bootstrap" },
        { emoji: "📐", label: "Angular Material", testId: "tech-angularmaterial" },
        { emoji: "🖥️", label: "Visual Studio Code", testId: "tech-vscode" },
        { emoji: "📋", label: "Jira", testId: "tech-jira" },
        { emoji: "💬", label: "Teams", testId: "tech-teams" },
        { emoji: "☁️", label: "Azure DevOps", testId: "tech-azuredevops" },
        { emoji: "📌", label: "Trello", testId: "tech-trello" },
        { emoji: "🪟", label: "Windows", testId: "tech-windows" },
        { emoji: "🐧", label: "Linux", testId: "tech-linux" },
        { emoji: "🎩", label: "Fedora", testId: "tech-fedora" },
        { emoji: "🔶", label: "Ubuntu", testId: "tech-ubuntu" },
    ];

    return (
        <Container className="my-5">
            <Row className="align-items-center">
                {/* Profile photo */}
                <Col xs={12} md={5} className="text-center mb-4 mb-md-0">
                    <Image
                        src="/images/ravi-image-2.jpeg"
                        alt="Profile Image"
                        roundedCircle
                        fluid
                        style={{
                            maxWidth: '240px',
                            opacity: 0.95,
                            border: '4px solid #212529',
                            padding: '4px'
                        }}
                        data-testid="home-profile-image"
                    />

                </Col>

                {/* Presentation text */}
                <Col xs={12} md={7}>
                    <h1 className="mb-3">Ravi Silva</h1>
                    <p style={{ fontSize: '1.1rem' }}>
                        Apaixonado por tecnologia e qualidade de software, sou formado em Análise e Desenvolvimento de Sistemas pela <strong>Universidade de Fortaleza (UNIFOR)</strong> e pós-graduado em <strong>Engenharia de Software com Ênfase em Qualidade</strong> e em <strong>Desenvolvimento Frontend</strong>.
                    </p>
                    <p style={{ fontSize: '1.1rem' }}>
                        Atuo como Analista de Qualidade de Software, com experiência em testes automatizados com as ferramentas <strong>Cypress, Selenium WebDriver</strong> e outras. Tenho familiaridade com <strong>Angular, React, Git, SQL</strong> e metodologias ágeis.
                    </p>
                    <p style={{ fontSize: '1.1rem' }}>
                        Estudo <strong>inglês com professores nativos</strong> cinco vezes por semana, buscando aprimorar as minhas habilidades na lingua inglesa. Sou uma pessoa <strong>detalhista, organizada e comprometida</strong> com a excelência.
                    </p>
                    <p style={{ fontStyle: 'italic', fontSize: '1rem' }}>
                        “Acho impressionante o impacto positivo que a tecnologia pode gerar na vida das pessoas ao solucionar problemas reais e cotidianos. A capacidade de inovação e transformação proporcionada por ela me inspira cada vez mais a seguir aprofundando meu conhecimento, movido pela fascinação pelas infinitas possibilidades que a tecnologia oferece.”
                    </p>

                    {/* Curriculum */}
                    <div className="d-flex flex-wrap gap-3 mt-4">
                        <CustomButton
                            icon="📄"
                            text="Ver Currículo em Português"
                            href="/curriculo-ravi-pt.pdf"
                            isExternal
                        />
                        <CustomButton
                            icon="🌍"
                            text="Ver Currículo em Inglês"
                            href="/curriculo-ravi-en.pdf"
                            isExternal
                        />
                    </div>
                </Col>
            </Row>

            {/* Contact */}
            <hr className="my-5" />
            <h2 className="mb-4 d-flex align-items-center">
                <Phone className="me-2" />
                Contato
            </h2>
            <p className="mb-4 text-muted">
                Caso queira entrar em contato comigo, abaixo estão algumas opções de como me contactar.
            </p>
            <Row className="mb-5">
                <Col md={6} className="d-flex flex-column gap-3 mb-3">
                    <CustomButton
                        icon={<Mail />}
                        text="ravifel.contact@gmail.com"
                        href="mailto:ravifel.contact@gmail.com"
                        className="btn btn-outline-primary btn-contact"
                    />
                    <CustomButton
                        icon={<Phone />}
                        text="WhatsApp"
                        href="https://wa.me/5585997641193?text=Ol%C3%A1%2C%20Ravi.%20Como%20vai%3F%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20n%C3%BAmero%20que%20encontrei%20no%20seu%20website."
                        isExternal
                        className="btn btn-outline-primary btn-contact"
                    />
                </Col>

                <Col md={6} className="d-flex flex-column gap-3 mb-3">
                    <CustomButton
                        icon={<Linkedin />}
                        text="LinkedIn"
                        href="https://www.linkedin.com/in/ravifel"
                        isExternal
                        className="btn btn-outline-primary btn-contact"
                    />
                    <CustomButton
                        icon={<Github />}
                        text="GitHub"
                        href="https://github.com/ravifel"
                        isExternal
                        className="btn btn-outline-primary btn-contact"
                    />
                </Col>
            </Row>



            {/* Technologies */}
            <hr className="my-5" />
            <h2 className="mb-4">
                <span role="img" aria-label="Tecnologias">💻</span> Tecnologias
            </h2>
            <Row xs={3} md={4} lg={6} className="g-3">
                {tecnologias.map((tech) => (
                    <TechCard
                        key={tech.testId}
                        emoji={tech.emoji}
                        label={tech.label}
                        testId={tech.testId}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default Home;
