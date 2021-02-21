import { useState, useEffect } from "react";
import { BiStar, BiGitRepoForked } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import axios from "axios";

const GhStarBtn = ({ username, repo }) => {
  const [count, setCount] = useState("_");
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          `https://api.github.com/repos/${username}/${repo}`
        );
        setCount(data.data.stargazers_count);
      } catch (e) {}
    };
    getData();
  }, [repo, username]);
  return (
    <div
      className="gh-stars"
      style={{
        display: "flex",
        alignItems: "center",
        border: "solid 1px white",
        borderRadius: "5px",
        width: "max-content",
        padding: "1px",
        cursor: "pointer",
        marginRight: "10px"
      }}
    >
      <div
        style={{
          backgroundColor: "#1b1f23",
          padding: "5px",
          borderRight: "solid 1px white",
        }}
      >
        <a
          style={{
            color: "white",
            textDecoration: "none"
          }}
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/${username}/${repo}`}
        >
          <BiStar /> Star
        </a>
      </div>
      <div style={{ backgroundColor: "black", padding: "5px" }}>
        <a
          style={{
            color: "white",
            textDecoration: "none"
          }}
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/${username}/${repo}/stargazers`}
        >
          {count}
        </a>
      </div>
    </div>
  );
};

const GhForkBtn = ({ username, repo }) => {
  const [count, setCount] = useState("_");
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          `https://api.github.com/repos/${username}/${repo}`
        );
        setCount(data.data.forks_count);
      } catch (e) {}
    };
    getData();
  }, [repo, username]);
  return (
    <div
      className="gh-forks"
      style={{
        display: "flex",
        alignItems: "center",
        border: "solid 1px white",
        borderRadius: "5px",
        width: "max-content",
        padding: "1px",
        cursor: "pointer",
        marginRight: "10px"
      }}
    >
      <div
        style={{
          backgroundColor: "#1b1f23",
          padding: "5px",
          borderRight: "solid 1px white",
        }}
      >
        <a
          style={{
            color: "white",
            textDecoration: "none"
          }}
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/${username}/${repo}/fork`}
        >
          <BiGitRepoForked /> Fork
        </a>
      </div>
      <div style={{ backgroundColor: "black", padding: "5px" }}>
        <a
          style={{
            color: "white",
            textDecoration: "none"
          }}
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/${username}/${repo}/network/members`}
        >
          {count}
        </a>
      </div>
    </div>
  );
};

const GhRepoSourceBtn = ({ link }) => {
  return (
    <div
      className="gh-forks"
      style={{
        display: "flex",
        alignItems: "center",
        border: "solid 1px white",
        borderRadius: "5px",
        width: "max-content",
        padding: "1px",
        cursor: "pointer",
        marginRight: "10px"
      }}
    >
      <div
        style={{
          backgroundColor: "#1b1f23",
          padding: "5px"
        }}
      >
        <a
          style={{
            color: "white",
            textDecoration: "none"
          }}
          target="_blank"
          rel="noreferrer"
          href={`${link}`}
        >
          <SiGithub /> Source
        </a>
      </div>
    </div>
  );
};


const GhFollowkBtn = ({ username }) => {
  const [count, setCount] = useState("_");
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setCount(data.data.followers);
      } catch (e) {}
    };
    getData();
  }, [username]);
  return (
    <div
      className="gh-follow"
      style={{
        display: "flex",
        alignItems: "center",
        border: "solid 1px white",
        borderRadius: "5px",
        width: "max-content",
        padding: "1px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          backgroundColor: "#1b1f23",
          padding: "5px",
          borderRight: "solid 1px white",
        }}
      >
        <a
          style={{
            color: "white",
            textDecoration: "none"
          }}
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/${username}`}
        >
          <SiGithub /> Follow @{username}
        </a>
      </div>
      <div style={{ backgroundColor: "black", padding: "5px" }}>
        <a
          style={{
            color: "white",
            textDecoration: "none"
          }}
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/${username}?tab=followers`}
        >
          {count}
        </a>
      </div>
    </div>
  );
};

export { GhForkBtn, GhStarBtn, GhRepoSourceBtn, GhFollowkBtn };
