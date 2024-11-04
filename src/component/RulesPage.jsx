import React from "react";
import {Card, Container} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

const RulesPage = () => {
    return (
        <>
            <div className="container">
                <section className="section">
                    <Card className="text-center card-rules">
                        <Card.Header>Rules of behavior in the cinema</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                All Visitors of the "PROJECT CINEMA" network<br/>
                                of Cinemas must comply with these Rules for visiting the Cinema,<br/>
                                and in the case of visiting the Cinema, they are considered to have
                                automatically agreed to these Rules:
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </section>
                <section className="section section-main-page image-container">
                    <Container className="d-flex align-items-center my-4">
                        <div className="orange-line"></div>
                        <h2 className="text-uppercase header-text ms-3">Rules for visiting the "PROJECT CINEMA" cinema</h2>
                    </Container>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" className="card-rules">
                            <Accordion.Header>1. General conditions</Accordion.Header>
                            <Accordion.Body>
                                1.1. On the territory of the Cinema, the behavior of Visitors must meet the requirements established by the provisions of these Rules.
                            </Accordion.Body>
                            <Accordion.Body>
                                1.2. When attending a movie screening, the Visitor must keep the purchased ticket and fiscal receipt until the end of the screening.
                            </Accordion.Body>
                            <Accordion.Body>
                                1.3. Children under 5 years of age have the opportunity to attend screenings at the Cinema for free (with an ID, certificate),
                                without a separate seat and with the presence of one of their parents.
                            </Accordion.Body>
                            <Accordion.Body>
                                1.4. In case of absence of Visitors for a certain movie session, the waiting time is 20 minutes from the
                                beginning of the session, after which this session is considered cancelled.
                            </Accordion.Body>
                            <Accordion.Body>
                                1.5. Viewing some films may be subject to age restrictions established by the Ministry of Culture and
                                Tourism of Ukraine, therefore Visitors who fall under such age restrictions may be refused tickets for such films.
                                The child's parents or accompanying adults who have the right to buy tickets for such a movie are fully
                                responsible for the child's presence in the cinema hall during the screening of such films.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="card-rules">
                            <Accordion.Header>2. It is necessary to remember</Accordion.Header>
                            <Accordion.Body>
                                2.1. A ticket for a screening purchased through the Cinema box office can be returned by
                                the Visitor no later than 15 minutes before the beginning of the screening, provided that
                                the Visitor has a receipt and a ticket.
                            </Accordion.Body>
                            <Accordion.Body>
                                2.2. The procedure for returning tickets purchased via the Internet is established
                                by the administrators of the relevant Internet pages, which the Visitor must familiarize himself with.
                            </Accordion.Body>
                            <Accordion.Body>
                                2.3. The start time indicated in the ticket means the start time of the
                                demonstration of the corresponding film, including announcements, commercials and informational videos.
                            </Accordion.Body>
                            <Accordion.Body>
                                2.4. The advertiser bears full responsibility for the content of advertisements
                                placed on the territory of the Cinema. The cinema is only responsible for the
                                compliance of the order of placement of this advertisement with the Laws of Ukraine.
                            </Accordion.Body>
                            <Accordion.Body>
                                2.5. There are permanent and thematic promotional offers in the Cinema, which you can
                                find out about from the announcements in the Cinema and on the website of the Cinema,
                                by calling the Cinema, as well as from the administrator and cashiers of the Cinema.
                                The invitation to the Cinema (Free Ticket) gives the right to one visit to the Cinema
                                by one Visitor, during the validity period specified in it. The invitation to the Cinema
                                (Free Ticket) is not valid for premiere screenings of films and screenings shown in the
                                hall of the Zlata Cinema. The total number of visitors per session for Free Tickets is
                                limited in accordance with the terms of agreements with distributors.
                            </Accordion.Body>
                            <Accordion.Body>
                                2.6. The visitor is obliged to treat the property of the Cinema with care and not
                                allow actions that may damage the property. In case of material damage to the
                                equipment, property and inventory of the Cinema, the Visitor is obliged to
                                fully compensate the Cinema for the damage caused.
                                In the case of material damage to the property, equipment and inventory of
                                the Cinema, guilty persons may be held criminally liable according to the
                                Criminal Code of Ukraine, depending on the nature of the crime, as well as
                                administratively liable, with payment of the full value of the damaged property.
                            </Accordion.Body>
                            <Accordion.Body>
                                2.7. Video and photo shooting on the territory of the Cinema is allowed only
                                with prior written agreement with the Cinema's administration.
                            </Accordion.Body>
                            <Accordion.Body>
                                2.8. The Administration of the Cinema has the right to demand the presentation of
                                a document certifying the identity of the Visitor, in the event that tickets are sold
                                at a discounted rate (students must present a student card, pensioners - a pension card, etc.),
                                or there is a need to establish the age of the Visitor in order to prevent watching a movie with
                                age restrictions or buying alcoholic beverages.
                            </Accordion.Body>
                            <Accordion.Body>
                                2.9. The Cinema's administration reserves the right to change these Rules and the
                                Cinema's price policy at any time.
                            </Accordion.Body>
                            <Accordion.Body>
                                2.10. For all issues regarding the implementation of these Rules, you can contact
                                the administration of the Cinema - on the website of the Cinema, on the official
                                groups of the Cinema in social networks, by phone of the Cinema, as well as directly
                                to the administrator of the Cinema.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="card-rules">
                            <Accordion.Header>3. Rules for attending 3D sessions</Accordion.Header>
                            <Accordion.Body>
                                3.1. A visitor who purchased a ticket for a 3D session using 3D glasses automatically
                                agrees to the terms of the rules for visiting and viewing a 3D session.
                            </Accordion.Body>
                            <Accordion.Body>
                                3.2. The child's parents themselves determine the possibility of the child's
                                perception of the 3D film. Children under the age of 12 are admitted to the session only when accompanied by an adult.
                            </Accordion.Body>
                            <Accordion.Body>
                                3.3. If the Visitor wears regular glasses, the 3D glasses must be worn on
                                top of the prescription glasses. The cinema is not responsible for the possible
                                discomfort to the eyes of Visitors from watching a movie in 3D format. If the Visitor
                                has vision problems, he should get a doctor's advice before visiting the Cinema.
                            </Accordion.Body>
                            <Accordion.Body>
                                3.4. The 3D glasses can only be used for watching 3D movies in a 3D hall and are not suitable for other purposes.
                            </Accordion.Body>
                            <Accordion.Body>
                                3.5. 3D glasses can be purchased at the cinema box office, or you can use your own.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="card-rules">
                            <Accordion.Header>4. It is prohibited on the territory of Ukraine</Accordion.Header>
                            <Accordion.Body>
                                4.1. When watching a movie, it is strictly forbidden to take video and photos (such
                                actions are a criminal offense according to the current legislation of Ukraine), to
                                be in the cinema hall with video and photo equipment during the session! We strongly
                                request that videos and cameras be left outside the cinema hall.
                            </Accordion.Body>
                            <Accordion.Body>
                                4.2. When watching a movie, it is strictly forbidden to use mobile communication
                                devices, which must be turned off during the session.
                            </Accordion.Body>
                            <Accordion.Body>
                                4.3. To bring to the territory of the Cinema and/or consume on the territory of the
                                Cinema food and drinks brought with you, purchased in any other public catering establishments, supermarkets, shops, etc.
                            </Accordion.Body>
                            <Accordion.Body>
                                4.4. Being on the territory of the Cinema in a state of alcoholic or drug intoxication,
                                as well as taking any actions related to the violation of public order and/or those
                                that interfere with the normal stay on the territory of the Cinema of other visitors.
                                In particular, it is forbidden to use obscene words, talk loudly, lie down on seats,
                                put your feet on the backs of chairs and tables, talk on a mobile phone in the hall
                                while watching a movie, bring bulky items, large packages, etc. with you to the session
                                (if the dimensions of such things interfere with watching a movie), otherwise disturb Cinema Visitors.
                            </Accordion.Body>
                            <Accordion.Body>
                                4.5. Carry firearms, gas, pneumatic and cold weapons, explosive devices and pyrotechnics,
                                gas canisters into the territory of the Cinema; play gambling (cards, etc.) on the territory
                                of the Cinema, which is prohibited by the legislation of Ukraine.
                            </Accordion.Body>
                            <Accordion.Body>
                                4.6. The sale of alcoholic beverages to persons under the age of 21 is prohibited.
                                The Visitor may be refused the sale of alcoholic beverages if he does not present a
                                document proving the Visitor's age.
                            </Accordion.Body>
                            <Accordion.Body>
                                4.7. Smoking is prohibited on the entire territory of the Cinema, including
                                the smoking of electronic cigarettes. For smoking on the territory of the Cinema,
                                the Visitor may be expelled from the Cinema without any monetary compensation.
                                The fine for smoking on the territory of the Cinema is 500 (five hundred) hryvnias.
                            </Accordion.Body>
                            <Accordion.Body>
                                4.8. Litter and scatter any objects (packages, chewing gum, bottles, napkins,
                                leftover food, etc.) in the auditoriums and on the territory of the Cinema,
                                leave things, bags, packages and other hand luggage unattended. The Administration
                                is not responsible for the integrity and safety of the Visitors' personal belongings.
                            </Accordion.Body>
                            <Accordion.Body>
                                4.9. To be on the territory of the Cinema with animals without special permission from the Cinema's administration.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </section>
                <section className="section section-main-page image-container">
                    <Container className="d-flex align-items-center my-4">
                        <div className="orange-line"></div>
                        <h2 className="text-uppercase header-text ms-3">Rules for returning tickets at the "PROJECT CINEMA" cinema</h2>
                    </Container>
                    <Card className="card-rules">
                        <Card.Body className="card-rules-text">Refunds to visitors of the ""PROJECT CINEMA""
                            Cinema for purchased tickets are made in accordance with the current legislation of Ukraine and these Rules.
                        </Card.Body>
                    </Card>
                    <Card className="card-rules">
                        <Card.Body className="card-rules-text">The Visitor can familiarize himself with the Ticket
                            Return Rules on the information board (buyer's corner) of the ""PROJECT CINEMA"" Cinema or at the Cinema's administration.
                        </Card.Body>
                    </Card>
                    <Card className="card-rules">
                        <Card.Body className="card-rules-text">You can contact the administration of the Cinema,
                            on the official groups of the Cinema in social networks, by phone of the Cinema, as well
                            as directly to the administrator of the Cinema for all questions regarding the implementation of these Rules.
                        </Card.Body>
                    </Card>
                </section>
            </div>
        </>
    );
};

export default RulesPage;