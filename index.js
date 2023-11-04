"use strict";

/**
 * Githubs data extracted from graphql
 */

let data = {
  data: {
    viewer: {
      login: "taffarel55",
      avatarUrl: "https://avatars.githubusercontent.com/u/18634201?v=4",
      name: "Maurício Taffarel",
      bio: "I'm an IoT Developer and I love taking up new challenges.",
      repositories: {
        nodes: [
          {
            name: "verilog-language-and-application-v27.0-public",
            languages: {
              nodes: [
                {
                  name: "Verilog",
                  color: "#a22",
                },
              ],
            },
            pushedAt: "2023-10-27T19:30:29Z",
            forkCount: 0,
            description:
              "Verilog Language and Application v27.0 Course from CADEMICS",
            stargazerCount: 4,
            licenseInfo: {
              name: "MIT License",
            },
          },
          {
            name: "lab4-compiler",
            languages: {
              nodes: [
                {
                  name: "Assembly",
                  color: "#e05af1",
                },
                {
                  name: "JavaScript",
                  color: "#f1e05a",
                },
              ],
            },
            pushedAt: "2020-09-14T11:14:54Z",
            forkCount: 0,
            description:
              "Creation of the set of assembly instructions for a computer architecture and its assembler to generate machine code",
            stargazerCount: 0,
            licenseInfo: {
              name: "MIT License",
            },
          },
          {
            name: "yagi-uda",
            languages: {
              nodes: [
                {
                  name: " MATLAB",
                  color: "#e16737",
                },
              ],
            },
            pushedAt: "2022-01-08T11:02:46Z",
            forkCount: 0,
            description:
              "Projeto e implementação de uma antena Yagi-Uda com rede de adaptação de impedância. ",
            stargazerCount: 1,
            licenseInfo: {
              name: "BSD 2-Clause License",
            },
          },
        ],
        totalCount: 65,
      },
      contributions: {
        nodes: [
          {
            name: "hand-gesture-recognition",
            languages: {
              nodes: [
                {
                  name: "Python",
                  color: "#f7cc42",
                },
              ],
            },
            pushedAt: "2023-10-27T19:30:29Z",
            forkCount: 0,
            description:
              "Forked from Kazuhito00/hand-gesture-recognition-using-mediapipe MediaPipe(Python版)を用いて手の姿勢推定を行い、検出したキーポイントを用いて、簡易なMLPでハンドサインとフィンガージェスチャーを認識するサンプルプログラムです。（Estimate hand pose using MediaPipe(Python version). This is a sample program that recognizes hand signs and… ",
            stargazerCount: 4,
            licenseInfo: {
              name: "MIT License",
            },
          },
          {
            name: "sensor.community",
            languages: {
              nodes: [
                {
                  name: "Svelte",
                  color: "#ff3e00",
                },
              ],
            },
            pushedAt: "2023-11-01T11:14:54Z",
            forkCount: 0,
            description:
              "Forked from opendata-stuttgart/sensor.community\n✨ new shiny website built with svelte ❤️ for dust and noise measuring project 👉 https://sensor.community",
            stargazerCount: 0,
            licenseInfo: {
              name: "MIT License",
            },
          },
          {
            name: "automacao-iot-nodemcu",
            languages: {
              nodes: [
                {
                  name: "C++",
                  color: "#f34b7d",
                },
              ],
            },
            pushedAt: "2020-09-14T11:02:46Z",
            forkCount: 0,
            description:
              "O projeto busca apresentar um conteúdo prático, objetivo e de fácil consulta sobre Automação e Internet das Coisas (IOT). ",
            stargazerCount: 0,
            licenseInfo: {
              name: "MIT License",
            },
          },
        ],
        totalCount: 65,
      },
      email: "contact@taffarel.tech",
      isHireable: true,
      isDeveloperProgramMember: true,
      location: "Salvador - BA",
      organizations: {
        nodes: [
          {
            name: "PET Elétrica UFBA",
            avatarUrl:
              "https://avatars.githubusercontent.com/u/60209422?s=200&v=4",
            websiteUrl: "https://github.com/PETEletricaUFBA",
          },
          {
            name: "PET Elétrica UFBA",
            avatarUrl:
              "https://avatars.githubusercontent.com/u/60209422?s=200&v=4",
            websiteUrl: "https://github.com/PETEletricaUFBA",
          },
          {
            name: "PET Elétrica UFBA",
            avatarUrl:
              "https://avatars.githubusercontent.com/u/60209422?s=200&v=4",
            websiteUrl: "https://github.com/PETEletricaUFBA",
          },
        ],
      },
      followers: {
        totalCount: 887,
      },
      following: {
        totalCount: 208,
      },
    },
  },
};
console.log(data);

let overview_div = document.getElementById("overview");
let projects_div = document.getElementById("projects");
let contributions_div = document.getElementById("contributions");

let page = "overview";

