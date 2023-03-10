import { Card, Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./VideoCard.scss";

interface VideoCardProps {
  movie: any;
}
const VideoCard = (props: VideoCardProps) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.movie.backdrop_path}`}
        alt={props.movie.backdrop_path}
      />
      <Card.Body>
        <div className="video-card">
          <div className="flex bg-edit-btn btn ">
            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
              <span className="fe fe-edit fs-18 text-white "></span>
            </OverlayTrigger>
          </div>
          <div className="flex bg-red bg-alram-btn btn">
            <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
              <span className="fe fe-bell fs-18 text-white "></span>
            </OverlayTrigger>
          </div>
          <div className="flex bg-red bg-delete-btn btn">
            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
              <span className="fe fe-trash-2 text-white fs-18 "></span>
            </OverlayTrigger>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default VideoCard;
