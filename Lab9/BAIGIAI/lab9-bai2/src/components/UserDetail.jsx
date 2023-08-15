import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function UserDetail() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isNaN(Number(id))) {
      navigate("/404");
    }
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (Object.keys(data).length === 0) { // check object rong
          console.log("true")
          return navigate("/404");
        }
        else {
            console.log("false")
        }
        setUser(data)
      })
      .catch((err) => {
        navigate("/404");
      });
  }, []);

  return (
    <div>
      <Link to="/">Back</Link>

      <h1>{`${user?.data?.first_name || ""} ${user?.data?.last_name || ""}`}</h1>
      <img src={`${user?.data?.avatar}`} alt="" />
      <h3>{user?.data?.email}</h3>
    </div>
  );
}
