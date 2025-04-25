import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SoundLevelBar = () => {
    return (
        <Container className="mt-0 mb-5">
            <Row>
                <Col>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div style={{
                            height: "50px",
                            width: "100%",
                            background: "linear-gradient(to right, #d3d3d3 0%, #a8d5ba 20%, #fddc88 40%, #f7a278 60%, #ff5e5e 80%, #d50000 100%)",
                            position: "relative",
                            borderRadius: "10px 0 0 10px"
                        }}>
                            {[0, 20, 40, 60, 80, 100, 120, 130].map((val, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        position: "absolute",
                                        left: `${(val / 130) * 100}%`,
                                        top: 0,
                                        bottom: 0,
                                        borderLeft: "2px solid black",
                                        textAlign: "center",
                                        fontSize: "14px",
                                        color: "black"
                                    }}>
                                    <div style={{transform: "translateX(-50%)", marginTop: "55px"}}>{val}</div>
                                </div>
                            ))}

                            {/* Pointeurs */}
                            {[45, 85, 110, 130].map((val, idx) => (
                                <div
                                    key={`ptr-${idx}`}
                                    style={{
                                        position: "absolute",
                                        left: `${(val / 130) * 100}%`,
                                        top: "50px",
                                        width: 0,
                                        height: 0,
                                        borderLeft: "5px solid transparent",
                                        borderRight: "5px solid transparent",
                                        borderTop: "10px solid black",
                                        transform: "translateX(-50%)"
                                    }}
                                />
                            ))}

                            {/* Étiquettes des zones */}
                            <div style={{
                                position: "absolute",
                                top: "70px",
                                left: `5%`,
                                transform: "translateX(-5%)",
                                fontStyle: "italic",
                                fontSize: "14px"

                            }}>Calme
                            </div>
                            <div style={{
                                position: "absolute",
                                top: "70px",
                                left: `48%`,
                                transform: "translateX(-48%)",
                                fontStyle: "italic",
                                fontSize: "14px"
                            }}>Gênant
                            </div>
                            <div style={{
                                position: "absolute",
                                top: "70px",
                                left: `80%`,
                                transform: "translateX(-83%)",
                                fontStyle: "italic",
                                fontSize: "14px"
                            }}>Dangereux
                            </div>
                            <div style={{
                                position: "absolute",
                                top: "70px",
                                left: `103%`,
                                transform: "translateX(-100%)",
                                fontStyle: "italic",
                                fontSize: "14px"
                            }}>Douloureux
                            </div>
                        </div>

                        <div style={{
                            width: 0,
                            height: 0,
                            borderTop: "25px solid transparent",
                            borderBottom: "25px solid transparent",
                            borderLeft: "40px solid #bdbdbd",
                            marginLeft: "-1px"
                        }}></div>

                        <div style={{
                            marginLeft: "15px",
                            fontWeight: "bold",
                            fontSize: "14px"
                        }}>
                            Niveau sonore<br/>en dB
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SoundLevelBar;
