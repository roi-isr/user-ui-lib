import { useState, useEffect } from "react";
import { userType } from "../types";

const userResponseCleaner = (users: any) => {
  return users.results.map((user: any) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      image_url: user.picture.medium,
      location: {
        country: user.location.country,
        city: user.location.city,
        street: `${user.location.street.number} ${user.location.street.name}`,
      },
      uuid: user.id.value,
    };
  });
};

export default function useFetchUsers(url: string): [userType[], Function] {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    let response;
    try {
      response = await fetch(url);
    } catch (e) {
      console.log("Could not fetch users...");
    }
    const users = userResponseCleaner(await response?.json());
    setUsers(users);
  }

  return [users, setUsers];
}
