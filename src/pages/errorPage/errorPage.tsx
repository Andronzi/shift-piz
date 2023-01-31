import Navbar from "@src/components/Navbar/Navbar";
import React from "react";
import { useRouteError } from "react-router-dom";
import {
  contentWrapper,
  title,
  subtitle,
  errorText,
} from "./constants/errorPageClasses";

type Error = {
  statusText: string;
  message: string;
};

const ErrorPage = () => {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <>
      <Navbar />
      <div className={contentWrapper}>
        <div>
          <h1 className={title}>Oops!</h1>
          <p className={subtitle}>Sorry, an unexpected error has occurred.</p>
          <p className={errorText}>
            <i>{error.statusText || error.message} :(</i>
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
