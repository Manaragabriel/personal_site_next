import { Button } from "reactstrap";

interface props {
  link: string;
}
const GetResumeButton = ({ link }: props) => {
  return (
    <Button
      className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
      color="default"
      href={link}
    >
      <span className="btn-inner--icon mr-1">
        <i className="fa fa-file" />
      </span>
      <span className="btn-inner--text">Get My Resume</span>
    </Button>
  );
};

export default GetResumeButton;
