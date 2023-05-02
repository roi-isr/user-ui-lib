import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { setUsers } from "../features/users/usersSlice";

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
      uuid: crypto.randomUUID(),
    };
  });
};

export default function useFetchUsers(url: string): void {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  async function fetchUsers() {
    let response;
    try {
      response = await fetch(url);
    } catch (e) {
      console.log("Could not fetch users...");
    }
    const users = userResponseCleaner(await response?.json());
    dispatch(setUsers(users));
  }
}
