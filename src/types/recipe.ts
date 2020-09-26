export type sys = {
  id: string;
};

export type photo = {
  title: string;
  url: string;
};

export type tags = {
  sys: sys;
  name: string;
};

export type recipe = {
  sys: sys;
  title: string;
  photo: photo;
};

export type recipeList = recipe[];
export type recipeCollection = {
  recipeCollection: { items: recipeList };
}
export type recipeDetail = {
  title: string;
  photo: photo;
  chef: {
    name?: string;
  };
  tagsCollection: {
    items: tags[];
  };
  description: string;
};
