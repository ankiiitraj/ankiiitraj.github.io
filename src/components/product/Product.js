import { BiLinkExternal } from "react-icons/bi";
import {GhStarBtn, GhForkBtn, GhRepoSourceBtn} from "../buttons/buttons";
import "./product.css";

const Product = (props) => {
  const { username, repo, title, link, source, about, colorCode } = props.prod;
  return (
    <>
      <div className="product">
        <div className="product-head">
          <a target="_blank" rel="noreferrer" href={link} style={{ color: colorCode }}>
            {title} <BiLinkExternal />
          </a>
        </div>
        <div className="product-body">
          <p>{about}</p>
        </div>
        <div className="product-footer">
          <GhStarBtn username={username} repo={repo} />
          <GhForkBtn username={username} repo={repo} />
          <GhRepoSourceBtn link={source} />
        </div>
      </div>
    </>
  );
};

export default Product;
