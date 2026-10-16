import React from "react";
import "../cards.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { volunteering, meta } from "../../content_option";

export const Volunteering = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Volunteering | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Volunteering</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <p className="page_intro">
          Organizations I have volunteered with. If any of them speaks to you,
          I encourage you to get involved.
        </p>
        <div className="card_grid mb-5">
          {volunteering.map((data, i) => (
            <div key={i} className="info_card">
              <div className="card_body">
                <h5>
                  {data.org}
                  {data.current && <span className="badge_current">Current</span>}
                </h5>
                <div className="card_meta">
                  {data.title} · {data.date}
                </div>
                <p>{data.description}</p>
                {data.current && (
                  <p className="join_note">
                    Interested in volunteering? Reach out to them or to me.
                  </p>
                )}
                {data.links.length > 0 && (
                  <div className="card_links">
                    {data.links.map((link, j) => (
                      <a key={j} href={link.url} target="_blank" rel="noreferrer">
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
