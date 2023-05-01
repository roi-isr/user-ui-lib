export type userType = {
  name: string;
  email: string;
  image_url: string;
  location: {
    country: string;
    city: string;
    street: string;
  };
  uuid: string;
};

export type headerType = {
  title: string;
  image_url?: string;
};

export type layoutType = {
  children: JSX.Element | JSX.Element[];
};
