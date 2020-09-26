import { gql } from "@apollo/client";

export const getRecipesQuery = gql`
  query GetRecipes {
    recipeCollection {
      items {
        sys {
          id
        }
        title
        photo {
          title
          url
        }
      }
    }
  }
`;

export const getRecipeDetailQuery = gql`
  query GetRecipes($id: String!) {
    recipe(id: $id) {
      title
      photo {
        title
        description
        url
      }
      chef {
        name
      }
      tagsCollection {
        items {
          sys {
            id
          }
          name
        }
      }
      description
    }
  }
`;