const updatePage = () => {
  projects_div.innerHTML =
    page === "projects"
      ? data.data.viewer.repositories.nodes
          .map((repo) => {
            return `<div style="display:flex;flex-direction:row; border-bottom: 1px solid lightgray;">
    <div
      style="display: flex;width: 80%;flex-direction:column">
      <h3
        style="color: #0366d6;font-size: 20px;"
      > 
      ${repo.name && repo.name}
    </h3>
      <p style="color: #586069;"> ${!repo.description ? "" : repo.description}
    </p>
   <div style="display: flex;width: 100%; color: #586069;">
        <span class="repo-m"> ${repo.languages.nodes
          .map((lang) => {
            return `<span>
                <span
                  class="repo-language-color"
                  style="background-color: ${lang.color && lang.color}"></span>
                <span> ${lang.name && lang.name}</span>
              </span>`;
          })
          .join("<span>")}
  </span> ${
    repo.forkCount > 0
      ? `<span class="repo-m">
          <svg
            aria-label="fork"
            class="repo-icons"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            role="img"
          >
            <path
              fill-rule="evenodd"
              d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
            ></path>
          </svg>
          <span>${repo.forkCount}</span>
        </span>`
      : ""
  }
  ${
    repo.stargazerCount > 0
      ? `<span class="repo-m">
          <svg
            aria-label="star"
            class="repo-icons"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            role="img"
          >
            <path
              fill-rule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
            ></path>
          </svg>
          <span>${repo.stargazerCount}</span>
        </span>`
      : ""
  }
  ${
    repo.licenseInfo && repo.licenseInfo.name
      ? `<span class="repo-m">
          <svg
            class="repo-icons"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"
            ></path>
          </svg>
          <span>${repo.licenseInfo.name}</span>
        </span>`
      : ""
  }
        <span class="repo-m">
          <span>Updated on</span> <span>${new Date(repo.pushedAt)
            .toDateString()
            .split(" ")
            .slice(1, -1)
            .join()}</span>
        </span>
      </div> 
    </div>
    <div style="display: flex; width: 75px;align-items: center;">
      <button class="sort-find-inputs">
        <span class="repo-m">
          <svg
            aria-label="star"
            class="repo-icons"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            role="img"
          >
            <path
              fill-rule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
            ></path>
          </svg>
          <span>star</span>
        </span>
      </button>
    </div>
  </div>`;
          })
          .join("<br>")
      : "";

  overview_div.innerHTML =
    page === "overview"
      ? "<img src='./assets/overview-1.png' /><img src='./assets/overview-2.png' />"
      : "";

  contributions_div.innerHTML =
    page === "contributions"
      ? data.data.viewer.contributions.nodes
          .map((repo) => {
            return `<div style="display:flex;flex-direction:row; border-bottom: 1px solid lightgray;">
<div
  style="display: flex;width: 80%;flex-direction:column">
  <h3
    style="color: #0366d6;font-size: 20px;"
  > 
  ${repo.name && repo.name}
</h3>
  <p style="color: #586069;"> ${!repo.description ? "" : repo.description}
</p>
<div style="display: flex;width: 100%; color: #586069;">
    <span class="repo-m"> ${repo.languages.nodes
      .map((lang) => {
        return `<span>
            <span
              class="repo-language-color"
              style="background-color: ${lang.color && lang.color}"></span>
            <span> ${lang.name && lang.name}</span>
          </span>`;
      })
      .join("<span>")}
</span> ${
              repo.forkCount > 0
                ? `<span class="repo-m">
      <svg
        aria-label="fork"
        class="repo-icons"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        role="img"
      >
        <path
          fill-rule="evenodd"
          d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
        ></path>
      </svg>
      <span>${repo.forkCount}</span>
    </span>`
                : ""
            }
${
  repo.stargazerCount > 0
    ? `<span class="repo-m">
      <svg
        aria-label="star"
        class="repo-icons"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        role="img"
      >
        <path
          fill-rule="evenodd"
          d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
        ></path>
      </svg>
      <span>${repo.stargazerCount}</span>
    </span>`
    : ""
}
${
  repo.licenseInfo && repo.licenseInfo.name
    ? `<span class="repo-m">
      <svg
        class="repo-icons"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"
        ></path>
      </svg>
      <span>${repo.licenseInfo.name}</span>
    </span>`
    : ""
}
    <span class="repo-m">
      <span>Updated on</span> <span>${new Date(repo.pushedAt)
        .toDateString()
        .split(" ")
        .slice(1, -1)
        .join()}</span>
    </span>
  </div> 
</div>
<div style="display: flex; width: 75px;align-items: center;">
  <button class="sort-find-inputs">
    <span class="repo-m">
      <svg
        aria-label="star"
        class="repo-icons"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        role="img"
      >
        <path
          fill-rule="evenodd"
          d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
        ></path>
      </svg>
      <span>star</span>
    </span>
  </button>
</div>
</div>`;
          })
          .join("<br>")
      : "";
};

let userAvatar = document.getElementById("user-avatar");
userAvatar.setAttribute("src", data.data.viewer.avatarUrl);

let userFullName = document.getElementById("user-full-name");
userFullName.innerHTML = data.data.viewer.name;

let userUsername = document.getElementById("user-username");
userUsername.innerHTML = data.data.viewer.login;

let userDescription = document.getElementById("user-description");
userDescription.innerHTML = data.data.viewer.bio;

let userFollowers = document.getElementById("user-followers");
userFollowers.innerHTML = data.data.viewer.followers.totalCount;

let userFollowing = document.getElementById("user-following");
userFollowing.innerHTML = data.data.viewer.following.totalCount;

let userLocation = document.getElementById("user-location");
userLocation.innerHTML = data.data.viewer.location;

let userEmail = document.getElementById("user-email");
userEmail.innerHTML = data.data.viewer.email;

let userOrg = document.getElementById("user-organization");
userOrg.setAttribute("src", data.data.viewer.organizations.nodes[0].avatarUrl);

const changePage = (e, p) => {
  page = p;
  updatePage();

  document.querySelectorAll(".border-bottom").forEach(function (element) {
    element.classList.remove("border-bottom");
  });

  let targetElement = e.target.closest("li");

  targetElement.classList.add("border-bottom");
};

updatePage();
document.querySelector(".tabs").classList.add("border-bottom");
