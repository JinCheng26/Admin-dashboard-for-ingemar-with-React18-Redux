import { useEffect, useState } from "react";
import { Row, Col, Card, FormControl, InputGroup } from "react-bootstrap";
import { apiSearchMovie } from "../../apis/tmdb";
import VideoCard from "../../components/VideoCard/VideoCard";
import PageHeader from "../../layouts/PageHeader/PageHeader";
import { Backdrop } from "@mui/material";
import CirclesLoader from "../../components/loader/CirclesLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/pro-solid-svg-icons";

interface PageMoviesProps {}

const PageMovies: React.FC<PageMoviesProps> = () => {
  const [isLoading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <PageHeader titles="Movies" active="Movies" items={["Home"]} />
      <Backdrop open={isLoading}>
        <CirclesLoader></CirclesLoader>
      </Backdrop>
      <Row>
        <Col xl={12}>
          <Card className="p-0">
            <Card.Body className="p-4">
              <Row>
                <Col xl={5} lg={6} md={5} sm={6}>
                  <InputGroup className="d-flex w-100 float-start my-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search ..."
                      value={searchKey}
                      onChange={(e) => {
                        setSearchKey(e.target.value);
                      }}
                    />
                    <button
                      className="btn input-group-text bg-transparent text-muted"
                      onClick={() => {
                        setLoading(true);
                        apiSearchMovie(searchKey)
                          .then((res) => {
                            console.log(res);
                            setSearchResults(res.data.results);
                          })
                          .catch((err) => {})
                          .then(() => {
                            setLoading(false);
                          });
                      }}
                    >
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </InputGroup>
                </Col>
                <Col xl={7} lg={6} md={7} sm={6}>
                  <div className="float-sm-end float-none my-1">
                    <button className="btn btn-primary me-2"> Import Movie </button>
                    <button className="btn btn-primary"> Refresh Movie </button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {searchResults.map((item, index) => (
          <Col sm={6} lg={6} md={12} xl={3} key={index}>
            <VideoCard movie={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default PageMovies;
