import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useGetUserInfoQuery } from "../app/services/userApi";

export default function ProtectedRoute({ children }) {
  const { data, isError, isLoading, isFetching } = useGetUserInfoQuery(
    localStorage.getItem("info")
  );
  console.log(data);
  if (isFetching || isLoading) {
    return <p>Loading...</p>;
  }
  if (isError || !data) {
    return <Navigate to={"/"} />;
  }
  return <section>{children}</section>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
