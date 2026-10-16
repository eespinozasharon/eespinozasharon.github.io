import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { projects, meta } from "../../content_option";

// "2024 – Present" -> [9999, 2024]; "2023" -> [2023, 2023]
const years = (date) => {
  const nums = date.match(/\d{4}/g).map(Number);
  const end = /present/i.test(date) ? 9999 : nums[nums.length - 1];
  return [end, nums[0]];
};
const byYear = [...projects].sort((a, b) => {
  const [ea, sa] = years(a.date);
  const [eb, sb] = years(b.date);
  return eb - ea || sb - sa;
});

export const Projects = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Projects</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {byYear.map((data) => (
            <Link key={data.slug} to={`/projects/${data.slug}`} className="po_link">
              <div className="po_item">
                {data.cover ? (
                  <img src={data.cover} alt={data.place} />
                ) : (
                  <div className="po_placeholder">
                    <span>
                      {data.place} · {data.date}
                    </span>
                    <h5>{data.title}</h5>
                  </div>
                )}
                <div className="content">
                  <p>{data.title}</p>
                  <span>view project</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
