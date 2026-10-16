import React from "react";
import "./style.css";
import "../cards.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects, meta } from "../../content_option";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/projects" replace />;

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {project.title} | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-4 mt-3 pt-md-3">
          <Col lg="9">
            <Link to="/projects" className="accent-link">
              ← All projects
            </Link>
            <h1 className="mt-3 mb-3">{project.title}</h1>
            <div className="card_meta">
              {project.place} · {project.date}
              <br />
              {project.org}
              {project.pis && (
                <>
                  <br />
                  PIs: {project.pis}
                </>
              )}
            </div>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg="9">
            <h4 className="mb-3">What I did</h4>
            <ul className="project_roles">
              {project.role.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {project.links.length > 0 && (
              <div className="card_links mt-4">
                {project.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noreferrer">
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </Col>
        </Row>
        {project.gallery.length > 0 && (
          <div className="photo_grid mb-5">
            {project.gallery.map((photo, i) => (
              <figure key={i}>
                <img src={photo.img} alt={photo.caption} loading="lazy" />
                {photo.caption && <figcaption>{photo.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};
