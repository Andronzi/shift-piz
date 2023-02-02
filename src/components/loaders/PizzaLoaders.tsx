import React from "react";
import ContentLoader from "react-content-loader";

// Захардкоженный лоэдер. В идеале написать хелпер, который вычисляет и подбирает параметры.
// А затем компонент, который это все собирает :)
const PizzaLoader = () => (
  <ContentLoader
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    height="100vh"
    speed={2}
    width="100vw">
    <rect
      height="30vh"
      rx="3"
      ry="3"
      width="18%"
      x="7%"
      y="8vh"
    />

    <rect
      height="30vh"
      rx="3"
      ry="3"
      width="18%"
      x="31%"
      y="8vh"
    />

    <rect
      height="30vh"
      rx="3"
      ry="3"
      width="18%"
      x="53%"
      y="8vh"
    />

    <rect
      height="30vh"
      rx="3"
      ry="3"
      width="18%"
      x="75%"
      y="8vh"
    />

    <rect
      height="30vh"
      rx="3"
      ry="3"
      width="18%"
      x="7%"
      y="40vh"
    />

    <rect
      height="30vh"
      rx="3"
      ry="3"
      width="18%"
      x="31%"
      y="40vh"
    />

    <rect
      height="30vh"
      rx="3"
      ry="3"
      width="18%"
      x="53%"
      y="40vh"
    />

    <rect
      height="30vh"
      rx="3"
      ry="3"
      width="18%"
      x="75%"
      y="40vh"
    />

    <rect
      height="30vh"
      rx="3"
      ry="3"
      width="18%"
      x="7%"
      y="74vh"
    />

    <rect
      height="30vh"
      rx="3"
      ry="3"
      width="18%"
      x="31%"
      y="74vh"
    />

    <rect
      height="30vh"
      rx="3"
      ry="3"
      width="18%"
      x="53%"
      y="74vh"
    />

    <rect
      height="30vh"
      rx="3"
      ry="3"
      width="18%"
      x="75%"
      y="74vh"
    />
  </ContentLoader>
);

export default PizzaLoader;
