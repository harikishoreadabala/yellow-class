import { withRouter } from "next/router";
const Photo = (props) => (
  <div>
    <img src={props.id} height="700" width="700" />
  </div>
);
Photo.getInitialProps = async ({ query }) => {
  return { id: query.id };
};
export default Photo;
