import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [page]);
  return (
    <>
      <div className="user_container">
        {users.data && // kiểm tra xem users.data có tồn tại hay không
          users.data.map(
            (
              user // nếu tồn tại thì map qua từng phần tử
            ) => (
              <Link to={`/user/${user.id}`} key={user.id}>
                <div key={user.id}>
                  <img src={user.avatar} alt={user.first_name} />
                  <p>
                    {user.first_name} {user.last_name}
                  </p>
                </div>
              </Link>
            )
          )}
      </div>

      {users.total_pages && ( // kiểm tra xem users.total_pages có tồn tại hay không
        <div>
          {[...Array(users.total_pages)].map(
            (
              _,
              index // nếu tồn tại thì map qua từng phần tử, dùng Array để tạo ra một mảng mới với độ dài là users.total_pages
            ) => (
              <button className={`${index + 1 === page ? "active" : ""}`} key={index} onClick={() => setPage(index + 1)}>
                {index + 1}
              </button>
            )
          )}
        </div>
      )}
    </>
  );
}
