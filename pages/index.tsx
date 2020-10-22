import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Index = ({ user }) => {
    return (
        <Grid>
            <Row center="xs" middle="xs">
                <Col lg={3}>
                    <Grid>
                        <Row center="xs">
                            <img src={ user.avatar_url } id="profile-avatar"/>
                        </Row>
                        <Row center="xs">
                            <Col xs>
                                <p>
                                    <span id="profile-name">
                                        { user.name }
                                    </span>
                                    <br/>
                                    <span id="profile-desc">
                                        hobbyist developer
                                    </span>
                                </p>
                            </Col>
                        </Row>
                        <Row center="xs">
                            <Col xs={3} lg={6}>
                                <Grid>
                                    <Row around="xs">
                                        <Col xs>
                                            <a href="#" data-tooltip="Nitrous#2175">
                                                <FontAwesomeIcon icon={ faDiscord }/>
                                            </a>
                                        </Col>
                                        <Col xs>
                                            <a href="https://github.com/lenitrous" data-tooltip="LeNitrous">
                                                <FontAwesomeIcon icon={ faGithub }/>
                                            </a>
                                        </Col>
                                        <Col xs>
                                            <a href="https://twitter.com/lenitrous" data-tooltip="@LeNitrous">
                                            <FontAwesomeIcon icon={ faTwitter }/>
                                            </a>
                                        </Col>
                                    </Row>
                                </Grid>
                            </Col>
                        </Row>
                    </Grid>
                </Col>
                <Col lg={5}>
                    <Grid>
                        <Row start="lg" center="xs">
                            <Col>
                                <p>
                                    <span id="descrip-title">
                                        I make stuff
                                    </span>
                                    <br/>
                                    <span id="descrip-content">
                                        I make anything. From websites backend or frontend, to applications and games. Basically anything.
                                    </span>
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </Col>
            </Row>
        </Grid>
    )
}

export async function getStaticProps() {
    const user = await (await fetch("https://api.github.com/users/lenitrous")).json();

    return { props: { user } }
}

export default Index;
