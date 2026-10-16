import React from "react";
import "../cards.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { photos, photoLinks, meta } from "../../content_option";

export const Photography = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Photography | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Photography</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <p className="page_intro">
          Beyond economics, photography is one of my passions. These are places
          I have seen through my travels and fieldwork.
        </p>
        {photos.length > 0 ? (
          <div className="photo_grid mb-5">
            {photos.map((data, i) => (
              <figure key={i}>
                <img src={data.img} alt={data.caption} loading="lazy" />
                {data.caption && <figcaption>{data.caption}</figcaption>}
              </figure>
            ))}
          </div>
        ) : (
          <div className="empty_state mb-5">Photos coming soon.</div>
        )}
        {photoLinks.some((link) => link.url) && (
          <div className="card_links mb-5">
            {photoLinks
              .filter((link) => link.url)
              .map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noreferrer">
                  {link.label} →
                </a>
              ))}
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};
