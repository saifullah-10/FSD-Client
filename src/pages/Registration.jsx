import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Registration() {
  const role = useSelector((state) => state.registerRole);
  console.log(role.role);
  if (!role.role) {
    return <Navigate to={"/role"}></Navigate>;
  }
  return <div>Registration</div>;
}
